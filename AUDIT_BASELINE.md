# RK Group — Phase 0 baseline audit

Audit date: 7 October 2026 (Asia/Karachi). Public domain: https://rkgroupofindustries.com. Scope: audit only; no redesign, routing change, policy implementation, SEO implementation, dependency upgrade, commit, push or deployment.

## Evidence and limitations

This report combines repository inspection, a successful production build and lint run, live production HTTP responses, and rendered production/local pages in the Codex browser on Windows. Local URL: http://127.0.0.1:3000. The local server required execution outside the filesystem sandbox because Next/SWC could not canonicalize the Windows project directory inside it; no source workaround was necessary.

Evidence labels: **observed** means rendered/HTTP/tool output; **source** means implementation inspected; **assessment** means design judgment; **confirmation needed** means company facts are present in content but not independently substantiated by this audit. Existing website claims are not proof of legal identity, ownership, capacity, credentials or product specifications.

All nine requested viewport widths were measured. Screenshots were inspected at representative desktop, tablet and mobile sizes. This is not a Safari/iOS, Firefox, physical touch-device, screen-reader or complete WCAG test. The browser inspection surface did not expose cookies/storage or a full network waterfall. No Core Web Vitals score is claimed. Deployment settings, hosting logs and legal jurisdiction were not accessible. External biography citations were inventoried, not independently fact-checked or comprehensively link-tested.

## A. Initial Git state

- Branch: `main`; HEAD: `4164001` — Redesign how we work section and center expansion icons.
- Unstaged tracked change: `next-env.d.ts`, two imports changed from `.next/types/` to `.next/dev/types/`.
- Staged changes: none.
- Untracked: `package-lock.json`; `public/assets/leadership/sheikh-saim-khalid-final.webp`; `source-assets/leadership/sheikh-saim-khalid-final.png`; `source-assets/saim-final-portrait.md`.
- Recent history: `c142c20` corrects Khalid Islam's KK Group title to CEO; `0c79c7c` updates leadership/product imagery; `b99cfa6` adds Abdul Islam; `56a9411` adds Atif Islam.
- Existing work was preserved. The build regenerates `next-env.d.ts`; its initial development imports were restored after checks. Only the three requested Markdown reports are intentional additions. Ignored `.next/` and `out/` build artifacts were generated locally.

## B. Framework and architecture

| Area | Baseline |
|---|---|
| Framework | Next.js **16.3.5**, React/React DOM **19.2.8**; versions confirmed in package manifest/installed Next and lockfile |
| Router | App Router, `src/app`; one content page, no Pages Router |
| Rendering | `output: "export"`, `trailingSlash: true`; prerendered static site in `out/` |
| Images | `next/image`, globally `unoptimized: true`; preprocessed local WebP/PNG, no runtime Next image optimizer |
| TypeScript | Strict, noEmit, ES2017 target, bundler module resolution, `@/*` → `src/*`; installed TS recorded in lockfile as 5.9.3 |
| Package manager | README prescribes pnpm; tracked `pnpm-lock.yaml`; untracked npm lock also exists. No `packageManager` field. Audit used existing installation through npm, without install |
| Scripts | `dev`: next dev; `build`: next build; `start`: next start; `lint`: eslint; `optimize:images`: node scripts/optimize-images.mjs |
| Start caveat | `next start` is not the deployment-serving workflow for static export; serve `out/` with a static host |
| CSS | Handwritten global CSS plus `Standards.module.css`; repeated override blocks and some obsolete standards selectors; no Tailwind/shadcn |
| Animation | CSS transitions/keyframes and React interval carousel; no Framer/GSAP or other animation package |
| Fonts | Locally bundled Fontsource Space Grotesk 400/500/600 and IBM Plex Sans 400/500; Georgia for editorial italics; duplicate font imports in layout and global stylesheet |
| Icons | Inline SVG in Standards; text arrows and CSS-drawn menu/expansion controls; no icon library |
| Client components | Header and HeroSlideshow. Main content, Leadership, Standards and Footer otherwise server/static components |
| Data/CMS | Hardcoded arrays/content; no CMS/database/network data layer |
| Forms/analytics | No form or analytics libraries; see PRIVACY_TECH_AUDIT.md |
| Tests | No test script, test suite or browser-test framework configured |
| Middleware/API | None found; no route handlers or Server Actions |
| Deployment | User states Vercel; live `Server: Vercel` confirms delivery. No `vercel.json` or repository CI/deployment workflow found |
| Environment | Only source references: NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION; `.env.example` contains public placeholders, not secrets |

