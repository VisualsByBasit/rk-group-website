# RK Group — requirements, future architecture and confirmation gaps

Date: 7 October 2026. Phase 0 only. This document proposes later work; it does not authorize inventing content or certify legal/company facts.

## Confirmed requirements

- Public identity: **RK Group**. Production domain: **https://rkgroupofindustries.com**. Hosting: Vercel.
- “RK Group of Industries” is not automatically the legal or public name; use as formal identity only after verification.
- Employer requirement: **expert-level credibility + layperson-level clarity**. Visitors must understand the group, its activities, brands, companies, leadership and navigation without corporate/FMCG knowledge.
- Phase 1: premium design/UX and final page structure. Phase 2: privacy/legal/security. Phase 3: SEO/search architecture. Phase 4: full QA, Safari/Apple investigation and bug fixing. Phase 5: staging/regression acceptance.
- Preserve existing user work; do not commit/push/deploy from this audit. No public source, route, title, policy, schema, asset or identity changes now.
- Three official Instagram accounts are explicitly user verified: RK Group `https://www.instagram.com/rkgroup_of_industries/`; ACP `https://www.instagram.com/acpbanaspatighee/`; Islamabad Macaroni `https://www.instagram.com/islamabad_macaroni/`. They currently are not used on the site. Do not invent other accounts.
- Known future issue: Sheikh Abdul Islam portrait on Apple devices. Asset and component handoff is in AUDIT_BASELINE.md; actual Apple reproduction remains Phase 4 work.

## Content status and required approvals

Seven featured brands, seven visible leadership profiles and thirteen company cards are confirmed **as current website content**. Their existence in source is not independent proof of legal entity relationships, product claims or current appointments.

| Gap | Existing material | Confirmation/additional material needed | Consequence |
|---|---|---|---|
| Formal organization identity | RK Group public name; alternative in metadata/schema | Exact legal entity/controller, registered/trading names and approved public wording | Blocks definitive legal policy and formal corporate claims |
| RK Group / KK Group relationship | Shared leadership titles and historical narratives | Approved explanation of relationship and which history/companies belong to which group | Core architecture and credibility gate |
| Operating company relationships | Thirteen logos/names/sectors | Legal/trading names, ownership/affiliation basis, business description, public URLs, sector and location/contact approved for publication | Avoid invented subsidiaries or inaccurate company pages |
| Similar oil-company names | ACP, KK, KKR, Kashmir and Mirpur references | Confirm whether distinct entities and brand/manufacturer relationships | Do not normalize names or merge entities based on resemblance |
| Group history | 1953, 1965, 1989, 1996 and later milestones | Source/owner approval for chronology and attribution | Timeline can be reused only as approved claims |
| Founder | Sheikh Abdul Majeed only in schema | Identity, founder relationship and source | Do not expand into biography/founding narrative without evidence |
| Historical ownership | 50%/100% shareholdings in Abdul Islam disclosure | Historical source, date context, approval to publish | Potentially material corporate assertions require explicit review |
| Leadership | Seven names, roles and short/expanded text | Current roles, remits, approved biographies, qualifications/memberships and permission to publish portraits | Stronger expert credibility without filler |
| Portrait identity | Several documented generative edits | Subject/company approval of likeness and intended final image | Do not silently swap to untracked Saim final asset |
| Brand naming | Displayed Dewan; Deewan in file paths/metadata | Official spelling and full brand names | Consistent navigation and later URLs/schema |
| Product claims | Formats, pasta shapes, blends, Nimco variants, Gulberg 900g, “premium,” “trusted” | Current SKU/catalogue, packaging, exact categories, availability, approved claims and manufacturer map | Prevent mock imagery becoming invented specifications |
| Historical Oxygen + | Care Enterprises mention only | Historical vs current status and relationship | Keep outside current featured-brand inventory until confirmed |
| Public contact | No email/phone/form/verified address | Approved phone/email/address, inquiry categories and receiving team | Contact page/CTA cannot be fabricated |
| Standards | Three principles, no certificates | Actual process examples, audit/certification evidence, scope, issuer and validity if any | Avoid decorative seals implying accreditation |
| News/media | External citations in one biography only | Approved owned articles, dates, titles, rights and publishing owner | Do not launch empty News section or repackage third-party articles as group news |
| Facilities/capacity | General geography/industry mentions | Approved facility details/photos, capacity figures only if substantiated | No invented factories, headcounts, revenue or market share |
| Social accounts | Three user-verified Instagram profiles; existing CFO LinkedIn | Authenticate CFO link and any further company/person accounts | Only approved links may be introduced |

