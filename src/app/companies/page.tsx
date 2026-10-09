import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import EditorialLink from "@/components/EditorialLink";
import { companies } from "@/lib/content";
export default function Companies() {
  return <>
    <PageIntro label="Companies" dark title={<>The businesses.<br /><em>Their fields of work.</em></>}><p>From food production and edible oils to manufacturing, energy and infrastructure, this directory introduces the companies in RK Group’s portfolio.</p><p>Looking for the products you recognise? Visit our <a className="inline-link" href="/brands/">consumer brands</a>.</p></PageIntro>
    <section className="section-pad company-directory" aria-labelledby="directory-title"><div className="shell"><div className="directory-heading"><h2 id="directory-title">Company directory</h2><span className="eyebrow">13 companies</span></div><div className="directory-grid">{companies.map(([name, sector, image], i) => <article className={`directory-entry logo-${image.replace(".webp", "")}`} key={name}><span className="index">{String(i + 1).padStart(2, "0")}</span><div className="company-logo"><Image src={`/assets/companies/${image}`} alt="" fill sizes="(max-width: 760px) 90px, 140px" /></div><div><p className="eyebrow">{sector}</p><h3>{name}</h3></div></article>)}</div></div></section>
    <section className="section-pad company-next"><div className="shell related"><div><p className="eyebrow">Consumer brands</p><h2>The names<br /><em>on everyday products.</em></h2></div><EditorialLink href="/brands/" button>Explore our brands</EditorialLink></div></section>
  </>;
}