Important structure:

```text
src/app/             page.tsx, layout.tsx, globals.css
                     robots.ts, sitemap.ts, manifest.ts, icon.png, apple-icon.png
src/components/      Header, HeroSlideshow, Leadership, Standards, Footer, Logo
                     Standards.module.css
src/lib/site.ts      shared URL default/environment override
public/assets/       group logo, hero, brand-lineups, brands, companies, leadership
public/products/     older product images (not used by current homepage)
public/leadership/   older chairman JPEG
source-assets/       masters, earlier variants, generation/edit provenance notes
scripts/             optimize-images.mjs (Sharp conversion; incomplete coverage of newer assets)
```

Local Next documentation read: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`. It confirms static generation/export and that host configuration, rather than a dynamic app server, governs deployment behavior.

## C. Routes, sections and navigation

| Route | Current purpose/result |
|---|---|
| `/` | Only indexable content page: hero → sector ribbon → story/timeline → leadership → brands → companies → standards → footer/privacy |
| `/robots.txt` | Live 200; allows all, references old Vercel host and sitemap |
| `/sitemap.xml` | Live 200; only homepage entry, old Vercel URL |
| `/manifest.webmanifest` | Live 200; RK Group manifest, standalone display, local icons; no service-worker implementation found |
| `/icon.png`, `/apple-icon.png` | Generated metadata asset routes in build |
| Missing URL | Tested `/phase-0-missing-page/`: live 404, default Next message inside shared site header/footer |
| `/_not-found` | Framework-generated build entry, not an editorial page |

There are **no standalone about, leadership, brand, company, product, news, contact or legal pages**. No public telephone, email address, inquiry form or usable contact destination was found. Biography place names are not a verified public contact address.

| Hash | Linked from |
|---|---|
| `#top` | Both Logo instances; footer Back to top |
| `#main-content` | Skip link |
| `#story` | Desktop/mobile header, hero secondary CTA on group slide, scroll cue, footer |
| `#leadership` | Desktop/mobile header and footer |
| `#brands` | Desktop/mobile header, every hero primary CTA, footer |
| `#portfolio` | Header Companies and footer Our companies; **not `#companies`** |
| `#standards` | Desktop/mobile header |
| `#brand-acp` | Brand directory and ACP slide secondary CTA |
| `#brand-islamabad` | Brand directory and Islamabad Macaroni slide CTA |
| `#brand-dilpasand` | Brand directory and Dilpasand slide CTA |
| `#brand-deewan` | Brand directory and displayed **Dewan** slide CTA |
| `#brand-kashmir` | Brand directory and Kashmir Tea slide CTA |
| `#brand-nimco` | Brand directory and Islamabad Nimco slide CTA |
| `#brand-gulberg` | Brand directory and Gulberg slide CTA |
| `#privacy` | Footer details ID; opened by its summary, no dedicated policy navigation link |

Additional addressable heading IDs: `leadership-title`, `former-chairman-title`, `abdul-haseeb-title`, `standards-title`. These are not independent profiles/routes. `#companies` does not exist; a supplied link with it would not reach the company grid.

