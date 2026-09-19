import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/site";

export const metadata = { title: "Brands", description: "Explore RK Group consumer brands including Kashmir Tea, Deewan Banaspati, Islamabad Macaroni, ACP Banaspati Ghee and Dilpasand Banaspati.", alternates: { canonical: "/brands/" }, openGraph: { url: "/brands/", title: "RK Group Brands" } };

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero page-hero--brands"><div className="shell"><p className="kicker"><span></span> Consumer portfolio</p><h1>Brands made for<br /><em>everyday moments.</em></h1><p>From the first cup of tea to the family table, our products are shaped around familiarity, consistency and care.</p></div></section>
      <section className="brands-grid shell">{brands.map((brand, i) => <BrandCard brand={brand} featured={i === 0 || i === 4} key={brand.slug} />)}</section>
      <section className="quality-band"><div className="shell"><p className="section-tag section-tag--light">Our standard</p><h2>Good products begin long before they reach the shelf.</h2><p>We focus on disciplined sourcing, controlled processes and consistency across every stage of production.</p></div></section>
    </>
  );
}
