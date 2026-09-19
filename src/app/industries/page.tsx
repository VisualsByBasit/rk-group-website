import { companies } from "@/data/site";

export const metadata = { title: "Industries", description: "Explore RK Group operations across food, milling, edible oils, chemicals, energy, manufacturing and infrastructure.", alternates: { canonical: "/industries/" }, openGraph: { url: "/industries/", title: "RK Group Industries" } };

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero page-hero--industries"><div className="shell"><p className="kicker"><span></span> Our industries</p><h1>Diverse capability.<br /><em>One clear direction.</em></h1><p>RK Group’s operating companies span essential consumer and industrial sectors, united by an emphasis on durable value.</p></div></section>
      <section className="industry-list shell">
        <div className="industry-intro"><p className="section-tag">Operating portfolio</p><h2>Built across the value chain.</h2></div>
        {companies.map(([sector, ...names], index) => <article key={sector}><span className="industry-index">0{index + 1}</span><h3>{sector}</h3><ul>{names.map(name => <li key={name}>{name}</li>)}</ul><div className="industry-glyph" aria-hidden="true"></div></article>)}
      </section>
    </>
  );
}
