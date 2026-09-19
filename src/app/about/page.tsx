import Link from "next/link";
import { values } from "@/data/site";

export const metadata = { title: "About", description: "Discover RK Group's long-term approach to building essential industries and trusted consumer businesses in Pakistan.", alternates: { canonical: "/about/" }, openGraph: { url: "/about/", title: "About RK Group" } };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about"><div className="shell"><p className="kicker"><span></span> About RK Group</p><h1>Useful enterprise.<br /><em>Lasting value.</em></h1><p>RK Group is a diversified Pakistani industrial group operating across food, edible oils, energy, chemicals, manufacturing and infrastructure.</p></div></section>
      <section className="story shell"><p className="section-tag">Our perspective</p><div className="story-grid"><h2>Progress begins with the things people rely on every day.</h2><div><p>Our portfolio connects daily essentials with the industrial systems behind them. We develop businesses with patient ambition, practical discipline and a clear view of the value they should create.</p><p>Across every operation, the goal is the same: earn trust through consistent standards and build capability that endures.</p></div></div></section>
      <section className="principles"><div className="shell"><p className="section-tag section-tag--light">What guides us</p><div className="value-list value-list--dark">{values.map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
      <section className="next-panel shell"><p className="section-tag">Our portfolio</p><h2>Explore the businesses and brands that make up RK Group.</h2><div><Link className="button button--ink" href="/industries">Our industries <b>↗</b></Link><Link className="line-link" href="/brands">Consumer brands <span>→</span></Link></div></section>
    </>
  );
}
