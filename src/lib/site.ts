// Keep search signals on the primary domain, including preview builds.
// Do not let an obsolete Vercel environment variable override the canonical origin.
export const siteUrl = "https://rkgroupofindustries.com";

// schema.org ImageObject for primaryImageOfPage: the large original shown on the page, not a share crop.
export const pageImage = (path: string, [width, height]: readonly [number, number], caption: string) => ({ "@type": "ImageObject", url: `${siteUrl}${path}`, width, height, caption });
export const heroImage = pageImage("/assets/hero/islamabad.webp", [1672, 941], "Islamabad at sunset, with the Faisal Mosque and the Margalla Hills");
