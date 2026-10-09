import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import EditorialLink from "@/components/EditorialLink";
import Standards from "@/components/Standards";
const milestones = [
  ["1953", "A beginning in trade", "The family business began in the sugar trade."],
  ["1965", "A broader trading business", "Sheikh Abdul Islam joined the business, expanding trading into wheat and ghee."],
  ["1989", "Into manufacturing", "ACP Oil Mills marked a move into ghee, cooking oil and soap manufacturing."],
  ["1996", "Flour milling", "Al-Khalid Flour Mills was established in district Attock."],
];
export default function About() {
  return <>
    <PageIntro label="About" title={<>Enterprise,<br /><em>across generations.</em></>}><p>RK Group brings together businesses and consumer brands in food, edible oils, manufacturing, energy and infrastructure.</p><p>A trading background. An industrial outlook. A place in everyday life.</p></PageIntro>
    <figure className="about-landscape shell"><div><Image src="/assets/hero/islamabad.webp" alt="Islamabad and the Margalla Hills" loading="eager" fill sizes="(max-width: 1440px) 95vw, 1320px" /></div><figcaption>Islamabad, Pakistan — a view of the city and its landscape.</figcaption></figure>
    <section className="section-pad"><div className="shell history-intro"><div><p className="eyebrow">The story behind the Group</p><h2>A trading beginning.<br /><em>An evolving enterprise.</em></h2></div><div><p>The family business began in 1953 with the sugar trade. In the decades that followed, its activities expanded into wheat, ghee and manufacturing.</p><p>Sheikh Abdul Islam, former Chairman of KK Group, joined the business in 1965. His chapter in this shared business history includes edible oils, flour milling, petroleum retail and bottled water.</p><EditorialLink href="/leadership/#former-chairman">Explore the heritage profile</EditorialLink></div></div>
    <ol className="shell timeline">{milestones.map(([year, title, copy]) => <li key={year}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>
    <section className="section-pad tone-dark"><div className="shell sector-layout"><div><p className="eyebrow">Our fields of work</p><h2>Connected to<br /><em>daily needs.</em></h2><EditorialLink href="/companies/">Explore our companies</EditorialLink></div><div className="sector-list">{[["Food & edible oils", "Cooking essentials, pasta, tea, savoury snacks, flour and food production."], ["Manufacturing", "Industrial solutions and consumer products."], ["Energy", "Renewable energy within the company portfolio."], ["Infrastructure", "Infrastructure within the company portfolio."]].map(([title, copy], i) => <article key={title}><span className="index">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <Standards />
  </>;
}
