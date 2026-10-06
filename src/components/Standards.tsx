import styles from "./Standards.module.css";

const principles = [
  { number: "01", label: "The craft", title: "Disciplined processes", note: "Care in every step.", copy: "Structured sourcing, refining, production and packing practices support consistent outcomes across the portfolio.", detail: "From the choice of inputs to the finished product, each stage is part of the same commitment to consistent quality.", symbol: "craft" },
  { number: "02", label: "The legacy", title: "Long-term stewardship", note: "Built beyond today.", copy: "Investment decisions are shaped around resilience, responsible growth and the usefulness of what we build.", detail: "Looking beyond the immediate result means considering how today’s decisions can serve the business and the people who depend on it over time.", symbol: "legacy" },
  { number: "03", label: "The ambition", title: "Progress with purpose", note: "Always moving forward.", copy: "Established operating experience is paired with modern brand thinking and the ambition to keep improving.", detail: "Progress brings experience and fresh thinking together, with a focus on improving how the Group’s businesses and brands meet everyday needs.", symbol: "progress" },
];

function Emblem({ kind }: { kind: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "craft" ? <><path d="m24 6 17 18-17 18L7 24 24 6Z" /><path d="m15 24 6 6 13-13M24 6v7M7 24h6M35 24h6M24 35v7" /></> : kind === "legacy" ? <><path d="m8 15 8 8 8-14 8 14 8-8-4 22H12L8 15ZM14 42h20M17 31h14" /><circle cx="8" cy="12" r="2" /><circle cx="24" cy="6" r="2" /><circle cx="40" cy="12" r="2" /></> : <><path d="m24 5 5 14 14 5-14 5-5 14-5-14-14-5 14-5 5-14ZM35 6v8M31 10h8" /></>}
  </svg>;
}

export default function Standards() {
  return (
    <section className={`${styles.section} section-pad`} id="standards" aria-labelledby="standards-title">
      <div className="shell">
        <header className={styles.heading}>
          <div className={styles.seal}><Emblem kind="legacy" /></div>
          <p className={styles.eyebrow}>How we work</p>
          <h2 id="standards-title">Quality is not a claim.<br /><em>It is a system.</em></h2>
          <p className={styles.intro}>Three principles. A shared standard.<br />Care for what we make, and purpose in how we grow.</p>
        </header>
        <div className={styles.cards}>
          {principles.map((principle) => (
            <article className={styles.card} key={principle.number}>
              <div className={styles.cardTop}><span>{principle.number} / {principle.label}</span><Emblem kind={principle.symbol} /></div>
              <p className={styles.note}>{principle.note}</p>
              <h3>{principle.title}</h3>
              <p className={styles.copy}>{principle.copy}</p>
              <details className={styles.details}>
                <summary>In practice <span aria-hidden="true">+</span></summary>
                <p>{principle.detail}</p>
              </details>
            </article>
          ))}
        </div>
        <p className={styles.signature}><span aria-hidden="true">✦</span> Rooted in experience. Refined for tomorrow. <span aria-hidden="true">✦</span></p>
      </div>
    </section>
  );
}
