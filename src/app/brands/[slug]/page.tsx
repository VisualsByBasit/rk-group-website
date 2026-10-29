import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands } from "@/lib/brands";
import { siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return brands.map(({ slug }) => ({ slug })); }
async function getBrand(params: Props["params"]) {
  const { slug } = await params;
  const brand = brands.find(brand => brand.slug === slug);
  if (!brand) notFound();
  return brand;
}
export async function generateMetadata({ params }: Props) {
  const brand = await getBrand(params);
  return pageMetadata(`${brand.fullName} in Pakistan`, `Explore ${brand.fullName}, part of RK Group of Industries in Pakistan. Discover its ${brand.category.toLowerCase()} range and product formats.`, `/brands/${brand.slug}/`, brand.lineup);
}
export default async function BrandPage({ params }: Props) {
  const brand = await getBrand(params);
  const url = `${siteUrl}/brands/${brand.slug}/`;
  return <article className="detail-page shell">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Brand", "@id": `${url}#brand`, name: brand.fullName, url, image: `${siteUrl}${brand.lineup}`, description: brand.copy },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: brand.fullName, about: { "@id": `${url}#brand` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: brand.fullName, item: url }] }
    ] }} />
    <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true"> / </span><span>{brand.fullName}</span></nav>
    <p className="eyebrow">{brand.category} · Pakistan</p>
    <h1>{brand.fullName}</h1>
    <p className="detail-intro">{brand.copy}</p>
    <div className="detail-product"><Image src={brand.lineup} alt={`${brand.fullName} product range and packaging`} fill sizes="(max-width: 820px) 100vw, 1100px" preload /></div>
    <section className="detail-copy"><h2>{brand.fullName} range</h2><p>{brand.fullName} is part of the RK Group of Industries brand family in Pakistan. The range shown above includes the following formats:</p><ul>{brand.formats.map(format => <li key={format}>{format}</li>)}</ul></section>
    <section className="detail-copy"><h2>Part of RK Group of Industries</h2><p>RK Group brings together food, edible oils, manufacturing, energy and infrastructure businesses. Its roots reach back to a family trading enterprise established in 1953.</p><Link href="/#story">Explore the Group’s history</Link></section>
    <nav className="detail-related" aria-label="Other RK Group brands"><h2>Explore our other brands</h2>{brands.filter(other => other.slug !== brand.slug).map(other => <Link key={other.slug} href={`/brands/${other.slug}/`}>{other.fullName} ↗</Link>)}</nav>
  </article>;
}
