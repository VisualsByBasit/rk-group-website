import EnquiryForm from "./EnquiryForm";
import Image from "next/image";
import Link from "next/link";
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

const intro = "Order RK Group brands direct, in 25 kg bulk bags or by the carton.";
const orderable = brands.filter(brand => brand.orderId);

function OrderTop() {
  return (
    <div className="order-top order-top--c">
      <div className="shell">
        <p className="eyebrow"><span /> Orders</p>
        <h2 id="order-title">Stock RK Group brands.</h2>
        <p>{intro}</p>
        <ul>
          {orderable.map(brand => <li key={brand.slug}><a className={brand.className} href={`/?brand=${brand.orderId}#order-form`} data-track="Order tile click" data-brand={brand.orderId}><span className="order-tile-image"><Image src={brand.lineup} alt="" fill sizes="(max-width: 720px) 46vw, 200px" /></span><span className="order-tile-name">{brand.name}</span><span className="visually-hidden">: place an order</span></a></li>)}
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
          <Link className="brand-page-link order-terms-link" href="/ordering-terms/">Read the ordering terms ↗</Link>
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
