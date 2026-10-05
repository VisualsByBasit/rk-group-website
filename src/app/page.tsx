import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Leadership from "@/components/Leadership";

const brands = [
  { name: "ACP", category: "Banaspati ghee", copy: "The flagship name at the heart of RK Group's edible-oils story, built around dependable quality for everyday kitchens.", lineup: "/assets/brand-lineups/acp-no-tub.webp", formats: ["Metal tins", "Retail pouches", "Trade cartons"], className: "brand-acp" },
  { name: "Islamabad Macaroni", category: "Premium pasta", copy: "A contemporary pasta range made for generous family meals, with six distinctive shapes and a proudly local identity.", lineup: "/assets/brand-lineups/islamabad-macaroni-v2.webp", formats: ["Elbows", "Penne", "Fusilli", "Shells", "Farfalle", "Vermicelli"], className: "brand-islamabad" },
  { name: "Dilpasand", category: "Banaspati", copy: "A familiar kitchen name created for full flavour, consistent results and the recipes families return to.", lineup: "/assets/brand-lineups/dilpasand-no-tub.webp", formats: ["Metal tins", "Retail pouches", "Trade cartons"], className: "brand-dilpasand" },
  { name: "Dewan", category: "Banaspati ghee", copy: "A trusted pantry essential with a distinctive identity and a long-standing place in everyday cooking.", lineup: "/assets/brand-lineups/deewan-no-tub.webp", formats: ["Metal tins", "Retail pouches", "Trade cartons"], className: "brand-deewan" },
  { name: "Kashmir Tea", category: "Premium tea", copy: "A rich, carefully presented blend made for the conversations and rituals that bring people together.", lineup: "/assets/brand-lineups/kashmir-tea.webp", formats: ["Loose-leaf tins", "Tea cartons", "Sealed pouches", "Gift caddies"], className: "brand-kashmir" },
  { name: "Islamabad Nimco", category: "Traditional savoury snacks", copy: "From tea-time conversations to family gatherings, Islamabad Nimco brings a familiar crunch to the moments we share. Explore Classic Mix, Special Mix and the bold flavours of Chatpata Mix.", lineup: "/assets/brand-lineups/islamabad-nimco.webp", formats: ["Classic Mix", "Special Mix", "Chatpata Mix"], className: "brand-nimco" },
  { name: "Gulberg", category: "Banaspati ghee", copy: "Gulberg Banaspati Ghee brings a familiar kitchen essential to everyday family cooking. Its distinctive yellow-and-green packaging is available in retail pouches and trade cartons from KKR Oil & Ghee Mills.", lineup: "/assets/brand-lineups/gulberg.webp", formats: ["900g pouches", "Trade cartons"], className: "brand-gulberg" },
];

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
                <h3>{brand.name}</h3>
                <p className="brand-description">{brand.copy}</p>
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
