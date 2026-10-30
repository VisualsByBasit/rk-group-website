import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { companies } from "@/lib/companies";
import { leaderBySlug, leaderImage, leaderPath } from "@/lib/leaders";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

const path = "/our-story/";
const title = "Our Story, from 1953 to Today";
const description = "RK Group’s roots reach back to a family enterprise trading sugar in Lahore in 1953. Today the Group brings together 13 companies across food, edible oils, manufacturing, energy and infrastructure.";
export const metadata = pageMetadata(title, description, path, "/share/our-story.jpg", "Islamabad at sunset, with the Faisal Mosque and the Margalla Hills");

const former = leaderBySlug("sheikh-abdul-islam")!;
const chairman = leaderBySlug("sheikh-khalid-islam")!;
const laterMilestones = [
  ["January 2014", "Mirpur Oil & Ghee Mills (Pvt) Ltd", "Established for ghee, cooking oil and soap."],
  ["July 2014", "Salam Oil & Ghee Mills (Pvt) Ltd", "Established for ghee, cooking oil and soap."],
  ["February 2016", "AA Foods (Pvt) Ltd", "Established for ghee, cooking oil and soap."],
] as const;
const pioneers = [
  ["A.C.P Oil Mills", "The first ghee, cooking oil and soap manufacturer in Industrial Area, Islamabad."],
  ["Al-Khalid Flour Mills", "The first flour mill in Lawrencepur, District Attock."],
  ["A.C.P Petroleum", "The first petrol pump on Saidpur Road, Rawalpindi."],
  ["KK Oil & Ghee Mills", "The first ghee, cooking oil and soap manufacturer in Lawrencepur, District Attock."],
] as const;
const nextLinks = [["/#brands", "Our brands"], ["/#leadership", "Our leadership"], ["/#order", "Place an Order"]] as const;

export default function StoryPage() {
  const url = `${siteUrl}${path}`;
  return <article className="story-page">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "AboutPage", "@id": `${url}#webpage`, url, name: title, description, about: { "@id": `${siteUrl}/#organization` }, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Our story", item: url }] },
    ] }} />

    <header className="profile-hero">
      <div className="shell profile-hero-inner">
        <nav className="profile-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true">/</span><span aria-current="page">Our story</span></nav>
        <div className="profile-portrait profile-portrait--story"><Image src="/assets/hero/islamabad.webp" alt="Islamabad at sunset, with the Faisal Mosque and the Margalla Hills" fill sizes="(max-width: 860px) 100vw, 60vw" preload /></div>
        <div className="profile-hero-body">
          <p className="eyebrow light"><span /> Our story</p>
          <h1>Built across generations.</h1>
          <p className="profile-statement">Designed for what comes next. A family enterprise shaped by patient growth, practical ambition and an enduring commitment to the essentials people rely on.</p>
        </div>
      </div>
    </header>

    <div className="shell chapters">
      <section className="chapter" aria-labelledby="chapter-1953">
        <p className="chapter-year">1953</p>
        <div className="chapter-body">
          <h2 id="chapter-1953">The first chapter</h2>
          <p className="profile-lead">RK Group’s roots reach back to 1953, when a family enterprise began in Lahore with bulk trading of sugar.</p>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-1965">
        <p className="chapter-year">1965</p>
        <div className="chapter-body">
          <h2 id="chapter-1965">Into wheat and ghee</h2>
          <div className="chapter-split">
            <div>
              {former.summary.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              <Link className="brand-page-link" href={leaderPath(former)}>View {former.name}’s profile ↗</Link>
            </div>
            <figure className="chapter-portrait"><Image src={leaderImage(former)} alt={former.imageAlt} width={1100} height={882} sizes="(max-width: 860px) 100vw, 340px" /><figcaption>{former.name}, former Chairman, KK Group</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-concerns">
        <p className="chapter-year">1989<span>to 2012</span></p>
        <div className="chapter-body">
          <h2 id="chapter-concerns">KK Group history and group concerns</h2>
          <div className="profile-milestones">
            <ol>{former.milestones?.map(milestone => <li key={milestone.title}><span>{milestone.when}</span><div><h3>{milestone.title}</h3><p>{milestone.copy}</p></div></li>)}</ol>
            <p className="profile-note">{former.milestonesNote}</p>
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-pioneers">
        <p className="chapter-year chapter-year--word">Firsts</p>
        <div className="chapter-body">
          <h2 id="chapter-pioneers">Pioneers in their localities</h2>
          <ul className="pioneers">{pioneers.map(([name, copy]) => <li key={name}><strong>{name}</strong><span>{copy}</span></li>)}</ul>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-growth">
        <p className="chapter-year">Growth</p>
        <div className="chapter-body">
          <h2 id="chapter-growth">Growing the Group</h2>
          <div className="chapter-split">
            <div>
              <p className="profile-lead">Sheikh Khalid Islam, Chairman of RK Group and CEO of KK Group, grew the Group into the 13 companies it is today.</p>
              <p>He serves as Chief Executive of Kashmir Oil & Ghee Mills (Pvt.) Ltd. and Mirpur Oil & Ghee Mills (Pvt.) Ltd., both based in Mirpur, AJK, with corporate operations in Islamabad.</p>
              <p>He served as Vice Chairman of PVMA in 2017–2018 and was elected Vice Chairman for 2024–2026, and his industry service includes representation through the Federation of Pakistan Chambers of Commerce and Industry.</p>
              <p>He has represented the edible oil industry in discussions with government and regulators on food security, taxation, digital invoicing, freight costs and industrial policy.</p>
              <Link className="brand-page-link" href={leaderPath(chairman)}>View {chairman.name}’s profile ↗</Link>
            </div>
            <figure className="chapter-portrait"><Image src={leaderImage(chairman)} alt={chairman.imageAlt} width={1100} height={1332} sizes="(max-width: 860px) 100vw, 340px" /><figcaption>{chairman.name}, Chairman, RK Group</figcaption></figure>
          </div>
          <div className="profile-milestones chapter-later">
            <ol>{laterMilestones.map(([when, name, copy]) => <li key={name}><span>{when}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-today">
        <p className="chapter-year">Today</p>
        <div className="chapter-body">
          <h2 id="chapter-today">A broader horizon</h2>
          <p className="profile-lead">From ACP Oil Mills in 1989 and Al-Khalid Flour Mills in 1996 to a wider portfolio of food, edible-oil, manufacturing, energy and infrastructure businesses, the Group has grown through practical ambition and long-term thinking.</p>
          <p>Led by Chairman Sheikh Khalid Islam, our leadership connects generations of enterprise with the ambition to build lasting value.</p>
          <p>The Group regularly imports raw materials such as palm olein and tin sheet, and exports vegetable ghee to Afghanistan.</p>
        </div>
      </section>
    </div>

    <section className="story-companies" aria-labelledby="companies-title">
      <div className="shell">
        <p className="eyebrow"><span /> The wider portfolio</p>
        <h2 id="companies-title">13 companies, one group.</h2>
        <ul>{companies.map(([name, sector, image]) => <li key={name}><span className="story-company-logo"><Image src={`/assets/companies/${image}`} alt="" fill sizes="(max-width: 720px) 45vw, 220px" /></span><strong>{name}</strong><span>{sector}</span></li>)}<li className="story-companies-close">Food, edible oils, manufacturing, energy and infrastructure.</li></ul>
      </div>
    </section>

    <nav className="story-next shell" aria-label="Explore RK Group">
      {nextLinks.map(([href, label]) => <Link href={href} key={href}>{label} <span aria-hidden="true">↗</span></Link>)}
    </nav>
  </article>;
}