Observed desktop links scroll using native anchors and smooth CSS. Leadership and Brands settled at approximately 74px below the viewport top, matching the sticky header. Mobile Companies settled at approximately 66px; menu closed after selection. Mobile Escape closed the menu and returned focus to its summary. Direct reload at `#brand-islamabad` settled at approximately 98px (74px scroll padding + 24px article margin). Back returned to `#portfolio`; Forward restored the brand hash/target. Every rendered internal homepage href resolved to an existing ID. Not every hash was individually cold-loaded across every device; source and DOM target integrity were checked for all.

**404 defect:** Logo uses `#top`, not a homepage URL. Clicking it on the production 404 produced `/phase-0-missing-page/#top`, leaving the visitor on the 404. The shared header/footer hash links have the same recovery problem. The 404 also retained the site title and had both `noindex` and inherited `index, follow` robots metadata.

## D. Brand inventory

All seven are visible in hero slides, the brand directory and homepage showcase articles. Current showcase artwork is product-family imagery, not separately rendered brand-logo files. Names below preserve displayed spelling. Asset paths are relative to `public/assets/brand-lineups/`. No brand has a standalone route, external brand website link, product detail link, purchase path or on-site social link.

| Displayed name / hash | Category and current copy substance | Product imagery / dimensions / bytes | Formats stated in content |
|---|---|---|---|
| ACP / brand-acp | Banaspati ghee; called the flagship of RK Group's edible-oils story and dependable for everyday kitchens | acp-no-tub.webp / 1440×960 / 154,834 | Metal tins, Retail pouches, Trade cartons |
| Islamabad Macaroni / brand-islamabad | Premium pasta; family meals, six shapes, local identity | islamabad-macaroni-v2.webp / 1536×1024 / 287,188 | Elbows, Penne, Fusilli, Shells, Farfalle, Vermicelli |
| Dilpasand / brand-dilpasand | Banaspati; familiar kitchen name, flavour and consistent results | dilpasand-no-tub.webp / 1440×960 / 122,730 | Metal tins, Retail pouches, Trade cartons |
| Dewan / brand-deewan | Banaspati ghee; trusted pantry essential, long-standing everyday cooking identity | deewan-no-tub.webp / 1440×960 / 101,414 | Metal tins, Retail pouches, Trade cartons |
| Kashmir Tea / brand-kashmir | Premium tea; blend for conversation and rituals | kashmir-tea.webp / 1440×960 / 139,770 | Loose-leaf tins, Tea cartons, Sealed pouches, Gift caddies |
| Islamabad Nimco / brand-nimco | Traditional savoury snacks; tea time and family gatherings | islamabad-nimco.webp / 1440×960 / 319,884 | Classic Mix, Special Mix, Chatpata Mix |
| Gulberg / brand-gulberg | Banaspati ghee; yellow/green packaging; explicitly described as from KKR Oil & Ghee Mills | gulberg.webp / 1440×960 / 227,772 | 900g pouches, Trade cartons |

Asset quality: all active lineups have enough resolution for current small/medium display (**B: present better**). Product labels become tiny on phones; cover cropping removes products at tablet widths. Original vector logos, verified packaging artwork and SKU photography remain missing. The macaroni image is documented as generated/composited; visual fidelity and actual marketed formats require company confirmation. For other lineups, do not infer provenance solely from appearance. Confirm logo/product ownership and image licenses for every brand.

Older assets exist in `public/assets/brands/`: `acp-banaspati.jpg`, `islamabad-macaroni.jpg`, `dilpasand.jpg`, `deewan.webp`, `kashmir-tea.webp`; these are not current showcase logo sources. Original lineup variants also remain publicly accessible. No dedicated logo asset found for Islamabad Nimco or Gulberg apart from artwork embedded in the lineup.

**Additional historical brand mention:** “Oxygen +” appears inside Abdul Islam's expanded Care Enterprises history. It is not an eighth current featured brand. No logo, image, current product inventory or social profile is supplied. Confirm whether it is historical only.

