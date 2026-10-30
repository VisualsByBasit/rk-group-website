import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { LANDLINE } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { collectionLine, paymentLine, ratesLine } from "@/lib/orders";
import { siteUrl } from "@/lib/site";

const path = "/ordering-terms/";
const title = "Ordering terms";
const description = "The terms for ordering from RK Group: rates, how orders are confirmed, payment in cash at collection, collection points and what you can order.";
export const metadata = pageMetadata(title, description, path, "/share/our-story.jpg", "Islamabad at sunset, with the Faisal Mosque and the Margalla Hills");

const terms = [
  ["Prices", `We do not publish prices. ${ratesLine}`],
  ["Confirming an order", "Sending an enquiry does not confirm an order. An order is confirmed only after RK Group has spoken with you."],
  ["Payment", paymentLine],
  ["Collection", collectionLine],
  ["What you can order", "Banaspati ghee comes as pouches in cartons, in any quantity. Islamabad Nimco and Islamabad Macaroni come in 25 kg bulk bags, or as retail packs by the carton."],
  ["Product images", "Product and packaging images are for illustration and may differ slightly from the products supplied."],
] as const;

export default function OrderingTermsPage() {
  const url = `${siteUrl}${path}`;
  return <article>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: title, item: url }] },
    ] }} />
    <PageHero crumb={title} title={title} intro="These terms apply to orders placed with RK Group." />
    <div className="shell page-sections">
      {terms.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><div><p>{copy}</p></div></section>)}
      <section><h2>Questions</h2><div><p>Call <a href={`tel:${LANDLINE.tel}`}>{LANDLINE.display}</a>, {LANDLINE.hours}.</p><p className="page-date">Last updated: 30 October 2026</p></div></section>
    </div>
  </article>;
}
