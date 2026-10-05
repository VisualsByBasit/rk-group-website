// Set NEXT_PUBLIC_SITE_URL when moving to a custom production domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofindustries.vercel.app").replace(/\/$/, "");