User-verified accounts, currently **unused** in source/rendered links/schema: RK Group `https://www.instagram.com/rkgroup_of_industries/`; ACP `https://www.instagram.com/acpbanaspatighee/`; Islamabad Macaroni `https://www.instagram.com/islamabad_macaroni/`. No accounts are inferred for other brands.

## E. Leadership and other person references

Every profile is in `src/components/Leadership.tsx`, homepage `#leadership`. All active portraits are non-transparent WebP. Paths below are relative to `public/assets/leadership/`. Role text is preserved; its real-world currency still needs owner sign-off.

| Exact name | Displayed roles / credentials | Active portrait; dimensions; bytes | Available biography and relationships |
|---|---|---|---|
| Sheikh Khalid Islam | Chairman, RK Group; CEO, KK Group; Vice Chairman, PVMA · 2024–2026; Vice Chairman, PVMA · 2017–2018; Member, FPCCI | sheikh-khalid-islam.webp; 1100×1332; 92,962 | Substantial expanded biography: manufacturing, industry representation, domestic production, 2026 supply-chain discussions; Chief Executive of Kashmir Oil & Ghee Mills (Pvt.) Ltd. and Mirpur Oil & Ghee Mills (Pvt.) Ltd.; Islamabad/Mirpur mentions; four external citations |
| Sheikh Abdul Islam | Former Chairman · KK Group | sheikh-abdul-islam.webp; 1100×882; 93,418 | Two introductory paragraphs and expandable history: joined 1965; 1989/1996/2006/2009/2012 milestones, historical shareholdings; preceded Khalid Islam in KK chairmanship according to copy |
| Raja Muhammad Farooq | Entrepreneur & community leader; Former Senior Vice Chairman, PVMA · Two terms | raja-muhammad-farooq.webp; 1000×969; 76,020 | Sahamni/AJK, Islamabad move in 1985, MBA/CA/LLB, manufacturing interests, PTI/public service; father of Raja Abubakar Farooq. No RK Group executive title explicitly assigned |
| Sheikh Saim Khalid | Director, RK Group; Director, KK Group | sheikh-saim-khalid-suit-v2.webp; 1100×1375; 115,196 | Generic continuity/next-generation biography; lacks concrete remit or substantiated career milestones |
| Sheikh Atif Islam | Director, RK Group; Director, KK Group; Member, PVMA; Member, Mirpur Chamber of Commerce; Member, Khyber Chamber of Commerce | sheikh-atif-islam.webp; 800×1000; 73,940 | Expanded text repeats directorships and memberships |
| Raja Abubakar Farooq | Director, RK Group; Director, KK Group; Law graduate; Member, Mirpur Chamber of Commerce; Member, Islamabad Chamber of Commerce | raja-abubakar-farooq.webp; 1000×1000; 29,770 | Law degree and chamber ties; son of Raja Muhammad Farooq |
| Abdul Haseeb | CFO, KK Group; CFO, RK Group | abdul-haseeb.webp; 800×1000; 58,814 | Finance role and generic expanded explanation; provenance note says roles/name were user supplied |

Only profile social link found: Abdul Haseeb LinkedIn `https://www.linkedin.com/in/abdul-haseeb-19447ba6/`, inside expanded biography. This is an existing link, **not independently authenticated** by this audit. No social profiles on the other six profiles.

Chairman external citations: PVMA membership PDF, Dawn election report, Express Tribune industry advocacy report, Business Recorder 2026 discussion report. They are ordinary same-tab hyperlinks, not embeds.

Additional person: **Sheikh Abdul Majeed** exists only as `founder` in Organization JSON-LD (`layout.tsx`); no visible profile, portrait, biography or supporting source in the inspected content. Do not treat that schema assertion as a verified founding fact.

### Known Apple portrait issue: precise handoff

