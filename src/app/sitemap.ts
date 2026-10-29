import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { brands } from "@/lib/brands";
import { leaders, leaderPath } from "@/lib/leaders";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified rather than reporting every rebuild as a content change.
  return ["/", ...brands.map(brand => `/brands/${brand.slug}/`), ...leaders.map(leaderPath)].map(path => ({ url: `${siteUrl}${path}` }));
}
