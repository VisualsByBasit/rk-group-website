# RK Group website - handoff for Claude Code

Read this whole file before doing anything. It carries the decisions made in an earlier Claude chat on 28 October 2026. Ask Abdulbasit before deviating from it.

## Deadline

The finished site must be live by **29 October 2026**. Scope is fixed to the tasks below. No redesign.

## Working rules (from Abdulbasit)

- **No em dashes anywhere**: code comments, copy, commit messages, replies. Use plain hyphens or commas. En dashes in number ranges that already exist on the site (e.g. 2024–2026) can stay.
- **Before doing anything, say what you are about to do** and wait for a go-ahead on anything that changes `main` or production.
- After each update, give a short **"What's done"** note with a one-line explanation of how it was implemented.
- Keep a running **project log** (append to the log at the bottom of this file).
- At the end, deliver a portfolio-ready writeup: tech stack, key features, what makes the work stand out.

## Project facts

- Repo: `VisualsByBasit/rk-group-website`. Default branch `main`, deployed by Vercel to https://rkgroupofindustries.com
- Next.js 16.3.5, React 19, **static export** (`output: "export"`, `trailingSlash: true`, unoptimized images). There is no server, so no API routes or Server Actions.
- Read `AGENTS.md`: this Next.js version differs from older docs. Check `node_modules/next/dist/docs/` before using an API you are unsure of.
- Package manager: pnpm. Checks: `pnpm lint`, `pnpm build`, `python scripts/check-seo.py` (the last one exists on the SEO branch).
- The http, www and `rkgroupofindustries.vercel.app` hosts already 308-redirect to the main domain.
- **Business direction:** RK Group does **not** sell single retail packs (1 kg, 2 kg). The site should push **distributor deals only, minimum order 250 kg+**. Everything new on the site serves that.

## Task 1 - Finish and merge the SEO PR

PR #2, branch `codex/seo-primary-domain-brand-pages` (built by ChatGPT, still a draft).

Already reviewed and passing: build, lint, `check-seo.py` (9 pages, self-canonicals, JSON-LD, sitemap, robots), and a visual check of the brand pages, chairman page and homepage at 1440px and 390px (no overflow, no console errors, subpage nav works).

What it adds: primary-domain fix in `src/lib/site.ts`, seven `/brands/<slug>/` pages driven by `src/lib/brands.ts`, `/leadership/sheikh-khalid-islam/`, shared `pageMetadata()` helper, nine-URL sitemap, linked Organization/Brand/Person JSON-LD.

**One fix before merging:** in `src/app/leadership/sheikh-khalid-islam/page.tsx` the page title is `"Sheikh Khalid Islam — Chairman"` (em dash). Change it to `"Sheikh Khalid Islam, Chairman of RK Group"`. Rebuild, rerun all three checks, then mark the PR ready and merge it.

All later work branches off `main` **after** this merge, because it depends on `brands.ts` and the `/#section` nav links.

## Task 2 - Distributor features (new branch from updated `main`)

**Design rule:** match the existing site exactly (Space Grotesk headings, IBM Plex Sans body, the current palette, spacing, eyebrows and numbering). Do **not** apply the taste skill's house rules to restyle the site. Use its inspector and the Vercel web-design-guidelines skill for quality checks only.

1. **Floating WhatsApp button** on every page. Links to `https://wa.me/<number>?text=<encoded message>` with a short prefilled distributor enquiry. Accessible label, visible focus, does not cover content on phones, respects `prefers-reduced-motion`.
2. **"Become a distributor" section** on the homepage (new `id="distributors"`, added to header and footer nav):
   - Who it is for: distributors, wholesalers and large retailers.
   - **Terms**: minimum order 250 kg+, no single retail packs, plus the terms in "Info from Saim" below. Do not invent terms that are not listed there.
   - Brands available for distribution.
3. **Distributor enquiry form** in that section. Fields: name, business name, city, phone, brands of interest (multi-select), estimated order quantity (kg, validated at 250 or more), message. Because the site is a static export, **submit opens WhatsApp** with all fields formatted into the message (and a `mailto:` fallback if an email is provided). No data is stored by the site. Proper labels, inline validation messages tied with `aria-describedby`, keyboard usable.
4. **Calls to action**: a "Become a distributor" link on each brand page and in the hero area, pointing to `/#distributors`.
5. **Privacy notice update** (in the footer): enquiries are sent through WhatsApp or email by the visitor; the site stores nothing. Keep "no non-essential cookies" true. If the Meta Pixel is added later, this notice and a consent banner must be updated first.
6. **Structured data**: add `contactPoint` (sales, the WhatsApp number, areaServed PK) to the Organization JSON-LD once the number is confirmed.

Then: build, lint, `check-seo.py`, screenshot desktop and phone (Playwright), run the taste-skill inspector on the built `out/` folder and fix any FAILs, send screenshots to Abdulbasit for approval, then merge.

## Task 3 - After the final deploy (not before)

1. Search Console: add `rkgroupofindustries.com` as a **Domain property** if not already verified; put Google's TXT record in Hostinger DNS.
2. Submit `https://rkgroupofindustries.com/sitemap.xml`.
3. URL-inspect and request indexing for the homepage, ACP, Islamabad Macaroni and chairman pages.

## Info from Saim (fill in before Task 2)

- WhatsApp number: TBD
- Personal or WhatsApp Business: TBD
- Enquiry email (if shown): TBD
- Minimum order: 250 kg+ (confirm: total per order, or per brand?)
- Cities / regions covered: TBD
- Payment terms (if public): TBD
- Delivery terms: TBD
- Brands available to distributors: TBD (all seven, or a subset?)

## Out of scope for now

- Meta ads setup (separate work; distributor Leads campaign planned).
- Instagram/Facebook page relinking (@rkgroup_of_industries is currently linked to the Islamabad Macaroni page).
- Deeper brand page content (pack sizes, ingredients) until the client supplies it.

## Project log

- 28 Oct 2026: Took over from ChatGPT. Reviewed SEO PR #2; build, lint, SEO checks and visual check all pass. Decided: merge SEO first, then distributor features, Search Console after final deploy. Scoped distributor-only (250 kg+) features. Handoff written for Claude Code in VS Code.
