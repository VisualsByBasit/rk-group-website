import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands } from "@/lib/brands";
import { siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import SocialIcon from "@/components/SocialIcon";
import { brandInstagram } from "@/lib/social";

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
  const instagram = brandInstagram[brand.slug];
  return <article className="detail-page shell">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Brand", "@id": `${url}#brand`, name: brand.fullName, url, image: `${siteUrl}${brand.lineup}`, description: brand.copy, ...(instagram && { sameAs: [instagram] }) },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: brand.fullName, about: { "@id": `${url}#brand` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: brand.fullName, item: url }] }
    ] }} />
    <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true"> / </span><span>{brand.fullName}</span></nav>
    <p className="eyebrow">{brand.category} · Pakistan</p>
    <h1>{brand.fullName}</h1>
    <p className="detail-intro">{brand.copy}</p>
    {brand.claims && <ul className="detail-claims" aria-label="Product claims">{brand.claims.map(claim => <li key={claim}>{claim}</li>)}</ul>}
    {instagram && <a className="detail-social" href={instagram} target="_blank" rel="noopener noreferrer"><SocialIcon network="Instagram" /> Follow on Instagram<span className="visually-hidden">: {brand.fullName} (opens in a new tab)</span></a>}
    <div className="detail-product"><Image src={brand.lineup} alt={`${brand.fullName} product range and packaging`} fill sizes="(max-width: 820px) 100vw, 1100px" preload /></div>
    <section className="detail-copy"><h2>{brand.fullName} range</h2><p>{brand.fullName} is part of the RK Group of Industries brand family in Pakistan. The range shown above includes the following formats:</p><ul>{brand.formats.map(format => <li key={format}>{format}</li>)}</ul></section>
    {brand.sizes && <section className="detail-copy"><h2>Pack sizes</h2><dl className="size-list size-list--detail">{brand.sizes.map(size => <div key={size.label}><dt>{size.label}</dt><dd>{size.value}</dd></div>)}</dl></section>}
    {brand.orderId && <section className="detail-copy"><h2>Orders</h2><p>Order {brand.fullName} direct from RK Group. See what you can order and how it works, and call us to place an enquiry.</p><Link href="/#order">Orders and enquiries</Link></section>}
    <section className="detail-copy"><h2>Part of RK Group of Industries</h2><p>RK Group brings together food, edible oils, manufacturing, energy and infrastructure businesses. Its roots reach back to a family trading enterprise established in 1953.</p><Link href="/#story">Explore the Group’s history</Link></section>
    <nav className="detail-related" aria-label="Other RK Group brands"><h2>Explore our other brands</h2>{brands.filter(other => other.slug !== brand.slug).map(other => <Link key={other.slug} href={`/brands/${other.slug}/`}>{other.fullName} ↗</Link>)}</nav>
  </article>;
}
