import Link from "next/link";
import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import { brands, values } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grain" aria-hidden="true"></div>
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="kicker"><span></span> Built in Pakistan. Built to endure.</p>
            <h1>Industry,<br /><em>with purpose.</em></h1>
            <p className="hero-intro">RK Group brings together essential industries and trusted consumer brands—guided by the belief that progress should be useful, responsible and made to last.</p>
            <div className="hero-actions"><Link className="button button--gold" href="/about">Discover RK Group <b>↗</b></Link><Link className="text-link" href="/brands">Explore our brands <span>→</span></Link></div>
          </div>
          <div className="hero-visual" aria-label="RK Group product portfolio">
            <div className="hero-ring"></div>
            <div className="hero-product hero-product--one"><Image src="/products/islamabad-macaroni.jpg" alt="Islamabad Macaroni packaging" fill priority sizes="280px" /></div>
            <div className="hero-product hero-product--two"><Image src="/products/dilpasand-banaspati.jpg" alt="Dilpasand Banaspati packaging" fill priority sizes="230px" /></div>
            <span className="hero-caption">Everyday products.<br />Enduring standards.</span>
          </div>
        </div>
        <div className="hero-scroll"><span></span>Scroll to explore</div>
      </section>

      <section className="intro-section shell">
        <p className="section-tag">RK / In brief</p>
        <div className="intro-grid">
          <h2>A group shaped around the needs of everyday life.</h2>
          <div><p>From food staples and consumer products to the industries that keep economies moving, RK Group operates across a focused portfolio of businesses.</p><Link className="line-link" href="/industries">View our industries <span>↗</span></Link></div>
        </div>
      </section>

      <section className="brand-feature">
        <div className="shell section-head"><div><p className="section-tag section-tag--light">Portfolio / Consumer brands</p><h2>Made for real life.<br /><em>Held to a higher standard.</em></h2></div><Link className="button button--outline" href="/brands">View all brands <b>↗</b></Link></div>
        <div className="brand-rail shell">
          {brands.slice(0, 3).map((brand, i) => <BrandCard brand={brand} featured={i === 1} key={brand.slug} />)}
        </div>
      </section>

      <section className="values-section shell">
        <p className="section-tag">The RK way</p>
        <div className="values-title"><h2>How we build<br />for the long term.</h2><p>Clear principles shape how we invest, operate and grow.</p></div>
        <div className="value-list">{values.map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="leadership-teaser">
        <div className="shell leadership-teaser-grid">
          <div className="leader-portrait"><Image src="/leadership/sheikh-khalid-islam.jpg" alt="Sheikh Khalid Islam" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
          <div className="leader-copy"><p className="section-tag section-tag--light">Leadership</p><blockquote>“Enduring businesses are built by respecting the trust placed in them—by customers, colleagues and communities.”</blockquote><h3>Sheikh Khalid Islam</h3><p>Chief Executive Officer, RK Group<br />Vice Chairman, PVMA</p><Link className="line-link line-link--light" href="/leadership">Meet our leadership <span>↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
