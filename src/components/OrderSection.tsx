import EnquiryForm from "./EnquiryForm";
import Image from "next/image";
import { LANDLINE, formReady } from "@/lib/contact";
import { brands } from "@/lib/brands";
import { collectionLine, orderProducts, orderSummary, paymentLine, ratesLine } from "@/lib/orders";

const summaryFor = (id: string) => orderSummary(orderProducts.find(product => product.id === id)!);

const ranges = [
  { name: "Banaspati ghee", copy: `ACP, Dilpasand, Deewan and Gulberg. ${summaryFor("acp")}` },
  { name: "Islamabad Nimco", copy: summaryFor("nimco") },
  { name: "Islamabad Macaroni", copy: summaryFor("macaroni") },
];

const terms = [
  ["No published prices", ratesLine],
  ["Cash at pickup", paymentLine],
  ["Collection", collectionLine],
];

const OPTION = "c" as "a" | "b" | "c"; // review only: the chosen option stays and the others are removed
const intro = "Order RK Group brands direct, in 25 kg bulk bags or by the carton.";
const orderable = brands.filter(brand => brand.orderId);

function OrderTop() {
  if (OPTION === "a") return (
    <div className="order-top order-top--a">
      <div className="shell">
        <div><p className="eyebrow light"><span /> Orders</p><h2 id="order-title">Order from the source.</h2></div>
        <div><p>{intro}</p><p>{ratesLine}</p><a className="button primary" href={`tel:${LANDLINE.tel}`}>Call {LANDLINE.display} <span aria-hidden="true">↗</span></a></div>
      </div>
    </div>
  );
  if (OPTION === "b") return (
    <div className="order-top order-top--b">
      <div className="order-top-strip" aria-hidden="true">{orderable.filter(brand => ["acp", "macaroni", "nimco"].includes(brand.orderId!)).map(brand => <span key={brand.slug}><Image src={brand.lineup} alt="" fill sizes="(max-width: 720px) 34vw, 34vw" /></span>)}</div>
      <div className="shell"><p className="eyebrow light"><span /> Orders</p><h2 id="order-title">From our mills<br />to your shelves.</h2><p>{intro}</p></div>
    </div>
  );
  return (
    <div className="order-top order-top--c">
      <div className="shell">
        <p className="eyebrow"><span /> Orders</p>
        <h2 id="order-title">Stock RK Group brands.</h2>
        <p>{intro}</p>
        <ul>
          {orderable.map(brand => <li key={brand.slug}><a className={brand.className} href={`/?brand=${brand.orderId}#order-form`}><span className="order-tile-image"><Image src={brand.lineup} alt="" fill sizes="(max-width: 720px) 46vw, 200px" /></span><span className="order-tile-name">{brand.name}</span><span className="visually-hidden">: place an order</span></a></li>)}
        </ul>
      </div>
    </div>
  );
}

export default function OrderSection() {
  return (
    <section className="order-section" id="order" aria-labelledby="order-title">
      {/* Older links to this section use the previous anchor. */}
      <span id="distributors" />
      <OrderTop />
      <div className="shell order-grid">
        <div>
          <h3 className="order-label">What you can order</h3>
          <ol className="order-ranges">
            {ranges.map((range, index) => (
              <li key={range.name}>
                <span>0{index + 1}</span>
                <div><h4>{range.name}</h4><p>{range.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="order-label">How it works</h3>
          <dl className="order-terms">
            {terms.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
          <div className="order-call">
            <a className="button primary" href={`tel:${LANDLINE.tel}`}>Call {LANDLINE.display} <span aria-hidden="true">↗</span></a>
            <p>{LANDLINE.hours}</p>
          </div>
        </div>
      </div>
      {formReady && <div className="shell order-form-wrap"><EnquiryForm /></div>}
    </section>
  );
}
