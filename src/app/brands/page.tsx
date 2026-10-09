import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import EditorialLink from "@/components/EditorialLink";
import { brands } from "@/lib/content";
export default function Brands() {
  return <>
    <PageIntro label="Brands" title={<>Names you know.<br /><em>Products for daily life.</em></>}><p>Our brands are the names on products for cooking, sharing and everyday meals. Explore seven ranges across edible oils, pasta, tea and savoury snacks.</p><EditorialLink href="/companies/">Looking for our companies?</EditorialLink></PageIntro>
    <nav className="shell brand-jump" aria-label="Jump to a brand">{brands.map(brand => <a key={brand.name} href={`#${brand.className}`}>{brand.name}<span aria-hidden="true">↓</span></a>)}</nav>
    <div className="brand-stories">{brands.map((brand, i) => <section className={`brand-story ${brand.className}`} id={brand.className} aria-labelledby={`${brand.className}-title`} key={brand.name}><div className="shell brand-story-grid">
      <div className="brand-story-copy"><p className="eyebrow">0{i + 1} / {brand.category}</p><h2 id={`${brand.className}-title`}>{brand.name}</h2><p>{brand.copy}</p><div className="brand-formats"><span className="eyebrow">{brand.formatsLabel}</span><ul>{brand.formats.map(format => <li key={format}>{format}</li>)}</ul></div>{brand.instagram && <a className="editorial-link" href={brand.instagram}>Follow {brand.name} <span aria-hidden="true">↗</span></a>}</div>
      <figure className="brand-presentation"><div><Image src={brand.lineup} loading={i === 0 ? "eager" : "lazy"} alt={`${brand.name} product range and packaging`} fill sizes="(max-width: 1000px) 90vw, 65vw" /></div><figcaption><span>{brand.name} · Range presentation</span><a href={brand.lineup} target="_blank" rel="noopener noreferrer" aria-label={`View larger ${brand.name} image (opens in a new tab)`}>View larger image <span aria-hidden="true">↗</span></a></figcaption></figure>
    </div></section>)}</div>
    <section className="section-pad"><div className="shell related"><div><p className="eyebrow">The wider Group</p><h2>Explore the businesses<br /><em>across our portfolio.</em></h2></div><EditorialLink href="/companies/" button>Our companies</EditorialLink></div></section>
  </>;
}