## Proposed Phase 1 page structure

The current long page has enough material for core index pages, but many detail pages would be thin. Use the following content gates rather than generating every possible route.

| Proposed route | Why / primary value | Existing content to reuse | Missing content and launch decision |
|---|---|---|---|
| `/` | Immediate identity, sectors and routes to key tasks; UX | First-slide overview, selected brands, leadership summary, company count, history excerpt | Add approved clear group description and contact destination; concise overview instead of entire dossier |
| `/about` | Group identity and history; corporate storytelling | Story, timeline, approved heritage excerpts | Resolve RK/KK attribution, founding claims and entity relationships before publication |
| `/brands` | Distinguish products customers recognize from operating companies; UX | Seven brands, categories, lineup images | Short plain introduction, approved relationships and consistent naming; strong candidate |
| `/brands/[brand-slug]` | Shareable brand information, product understanding; UX + later SEO | Existing copy/formats/product images and three supplied social accounts where relevant | Launch individually only with approved distinct descriptions, catalogue/category detail and inquiry path; resolve Dewan spelling before slug choice |
| `/leadership` | Understand who leads the organization; credibility | Seven profiles, roles, portraits | Confirm scope and order, separate former/heritage roles from current leadership; strong candidate |
| `/leadership/[person-slug]` | Long biography without overwhelming homepage; storytelling | Khalid Islam has substantial content; Abdul Islam has heritage history; Farooq has some narrative | Conditional for substantive approved profiles. Saim/Atif/Abubakar/Haseeb current text may not justify individual pages; avoid filler pages |
| `/companies` | Show operating businesses and sectors; expert clarity | Thirteen cards | Add approved descriptions and explicit relationship/brand map; retain directory until deeper data exists |
| `/companies/[company-slug]` | Detailed corporate reference; later optional | Currently only names, sectors and logos | Defer: insufficient evidence and substantive content for thirteen pages |
| `/contact` | Practical business action; UX | No adequate existing content | Include in architecture, publish only once approved contact details and inquiry ownership exist; no assumed form/backend |
| Standards within `/about`, or `/standards` later | Explain real quality practices; credibility | Three principles | Prefer about section initially; standalone page only with substantive verified operating evidence |
| `/news`, `/news/[article-slug]` | Timely corporate updates; storytelling | None owned/published in repository | Defer until an approved editorial inventory and maintainer exist |
| `/privacy` | Accessible disclosure; Phase 2 | Footer notice | Legal identity/provider facts and approved policy required |
| `/terms`, `/cookies` | Conditional legal/privacy needs; Phase 2 | Copyright line and generic cookie-status claim only | Decide from confirmed processing and legal review; no template-based automatic creation |

Products do not presently justify `/products/[slug]`: no structured specification catalogue or individual pack assets. Consider product categories within approved brand pages first. No news/contact/company route is being created by this audit.

When restructuring later, preserve useful inbound `/#story`, `/#leadership`, `/#brands`, `/#portfolio`, `/#standards` and brand fragment journeys through retained anchor targets or a deliberate client-side compatibility strategy. Fragment values are not sent to the server, so ordinary server redirects cannot select destinations based on them. Use homepage-prefixed navigation from other routes; fix 404 recovery. SEO metadata/schema/sitemap execution remains Phase 3.

