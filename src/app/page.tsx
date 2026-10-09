import Image from "next/image";
import Link from "next/link";
import EditorialLink from "@/components/EditorialLink";
import Standards from "@/components/Standards";
import { brands, companies } from "@/lib/content";

export default function Home() {
  return <>
    <section className="corporate-hero tone-dark" id="top" aria-labelledby="hero-title">
      <div className="hero-landscape"><Image src="/assets/hero/islamabad.webp" alt="Islamabad cityscape with the Margalla Hills beyond" fill preload sizes="(max-width: 760px) 100vw, 58vw" /><span className="landscape-caption">Islamabad, Pakistan</span></div>
      <div className="shell hero-content"><p className="eyebrow">RK Group · Pakistan</p><h1 id="hero-title">A group of businesses.<br /><em>Part of everyday life.</em></h1><p className="hero-description">Food and edible oils. Manufacturing, energy and infrastructure. Explore the consumer brands and businesses of RK Group.</p><div className="hero-actions"><EditorialLink href="/about/" button>Discover RK Group</EditorialLink><EditorialLink href="/brands/">Explore our brands</EditorialLink></div><a className="scroll-link" href="#overview">Explore the Group <span aria-hidden="true">↓</span></a></div>
    </section>
    <section className="section-pad overview" id="overview"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">An introduction</p><h2>Different businesses.<br /><em>A place in daily life.</em></h2></div><p>RK Group brings together consumer brands and businesses across food, edible oils, manufacturing, energy and infrastructure.</p></div>
      <div className="pathways"><Link href="/brands/"><span className="index">01 / Consumer brands</span><h3>The names on<br />your everyday products.</h3><p>From cooking essentials and pasta to tea and savoury snacks.</p><span className="pathway-link">Explore brands <span aria-hidden="true">↗</span></span></Link><Link href="/companies/"><span className="index">02 / Our companies</span><h3>The businesses across<br />our fields of work.</h3><p>Meet the companies in food production, industry, energy and infrastructure.</p><span className="pathway-link">Explore companies <span aria-hidden="true">↗</span></span></Link></div>
    </div></section>
    <section className="section-pad featured-brands" id="brands"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">Our brands</p><h2>In homes.<br /><em>At the table.</em></h2></div><EditorialLink href="/brands/">Discover all seven brands</EditorialLink></div>
      <div className="brand-preview-grid">{[brands[1], brands[0], brands[4]].map((brand, i) => <Link className={`brand-preview ${brand.className}`} href={`/brands/#${brand.className}`} key={brand.name}><span className="index">0{i + 1} / {brand.category}</span><div className="brand-preview-image"><Image src={brand.lineup} alt={`${brand.name} product range`} fill sizes={i === 0 ? "(max-width: 760px) 90vw, 55vw" : "(max-width: 760px) 90vw, 30vw"} /></div><div className="brand-preview-title"><h3>{brand.name}</h3><span aria-hidden="true">↗</span></div></Link>)}</div>
      <nav className="brand-index" aria-label="All brands">{brands.map(brand => <Link id={brand.className} key={brand.name} href={`/brands/#${brand.className}`}>{brand.name}<span aria-hidden="true">↗</span></Link>)}</nav>
    </div></section>
    <section className="section-pad story-preview" id="story"><div className="shell story-grid"><div><p className="eyebrow">Our story</p><h2>From trade<br /><em>to industry.</em></h2><EditorialLink href="/about/">Read our story</EditorialLink></div><div><span className="history-year">1953</span><p>Our story begins in the sugar trade. Across generations, that trading background developed into a wider involvement in food, manufacturing and other essential sectors.</p></div></div></section>
    <section className="leadership-preview tone-dark" id="leadership"><div className="shell leadership-preview-grid"><div className="preview-portrait"><Image src="/assets/leadership/sheikh-khalid-islam.webp" alt="Sheikh Khalid Islam" width={1100} height={1332} sizes="(max-width: 760px) 90vw, 35vw" /></div><div className="preview-person-copy"><p className="eyebrow">Leadership</p><h2>The people<br /><em>behind the Group.</em></h2><p>Meet the people whose experience connects RK Group’s businesses and brands.</p><div className="person-caption"><strong>Sheikh Khalid Islam</strong><span>Chairman, RK Group · CEO, KK Group</span></div><EditorialLink href="/leadership/">Meet our leadership</EditorialLink></div></div></section>
    <section className="section-pad company-preview" id="portfolio"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Our companies</p><h2>A wider view<br /><em>of business.</em></h2></div><div><p>Explore the 13 companies presented in our directory, and the fields in which they work.</p><EditorialLink href="/companies/">View the company directory</EditorialLink></div></div><div className="company-preview-grid">{[companies[1], companies[9], companies[8], companies[12]].map(([name, sector, image]) => <article key={name}><div className="company-logo"><Image src={`/assets/companies/${image}`} alt="" fill sizes="180px" /></div><h3>{name}</h3><p>{sector}</p></article>)}</div></div></section>
    <Standards />
  </>;
}