The user's description matches **Sheikh Abdul Islam**, former Chairman of KK Group. Active asset: `public/assets/leadership/sheikh-abdul-islam.webp` (1100×882, 93,418 bytes, no alpha). Alternate PNG: `public/assets/leadership/sheikh-abdul-islam.png` (1401×1123, 2,057,380 bytes).

Component: `Leadership.tsx`, article `.chairman-feature.former-chairman`, nested `.chairman-portrait`, `Image` with `fill` and sizes `(max-width: 720px) 100vw, 42vw`. CSS in `globals.css`: former portrait `align-self: stretch; min-height: 0`, base image `object-fit: cover; object-position: center top`; mobile aspect ratio `5 / 4`. These are investigation points, **not a diagnosed Safari cause**. Portrait rendered in this Windows browser. Phase 4 must reproduce on actual iOS/macOS Safari, record OS/version, container dimensions, decoding and network results, then separate image-format failure from layout/cropping. No fix attempted.

The untracked `sheikh-saim-khalid-final.webp` is a different person's unused asset; it is not the reported portrait and was not substituted.

## F. Companies

All thirteen appear as non-clickable cards in `#portfolio`, populated in `page.tsx`; no biographies, websites, locations, contacts, legal registration details or brand-to-company map. Each logo path begins `public/assets/companies/`.

| Displayed company | Displayed sector | Logo |
|---|---|---|
| AA Foods | Food processing | aa-foods.webp |
| Al-Khalid Flour Mills | Flour & grain milling | al-khalid-flour.webp |
| Basila Industries | Manufacturing | basila-industries.webp |
| Brother Oil & Ghee | Edible oils | brother-oil.webp |
| Islamabad Chemical | Industrial solutions | islamabad-chemical.webp |
| Kam Foods | Food products | kam-foods.webp |
| Karco | Consumer products | karco.webp |
| KF Food Complex | Food production | kf-food-complex.webp |
| Khyber Green Energy | Renewable energy | khyber-green-energy.webp |
| KKR Oil & Ghee Mills | Edible oils | kkr-oil.webp |
| Noor Industries | Manufacturing | noor-industries.webp |
| Salam Food Industries | Food production | salam-food.webp |
| Pak Tameerat | Infrastructure | pak-tameerat.webp |

Logos: generally 720×720 WebP with alpha; Al-Khalid and Khyber Green Energy 500×500; Brother Oil 720×481. They fit current cards, but raster artwork has inconsistent intrinsic whitespace and visual scale. Vector masters recommended for future large use.

Other entities in biography/story (not additional confirmed operating portfolio cards): RK Group, KK Group, ACP Oil Mills / A.C.P Oil Mills (Pvt.) Ltd., Al-Khalid Flour Mills (Pvt.) Ltd., A.C.P Petroleum, Mik Mak Station, Care Enterprises, KK Oil & Ghee Mills (Pvt.) Ltd., Kashmir Oil & Ghee Mills (Pvt.) Ltd., Mirpur Oil & Ghee Mills (Pvt.) Ltd.; Total Parco Pakistan Ltd. and Hascol Storage (Pvt.) Ltd. are mentioned as historical commercial relationships. Do not merge **KK**, **KKR**, **Kashmir**, **Mirpur** or **ACP** entities without confirmation.

## G–K. Design, credibility and clarity assessment

