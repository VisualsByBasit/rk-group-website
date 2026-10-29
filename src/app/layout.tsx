import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brands } from "@/lib/brands";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RK Group of Industries | Food & Edible Oils in Pakistan", template: "%s | RK Group" },
  description: "Explore RK Group of Industries in Pakistan: ACP Banaspati Ghee, Islamabad Macaroni, tea, snacks and a portfolio spanning manufacturing, energy and infrastructure.",
  applicationName: "RK Group",
  authors: [{ name: "RK Group" }],
  creator: "RK Group",
  publisher: "RK Group",
  keywords: ["RK Group", "RK Group Pakistan", "Pakistan industrial group", "Kashmir Tea", "Deewan Banaspati", "Islamabad Macaroni", "ACP Banaspati Ghee", "Dilpasand Banaspati", "Islamabad Nimco", "Gulberg Banaspati Ghee"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: "RK Group",
    title: "RK Group of Industries | Food & Edible Oils in Pakistan",
    description: "Generations of enterprise across food, manufacturing, energy and infrastructure.",
    images: [{ url: "/assets/hero/islamabad.webp", width: 1792, height: 1024, alt: "RK Group in Islamabad, Pakistan" }],
  },
  twitter: { card: "summary_large_image", title: "RK Group of Industries | Food & Edible Oils in Pakistan", description: "Generations of enterprise across food, manufacturing, energy and infrastructure.", images: ["/assets/hero/islamabad.webp"] },
  category: "industry",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "RK Group of Industries",
    alternateName: "RK Group",
    url: siteUrl,
    logo: `${siteUrl}/assets/rk-group-logo.png`,
    description: "A diversified Pakistani industrial group spanning food, edible oils, energy, chemicals, manufacturing and infrastructure.",
    employee: [
      { "@type": "Person", "@id": `${siteUrl}/leadership/sheikh-khalid-islam/#person`, name: "Sheikh Khalid Islam", jobTitle: "Chairman", url: `${siteUrl}/leadership/sheikh-khalid-islam/` },
      { "@type": "Person", name: "Sheikh Saim Khalid", jobTitle: "Director" },
      { "@type": "Person", name: "Sheikh Atif Islam", jobTitle: "Director" },
      { "@type": "Person", name: "Raja Abubakar Farooq", jobTitle: "Director" },
      { "@type": "Person", name: "Abdul Haseeb", jobTitle: "Chief Financial Officer (CFO)" },
    ],
    brand: brands.map(brand => ({ "@type": "Brand", "@id": `${siteUrl}/brands/${brand.slug}/#brand`, name: brand.fullName, url: `${siteUrl}/brands/${brand.slug}/` })),
  };
  return <html lang="en"><body id="top"><a className="skip-link" href="#main-content">Skip to main content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Header /><main id="main-content">{children}</main><Footer /><WhatsAppButton /></body></html>;
}
