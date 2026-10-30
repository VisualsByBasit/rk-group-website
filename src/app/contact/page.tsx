import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SocialIcon from "@/components/SocialIcon";
import { ENQUIRY_EMAIL, LANDLINE, WHATSAPP_NUMBER, emailReady, whatsappReady, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";
import { rkGroupSocial } from "@/lib/social";

const path = "/contact/";
const title = "Contact";
const description = "Contact RK Group for orders and enquiries. Call 051-4449011, Monday to Saturday, 10am to 6pm, or place an order online.";
export const metadata = pageMetadata(title, description, path, "/share/our-story.jpg", "Islamabad at sunset, with the Faisal Mosque and the Margalla Hills");

// Addresses for Islamabad and Mirpur go here, and in the Organization JSON-LD, only once Saim confirms them.
export default function ContactPage() {
  const url = `${siteUrl}${path}`;
  return <article>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "ContactPage", "@id": `${url}#webpage`, url, name: "Contact RK Group", description, about: { "@id": `${siteUrl}/#organization` }, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: title, item: url }] },
    ] }} />
    <PageHero crumb={title} title="Contact RK Group" intro="Get in touch for orders and enquiries." />
    <div className="shell contact-grid">
      <section>
        <h2>Call us</h2>
        <a className="contact-phone" href={`tel:${LANDLINE.tel}`}>{LANDLINE.display}</a>
        <p>{LANDLINE.hours}</p>
      </section>
      <section>
        <h2>Place an order</h2>
        <p>Fill in the order form and we will take it from there.</p>
        <Link className="button primary" href="/#order-form" data-track="Place an Order" data-where="contact">Place an Order <span aria-hidden="true">↗</span></Link>
      </section>
      {whatsappReady && <section>
        <h2>WhatsApp</h2>
        <a className="contact-link" href={whatsappUrl("Hello RK Group, I would like to place an order.")} target="_blank" rel="noopener noreferrer">+{WHATSAPP_NUMBER}<span className="visually-hidden"> (opens WhatsApp)</span></a>
      </section>}
      {emailReady && <section>
        <h2>Email</h2>
        <a className="contact-link" href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
      </section>}
      <section>
        <h2>Follow RK Group</h2>
        <ul className="contact-social">{rkGroupSocial.map(link => <li key={link.network}><a href={link.href} target="_blank" rel="noopener noreferrer"><SocialIcon network={link.network} size={20} /> {link.network}<span className="visually-hidden"> (opens in a new tab)</span></a></li>)}</ul>
      </section>
    </div>
  </article>;
}