| Area | KEEP | IMPROVE | REPLACE / REWORK |
|---|---|---|---|
| Hero | Strong local setting; readable dark/cream/gold palette; visible brand CTA | Persistent explanation of group and sectors; usable controls at narrow widths | Eight rotating marketing headlines displace the corporate explanation; changing mobile slide heights may disturb scroll position |
| Typography | Coherent sans families, editorial serif emphasis | Body/label hierarchy; avoid tiny letter-spaced labels; readable mobile controls | Repeated abstract headline/subheadline patterns that consume space without clarifying purpose |
| Spacing/grid/rhythm | Consistent max-width shell and strong section contrast | Tablet column allocation and image proportions | Very long homepage: full biographies before seven large brand panels, then thirteen company cards |
| Story | Specific timeline and readable narrative | Distinguish verified group history from KK Group history | Unsourced historical/ownership claims must go through approval rather than becoming more prominent |
| Brands/products | Seven named brands, clear broad categories, vivid packaging | Consistent crops, separate brand identities, product-legibility and approved formats | Image-led mock-catalogue presentation without real product information, links or inquiry action |
| Leadership | Named people, explicit roles, semantic expandable biographies | Consistent crops/backgrounds, actual remits, shorter summaries | Generic biographical filler and unclear mixing of RK/KK responsibilities |
| Companies | Sector labels, logo directory | Descriptive company summaries and clear relationship to group/brands | Hover-elevating cards imply deeper interaction but have no destination |
| Standards | Three intelligible themes and native disclosures | Explain actual operations with approved evidence | Crown/seal ornament and “Quality ... is a system” lack certifications or operational proof; do not imply accreditation |
| Navigation/footer | Clear top-level labels, skip link, sticky offsets, Escape support | Add contact destination once supplied; durable page links | Page-relative navigation on 404; footer lacks contact/legal entity detail |
| Motion/loading | Pause control, focus pauses rotation, initial reduced-motion check | Ensure controls remain visible; review height changes and image load strategy | Do not use carousel spectacle as substitute for corporate explanation |
| Responsive | Useful stacked mobile layout and constrained desktop shell | Tablet product crops and 1024px four-column leadership density | Clipped carousel controls at 375/390px |

Premium-corporate assessment: the palette, spacing and named portfolio make this look like an intentional corporate presentation, not an untouched component template. No Tailwind/shadcn/Framer dependency exists. Nevertheless, repeated slogan-led panels, gold motifs, product montages, generic “purpose/progress/generations” copy and thin company descriptions feel more like a polished showcase than a fully evidenced corporate resource. This is a judgment about execution; it is not evidence that all artwork or prose was AI generated. Documented AI edits are listed separately in REQUIREMENTS_AND_GAPS.md.

### Five-second test (reviewer heuristic, not participant research)

- **Identity:** pass — RK Group lockup is visible.
- **Corporate/group nature:** partial — first-slide paragraph describes multiple business sectors; headline alone does not.
- **Multiple brands/businesses:** partial — navigation and CTA say Brands/Companies, but relationship is unexplained.
- **Broad activities:** pass if the introductory paragraph is read; later product slides reduce this clarity.
- **Next action:** pass for exploring brands/story, fail for making contact.

**Expert audience:** partial. Named leadership, portfolio and some citations help. No company detail, clear entity hierarchy, evidence-backed standards or contact channel undermines due diligence and professional credibility.

**Non-expert audience:** partial. Product categories are accessible, but “enterprise,” “portfolio,” “stewardship,” PVMA and FPCCI need context. Each major section needs a plain descriptive introduction: who the people are; which names customers buy; which businesses operate; what standards mean in practice. “Brands” and “Companies” must be explicitly differentiated using approved relationships.

| Section | Expert test | Non-expert test / gap |
|---|---|---|
| Story | Useful dates but sourcing and RK/KK attribution need approval | Broad growth understandable; family/group identity ambiguous |
| Leadership | Titles and sources useful, current remits unclear | People identifiable; acronyms and dual-group titles unexplained |
| Brands | Categories available, specifications/evidence absent | Everyday products understandable, ownership/manufacturer map absent |
| Companies | Directory gives breadth, little assessment depth | Sector labels sometimes too vague: Industrial solutions / Consumer products |
| Standards | Values are not operational evidence | “System” not explained through concrete examples |
| Footer | No business-contact pathway | Visitor cannot determine whom to contact next |

## L. Responsive baseline

