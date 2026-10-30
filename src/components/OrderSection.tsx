import EnquiryForm from "./EnquiryForm";
import { LANDLINE, formReady } from "@/lib/contact";

const ranges = [
  { name: "Banaspati ghee", copy: "ACP, Dilpasand, Deewan and Gulberg. Pouches in cartons, any quantity." },
  { name: "Islamabad Nimco", copy: "25 kg bags, or branded retail packs by the carton." },
  { name: "Islamabad Macaroni", copy: "25 kg bags, or branded 400 g packs by the carton." },
];

const terms = [
  ["No published prices", "Rates depend on the size of your order. Larger orders get better rates, agreed when you get in touch."],
  ["Cash at pickup", "Payment is made in cash, on the spot, when you collect."],
  ["Collection", "Collect with your own transport from Islamabad or Mirpur, or an agreed spot arranged after we talk."],
];

export default function OrderSection() {
  return (
    <section className="order-section section-pad" id="order" aria-labelledby="order-title">
      {/* Older links to this section use the previous anchor. */}
      <span id="distributors" />
      <div className="shell section-heading brands-heading">
        <div><p className="eyebrow"><span /> Orders</p><h2 id="order-title">Order direct,<br /><em>in bulk or by the pack.</em></h2></div>
        <p>Order RK Group brands direct, in 25 kg bags or by the carton.</p>
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
