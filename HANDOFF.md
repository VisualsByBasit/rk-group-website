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
- Abdulbasit's commit `ecdf8ba` (on `docs/handoff`) adds the skills folders to `.gitignore`. Cherry-pick it onto every branch you work on. (An earlier note said `7ff293f`; that was the same change before a rebase and is not on any branch.)

## Project facts

- Repo: `VisualsByBasit/rk-group-website`. Default branch `main`, deployed by Vercel to https://rkgroupofindustries.com
- Next.js 16.3.5, React 19, **static export** (`output: "export"`, `trailingSlash: true`, unoptimized images). No server, so no API routes, Server Actions, or `headers()` in `next.config.ts` (use `vercel.json` for headers).
- Read `AGENTS.md`: this Next.js version differs from older docs. Check `node_modules/next/dist/docs/` before using an API you are unsure of.
- Package manager: **pnpm only** (never commit `package-lock.json` or a `pnpm-workspace.yaml`). Checks: `pnpm lint`, `pnpm build`, `python scripts/check-seo.py` (on the SEO branch).
- The http, www and `rkgroupofindustries.vercel.app` hosts already 308-redirect to the main domain.
- Skills installed locally: `design-taste-frontend`, `web-design-guidelines`, `image-to-code`, `playwright-cli`. Design references in `design/awesome-design-md` (gitignored).

## Business facts (confirmed by Abdulbasit)

- RK Group sells **wholesale only** right now. No retail sales. **No prices anywhere on the site.**
- **Payment:** cash, paid on the spot at pickup.
- **Pickup:** the buyer collects the order with their own transport. Factories are in **Mirpur, Azad Kashmir**. Exact pickup details and any other terms are discussed after the buyer gets in touch.
- **Landline:** 051-4449011 (`tel:+92514449011`). Hours: **Monday to Saturday, 10am to 6pm**.
- A **separate WhatsApp number** and an **RK Group email** are coming later. Until then the WhatsApp button and the enquiry form are built but switched off (see Task 2).
- **Gulberg is part of the wholesale programme** (same rules as the other ghee brands). **Kashmir Tea** stays on the site but is **not** part of distributor enquiries yet.

### Wholesale rules (for the distributor section and form)

| Products | Wholesale unit | Order options | Minimum |
| --- | --- | --- | --- |
| ACP, Dilpasand, Deewan, Gulberg (banaspati ghee) | Cartons | 250 kg, 500 kg, 1000 kg, custom | 250 kg |
| Islamabad Nimco | 25 kg bags | 25 kg, 50 kg, 100 kg, custom | 25 kg |
| Islamabad Macaroni | 25 kg bags | 25 kg, 50 kg, 100 kg, custom | 25 kg |

- Do not convert kg into carton counts; RK Group rounds orders to whole cartons themselves.
- **Custom amounts:** ghee is any amount of 250 kg or more (no multiple rule, since it packs in 900 g and 1 kg packets). Nimco and Macaroni must be multiples of 25 kg, minimum 25 kg, because 25 kg bags are the only wholesale packaging. Show the hint "Supplied in 25 kg bags, order in multiples of 25 kg" under their quantity field.
- **Spelling:** use "Deewan" in all visible text. The URL `/brands/deewan-banaspati/` stays; internal CSS class names may keep "dewan".
- **In the form and enquiry copy only:** Islamabad Macaroni is currently available in **Elbow** only (other shapes are in production). Do **not** say this on the homepage or brand pages; those keep the six shapes as listed.

### Product sizes (homepage product info, also brand pages)

These are product information only. They do **not** appear in the enquiry form.

- **Ghee cartons (ACP, Dilpasand, Deewan, Gulberg):** 1 kg x 5 and 1 kg x 16 packs per carton; 900 g x 5 and 900 g x 16 packs per carton.
- **Ghee retail packs:**
  - ACP: 1 kg, 900 g, 450 g
  - Dilpasand: 1 kg, 900 g, 450 g, 225 g
  - Deewan: 1 kg, 900 g, 450 g, 225 g
