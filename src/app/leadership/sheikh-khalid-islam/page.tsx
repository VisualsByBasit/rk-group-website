import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

const path = "/leadership/sheikh-khalid-islam/";
const name = "Sheikh Khalid Islam";
const image = "/assets/leadership/sheikh-khalid-islam.webp";
export const metadata = pageMetadata("Sheikh Khalid Islam, Chairman", "Meet Sheikh Khalid Islam, Chairman of RK Group and CEO of KK Group, with a background in edible oil and banaspati ghee manufacturing in Pakistan.", path, image);

export default function ChairmanPage() {
  const url = `${siteUrl}${path}`;
  return <article className="detail-page shell">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Person", "@id": `${url}#person`, name, alternateName: "Khalid Islam Sheikh", url, image: `${siteUrl}${image}`, jobTitle: "Chairman", worksFor: { "@id": `${siteUrl}/#organization` } },
      { "@type": "ProfilePage", "@id": `${url}#webpage`, url, name, mainEntity: { "@id": `${url}#person` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name, item: url }] }
    ] }} />
    <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true"> / </span><span>{name}</span></nav>
    <p className="eyebrow">Chairman · RK Group & CEO · KK Group</p>
    <h1>{name}</h1>
    <p className="detail-intro">A Pakistani industrialist with deep roots in edible oil and banaspati ghee manufacturing, Sheikh Khalid Islam leads RK Group and KK Group. His work connects manufacturing in Mirpur, Azad Jammu & Kashmir, with industry representation and business leadership in Islamabad.</p>
    <div className="detail-portrait"><Image src={image} alt="Sheikh Khalid Islam, Chairman of RK Group" fill sizes="(max-width: 720px) 100vw, 560px" preload /></div>
    <div className="detail-copy">
                <h2>Manufacturing leadership</h2>
                <p>Also known professionally as Khalid Islam Sheikh, he serves as Chief Executive of Kashmir Oil & Ghee Mills (Pvt.) Ltd. and Mirpur Oil & Ghee Mills (Pvt.) Ltd. Both manufacturing businesses are based in Mirpur, AJK, with corporate operations in Islamabad.</p>
                <h2>Industry representation</h2>
                <p>Elected PVMA Vice Chairman for 2024–2026, he represents Pakistan’s edible-oil manufacturers.</p>
                <p>His companies are listed in the North Zone of the Pakistan Vanaspati Manufacturers Association, covering Islamabad, Khyber Pakhtunkhwa and AJK. His industry service also includes representation through the Federation of Pakistan Chambers of Commerce and Industry.</p>
                <h2>Supporting domestic production</h2>
                <p>He has advocated policies that support local manufacturers and encourage farmers to grow sunflower, canola and soybean. In public comments in 2024, he called for changes to the taxation of commercial imports and incentives for domestic oilseed cultivation to reduce dependence on imported seeds.</p>
                <h2>Supply-chain resilience</h2>
                <p>In May 2026, he joined PVMA leadership and industry representatives in discussions on raw-material availability, taxation, regulation, and the freight and transportation costs affecting ghee and cooking-oil producers.</p>
                <p className="biography-sources">Further reading: <a href="https://pvma.com.pk/wp-content/uploads/2022/05/PVMA-General-Body-List-.pdf">PVMA member directory</a>, <a href="https://www.dawn.com/news/1862447/vanaspati-manufacturers-body-elected">PVMA election</a>, <a href="https://tribune.com.pk/story/2456256/edible-oil-industry-advocates-tax-reform">industry advocacy</a> and <a href="https://www.brecorder.com/news/40422924/pvma-holds-meeting-challenges-confronting-ghee-cooking-oil-industry-discussed-in-detail">2026 industry discussions</a>.</p>
    </div>
    <Link className="brand-page-link" href="/#leadership">Meet the RK Group leadership ↗</Link>
  </article>;
}
