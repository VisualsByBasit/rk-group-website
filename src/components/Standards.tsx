const principles = [
  ["Care in the process", "From sourcing to production and packing, attention at each stage supports consistent outcomes."],
  ["A long-term view", "Resilience, responsible growth and the usefulness of what we build guide our approach."],
  ["Room to improve", "Operating experience and fresh thinking come together in the continued development of our businesses and brands."],
];
export default function Standards() {
  return <section className="principles section-pad" id="standards" aria-labelledby="standards-title"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">Operating principles</p><h2 id="standards-title">How we approach<br /><em>our work.</em></h2></div><p>Care in what we make.<br />Thought in how we grow.</p></div>
    <div className="principles-grid">{principles.map(([title, copy], i) => <article key={title}><span className="index">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </div></section>;
}