## Exact Phase 1 design priorities

1. Establish a stable first viewport that names RK Group, says what kinds of businesses it operates and offers understandable Brands, Companies and Contact paths. Make the core identity readable even when a product is featured.
2. Explain “Brands are the names people buy” and “Companies are the businesses that operate” in company-approved wording, then illustrate only verified relationships. Clarify RK Group versus KK Group before polishing the storytelling.
3. Shorten the homepage: overview, clear sectors/brands, compact story/leadership/company previews, evidence-backed standards and contact route. Move long approved biographies and history into appropriate pages.
4. Retain the useful cream/green palette, local context, readable typography, distinctive packaging and explicit leadership roles. Refine typography/spacing deliberately instead of adding ornamental effects.
5. Give brand imagery consistent, uncropped presentation and approved supporting text. Add separate logo masters and true product/category photography where available; do not rely on tiny image labels for specifications.
6. Standardize portrait crops/background treatment without altering identity. Keep former leadership context explicit. Replace generic biography padding with real approved remit information.
7. Turn the company grid into an informative directory with clear sectors, short descriptions and meaningful destinations where supported. Do not make non-clickable cards look like clickable controls.
8. Replace vague standards claims with approved process examples. Remove any implied certification where none is evidenced; ornamental seals are not proof.
9. Design phone/tablet first: fit carousel controls at 375px, prevent tablet product cropping, avoid abrupt dense leadership columns, enlarge small labels/touch controls, check section length and every disclosure state.
10. Include accessible focus, semantic headings, motion controls, clear empty/404 states and useful footer contact/legal navigation in design acceptance. Full cross-browser remediation remains Phase 4.

Phase 1 acceptance: a reviewer can identify the group, broad activities, difference between brands and companies, leadership and next action within a brief first visit; every new detail page has enough approved content; no fabricated claims; verified mobile layouts and meaningful navigation. This is a design/content gate, not an SEO or legal completion claim.

## Asset quality and IP inventory

Classification: **A** current asset adequate for intended use; **B** can be presented better; **C** professional/source-master replacement recommended. Technical adequacy never substitutes for publication permission.

| Asset family | Current evidence / quality | Classification and next action |
|---|---|---|
| Group logo | `public/assets/rk-group-logo.png`, 900×450 transparent PNG; rendered at 68×51 desktop / 58×43 mobile with contain; tiny embedded wording | B for consistent optical sizing; C vector master for future identity work; confirm logo/trademark rights |
| Hero Islamabad | WebP 1672×941, 111 KB; attractive location scene, darkened heavily | B; confirm original source/license and avoid presenting it as an owned facility. C real approved site/facility photography if corporate provenance is desired |
| Seven product lineups | 1440×960 except macaroni 1536×1024; 101–320 KB; tablet crop, phone label illegibility | B layouts; C approved product photography/pack artwork for factual catalogue use; verify every visible format/claim |
| Macaroni v2 | `source-assets/islamabad-macaroni-v2.md` explicitly documents image generation/compositing from packaging references and a shells correction | Company approval of packet/jar artwork, pasta shapes and real marketed products needed; no assumption of factual packaging accuracy |
| Khalid Islam | 1100×1332 WebP; prominent portrait sufficient for current slot | A/B; approve crop and publication rights; preserve identity |
| Abdul Islam | Landscape 1100×882 WebP and 1401×1123 PNG; cover-fit in tall desktop slot | B; investigate Apple layout/decoding in Phase 4; professional restoration/source scan only if needed and approved |
| Raja Muhammad Farooq | 1000×969 WebP, compressed existing portrait | B current smaller slot; C original high-quality portrait for large profile hero |
| Raja Abubakar Farooq | 1000×1000 WebP, only ~30 KB; detailed large use may expose softness | B/C; seek original high-resolution photograph before enlargement |
| Saim Khalid | Active suit-v2 1100×1375; provenance documents AI clothing edit; untracked final variant not active | B after subject approval; choose approved final version explicitly, do not infer from filename |
| Atif Islam | 800×1000 WebP; prompt documents event-background/logo/text removal and reconstructed clothing | B current card; confirm likeness, editing and usage permission; C original professional portrait for large use |
| Abdul Haseeb | 800×1000 WebP; note documents AI suit replacement from user photograph | B current slot; subject/company approval; C original professional photograph if greater authenticity/scale required |
| Thirteen company logos | 500–720px raster WebP, transparent; varying whitespace/legibility | B current cards, C vector masters for consistently strong large use; verify names, affiliation and trademark permissions |
| Old public assets | Alternate lineups/portraits, two ~2 MB PNG masters, legacy product JPEGs | Not current page requests; inventory and approve retirement later, no deletion now |
| Fonts | Fontsource packages; local LICENSE files state SIL Open Font License 1.1 for Space Grotesk and IBM Plex Sans | A; preserve license notices and verify redistribution obligations during packaging |
| Icons/backgrounds | Inline SVG emblems, CSS decorative patterns, arrows; no stock icon library found | A/B; avoid implying external certification; source authorship/rights confirmation as applicable |
| Libraries | Next/React, Fontsource, Sharp, ESLint, TypeScript and transitives | Maintain license/notices inventory; repository has no comprehensive third-party attribution register |
| Video | None found | No footage license item currently identified |

