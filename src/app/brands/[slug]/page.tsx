import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands } from "@/lib/brands";
import { siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { LANDLINE } from "@/lib/contact";
import { collectionLine, orderProducts, orderSummary, paymentLine, ratesLine } from "@/lib/orders";
import JsonLd from "@/components/JsonLd";
import PackagingSection from "@/components/PackagingSection";
import SocialIcon from "@/components/SocialIcon";
import { brandPackaging } from "@/lib/packaging";
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

// Brand fields with light text: their buttons and rules switch to the light treatment.
const darkFields = new Set(["brand-islamabad", "brand-kashmir"]);

export default async function BrandPage({ params }: Props) {
  const brand = await getBrand(params);
  const url = `${siteUrl}/brands/${brand.slug}/`;
  const instagram = brandInstagram[brand.slug];
  const product = orderProducts.find(item => item.id === brand.orderId);
  const orderLink = product && <a className="brand-cta" href={`/?brand=${product.id}#order-form`}>Place an Order <span aria-hidden="true">↗</span><span className="visually-hidden">: {brand.fullName}</span></a>;
  const number = String(brands.indexOf(brand) + 1).padStart(2, "0");
  const others = brands.filter(other => other.slug !== brand.slug);
  const tone = darkFields.has(brand.className) ? " brand-hero--light-text" : "";

  return <article className="brand-page">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Brand", "@id": `${url}#brand`, name: brand.fullName, url, image: `${siteUrl}${brand.lineup}`, description: brand.copy, ...(instagram && { sameAs: [instagram] }) },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: brand.fullName, about: { "@id": `${url}#brand` }, publisher: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Brands", item: `${siteUrl}/#brands` }, { "@type": "ListItem", position: 3, name: brand.fullName, item: url }] },
    ] }} />

    <header className={`brand-hero ${brand.className}${tone}`}>
      <div className="brand-hero-copy">
        <nav className="brand-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true">/</span><Link href="/#brands">Brands</Link><span aria-hidden="true">/</span><span aria-current="page">{brand.fullName}</span></nav>
        <div className="brand-meta"><span>{number}</span><p>{brand.category} · Pakistan</p></div>
        <h1>{brand.fullName}</h1>
        <p className="brand-hero-intro">{brand.copy}</p>
        {(product || instagram) && <div className="brand-hero-actions">
          {product && <div className="brand-hero-cta">{orderLink}<p>{orderSummary(product)}</p></div>}
          {instagram && <a className="brand-hero-social" href={instagram} target="_blank" rel="noopener noreferrer"><SocialIcon network="Instagram" /> Follow on Instagram<span className="visually-hidden">: {brand.fullName} (opens in a new tab)</span></a>}
        </div>}
      </div>
      <div className="brand-hero-visual"><Image src={brand.lineup} alt={`${brand.fullName} product range and packaging`} fill sizes="(max-width: 900px) 100vw, 58vw" preload /></div>
    </header>

    {brand.claims && <section className={`brand-claims-band ${brand.className}${tone}`} aria-label={`What goes into ${brand.fullName}`}>
      <ul className="shell">{brand.claims.map(claim => <li key={claim}>{claim}</li>)}</ul>
    </section>}

    <section className="shell brand-range" aria-labelledby="range-title">
      <div className="brand-range-intro">
        <p className="eyebrow"><span /> The range</p>
        <h2 id="range-title">{brand.sizes ? "Formats and pack sizes" : "Formats"}</h2>
        <p>{brand.fullName} is part of the RK Group of Industries brand family in Pakistan. The range includes the following formats.</p>
      </div>
      <div className="brand-range-detail">
        <ul className={`brand-formats${brand.sizes ? "" : " brand-formats--large"}`} aria-label={`${brand.fullName} formats`}>{brand.formats.map((format, index) => <li key={format}><span>{String(index + 1).padStart(2, "0")}</span>{format}</li>)}</ul>
        {brand.sizes && <dl className="brand-specs">
          {brand.sizes.map(size => <div key={size.label}><dt>{size.label}</dt><dd>{size.value.split(", ").map(value => <span key={value}>{value}</span>)}</dd></div>)}
        </dl>}
      </div>
    </section>

    {brandPackaging[brand.slug] && <PackagingSection groups={brandPackaging[brand.slug]} />}

    {product && <section className="brand-order-band" aria-labelledby="order-title">
      <div className="shell brand-order-band-inner">
        <div><p className="eyebrow light"><span /> Orders</p><h2 id="order-title">Order {brand.fullName}</h2></div>
        <div>
          <p>{orderSummary(product)} {ratesLine}</p>
          <p>{paymentLine} {collectionLine}</p>
          <div className="brand-order-actions">{orderLink}<a href={`tel:${LANDLINE.tel}`}>Call {LANDLINE.display}</a></div>
        </div>
      </div>
    </section>}

    <section className="brand-others" aria-labelledby="others-title">
      <div className="shell">
        <div className="profile-others-head">
          <div><p className="eyebrow"><span /> Brand family</p><h2 id="others-title">More of our brands</h2></div>
          <Link className="brand-page-link" href="/#story">Explore the Group’s history ↗</Link>
        </div>
        <ul className="brand-others-grid">
          {others.map(other => <li key={other.slug}>
            <Link href={`/brands/${other.slug}/`}>
              <span className={`brand-others-visual ${other.className}`}><Image src={other.lineup} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /></span>
              <span className="profile-others-label">{other.category}</span>
              <span className="profile-others-name">{other.fullName}</span>
            </Link>
          </li>)}
        </ul>
      </div>
    </section>
  </article>;
}
