import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ANALYTICS_LIVE, ENQUIRY_EMAIL, LANDLINE, channelReady, emailReady } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

const path = "/privacy/";
const title = "Privacy";
const description = "How the RK Group website handles your information: what the order form collects, what is stored, cookies, and how to ask for your details to be deleted.";
export const metadata = pageMetadata(title, description, path, "/share/our-story.jpg", "Islamabad at sunset, with the Faisal Mosque and the Margalla Hills");

// This page follows the contact and analytics switches so it always describes what the site actually does.
// Before adding the Meta Pixel, Google Analytics or anything else that sets cookies, update this page and add a consent banner first.
export default function PrivacyPage() {
  const url = `${siteUrl}${path}`;
  return <article>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: title, item: url }] },
    ] }} />
    <PageHero crumb={title} title={title} intro="This page explains what happens to your information when you use this website. It is written in plain language." />
    <div className="shell page-sections">
      <section><h2>What this website collects</h2><div><p>This website has no accounts, payments or newsletters. The order form asks for your name, business name, city, phone number and order details, and you can add a message.</p></div></section>
      <section><h2>What happens to your details</h2><div>{channelReady
        ? <p>The form does not store your details on this website. It prepares your message and opens WhatsApp or your email app, and you decide whether to send it. Nothing is sent until you choose to send it.</p>
        : <p>The order form does not store or send your details. To place an order, please call us.</p>}</div></section>
      <section><h2>How we use your details</h2><div><p>RK Group uses the details you send only to handle your enquiry and order.</p></div></section>
      <section><h2>Asking us to delete your details</h2><div><p>To ask what details we hold about you, or to have them deleted, call <a href={`tel:${LANDLINE.tel}`}>{LANDLINE.display}</a>, {LANDLINE.hours}{emailReady && <>, or email us at <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a></>}.</p></div></section>
      <section><h2>Cookies</h2><div><p>This website does not use non-essential cookies or advertising trackers.</p></div></section>
      <section><h2>Hosting</h2><div><p>Our hosting provider may process basic technical information, such as an IP address, browser type and request time, to deliver and secure the website.</p></div></section>
      {ANALYTICS_LIVE && <section><h2>Analytics</h2><div><p>We use Vercel Web Analytics to count page visits and clicks on order and call buttons. It uses no cookies and does not record your name, phone number or anything you type into the form. It shows us the page, the referring site, the approximate location, and the device and browser type, as totals.</p></div></section>}
      <section><h2>Changes to this page</h2><div><p>If we add advertising or other data-collection tools, we will update this page first and ask for your consent where needed.</p><p className="page-date">Last updated: 30 October 2026</p></div></section>
    </div>
  </article>;
}