Unknown origins should be recorded as **ownership/license should be confirmed**, never assumed unlawful. A user-supplied photo and a generation prompt are useful provenance but do not alone document every copyright, publicity, trademark or subject-approval question.

## Phase 2 privacy/legal/security requirements

Detailed technical basis is in PRIVACY_TECH_AUDIT.md. Required next-phase tasks:

- Confirm legal/controller identity, approved public contact, applicable markets/jurisdictions, hosting/provider practices and responsible business owner.
- Obtain a fresh-session runtime cookie/storage/network inventory and reconcile it with source and hosting settings. Do not invent cookie keys, expiry, consent categories or personal-data retention periods.
- Produce an approved privacy notice with effective/review dates and a practical contact/request channel. Decide cookie policy/settings and Terms scope from facts and legal review.
- If optional analytics/marketing/embeds are added, assess and implement appropriate consent/withdrawal and pre-consent loading behavior. Current lack of those tools does not justify a generic tracking template.
- If a form/newsletter is introduced, define minimization, destination, access, provider, validation/spam measures, retention and notices; marketing consent/unsubscribe only where relevant.
- Apply tested host-level security headers and compatible dependency patches, preserving static-export functionality. Critical package advisory does not establish an exploitable route here; do not ignore it or exaggerate it.
- Confirm asset/portrait/trademark rights and approved corporate facts; do not publish compliance guarantees or blanket immunity language.

## Risks, unknowns and sequencing

Highest practical risks: production old-domain indexing signals; unclear entity relationships; absent contact pathway; clipped phone controls; approval gaps in factual copy and generated/edited artwork. Security priorities: dependency patch planning and host-level header verification. Known Apple issue must remain a tracked Phase 4 test, not be marked resolved because Windows renders it.

No measured Core Web Vitals, comprehensive contrast scores, real Safari/iOS result, authenticated Vercel configuration, full runtime storage dump or independent legal review was available. Phase 4 should cover real Apple Safari and other browsers, keyboard/screen reader, failed requests, disclosures, product cropping and history/navigation after all earlier phases. Phase 5 should repeat acceptance on staging with production-like headers/domain rules and the final approved content.

## Audit deliverables and no-change boundary

Created only internal root-level reports: `AUDIT_BASELINE.md`, `PRIVACY_TECH_AUDIT.md`, `REQUIREMENTS_AND_GAPS.md`. They are outside `public/` and `src/app`, are not imported, and are not exposed as website routes. No public website implementation was intentionally changed; nothing committed, pushed or deployed. Existing untracked assets and npm lock remain untouched.