- **Islamabad Nimco** (Classic Mix, Special Mix, Chatpata Mix): 25 g, 35 g, 100 g, 200 g. **Premium Classic Mix** stand-up pouch: 200 g, 400 g (in the sizes only, not the format chips or brand copy). Wholesale: 25 kg bag.
- **Islamabad Macaroni:** written as "Retail pack: 400 g" (do not name Elbow outside the form). Keep "Elbows" in the format chips. Wholesale: 25 kg bag.
- **Metal tins** are still sold. Keep "Metal tins" in the existing `formats` lists, but add no tin sizes or tin terms; those are agreed between buyer and seller.
- Gulberg: keep its existing formats (900 g pouches, trade cartons) and add the ghee carton configurations above. Kashmir Tea sizes: leave exactly as they are.

### Product claims (approved)

- Islamabad Macaroni: 100% wheat, no preservatives, premium quality.
- Islamabad Nimco: natural ingredients, no preservatives, 100% vegetarian.

Use these on the homepage brand blocks and brand pages. Do not add any other claims (certifications, health benefits, awards, statistics).

## Task 1 - Finish and merge the SEO PR

PR #2, branch `codex/seo-primary-domain-brand-pages` (built by ChatGPT, still a draft). This also fixes the audit's **canonical URL** finding.

Already reviewed and passing: build, lint, `check-seo.py` (9 pages, self-canonicals, JSON-LD, sitemap, robots), and a visual check at 1440px and 390px.

Two fixes before merging:

1. `src/app/leadership/sheikh-khalid-islam/page.tsx`: the title is `"Sheikh Khalid Islam — Chairman"` (em dash). Change it to `"Sheikh Khalid Islam, Chairman of RK Group"`.
2. Same page: the "Further reading" links (`.biography-sources a`) are `#e3c692` on `#faf8f2`, **contrast 1.54:1**. That style was made for the dark homepage card. On the light detail page, override it (e.g. `.detail-page .biography-sources a { color: var(--green); }`) so it passes 4.5:1.

Rebuild, rerun all three checks, mark the PR ready, merge. Everything else branches off `main` **after** this merge.

## Task 2 - Distributor features, product sizes and audit fixes (new branch from updated `main`)

**Design rule:** match the existing site exactly (Space Grotesk headings, IBM Plex Sans body, current palette, spacing, eyebrows and numbering). Do **not** restyle the site to the taste skill's house rules. Use its inspector and the Vercel web-design-guidelines skill for quality checks only.

### 2a. Feature flags

Create `src/lib/contact.ts` with:

```ts
export const LANDLINE = { display: "051-4449011", tel: "+92514449011", hours: "Monday to Saturday, 10am to 6pm" };
export const WHATSAPP_NUMBER = ""; // e.g. "923001234567" once provided
export const ENQUIRY_EMAIL = "";   // once provided
export const WHATSAPP_LIVE = false;
export const ENQUIRY_FORM_LIVE = false;
```

Switching either feature on later must be a one-line change here.

### 2b. Floating WhatsApp button (every page, visible now)

- Always shown. When `WHATSAPP_LIVE` is false, pressing it opens a small accessible popover: "Our WhatsApp line is launching soon. For wholesale enquiries call 051-4449011, Monday to Saturday, 10am to 6pm." with a tap-to-call link and a close button (Escape closes, focus returns to the button).
- When live, it links to `https://wa.me/<number>?text=<prefilled wholesale enquiry>`.
- Accessible name, visible focus, never covers content or the cookie/privacy row on phones, respects `prefers-reduced-motion`.

### 2c. "Wholesale and distribution" section on the homepage (`id="distributors"`, add to header and footer nav)

- Who it is for: distributors, wholesalers, large retailers and commercial buyers.
- The wholesale rules table above (products, units, order options, minimums), written as clear copy, not a pricing table.
- Terms: wholesale only, no retail sales; cash on the spot at pickup; buyer arranges collection from the factories in Mirpur, Azad Kashmir; pickup details and further terms discussed on enquiry; no prices published.
- Primary action now: **Call 051-4449011** (tap to call), with the hours shown next to it.
- The enquiry form (below), rendered only when `ENQUIRY_FORM_LIVE` is true.

### 2d. Enquiry form (built and tested now, switched off)

