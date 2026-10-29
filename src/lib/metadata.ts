import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string, image: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "RK Group of Industries", locale: "en_PK", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