Measurements used browser viewports with a 15px desktop scrollbar; device emulation/touch input was not used. No document-level horizontal overflow at these widths. This does not rule out clipping inside `overflow:hidden` containers, as the hero defect demonstrates. Heights vary with viewport, slide and open details; with the privacy disclosure open the page was about 21.8k px on narrow phones versus 13.1k px at 1440px.

| Width | Navigation / grids | Observations |
|---|---|---|
| 375 | Mobile; leadership 1 col, companies 1 col | Next arrow partially clipped; Play/Pause offscreen. Full brand lineup fits stacked image but package text is tiny |
| 390 | Mobile; 1 / 1 | Play/Pause offscreen. Menu opens, item closes it, Companies target clears 66px header |
| 430 | Mobile; 1 / 1 | Controls fit in measured Play state, but still small; thirteen full-width companies prolong page |
| 768 | Mobile; leadership 2 cols, companies 3 cols | Brand panel remains side-by-side; image cover crop cuts off edge products (macaroni observed); narrow copy column |
| 820 | Mobile; 2 / 3 | Story stacks readably; still side-by-side brand layout; smaller company cards |
| 1024 | Desktop; leadership 4 cols, companies 4 cols | Abrupt four-column leadership transition; dense roles and text in ~218px profile columns |
| 1280 | Desktop; 4 / 4 | No measured page overflow; ample spacing; long repeated panels |
| 1440 | Desktop; 4 / 4 | Strong hierarchy and header clearance; brand product imagery crops to panel ratio |
| 1920 | Desktop; 4 / 4 | 1240px shell stays bounded, ~291px leadership columns; larger outer margins; no measured overflow |

## M–N. Technical findings and validation

| ID | Priority for later phases | Finding / evidence |
|---|---|---|
| B01 | High, Phase 3 | Production canonical/robots/sitemap use old Vercel hostname |
| B02 | High, Phase 1 | No usable contact information or destination |
| B03 | High, Phases 1/4 | Carousel controls clipped at 375–390px; hero overflow hides the defect from whole-page overflow measurements |
| B04 | Medium, Phases 1/4 | 404 home/menu links cannot recover to homepage; live click reproduced |
| B05 | Medium, Phase 1 | Tablet product crop hides full product assortment |
| B06 | Confirmation needed, Phase 4 | Abdul Islam Apple portrait report; exact asset/layout recorded above, not reproduced on Apple |
| B07 | High content gate | RK/KK/company identity and relationships unresolved; schema-only founder and historical shareholdings require confirmation |
| B08 | Medium, Phase 3 | Title/OG/Twitter use “RK Group Of Industries”; preferred public identity is RK Group |
| B09 | Medium, Phase 3 | OG dimensions declare 1792×1024 but actual hero is 1672×941 |
| B10 | Medium, Phase 2 | Dependency advisories and absent hardening headers; see privacy report |
| B11 | Medium, Phase 4 | 404 has conflicting robots tags and inherited generic title |

`npm run lint`: PASS, exit 0. `npm run build`: PASS, including TypeScript and static export. Browser error/warning log samples: none reported on tested normal production/local pages; not a guarantee for all interactions. Inspected images rendered, including Abdul Islam. Initial below-fold unloaded images were lazy-loading, not evidence of breakage. No missing internal hash targets on homepage. No automated test suite exists. No asset optimization command was run, since it would overwrite artwork.

## T. SEO baseline