- Fields: name, business name, city, phone, product (ACP, Dilpasand, Deewan, Gulberg, Islamabad Nimco, Islamabad Macaroni - Elbow), quantity (options change with the product: 250/500/1000 kg/custom for ghee, 25/50/100 kg/custom for nimco and macaroni; custom validated against that product's minimum, and in multiples of 25 kg for nimco and macaroni), optional message.
- Allow more than one product line per enquiry if it stays simple; otherwise one product per enquiry.
- Submit formats everything into a message and opens WhatsApp (when `WHATSAPP_LIVE`), with a `mailto:` fallback when `ENQUIRY_EMAIL` is set. The site stores nothing.
- Labels on every field, inline errors tied with `aria-describedby`, keyboard usable, works at 390px.
- Test it with the flags temporarily on (screenshots), then leave both flags off.

### 2e. Product sizes on the homepage and brand pages

- Add the sizes from "Product sizes" above to each brand's block on the homepage and to its brand page. Ghee shows retail packs and carton configurations; Nimco shows its mixes and pack sizes; Macaroni shows its retail pack and keeps the six shapes.
- Add the approved claims for Macaroni and Nimco.
- A "Wholesale enquiries" link to `/#distributors` on each eligible brand page (ACP, Dilpasand, Deewan, Gulberg, Nimco, Macaroni). Not on Kashmir Tea.

### 2f. Audit fixes (from an AI Workforce OS scan of the live site, plus a contrast scan on the SEO branch)

Contrast failures measured with axe-core on the homepage (WCAG AA needs 4.5:1 for small text):

| Element | Colours | Ratio |
| --- | --- | --- |
| `#brand-gulberg .brand-meta span` (the "07" number) | `#747a31` on `#f4cd39` | 2.98 |
| `#brand-nimco .brand-meta span` (the "06" number) | `#71836d` on `#f3e6c6` | 3.27 |
| `.brands-heading .eyebrow` | `#6e716b` on `#f0ece3` | 4.2 |
| `.brands-heading p` | `#6e716b` on `#f0ece3` | 4.2 |

Darken those colours just enough to pass, keeping each brand's look. Rerun axe-core (or the taste-skill inspector) on all pages after the new sections are added, and fix anything new.

Security headers: add a `vercel.json` with headers for all paths:

- `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy`: start from `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'`. The static export uses inline scripts and JSON-LD, so `'unsafe-inline'` is needed for scripts. **Test on the Vercel preview with the console open** and fix any CSP violations before merging.

`public/llms.txt`: a short plain-text summary of RK Group (who they are, brands, wholesale-only, the landline) with links to the homepage, brand pages and chairman page.

### 2g. Privacy notice

Update the footer privacy notice: enquiries are sent by the visitor through WhatsApp, email or phone; the site stores nothing; still no non-essential cookies. If the Meta Pixel is added later, this notice and a consent banner must be updated first.

### 2h. Structured data

Add a `contactPoint` to the Organization JSON-LD: `contactType: "sales"`, the landline, `areaServed: "PK"`, opening hours Mo-Sa 10:00-18:00. Add the WhatsApp number once it is live.

### 2i. Site name in Google (WebSite JSON-LD)

Add WebSite JSON-LD on the homepage only, with `name: "RK Group of Industries"`, `alternateName: "RK Group"` and `url` set to the homepage, so Google shows that as the site name instead of the domain. Link it to the Organization with `publisher`.

### Finish Task 2

Build, lint, `check-seo.py`, axe-core contrast, Playwright screenshots at 1440px and 390px (homepage, a ghee brand page, nimco, macaroni, chairman page, WhatsApp popover open), taste-skill inspector on `out/` with every FAIL fixed. Send screenshots to Abdulbasit for approval, then merge.

## Task 3 - After the final deploy (not before)

1. Search Console: add `rkgroupofindustries.com` as a **Domain property** if not already verified; put Google's TXT record in Hostinger DNS.
2. Submit `https://rkgroupofindustries.com/sitemap.xml`.
3. URL-inspect and request indexing for the homepage, ACP, Islamabad Macaroni and chairman pages.
4. Check response headers on the live site (`curl -I https://rkgroupofindustries.com`) and rerun the AI Workforce OS scan.

## Later (when Abdulbasit sends them)

- WhatsApp number: set `WHATSAPP_NUMBER`, flip `WHATSAPP_LIVE`, add it to `contactPoint`.
- RK Group email: set `ENQUIRY_EMAIL`, flip `ENQUIRY_FORM_LIVE`.
- Kashmir Tea wholesale terms, if it joins the distributor programme.

## Ideas to ask Saim about after delivery (do not build now)

- Search visibility for the directors' names (e.g. "Sheikh Saim Khalid"): currently only the homepage leadership section and Organization JSON-LD mention them. Options to propose: dedicated profile pages like the chairman's, and/or adding `sameAs` links to their real social profiles in the Person JSON-LD. Abdulbasit prefers **not** to add separate pages unless Saim asks for them.
- Profile pages for **every** leader (not only the chairman), each with Person JSON-LD and `sameAs` links to real profiles. Helps name searches for each person.
- Deeper product pages: per-brand pages exist; consider per-product pages (e.g. each Nimco mix, each ghee pack) **only** if each can carry real content (photos, sizes, ingredients, storage). Thin near-duplicate pages can hurt SEO.
- Redesign the detail pages (brand and chairman pages). They are currently plain text on a white background; give them the homepage's visual quality (hero image or colour field per brand, portrait treatment, stronger layout) while keeping the same type and palette.

## Out of scope for now

- Meta ads setup (separate work; distributor Leads campaign planned).
- Instagram/Facebook page relinking.

## Project log

- 28 Oct 2026: Took over from ChatGPT. Reviewed SEO PR #2; build, lint, SEO checks and visual check pass. Decided: merge SEO first, then distributor features, Search Console after final deploy. Scoped wholesale-only features. Handoff written for Claude Code in VS Code.
- 28 Oct 2026: Added confirmed business details (landline, hours, wholesale rules, cash at pickup, Mirpur factories, product sizes, approved claims). WhatsApp and form built but switched off until the number and email arrive. Folded in the AI Workforce OS audit (canonical, contrast, security headers, llms.txt) with measured contrast failures.
- 28 Oct 2026: Gulberg added to the wholesale programme (ghee rules). Metal tins confirmed as sold; no tin specifics on the site.
- 29 Oct 2026: Task 1 done. On the SEO branch: cherry-picked the `.gitignore` commit, retitled the chairman page "Sheikh Khalid Islam, Chairman" (the template adds "| RK Group"), set the Further reading links on the light detail page to `var(--green)` (contrast 1.54:1 to 11.91:1, homepage card unchanged), and added `.agents/` and `.claude/skills/` to the ESLint global ignores. Lint, tsc, build and `check-seo.py` (9 pages) pass. PR #2 merged into `main` by Abdulbasit (merge commit `0cc6e63`). Corrected the `.gitignore` commit hash in Working rules. Local note: pnpm and gh are not installed on this machine; checks ran from `node_modules/.bin`, and `check-seo.py` needs `PYTHONUTF8=1` on Windows.
- 29 Oct 2026: Task 2 decisions: custom bag orders in multiples of 25 kg, ghee any amount from 250 kg; Gulberg gets the ghee carton configurations; Premium Classic Mix in Nimco sizes only; macaroni shown as "Retail pack: 400 g"; "Deewan" everywhere in visible text. Added 2i (WebSite JSON-LD for the Google site name).
- 29 Oct 2026: Task 2 built on `feat/wholesale-distribution` (12 commits, not merged). 2a to 2i done; Deewan spelling fixed site-wide. WhatsApp button and form tested with the switches on, committed with both off. Also fixed: hero Pause control ran off screen at 375px (dots now shrink, and below 460px the slide count replaces the dots for 24px tap targets); homepage og:site_name aligned to "RK Group of Industries"; privacy date contrast. Lint, tsc, build, check-seo.py and axe-core (WCAG 2.2 AA, 9 pages, 1440 and 390) pass; CSP tested locally with no violations. Taste-skill inspector FAILs are all house-style rules that conflict with the design rule (eyebrows, numbering, gradients, lines, small labels), so left as is pending Abdulbasit's call.
