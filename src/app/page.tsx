import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Leadership from "@/components/Leadership";
import Standards from "@/components/Standards";
import Wholesale from "@/components/Wholesale";

import { brands } from "@/lib/brands";


const companies = [
  ["AA Foods", "Food processing", "aa-foods.webp"],
  ["Al-Khalid Flour Mills", "Flour & grain milling", "al-khalid-flour.webp"],
  ["Basila Industries", "Manufacturing", "basila-industries.webp"],
  ["Brother Oil & Ghee", "Edible oils", "brother-oil.webp"],
  ["Islamabad Chemical", "Industrial solutions", "islamabad-chemical.webp"],
  ["Kam Foods", "Food products", "kam-foods.webp"],
  ["Karco", "Consumer products", "karco.webp"],
  ["KF Food Complex", "Food production", "kf-food-complex.webp"],
  ["Khyber Green Energy", "Renewable energy", "khyber-green-energy.webp"],
  ["KKR Oil & Ghee Mills", "Edible oils", "kkr-oil.webp"],
  ["Noor Industries", "Manufacturing", "noor-industries.webp"],
  ["Salam Food Industries", "Food production", "salam-food.webp"],
  ["Pak Tameerat", "Infrastructure", "pak-tameerat.webp"],
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      <div className="group-ribbon"><div className="shell"><span>Generations of enterprise <b>Since 1953</b></span><span>Food & edible oils</span><span>Manufacturing</span><span>Energy</span><span>Infrastructure</span></div></div>

      <section className="story section-pad" id="story">
        <div className="shell story-grid">
          <div className="story-heading">
            <p className="eyebrow"><span /> Our story</p>
            <h2>Built across generations.<br />Designed for what comes next.</h2>
            <p className="section-note">A family enterprise shaped by patient growth, practical ambition and an enduring commitment to the essentials people rely on.</p>
          </div>
          <div className="story-copy">
            <p>RK Group’s roots reach back to 1953, when a family enterprise began in the sugar trade. Sheikh Abdul Islam joined the business in 1965 and expanded into wheat and ghee, laying the foundation for a diversified group serving essential sectors of Pakistan’s economy.</p>
            <p>From ACP Oil Mills in 1989 and Al-Khalid Flour Mills in 1996 to a wider portfolio of food, edible-oil, manufacturing, energy and infrastructure businesses, the Group has grown through practical ambition and long-term thinking.</p>
            <div className="fact-row">
              <div><strong>1953</strong><span>Origins in trade</span></div>
              <div><strong>1989</strong><span>ACP Oil Mills</span></div>
              <div><strong>13</strong><span>Portfolio companies</span></div>
            </div>
          </div>
        </div>
        <ol className="shell heritage-timeline" aria-label="RK Group milestones">
          <li><span>1953</span><h3>The first chapter</h3><p>A family enterprise begins in the sugar trade.</p></li>
          <li><span>1989</span><h3>A foundation in industry</h3><p>ACP Oil Mills marks a new era in edible oils.</p></li>
          <li><span>1996</span><h3>Expanding the essentials</h3><p>Al-Khalid Flour Mills joins the family of businesses.</p></li>
          <li><span>Today</span><h3>A broader horizon</h3><p>13 companies, connected by a shared commitment to progress.</p></li>
        </ol>
      </section>

      <Leadership />

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
                <div className="brand-meta"><span>0{index + 1}</span><p>{brand.category}</p></div>
                <h3>{brand.fullName}</h3>
                <p className="brand-description">{brand.copy}</p>
                <Link className="brand-page-link" href={`/brands/${brand.slug}/`}>Explore {brand.fullName} <span aria-hidden="true">↗</span></Link>
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

      <Wholesale />

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
            </article>
          ))}
        </div>
      </section>

      <Standards />
    </>
  );
}
