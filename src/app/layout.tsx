import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rkgroupindustries.com"),
  title: { default: "RK Group — Industry with Purpose", template: "%s — RK Group" },
  description: "RK Group is a diversified Pakistani industrial group spanning food, edible oils, energy, chemicals, manufacturing and infrastructure.",
  applicationName: "RK Group",
  authors: [{ name: "RK Group" }],
  creator: "RK Group",
  publisher: "RK Group",
  keywords: ["RK Group", "RK Group Pakistan", "Pakistan industrial group", "Kashmir Tea", "Deewan Banaspati", "Islamabad Macaroni", "ACP Banaspati Ghee", "Dilpasand Banaspati"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: "RK Group",
    title: "RK Group — Industry with Purpose",
    description: "A diversified Pakistani industrial group building trusted brands and essential industries.",
    images: [{ url: "/rk-group-logo.jpg", width: 1280, height: 1024, alt: "RK Group" }],
  },
  twitter: { card: "summary_large_image", title: "RK Group — Industry with Purpose", description: "A diversified Pakistani industrial group building trusted brands and essential industries.", images: ["/rk-group-logo.jpg"] },
  category: "industry",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/rk-group-logo.jpg", apple: "/rk-group-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RK Group",
    alternateName: "RK Group of Industries",
    url: "https://rkgroupindustries.com",
    logo: "https://rkgroupindustries.com/rk-group-logo.jpg",
    description: "A diversified Pakistani industrial group spanning food, edible oils, energy, chemicals, manufacturing and infrastructure.",
    employee: { "@type": "Person", name: "Sheikh Khalid Islam", jobTitle: "Chief Executive Officer" },
    brand: ["Kashmir Tea", "Deewan Banaspati", "Islamabad Macaroni", "ACP Banaspati Ghee", "Dilpasand Banaspati"].map(name => ({ "@type": "Brand", name })),
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Header /><main>{children}</main><Footer /></body></html>;
}
