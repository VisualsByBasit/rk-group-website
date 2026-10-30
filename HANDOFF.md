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

- **What is sold (updated 30 Oct 2026, from Saim's review):** the "wholesale only" position is gone. Every order is bulk, in bags or in cartons. Nothing is sold as single packs. **No prices anywhere on the site.**
- **Payment:** cash, paid on the spot at pickup.
- **Pickup:** the buyer collects with their own transport from **Islamabad or Mirpur**, or an agreed spot arranged after they get in touch.
- **Landline:** 051-4449011 (`tel:+92514449011`). Hours: **Monday to Saturday, 10am to 6pm**.
- A **separate WhatsApp number** and an **RK Group email** are coming later. Until then the WhatsApp button shows a launching-soon popover, and the enquiry form is visible but asks visitors to call instead of sending (see Task 2).
- **Kashmir Tea** stays on the site but is **not** in the order form and gets no order buttons.
- **Site wording:** always "25 kg bulk bags" and "retail packs by the carton", never "branded" retail packs. The order heading is "Order direct, in bags or by the carton." The section is "Orders" at `/#order` (`/#distributors` stays as an alias), the nav item is "Order", the header button is "Place an Order", and the phone line reads "For orders and enquiries call 051-4449011". Never say anything about packaging being in progress.
- **Homepage order:** hero, brands, leadership, story, companies, orders, standards, footer.
- **Logos:** the header and footer use the RK and KK Group lockup (`rk-mark.png`, "Group of Industries", `kk-group-mark.png`). `rk-group-logo.png` stays for the favicon, JSON-LD and share images.
- **Leader bios:** keep all existing text. They may only be expanded with facts already on the site. No new personal details, and no company, factory or family photos.

### Ordering rules (site and form; the rules live in `src/lib/orders.ts`)

| Products | Packaging | How it is ordered |
| --- | --- | --- |
| ACP, Dilpasand, Deewan, Gulberg (banaspati ghee) | Pouches in cartons, one packaging only | Pack size, then quantity in cartons or kg. No minimum. |
| Islamabad Nimco | 25 kg bulk bags, or retail packs | Bags: 25, 50, 100 kg or a custom multiple of 25 kg. Retail packs: pack size (25 g, 35 g, 100 g, 200 g, Premium Classic Mix 200 g or 400 g) and number of cartons. |
| Islamabad Macaroni | 25 kg bulk bags, or retail packs | Bags: as Nimco. Retail packs: 400 g, number of cartons. |

- **On the site:** "Rates depend on the size of your order. Larger orders get better rates, agreed when you get in touch."
- **Internal only, do not put on the site:** 25 kg bags are Islamabad-branded bulk packs ("Bulk pack, for commercial use", made by RS Industries Pvt Ltd, Mirpur) that buyers may repack and resell in their own packaging. Branded retail packs go straight to market. Ghee uses the same packaging for wholesale and retail, and only the price differs. Rates are negotiated by order size.
- Do not convert kg into carton counts; RK Group rounds orders to whole cartons themselves.
- **Spelling:** use "Deewan" in all visible text. The URL `/brands/deewan-banaspati/` stays; internal CSS class names may keep "dewan".
- **In the form only:** Islamabad Macaroni is listed as Elbow. Do **not** say this on the homepage or brand pages; those keep the six shapes as listed.

### Product sizes (homepage product info, also brand pages)

- **Ghee cartons (ACP, Dilpasand, Deewan, Gulberg):** 1 kg x 5 and 1 kg x 16 packs per carton; 900 g x 5 and 900 g x 16 packs per carton.
- **Ghee retail packs:**
  - ACP: 1 kg, 900 g, 450 g
  - Dilpasand: 1 kg, 900 g, 450 g, 225 g
  - Deewan: 1 kg, 900 g, 450 g, 225 g
  - Gulberg: 1 kg, 900 g
- **Islamabad Nimco** (Classic Mix, Special Mix, Chatpata Mix): 25 g, 35 g, 100 g, 200 g. **Premium Classic Mix** stand-up pouch: 200 g, 400 g (in the sizes only, not the format chips or brand copy). Wholesale: 25 kg bag.
- **Islamabad Macaroni:** written as "Retail pack: 400 g" (do not name Elbow outside the form). Keep "Elbows" in the format chips. Wholesale: 25 kg bag.
- **Metal tins** are still sold. Keep "Metal tins" in the existing `formats` lists, but add no tin sizes or tin terms; those are agreed between buyer and seller.
- Gulberg formats: 1 kg pouches, 900 g pouches, trade cartons. Kashmir Tea sizes: leave exactly as they are.

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

### 2d. Enquiry form (visible now; sends once a channel is ready)

- **Update 29 Oct 2026:** the form is shown now (`ENQUIRY_FORM_LIVE = true`). With no WhatsApp number or email, a valid submit opens nothing, keeps the details and shows "Online enquiries are launching soon. Please call 051-4449011, Monday to Saturday, 10am to 6pm." with a tap-to-call link. The Call button in the section stays.

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
- RK Group email: set `ENQUIRY_EMAIL`. The form then sends by email with no other change (it is already visible).
- Kashmir Tea wholesale terms, if it joins the distributor programme.

## Task 4 - Leadership profile pages and detail page design (branch `feat/leadership-pages`, do not merge until Saim approves)

Abdulbasit decided to build these now and show Saim before merging. Full brief is in the chat; summary:

- A profile page for every leader shown in the homepage leadership section, at `/leadership/<slug>/`, using only the existing published bios. Chairman page moves to the same template.
- One shared, well-designed detail template (portrait treatment, strong layout, matching the homepage's quality, same type and palette). Brand pages get the same design upgrade if time allows.
- Person JSON-LD per leader linked to the Organization; `sameAs` only for profile links Abdulbasit provides. Sitemap, check-seo.py and llms.txt updated.

## Talking points for Saim (Abdulbasit raises these; nothing to build)

**Hosting and ownership**
- Vercel's free Hobby plan is for non-commercial personal use only; RK Group's site is commercial. Options: (1) Vercel Pro, $20 per developer seat per month plus tax, billed in USD; (2) move to a free host that allows commercial use, e.g. Cloudflare Pages (about an hour of work, headers move to a `_headers` file); (3) Hostinger hosting (not recommended, manual uploads).
- Likely outcome: Saim prefers no hassle, so the site may stay on Abdulbasit's GitHub and Vercel accounts, with Saim paying the monthly hosting fee. On Pro the price is per seat, not per project; usage is shared across Abdulbasit's projects (set a Spend Management limit). A new developer deploying to that team may need their own seat.
- Agree in writing (WhatsApp is enough): hosting stays on Abdulbasit's account and RK pays the fee; the **domain stays in RK Group's Hostinger account**; repo and Vercel project are transferred on request or with a month's notice if Abdulbasit stops working with them.
- Search Console, Hostinger DNS and the Meta Business account should be owned by RK Group, with Abdulbasit added as a user.
- Abdulbasit leaves the job on 5 November 2026; RK may keep him on remotely for development.
- The site will be in Abdulbasit's portfolio.

**Still needed from Saim**
- The separate WhatsApp number and the RK Group email (the form and button switch on with one line each).
- Profile links (Instagram, Facebook, LinkedIn) for leaders who want them linked from their pages.
- Approval of the leadership pages (Task 4) before merging.

**Ideas to propose**
- Facebook page: set a username (e.g. `facebook.com/rkgroupofindustries`) and a proper cover photo. Then update the Facebook URL in `src/lib/social.ts` (currently `https://www.facebook.com/profile.php?id=61595048216359`). Only the RK Group Facebook page is used; the Islamabad Macaroni Facebook page is being disconnected.
- Deeper product pages (per mix or per pack) only once real content exists (photos, ingredients, storage); thin near-duplicate pages can hurt SEO.
- Kashmir Tea joining the wholesale programme.
- Meta ads: a distributor Leads campaign (budget and payment card to be decided).

## Task 5 - Handover (before 5 November 2026)

- One clear README and an editing guide (contact switches, contact details, brands and sizes, wholesale rules, leaders, privacy notice).
- Consolidate `AUDIT_BASELINE.md`, `REQUIREMENTS_AND_GAPS.md`, `PRIVACY_TECH_AUDIT.md`, `SEO_ROLLOUT.md` and this file into `docs/`.
- Delete stale branches after checking nothing is needed (`codex/rk-group-premium-redesign`, `codex/rk-single-page-redesign`, `phase-1-redesign`, merged feature branches).
- Update Next.js to the latest patched 16.x and re-test.
- One command for all checks, and a GitHub Action that runs it on PRs.
- Add branch protection on `main` (block force pushes and deletion) after the handover.
- Settle ownership per the talking points above.

## Out of scope for now

- Meta ads setup (separate work; distributor Leads campaign planned).
- Instagram/Facebook page relinking.

## Project log

- 28 Oct 2026: Took over from ChatGPT. Reviewed SEO PR #2; build, lint, SEO checks and visual check pass. Decided: merge SEO first, then distributor features, Search Console after final deploy. Scoped wholesale-only features. Handoff written for Claude Code in VS Code.
- 28 Oct 2026: Added confirmed business details (landline, hours, wholesale rules, cash at pickup, Mirpur factories, product sizes, approved claims). WhatsApp and form built but switched off until the number and email arrive. Folded in the AI Workforce OS audit (canonical, contrast, security headers, llms.txt) with measured contrast failures.
- 28 Oct 2026: Gulberg added to the wholesale programme (ghee rules). Metal tins confirmed as sold; no tin specifics on the site.
- 29 Oct 2026: Task 1 done. On the SEO branch: cherry-picked the `.gitignore` commit, retitled the chairman page "Sheikh Khalid Islam, Chairman" (the template adds "| RK Group"), set the Further reading links on the light detail page to `var(--green)` (contrast 1.54:1 to 11.91:1, homepage card unchanged), and added `.agents/` and `.claude/skills/` to the ESLint global ignores. Lint, tsc, build and `check-seo.py` (9 pages) pass. PR #2 merged into `main` by Abdulbasit (merge commit `0cc6e63`). Corrected the `.gitignore` commit hash in Working rules. Local note: pnpm and gh are not installed on this machine; checks ran from `node_modules/.bin`, and `check-seo.py` needs `PYTHONUTF8=1` on Windows.
- 29 Oct 2026: Task 2 decisions: custom bag orders in multiples of 25 kg, ghee any amount from 250 kg; Gulberg gets the ghee carton configurations; Premium Classic Mix in Nimco sizes only; macaroni shown as "Retail pack: 400 g"; "Deewan" everywhere in visible text. Added 2i (WebSite JSON-LD for the Google site name).
- 29 Oct 2026: Task 2 built on `feat/wholesale-distribution` (12 commits, not merged). 2a to 2i done; Deewan spelling fixed site-wide. WhatsApp button and form tested with the switches on, committed with both off. Also fixed: hero Pause control ran off screen at 375px (dots now shrink, and below 460px the slide count replaces the dots for 24px tap targets); homepage og:site_name aligned to "RK Group of Industries"; privacy date contrast. Lint, tsc, build, check-seo.py and axe-core (WCAG 2.2 AA, 9 pages, 1440 and 390) pass; CSP tested locally with no violations. Taste-skill inspector FAILs are all house-style rules that conflict with the design rule (eyebrows, numbering, gradients, lines, small labels), so left as is (Abdulbasit confirmed).
- 29 Oct 2026: Abdulbasit approved Task 2 with changes. Wholesale terms now say "Rates are shared when you get in touch, along with pickup details and other terms." Taste-skill FAILs stay; "Elbow only" stays in the form only. Form shown now with a launching-soon message until WhatsApp or email is ready; privacy notice says the form sends and keeps nothing. Header gets a gold "Become a Distributor" button to /#distributors (Standards is now a plain link); on phones it is full width at the top of the menu, plus a compact version beside the menu icon from 440px up (it crowds the logo below that). WhatsApp button now uses a deeper WhatsApp green #1a9e4b (white icon 3.48:1; #25d366 is only 1.98:1) with shadow, hover lift, press effect and a pulse ring every 4s, off under reduced motion; popover unchanged. Lint, tsc, build, check-seo.py, axe-core (9 pages, 1440 and 390) and local CSP test pass. Not merged; Abdulbasit opens the PR and merges.
- 29 Oct 2026: Task 2 merged by Abdulbasit. Added Task 4 (leadership pages and detail design, build now, merge after Saim approves), talking points for Saim (hosting, ownership, Vercel plan, still-needed items) and Task 5 (handover before 5 November).
- 29 Oct 2026: Task 4 review round on `feat/leadership-pages` (`13aefa9`, pushed for preview, not merged): shared `src/lib/leaders.ts` (homepage leadership renders identically from it), one profile template at `/leadership/[slug]/`, chairman and Sheikh Saim Khalid pages only. Decided: JSON-LD `affiliation` (not `worksFor`) for Sheikh Abdul Islam and Raja Muhammad Farooq, who hold no RK role on the site; `sameAs` only for Abdul Haseeb's LinkedIn until Abdulbasit sends more profile links. Waiting for Abdulbasit's approval of the look before the other five pages.
- 29 Oct 2026: Task 4 design approved by Abdulbasit. On `feat/leadership-pages` (pushed, not merged; Saim to see first): all seven leader pages built on the shared template (biography text now full ink at 18px), homepage cards link to them, sitemap has 15 pages, `check-seo.py` now checks 15 pages, unique titles, Person/ProfilePage/BreadcrumbList on leader pages and fails on internal links to missing pages, `llms.txt` lists the leaders. Social links added, all in `src/lib/social.ts`: RK Group Instagram and Facebook as footer icon links under "Follow RK Group" and in Organization `sameAs`; Instagram for ACP, Islamabad Macaroni and Islamabad Nimco as a "Follow on Instagram" link on their brand pages, a small icon in their homepage brand blocks and Brand `sameAs`. Other brands get none. Inline SVG icons, no third-party scripts. Lint, tsc, build, check-seo.py, axe-core (15 pages, 1440 and 390), local CSP test and the web-design-guidelines review pass; no em dashes. Still open: brand page design upgrade (scope 4, ask Abdulbasit first).
- 30 Oct 2026: Part A, B and C of Saim's review on `feat/leadership-pages` (not merged): option B hero on all seven leader pages with the statement in Space Grotesk; orders replace wholesale-only, with the new form rules, shorter order section, order buttons on homepage brand blocks that preselect the brand, and the homepage reordered; RK and KK logo lockup with the KK mark on a light pill in the footer. Thin leader bios gain a paragraph on their profile pages only, from facts already on the site. `assets/kk-logo` deleted once its files were committed. The unreviewed brand template is on the local-only branch `wip/brand-template`, to restore in Part D. Lint, tsc, build, check-seo.py, axe-core (15 pages, 1440 and 390, plus form states) and the local CSP test pass; no em dashes. Waiting for Abdulbasit's approval at the checkpoint.
- 30 Oct 2026: Checkpoint approved by Abdulbasit. Heading and wording updated. Part D1: brand template restored from `wip/brand-template` onto `feat/leadership-pages` and updated to the current ordering rules; ACP and Kashmir Tea sent for approval before reviewing the other five. All checks pass. Not merged.
