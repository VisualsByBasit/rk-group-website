"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ENQUIRY_EMAIL, LANDLINE, channelReady, emailReady, whatsappReady, whatsappUrl } from "@/lib/contact";
import { kg, wholesaleGroups, wholesaleProducts, type WholesaleGroup } from "@/lib/wholesale";

type Line = { key: number; product: string; quantity: string; custom: string };
type Details = { name: string; business: string; city: string; phone: string; message: string };
type Channel = "whatsapp" | "email";
type Outcome = Channel | "unavailable";

const CUSTOM = "custom";
const emptyLine = (key: number): Line => ({ key, product: "", quantity: "", custom: "" });
const productById = (id: string) => wholesaleProducts.find(product => product.id === id);
const groupOf = (id: string): WholesaleGroup | undefined => { const product = productById(id); return product && wholesaleGroups[product.group]; };

function customError(value: string, group: WholesaleGroup) {
  if (!value.trim()) return "Enter an amount in kg.";
  const amount = Number(value);
  if (!Number.isInteger(amount)) return "Enter a whole number of kg.";
  if (amount < group.minimum) return `The minimum order is ${kg(group.minimum)}.`;
  if (group.multipleOf && amount % group.multipleOf !== 0) return `Enter a multiple of ${kg(group.multipleOf)}, for example ${kg(Math.ceil(amount / group.multipleOf) * group.multipleOf)}.`;
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
  lines.forEach(line => {
    const group = groupOf(line.product);
    if (!group) { errors[`product-${line.key}`] = "Choose a product."; return; }
    if (seen.has(line.product)) errors[`product-${line.key}`] = "This product is already in your enquiry. Change the amount above instead.";
    seen.add(line.product);
    if (!line.quantity) errors[`quantity-${line.key}`] = "Choose an amount.";
    else if (line.quantity === CUSTOM) { const error = customError(line.custom, group); if (error) errors[`custom-${line.key}`] = error; }
  });
  return errors;
}

function compose(details: Details, lines: Line[]) {
  const items = lines.map(line => `- ${productById(line.product)?.label}: ${line.quantity === CUSTOM ? kg(Number(line.custom)) : kg(Number(line.quantity))}`);
  return [
    "Wholesale enquiry from rkgroupofindustries.com",
    "",
    `Name: ${details.name.trim()}`,
    `Business: ${details.business.trim()}`,
    `City: ${details.city.trim()}`,
    `Phone: ${details.phone.trim()}`,
    "",
    "Products:",
    ...items,
    ...(details.message.trim() ? ["", `Message: ${details.message.trim()}`] : []),
  ].join("\n");
}

export default function EnquiryForm() {
  const id = useId();
  const nextKey = useRef(1);
  const [details, setDetails] = useState<Details>({ name: "", business: "", city: "", phone: "", message: "" });
  const [lines, setLines] = useState<Line[]>([emptyLine(0)]);
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
      window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(`Wholesale enquiry from ${details.business.trim()}`)}&body=${encodeURIComponent(text)}`;
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
    <form className="enquiry" noValidate onSubmit={submit} aria-labelledby={fieldId("title")}>
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
          const group = groupOf(line.product);
          const hintId = group?.hint ? fieldId(`hint-${line.key}`) : undefined;
          return (
            <fieldset className="enquiry-line" key={line.key}>
              <legend>{lines.length > 1 ? `Product ${index + 1}` : "Your order"}</legend>
              <div className="enquiry-field">
                <label htmlFor={fieldId(`product-${line.key}`)}>Product</label>
                <select id={fieldId(`product-${line.key}`)} value={line.product} required onChange={event => { updateLine(line.key, { product: event.target.value, quantity: "", custom: "" }); clearError(`product-${line.key}`, `quantity-${line.key}`, `custom-${line.key}`); }} {...errorProps(`product-${line.key}`)}>
                  <option value="">Choose a product</option>
                  {wholesaleProducts.map(product => <option key={product.id} value={product.id}>{product.label}</option>)}
                </select>
                {errorText(`product-${line.key}`)}
              </div>
              <div className="enquiry-field">
                <label htmlFor={fieldId(`quantity-${line.key}`)}>Amount</label>
                <select id={fieldId(`quantity-${line.key}`)} value={line.quantity} required disabled={!group} onChange={event => { updateLine(line.key, { quantity: event.target.value }); clearError(`quantity-${line.key}`, `custom-${line.key}`); }} {...errorProps(`quantity-${line.key}`, hintId)}>
                  <option value="">{group ? "Choose an amount" : "Choose a product first"}</option>
                  {group?.options.map(amount => <option key={amount} value={amount}>{kg(amount)}</option>)}
                  {group && <option value={CUSTOM}>Custom amount</option>}
                </select>
                {group?.hint && <p className="enquiry-hint" id={hintId}>{group.hint}</p>}
                {errorText(`quantity-${line.key}`)}
              </div>
              {group && line.quantity === CUSTOM && (
                <div className="enquiry-field">
                  <label htmlFor={fieldId(`custom-${line.key}`)}>Custom amount in kg</label>
                  <input id={fieldId(`custom-${line.key}`)} type="number" inputMode="numeric" min={group.minimum} step={group.multipleOf ?? 1} value={line.custom} required onChange={event => { updateLine(line.key, { custom: event.target.value }); clearError(`custom-${line.key}`); }} {...errorProps(`custom-${line.key}`)} />
                  {errorText(`custom-${line.key}`)}
                </div>
              )}
              {lines.length > 1 && <button type="button" className="enquiry-remove" onClick={() => { setLines(current => current.filter(item => item.key !== line.key)); clearError(`product-${line.key}`, `quantity-${line.key}`, `custom-${line.key}`); }}>Remove product {index + 1}</button>}
            </fieldset>
          );
        })}
        {lines.length < wholesaleProducts.length && <button type="button" className="enquiry-add" onClick={() => { const key = nextKey.current++; setLines(current => [...current, emptyLine(key)]); }}>Add another product <span aria-hidden="true">+</span></button>}
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
