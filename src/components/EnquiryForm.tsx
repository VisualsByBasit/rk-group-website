"use client";

import { useId, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { ENQUIRY_EMAIL, LANDLINE, channelReady, emailReady, whatsappReady, whatsappUrl } from "@/lib/contact";
import { bagRules, kg, orderHints, orderProducts } from "@/lib/orders";

type Packaging = "bags" | "retail";
type Line = { key: number; product: string; packaging: Packaging; amount: string; custom: string; pack: string; quantity: string; unit: "cartons" | "kg" };
type Details = { name: string; business: string; city: string; phone: string; message: string };
type Channel = "whatsapp" | "email";
type Outcome = Channel | "unavailable";

const CUSTOM = "custom";
const MAX_LINES = 8;
const productById = (id: string) => orderProducts.find(product => product.id === id);
const packFor = (id: string) => { const packs = productById(id)?.packs; return packs?.length === 1 ? packs[0] : ""; };
const emptyLine = (key: number, product = ""): Line => ({ key, product, packaging: "bags", amount: "", custom: "", pack: packFor(product), quantity: "", unit: "cartons" });
const usesBags = (line: Line) => productById(line.product)?.kind === "bagged" && line.packaging === "bags";
const lineFields = (key: number) => ["product", "amount", "custom", "pack", "quantity"].map(field => `${field}-${key}`);

function customError(value: string) {
  if (!value.trim()) return "Enter an amount in kg.";
  const amount = Number(value);
  if (!Number.isInteger(amount)) return "Enter a whole number of kg.";
  if (amount < bagRules.minimum) return `The minimum order is ${kg(bagRules.minimum)}.`;
  if (amount % bagRules.multipleOf !== 0) return `Enter a multiple of ${kg(bagRules.multipleOf)}, for example ${kg(Math.ceil(amount / bagRules.multipleOf) * bagRules.multipleOf)}.`;
  return "";
}

function validate(details: Details, lines: Line[]) {
  const errors: Record<string, string> = {};
  if (!details.name.trim()) errors.name = "Enter your name.";
  if (!details.business.trim()) errors.business = "Enter your business name.";
  if (!details.city.trim()) errors.city = "Enter your city.";
  const digits = details.phone.replace(/\D/g, "");
  if (!details.phone.trim()) errors.phone = "Enter a phone number we can call you on.";
  else if (!/^\+?[\d\s()-]+$/.test(details.phone.trim()) || digits.length < 10 || digits.length > 13) errors.phone = "Enter a phone number such as 0300 1234567 or 051 4449011.";
  const seen = new Set<string>();
  const repeated = "This is already in your enquiry. Change the quantity above instead.";
  lines.forEach(line => {
    if (!productById(line.product)) { errors[`product-${line.key}`] = "Choose a product."; return; }
    if (usesBags(line)) {
      const id = `${line.product}|bags`;
      if (seen.has(id)) errors[`product-${line.key}`] = repeated;
      seen.add(id);
      if (!line.amount) errors[`amount-${line.key}`] = "Choose an amount.";
      else if (line.amount === CUSTOM) { const error = customError(line.custom); if (error) errors[`custom-${line.key}`] = error; }
      return;
    }
    if (!line.pack) errors[`pack-${line.key}`] = "Choose a pack size.";
    else {
      const id = `${line.product}|${line.pack}`;
      if (seen.has(id)) errors[`pack-${line.key}`] = repeated;
      seen.add(id);
    }
    const quantity = Number(line.quantity);
    if (!line.quantity.trim() || !Number.isInteger(quantity) || quantity < 1) errors[`quantity-${line.key}`] = "Enter a whole number, such as 10.";
  });
  return errors;
}

function describeLine(line: Line) {
  if (usesBags(line)) return `25 kg bulk bags, ${kg(Number(line.amount === CUSTOM ? line.custom : line.amount))}`;
  const quantity = line.unit === "kg" ? kg(Number(line.quantity)) : `${line.quantity} ${line.quantity === "1" ? "carton" : "cartons"}`;
  return `${productById(line.product)?.kind === "ghee" ? `${line.pack} pouches` : `retail packs, ${line.pack}`}, ${quantity}`;
}

function compose(details: Details, lines: Line[]) {
  return [
    "Order enquiry from rkgroupofindustries.com",
    "",
    `Name: ${details.name.trim()}`,
    `Business: ${details.business.trim()}`,
    `City: ${details.city.trim()}`,
    `Phone: ${details.phone.trim()}`,
    "",
    "Products:",
    ...lines.map(line => `- ${productById(line.product)?.label}: ${describeLine(line)}`),
    ...(details.message.trim() ? ["", `Message: ${details.message.trim()}`] : []),
  ].join("\n");
}

// Order buttons on the brand blocks link here with ?brand=<product id>. The plain link still lands on the form without JavaScript.
const noSubscribe = () => () => {};
const brandFromUrl = () => { const brand = new URLSearchParams(window.location.search).get("brand"); return brand && productById(brand) ? brand : ""; };

export default function EnquiryForm() {
  const brand = useSyncExternalStore(noSubscribe, brandFromUrl, () => "");
  return <EnquiryFields key={brand} brand={brand} />;
}

function EnquiryFields({ brand }: { brand: string }) {
  const id = useId();
  const nextKey = useRef(1);
  const [details, setDetails] = useState<Details>({ name: "", business: "", city: "", phone: "", message: "" });
  const [lines, setLines] = useState<Line[]>([emptyLine(0, brand)]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const fieldId = (name: string) => `${id}-${name}`;
  const errorProps = (name: string, hint?: string) => {
    const described = [hint, errors[name] && fieldId(`${name}-error`)].filter(Boolean).join(" ");
    return { "aria-invalid": errors[name] ? true : undefined, "aria-describedby": described || undefined };
  };
  const errorText = (name: string) => errors[name] ? <p className="enquiry-error" id={fieldId(`${name}-error`)}>{errors[name]}</p> : null;
  const clearError = (...names: string[]) => setErrors(current => { if (!names.some(name => current[name])) return current; const next = { ...current }; names.forEach(name => delete next[name]); return next; });
  const setDetail = (name: keyof Details, value: string) => { setDetails(current => ({ ...current, [name]: value })); clearError(name); };
  const updateLine = (key: number, change: Partial<Line>) => setLines(current => current.map(line => line.key === key ? { ...line, ...change } : line));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOutcome(null);
    const found = validate(details, lines);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { document.getElementById(fieldId(first))?.focus(); return; }
    // No WhatsApp number or email yet: open nothing, keep the details and point to the landline.
    if (!channelReady) { setOutcome("unavailable"); return; }
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel: Channel = submitter?.value === "email" || !whatsappReady ? "email" : "whatsapp";
    const text = compose(details, lines);
    if (channel === "whatsapp") {
      const url = whatsappUrl(text);
      const opened = window.open(url, "_blank");
      if (opened) opened.opener = null; else window.location.href = url;
    } else {
      window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(`Order enquiry from ${details.business.trim()}`)}&body=${encodeURIComponent(text)}`;
    }
    setOutcome(channel);
  }

  const textField = (name: Exclude<keyof Details, "message">, label: string, attrs: Record<string, string>) => (
    <div className="enquiry-field">
      <label htmlFor={fieldId(name)}>{label}</label>
      <input id={fieldId(name)} name={name} value={details[name]} onChange={event => setDetail(name, event.target.value)} required {...attrs} {...errorProps(name)} />
      {errorText(name)}
    </div>
  );

  return (
    <form className="enquiry" id="order-form" noValidate onSubmit={submit} aria-labelledby={fieldId("title")}>
      <div className="enquiry-intro">
        <h3 id={fieldId("title")}>Send an enquiry</h3>
        <p>{channelReady ? `Fill this in and we will open ${whatsappReady ? "WhatsApp" : "your email app"} with your enquiry ready to send.` : "Tell us what you would like to order."} Nothing is stored on this website.</p>
      </div>
      <div className="enquiry-fields">
        {textField("name", "Your name", { autoComplete: "name" })}
        {textField("business", "Business name", { autoComplete: "organization" })}
        {textField("city", "City", { autoComplete: "address-level2" })}
        {textField("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
      </div>
      <div className="enquiry-lines">
        {lines.map((line, index) => {
          const product = productById(line.product);
          const bags = usesBags(line);
          const hint = !product ? undefined : product.kind === "ghee" ? orderHints.ghee : bags ? orderHints.bags : orderHints.retail;
          const hintId = hint ? fieldId(`hint-${line.key}`) : undefined;
          const hintText = hint && <p className="enquiry-hint" id={hintId}>{hint}</p>;
          return (
            <fieldset className="enquiry-line" key={line.key}>
              <legend>{lines.length > 1 ? `Product ${index + 1}` : "Your order"}</legend>
              <div className="enquiry-field">
                <label htmlFor={fieldId(`product-${line.key}`)}>Product</label>
                <select id={fieldId(`product-${line.key}`)} value={line.product} required onChange={event => { updateLine(line.key, emptyLine(line.key, event.target.value)); clearError(...lineFields(line.key)); }} {...errorProps(`product-${line.key}`)}>
                  <option value="">Choose a product</option>
                  {orderProducts.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
                </select>
                {errorText(`product-${line.key}`)}
              </div>
              {product?.kind === "bagged" && (
                <fieldset className="enquiry-packaging">
                  <legend>Packaging</legend>
                  {([["bags", "25 kg bulk bags"], ["retail", "Retail packs"]] as const).map(([value, label]) => (
                    <label key={value}><input type="radio" name={fieldId(`packaging-${line.key}`)} value={value} checked={line.packaging === value} onChange={() => { updateLine(line.key, { packaging: value }); clearError(...lineFields(line.key).slice(1)); }} /> {label}</label>
                  ))}
                </fieldset>
              )}
              {bags && <>
                <div className="enquiry-field">
                  <label htmlFor={fieldId(`amount-${line.key}`)}>Amount</label>
                  <select id={fieldId(`amount-${line.key}`)} value={line.amount} required onChange={event => { updateLine(line.key, { amount: event.target.value }); clearError(`amount-${line.key}`, `custom-${line.key}`); }} {...errorProps(`amount-${line.key}`, hintId)}>
                    <option value="">Choose an amount</option>
                    {bagRules.options.map(amount => <option key={amount} value={amount}>{kg(amount)}</option>)}
                    <option value={CUSTOM}>Custom amount</option>
                  </select>
                  {hintText}
                  {errorText(`amount-${line.key}`)}
                </div>
                {line.amount === CUSTOM && (
                  <div className="enquiry-field">
                    <label htmlFor={fieldId(`custom-${line.key}`)}>Custom amount in kg</label>
                    <input id={fieldId(`custom-${line.key}`)} type="number" inputMode="numeric" min={bagRules.minimum} step={bagRules.multipleOf} value={line.custom} required onChange={event => { updateLine(line.key, { custom: event.target.value }); clearError(`custom-${line.key}`); }} {...errorProps(`custom-${line.key}`)} />
                    {errorText(`custom-${line.key}`)}
                  </div>
                )}
              </>}
              {product && !bags && <>
                <div className="enquiry-field">
                  <label htmlFor={fieldId(`pack-${line.key}`)}>Pack size</label>
                  <select id={fieldId(`pack-${line.key}`)} value={line.pack} required onChange={event => { updateLine(line.key, { pack: event.target.value }); clearError(`pack-${line.key}`); }} {...errorProps(`pack-${line.key}`)}>
                    {product.packs.length > 1 && <option value="">Choose a pack size</option>}
                    {product.packs.map(pack => <option key={pack} value={pack}>{pack}</option>)}
                  </select>
                  {errorText(`pack-${line.key}`)}
                </div>
                <div className="enquiry-field">
                  <label htmlFor={fieldId(`quantity-${line.key}`)}>{product.kind === "ghee" ? "Quantity" : "Number of cartons"}</label>
                  <div className="enquiry-quantity">
                    <input id={fieldId(`quantity-${line.key}`)} type="number" inputMode="numeric" min={1} step={1} value={line.quantity} required onChange={event => { updateLine(line.key, { quantity: event.target.value }); clearError(`quantity-${line.key}`); }} {...errorProps(`quantity-${line.key}`, hintId)} />
                    {product.kind === "ghee" && <><label className="visually-hidden" htmlFor={fieldId(`unit-${line.key}`)}>Unit</label><select id={fieldId(`unit-${line.key}`)} value={line.unit} onChange={event => updateLine(line.key, { unit: event.target.value as Line["unit"] })}><option value="cartons">Cartons</option><option value="kg">kg</option></select></>}
                  </div>
                  {hintText}
                  {errorText(`quantity-${line.key}`)}
                </div>
              </>}
              {lines.length > 1 && <button type="button" className="enquiry-remove" onClick={() => { setLines(current => current.filter(item => item.key !== line.key)); clearError(...lineFields(line.key)); }}>Remove product {index + 1}</button>}
            </fieldset>
          );
        })}
        {lines.length < MAX_LINES && <button type="button" className="enquiry-add" onClick={() => { const key = nextKey.current++; setLines(current => [...current, emptyLine(key)]); }}>Add another product <span aria-hidden="true">+</span></button>}
      </div>
      <div className="enquiry-field enquiry-message">
        <label htmlFor={fieldId("message")}>Message <span>(optional)</span></label>
        <textarea id={fieldId("message")} rows={4} maxLength={1000} value={details.message} onChange={event => setDetail("message", event.target.value)} />
      </div>
      <div className="enquiry-actions">
        <button className="button primary" type="submit" value={whatsappReady ? "whatsapp" : "email"}>{whatsappReady ? "Send on WhatsApp" : emailReady ? "Send by email" : "Send enquiry"} <span aria-hidden="true">↗</span></button>
        {whatsappReady && emailReady && <button className="enquiry-alt" type="submit" value="email">Send by email instead</button>}
      </div>
      <p className="enquiry-status" role="status">
        {outcome === "unavailable" && <>Online enquiries are launching soon. Please call <a href={`tel:${LANDLINE.tel}`}>{LANDLINE.display}</a>, {LANDLINE.hours}.</>}
        {(outcome === "whatsapp" || outcome === "email") && `${outcome === "whatsapp" ? "WhatsApp" : "Your email app"} should now be open with your enquiry ready to send. If nothing opened, call ${LANDLINE.display}, ${LANDLINE.hours}.`}
      </p>
    </form>
  );
}
