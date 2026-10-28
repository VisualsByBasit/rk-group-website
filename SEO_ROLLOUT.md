# RK Group SEO rollout — 28 October 2026

## Verified live findings

- HTTPS homepage returns HTTP 200.
- HTTP, www and rkgroupofindustries.vercel.app return 308 redirects to https://rkgroupofindustries.com/.
- The live HTML canonical, Open Graph URLs, Organization URLs, robots sitemap reference and sitemap entry incorrectly use the Vercel hostname.
- The live site has one sitemap URL. Brands and leadership are homepage fragments, with no dedicated search landing pages.
- Indexing is allowed. HTML already contains readable content and Organization structured data.
- Search Console ownership, Google-selected canonical, index coverage, search performance and Core Web Vitals have not been verified. Absence of an HTML verification tag does not establish absence of DNS verification.

## Implementation

- Fix the production origin centrally, ignoring obsolete NEXT_PUBLIC_SITE_URL settings.
- Give the homepage a Pakistan/food/edible-oils title and clearer description.
- Export seven brand pages with unique metadata, self-canonical URLs, product images, formats, related brand links, Brand/WebPage entities and breadcrumbs.
- Export Sheikh Khalid Islam's profile using the existing published biography and source links, with Person/ProfilePage entities.
- Expand the sitemap to nine canonical URLs; omit lastmod rather than setting it to each build time.
- Link the homepage to the new pages and make global navigation work from subpages.
- Connect Organization, Brand and Person entities using stable IDs. Remove the founder assertion from JSON-LD because that attribution is not supported by the current visible homepage biography.
- Keep the site free of newly introduced tracking and preserve existing claims rather than invent certifications, reviews, prices or contact details.

## Release and Google Search Console

1. Review the pull request and Vercel preview, then merge/deploy through the existing GitHub → Vercel pipeline.
2. Recheck the live HTML and all nine sitemap URLs after deployment. Confirm the three existing redirect variants still preserve paths to the primary domain.
3. Open the Search Console domain property for rkgroupofindustries.com. If it is not already verified, add the exact Google-provided TXT record in Hostinger DNS. Alternatively, use URL-prefix verification and the existing NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION setting, then rebuild.
4. Submit https://rkgroupofindustries.com/sitemap.xml.
5. Inspect the homepage, ACP page, Islamabad Macaroni page and chairman page. Check live fetch/indexability and request indexing where appropriate. Monitor the Google-selected canonical after recrawling.
6. Validate structured data with Schema.org Validator and supported types with Google's Rich Results Test. Brand and Organization markup do not guarantee a rich result.

## Next content and measurement work

- Measure initial impressions, clicks, CTR, average position and indexed pages in Search Console; compare subsequent 28-day periods. Rankings and indexing are not guaranteed.
- Prioritize brand queries (RK Group of Industries, ACP Banaspati Ghee, Islamabad Macaroni, Dilpasand Banaspati, Deewan/Dewan Banaspati, Kashmir Tea, Islamabad Nimco, Gulberg Banaspati Ghee) and Sheikh Khalid Islam/Khalid Islam Sheikh. These are relevance targets, not researched search-volume claims.
- Deepen brand pages with owner-confirmed ingredients, exact pack sizes, preparation/storage information and distributor enquiry routes. Existing pages intentionally use only published material; avoid repetitive city pages and speculative health or quality claims.
- Add an approved business address, public phone, enquiry contact and official social profile URLs before publishing contact/location schema or updating business listings.
- Benchmark mobile PageSpeed and Core Web Vitals separately; this change does not claim measured speed improvements. The static export currently uses unoptimized Next Image delivery with existing WebP assets.
- Reassess the hero carousel's changing heading and image loading after performance measurements. Preserve current visual behavior in this release.

## Validation

Run `npm run lint`, `npm run build`, then `python scripts/check-seo.py`.
The export check covers all nine sitemap URLs, exact canonical matches, descriptions, indexability, JSON-LD parsing, one H1 per page, unique IDs, internal anchor targets and robots sitemap discovery.

References: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap.
