import EnquiryForm from "./EnquiryForm";
import { LANDLINE, formReady } from "@/lib/contact";
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

export default function OrderSection() {
  return (
    <section className="order-section section-pad" id="order" aria-labelledby="order-title">
      {/* Older links to this section use the previous anchor. */}
      <span id="distributors" />
      <div className="shell section-heading brands-heading">
        <div><p className="eyebrow"><span /> Orders</p><h2 id="order-title">Order direct,<br /><em>in bags or by the carton.</em></h2></div>
        <p>Order RK Group brands direct, in 25 kg bulk bags or by the carton.</p>
      </div>
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
      {formReady && <div className="shell"><EnquiryForm /></div>}
    </section>
  );
}
