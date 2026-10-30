import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Leadership from "@/components/Leadership";
import Standards from "@/components/Standards";
import CompanyTilt from "@/components/CompanyTilt";
import OrderSection from "@/components/OrderSection";
import JsonLd from "@/components/JsonLd";
import { heroImage, siteUrl } from "@/lib/site";

import { brands } from "@/lib/brands";
import { companies } from "@/lib/companies";
import { leaderBySlug, leaderImage, leaderPath } from "@/lib/leaders";
import { brandInstagram } from "@/lib/social";
import SocialIcon from "@/components/SocialIcon";
const storyPeople = [
  [leaderBySlug("sheikh-abdul-islam")!, "From 1965", "Joined in 1965 and built the business into wheat, ghee and then manufacturing."],
  [leaderBySlug("sheikh-khalid-islam")!, "Growth and today", "As Chairman, grew the Group into the 13 companies it is today."],
] as const;

export default function HomePage() {
  return (
    <>
      {/* Tells Google which name to show for the site in search results instead of the domain. */}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [
        { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "RK Group of Industries", alternateName: "RK Group", url: `${siteUrl}/`, publisher: { "@id": `${siteUrl}/#organization` } },
        { "@type": "WebPage", "@id": `${siteUrl}/#webpage`, url: `${siteUrl}/`, name: "RK Group of Industries", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` }, primaryImageOfPage: heroImage },
      ] }} />
      <HeroSlideshow />

      <div className="group-ribbon"><div className="shell"><span>Generations of enterprise <b>Since 1953</b></span><span>Food & edible oils</span><span>Manufacturing</span><span>Energy</span><span>Infrastructure</span></div></div>

      <section className="brands section-pad" id="brands">
        <div className="shell section-heading brands-heading">
          <div><p className="eyebrow"><span /> Brand family</p><h2>Made for real life.<br />Built to be remembered.</h2></div>
          <p>Seven distinctive names, presented through the products and formats that carry them into homes and kitchens.</p>
        </div>
        <nav className="shell brand-directory" aria-label="Explore our brands">{brands.map(brand => <a key={brand.name} href={`#${brand.className}`}>{brand.name}<span aria-hidden="true">↗</span></a>)}</nav>
        <div className="shell brand-stack">
          {brands.map((brand, index) => (
            <article className={`brand-showcase ${brand.className}`} id={brand.className} key={brand.name}>
              <div className="brand-copy">
                <div className="brand-meta"><span>0{index + 1}</span><p>{brand.category}</p>{brandInstagram[brand.slug] && <a className="brand-instagram" href={brandInstagram[brand.slug]} target="_blank" rel="noopener noreferrer" aria-label={`${brand.fullName} on Instagram (opens in a new tab)`}><SocialIcon network="Instagram" size={17} /></a>}</div>
                <h3>{brand.fullName}</h3>
                <p className="brand-description">{brand.copy}</p>
                {brand.claims && <ul className="brand-claims" aria-label={`${brand.name} product claims`}>{brand.claims.map(claim => <li key={claim}>{claim}</li>)}</ul>}
                <div className="brand-actions"><Link className="brand-page-link" href={`/brands/${brand.slug}/`}>Explore {brand.fullName} <span aria-hidden="true">↗</span></Link>{brand.orderId && <a className="brand-order" href={`/?brand=${brand.orderId}#order-form`} data-track="Brand block Order click" data-brand={brand.orderId}>Place an Order<span className="visually-hidden">: {brand.fullName}</span></a>}</div>
                <div className="format-list" aria-label={`${brand.name} product formats`}>
                  {brand.formats.map(format => <span key={format}>{format}</span>)}
                </div>
              </div>
              <div className="brand-visual">
                <Image className="product-lineup" src={brand.lineup} alt={`${brand.name} product range`} fill sizes="(max-width: 820px) 100vw, 62vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Leadership />

      <section className="story section-pad" id="story">
        <div className="shell story-grid">
          <div className="story-heading">
            <p className="eyebrow"><span /> Our story</p>
            <h2>Built across generations.<br />Designed for what comes next.</h2>
            <p className="section-note">A family enterprise shaped by patient growth, practical ambition and an enduring commitment to the essentials people rely on.</p>
          </div>
          <div className="story-copy">
            <p>RK Group’s roots reach back to 1953, when a family enterprise began in Lahore with bulk trading of sugar. Sheikh Abdul Islam joined the business in 1965 and expanded into trading wheat and ghee, laying the foundation for a diversified group serving essential sectors of Pakistan’s economy.</p>
            <p>From ACP Oil Mills in 1989 and Al-Khalid Flour Mills in 1996 to a wider portfolio of food, edible-oil, manufacturing, energy and infrastructure businesses, the Group has grown through practical ambition and long-term thinking.</p>
            <Link className="brand-page-link" href="/our-story/">Read the full story ↗</Link>
          </div>
        </div>
        <dl className="shell story-figures">
          <div><dt>Origins in trade</dt><dd>1953</dd></div>
          <div><dt>ACP Oil Mills</dt><dd>1989</dd></div>
          <div><dt>Portfolio companies</dt><dd>13</dd></div>
        </dl>
        <ol className="shell heritage-timeline" aria-label="RK Group milestones">
          <li><span>1953</span><h3>The first chapter</h3><p>A family enterprise begins in Lahore with bulk trading of sugar.</p></li>
          <li><span>1965</span><h3>Into wheat and ghee</h3><p>Sheikh Abdul Islam joins and expands into trading wheat and ghee.</p></li>
          <li><span>1989</span><h3>A foundation in industry</h3><p>ACP Oil Mills marks a new era in edible oils.</p></li>
          <li><span>1996</span><h3>Expanding the essentials</h3><p>Al-Khalid Flour Mills joins the family of businesses.</p></li>
          <li><span>Growth</span><h3>A growing Group</h3><p>Sheikh Khalid Islam, as Chairman, grows the Group.</p></li>
          <li><span>Today</span><h3>A broader horizon</h3><p>13 companies, connected by a shared commitment to progress.</p></li>
        </ol>
        <ul className="shell story-people">
          {storyPeople.map(([leader, when, line]) => (
            <li key={leader.slug}>
              <span className="story-person-portrait"><Image src={leaderImage(leader)} alt={leader.imageAlt} fill sizes="(max-width: 720px) 40vw, 260px" /></span>
              <div>
                <p className="story-person-when">{when}</p>
                <h3>{leader.name}</h3>
                <p>{line}</p>
                <Link className="brand-page-link" href={leaderPath(leader)}>View profile<span className="visually-hidden">: {leader.name}</span> <span aria-hidden="true">↗</span></Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="shell portfolio-intro">
          <div><p className="eyebrow light"><span /> The wider portfolio</p><h2>One group.<br /><em>Many capabilities.</em></h2></div>
          <p>RK Group’s operating companies connect consumer needs with industrial capability, from food and grain to energy, manufacturing and infrastructure.</p>
        </div>
        <div className="shell company-grid">
          {companies.map(([name, sector, image], index) => (
            <article className="company-card" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="company-logo"><Image src={`/assets/companies/${image}`} alt={`${name} logo`} fill sizes="220px" /></div>
              <div><h3>{name}</h3><p>{sector}</p></div>
              <div className="company-sheen" aria-hidden="true" />
            </article>
          ))}
        </div>
        <CompanyTilt />
      </section>

      <OrderSection />

      <Standards />
    </>
  );
}
