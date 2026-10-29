import { LANDLINE } from "@/lib/contact";
import { kg, wholesaleGroups } from "@/lib/wholesale";

const { ghee, bags } = wholesaleGroups;
const options = (amounts: number[]) => `${amounts.slice(0, -1).map(kg).join(", ")} or ${kg(amounts[amounts.length - 1])}`;

const ranges = [
  { name: "Banaspati ghee", brands: "ACP, Dilpasand, Deewan and Gulberg", copy: `Supplied in ${ghee.unit}. Order ${options(ghee.options)}, or a custom amount of ${kg(ghee.minimum)} or more. We round every order to whole cartons.` },
  { name: "Islamabad Nimco", brands: "Savoury snack mixes", copy: `Supplied in ${bags.unit}. Order ${options(bags.options)}, or a custom amount in multiples of ${kg(bags.multipleOf)}.` },
  { name: "Islamabad Macaroni", brands: "Pasta", copy: `Supplied in ${bags.unit}. Order ${options(bags.options)}, or a custom amount in multiples of ${kg(bags.multipleOf)}.` },
];

const terms = [
  ["Wholesale only", "We supply the trade and do not take retail orders."],
  ["No published prices", "Pickup details and other terms are agreed once you get in touch."],
  ["Cash at pickup", "Payment is made in cash, on the spot, when you collect."],
  ["Your own transport", "You collect your order from our factories in Mirpur, Azad Kashmir."],
];

export default function Wholesale() {
  return (
    <section className="wholesale section-pad" id="distributors" aria-labelledby="distributors-title">
      <div className="shell section-heading brands-heading">
        <div><p className="eyebrow"><span /> Wholesale and distribution</p><h2 id="distributors-title">Wholesale supply,<br /><em>direct from Mirpur.</em></h2></div>
        <p>For distributors, wholesalers, large retailers and commercial buyers who want to stock RK Group brands.</p>
      </div>
      <div className="shell wholesale-grid">
        <div>
          <h3 className="wholesale-label">What you can order</h3>
          <ol className="wholesale-ranges">
            {ranges.map((range, index) => (
              <li key={range.name}>
                <span>0{index + 1}</span>
                <div><h4>{range.name}</h4><p className="wholesale-brands">{range.brands}</p><p>{range.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="wholesale-label">How it works</h3>
          <dl className="wholesale-terms">
            {terms.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
          <div className="wholesale-call">
            <a className="button primary" href={`tel:${LANDLINE.tel}`}>Call {LANDLINE.display} <span aria-hidden="true">↗</span></a>
            <p>{LANDLINE.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
