import Image from "next/image";

const brands = [
  { name: "ACP", category: "Banaspati ghee & cooking oil", copy: "The flagship name at the heart of RK Group's edible-oils story—built around dependable quality for everyday kitchens.", image: "/assets/companies/aa-foods.png", className: "brand-acp" },
  { name: "Islamabad Macaroni", category: "Premium pasta", copy: "A contemporary pasta brand made for generous family meals, with quality wheat and a proudly local identity.", image: "/assets/brands/islamabad-macaroni.jpg", className: "brand-islamabad" },
  { name: "Dilpasand", category: "Banaspati", copy: "A familiar kitchen name created for full flavour, consistent results and the recipes families return to.", image: "/assets/brands/dilpasand.jpg", className: "brand-dilpasand" },
  { name: "Dewan", category: "Banaspati ghee", copy: "A trusted pantry essential with a distinctive identity and a long-standing place in everyday cooking.", image: "/assets/brands/deewan.png", className: "brand-deewan" },
  { name: "Kashmir Tea", category: "Premium tea", copy: "A rich, carefully presented blend made for the conversations and rituals that bring people together.", image: "/assets/brands/kashmir-tea.png", className: "brand-kashmir" },
];

const companies = [
  ["AA Foods", "Food processing", "aa-foods.png"],
  ["Al-Khalid Flour Mills", "Flour & grain milling", "al-khalid-flour.png"],
  ["Basila Industries", "Manufacturing", "basila-industries.png"],
  ["Brother Oil & Ghee", "Edible oils", "brother-oil.png"],
  ["Islamabad Chemical", "Industrial solutions", "islamabad-chemical.png"],
  ["Kam Foods", "Food products", "kam-foods.png"],
  ["Karco", "Consumer products", "karco.png"],
  ["KF Food Complex", "Food production", "kf-food-complex.png"],
  ["Khyber Green Energy", "Renewable energy", "khyber-green-energy.png"],
  ["KKR Oil & Ghee Mills", "Edible oils", "kkr-oil.png"],
  ["Noor Industries", "Manufacturing", "noor-industries.png"],
  ["Salam Food Industries", "Food production", "salam-food.png"],
  ["Pak Tameerat", "Infrastructure", "pak-tameerat.png"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <Image className="hero-image" src="/assets/hero/islamabad.png" alt="Islamabad skyline with Faisal Mosque and the Margalla Hills" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow light"><span /> Pakistan, built into our story</p>
          <h1>Everyday essentials.<br /><em>Enduring enterprise.</em></h1>
          <p className="hero-lede">RK Group brings generations of enterprise to the food, manufacturing, energy and infrastructure businesses that move life forward.</p>
          <div className="hero-actions">
            <a className="button primary" href="#brands">Explore our brands <span>↓</span></a>
            <a className="quiet-link" href="#story">Discover our story</a>
          </div>
        </div>
        <a className="scroll-cue" href="#story" aria-label="Scroll to our story"><span>Scroll</span><b>↓</b></a>
      </section>

      <section className="story section-pad" id="story">
        <div className="shell story-grid">
          <div>
            <p className="eyebrow"><span /> Our story</p>
            <h2>Built across generations.<br />Designed for what comes next.</h2>
          </div>
          <div className="story-copy">
            <p>RK Group’s roots reach back to 1953, when a family enterprise began in the sugar trade. The next generation expanded into wheat and ghee, laying the foundation for a diversified group serving essential sectors of Pakistan’s economy.</p>
            <p>From ACP Oil Mills in 1989 and Al-Khalid Flour Mills in 1996 to a wider portfolio of food, edible-oil, manufacturing, energy and infrastructure businesses, the Group has grown through practical ambition and long-term thinking.</p>
            <div className="fact-row">
              <div><strong>1953</strong><span>Origins in trade</span></div>
              <div><strong>1989</strong><span>ACP Oil Mills</span></div>
              <div><strong>13</strong><span>Portfolio companies</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership section-pad" id="leadership">
        <div className="shell section-heading light-heading">
          <p className="eyebrow light"><span /> Leadership</p>
          <h2>Experience meets<br /><em>new momentum.</em></h2>
        </div>
        <div className="shell leaders-grid">
          <article className="leader-card">
            <div className="leader-image"><Image src="/assets/leadership/sheikh-khalid-islam.png" alt="Sheikh Khalid Islam" fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
            <div className="leader-body">
              <span className="leader-index">01 / Chairman</span>
              <h3>Sheikh Khalid Islam</h3>
              <p className="roles">Chairman, RK Group · Chairman, KK Group<br />Vice Chairman, PVMA</p>
              <p>Known for strategic vision, operational discipline and principled industry leadership, Sheikh Khalid Islam has guided growth across the edible-oils sector while representing manufacturers in constructive dialogue on food security and industrial policy.</p>
            </div>
          </article>
          <article className="leader-card">
            <div className="leader-image"><Image src="/assets/leadership/sheikh-saim-khalid.png" alt="Sheikh Saim Khalid" fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
            <div className="leader-body">
              <span className="leader-index">02 / Director</span>
              <h3>Sheikh Saim Khalid</h3>
              <p className="roles">Director, RK Group · Director, KK Group</p>
              <p>Representing the next generation of leadership, Sheikh Saim Khalid brings a forward-looking focus to brand building, disciplined growth and the continued modernization of the Group’s diverse portfolio.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="brands section-pad" id="brands">
        <div className="shell section-heading brands-heading">
          <div><p className="eyebrow"><span /> Main brands</p><h2>Names that live<br />in everyday life.</h2></div>
          <p>Five distinctive brands. One shared commitment to consistency, care and value.</p>
        </div>
        <div className="shell brand-stack">
          {brands.map((brand, index) => (
            <article className={`brand-panel ${brand.className}`} key={brand.name}>
              <div className="brand-copy">
                <span className="brand-number">0{index + 1}</span>
                <p>{brand.category}</p>
                <h3>{brand.name}</h3>
                <p className="brand-description">{brand.copy}</p>
              </div>
              <div className="brand-logo"><Image src={brand.image} alt={`${brand.name} logo`} fill sizes="(max-width: 820px) 90vw, 50vw" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="shell portfolio-intro">
          <div><p className="eyebrow light"><span /> The wider portfolio</p><h2>One group.<br /><em>Many capabilities.</em></h2></div>
          <p>RK Group’s operating companies connect consumer needs with industrial capability—from food and grain to energy, manufacturing and infrastructure.</p>
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

      <section className="standards section-pad" id="standards">
        <div className="shell standards-grid">
          <div><p className="eyebrow"><span /> How we work</p><h2>Quality is not a claim.<br />It is a system.</h2></div>
          <div className="standards-list">
            <article><span>01</span><div><h3>Disciplined processes</h3><p>Structured sourcing, refining, production and packing practices support consistent outcomes across the portfolio.</p></div></article>
            <article><span>02</span><div><h3>Long-term stewardship</h3><p>Investment decisions are shaped around resilience, responsible growth and the usefulness of what we build.</p></div></article>
            <article><span>03</span><div><h3>Progress with purpose</h3><p>Established operating experience is paired with modern brand thinking and the ambition to keep improving.</p></div></article>
          </div>
        </div>
      </section>
    </>
  );
}