- Root title: **RK Group Of Industries**; template `%s | RK Group`; one content page means no cross-page duplicate-title/description audit beyond the inherited 404 issue.
- Description exists and enumerates Pakistani enterprise sectors. `metadataBase`/canonical/OG URL/JSON-LD URL and logo derive from `siteUrl`.
- Live canonical: `https://rkgroupofindustries.vercel.app/`. Live robots Host and Sitemap, and sitemap `<loc>`, also use that host. This is observed in production, not merely a fallback risk.
- OG website, en_PK locale, site name, description, image; Twitter summary_large_image configured. Hero image metadata dimensions are inaccurate.
- Organization JSON-LD exists with name RK Group, alternateName RK Group of Industries, founder Sheikh Abdul Majeed, five employees and seven brands. Names/relationships require verification. Schema spells Deewan Banaspati while displayed brand is Dewan. No supplied official Instagram profiles included as sameAs.
- One H1 in rendered homepage, changes with slide. Main/section/article/nav/footer landmarks and mostly logical h2/h3 headings; biography h4; descriptive image alt text. Logo alt is empty intentionally within an aria-labeled home link.
- Robots index/follow; no homepage noindex found. 404 conflict noted above.
- Sitemap lastModified is `new Date()` at build, not verified editorial update date; live value observed `2026-10-06T08:39:38.123Z`.
- Hash destinations do not provide separate indexable brand/leadership documents.
- Old-domain occurrences: `src/lib/site.ts:2`, `.env.example:2`, `README.md:33,35`. Search of authored repository files excluding dependencies/build output found no localhost or 127.0.0.1 references before audit documentation. Do not replace development references introduced by this report.

## U. Performance baseline

- Static rendering and local WebP assets are strong foundations. No video, animation framework, remote font service or embedded widget found.
- Eight overlapping hero images are mounted. In production, all eight were loaded by the inspection time despite only one active slide; invisible slides are not necessarily network-deferred. Unique hero/lineup assets total about 1.56 MB before reuse by lower sections.
- `images.unoptimized` means `sizes` does not create a responsive optimization pipeline. Phones can download the full asset; brand cover cropping spends pixels on hidden content.
- Active portraits are ~30–115 KB; hero 111,238 bytes; largest active lineup is Nimco 319,884 bytes. No multi-megabyte active hero/video found.
- Public asset directory total: 8,566,714 bytes, including unused alternatives. Abdul Islam PNG (~2.06 MB) and Haseeb PNG (~1.87 MB) are public but not the active image requests; do not count these as current initial-page transfer.
- Fresh export: HTML 102,914 bytes / gzip 20,112 bytes; 8 JS chunk files total 602,711 bytes uncompressed, plus two CSS files total 41,872 bytes. These are output inventory sizes, not measured initial network transfer, JS execution or a Lighthouse score.
- 42 font files emitted (subsets/formats/weights); not all necessarily fetched. Layout and globals both import font CSS; verify actual deduplication before optimizing.
- Header/client carousel hydration exists, but most content is static. No excessive client-only application architecture or duplicate animation packages found.
- Mobile group/product slides use different height rules; possible layout shifts need instrumentation in Phase 4. No numeric CLS/LCP/INP claimed.
- No `.map` files in inspected export and no `productionBrowserSourceMaps` setting found; complete live endpoint exposure not exhaustively tested.

## V. Accessibility baseline

Strengths: skip link, language `en`, semantic landmarks, one H1, descriptive active image alt text, labeled navigation/carousel buttons, aria-pressed slide controls, native details/summary, visible focus outline, Escape menu support, reduced-motion CSS and initial preference check, pause on carousel focus.

Concerns: clipping makes narrow-screen pause/next controls difficult or impossible to use; 30px-wide dots and ~34px menu are small targets; labels often 9–11px, sometimes 8px; muted text/gold-on-cream needs measured contrast verification. Product-name text inside artwork is not a substitute for accessible product data. No whole-site keyboard or assistive-technology certification is claimed. Reduced-motion preference is read when effect runs, not subscribed to continuously. Broad animation/layout changes still need testing. The 404 recovery defect also affects keyboard users.

## Handoff

See `REQUIREMENTS_AND_GAPS.md` for the conditional future page structure and Phase 1 priorities; see `PRIVACY_TECH_AUDIT.md` for data, cookies, security and Phase 2 requirements. Phase 0 leaves the public site unchanged.
