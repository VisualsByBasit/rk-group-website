# RK Group — Phase 1 design and UX report

Date: 9 October 2026. Scope: design, user experience and information architecture. Public website identity: **RK Group**.

## Delivery and Git isolation

- Starting `main`: `62956808922a1438eef4bc3e145b3dbff8f837c2`.
- Work branch: `phase-1-redesign`, created from that commit before source changes. The branch did not previously exist.
- Implementation commit: `f0a7bccf98e9b4f2ef96679e8f616176ed472c68` — `Redesign RK Group with five focused corporate pages`.
- This report is a separate documentation commit. The final delivery response records its SHA, the push outcome and any automatic preview URL.
- Push destination: `origin/phase-1-redesign` only. No merge, main commit, main push, force push, reset, rebase or production promotion was performed.
- Immediately before the documentation commit, both local `main` and the remote `refs/heads/main` still resolved to the starting SHA. Remote `phase-1-redesign` did not yet exist.

Starting working-tree state, with no staged changes:

```text
 M next-env.d.ts
?? package-lock.json
?? public/assets/leadership/sheikh-saim-khalid-final.webp
?? source-assets/leadership/sheikh-saim-khalid-final.png
?? source-assets/saim-final-portrait.md
```

These five user files were excluded from Phase 1 commits and preserved byte-for-byte. Build-generated changes to `next-env.d.ts` were restored to the user's initial version after validation. The active Saim portrait remains `sheikh-saim-khalid-suit-v2.webp`; the untracked final variant was not substituted. A temporary backup and the newly generated TypeScript incremental cache were removed after use.

| Preserved file | SHA-256, verified after work |
| --- | --- |
| `next-env.d.ts` | `E64D36AF311A19E82B01E176FC36DBC5228C98588B63FB602F1879C837AA7654` |
| `package-lock.json` | `0008F7E279A80C7440E3A697DAF46A70651634C9F9E0CDA07B61CD3E84F26C61` |
| Saim final WebP | `0FE33B44756C35D913398B3BCEAB7EED822A08291F526185B8CBE330F03DAEF0` |
| Saim final PNG | `9B981400FB53BFFC7CBFE12FB22ED66C931A7FF296D0A0B9B0FF4D0C7F237992` |
| Saim provenance Markdown | `0C4C59D277BD5E872A4EE9A13231086F274AD6F5A5AB946A0393AD02FE9BC29F` |

## Baseline and design direction

The complete Phase 0 audit documents were read before implementation: `AUDIT_BASELINE.md`, `PRIVACY_TECH_AUDIT.md` and `REQUIREMENTS_AND_GAPS.md`. The repository and production website were inspected again. Relevant locally installed Next.js 16 documentation was consulted for routing, layouts, not-found handling, static export, image loading and scroll behavior.

The redesign replaces the single-page corporate dossier with five useful destinations. The visual system retains green, cream, dark tones, editorial type and existing local imagery, while reducing competing messages, repeated biography copy and decorative certification-like treatments. [Unilever](https://www.unilever.com/) and [Tata](https://www.tata.com/) were considered as navigation and corporate hierarchy references; no competitor assets, copy or branding were imported.

The central UX distinction is explicit: **brands are the names on consumer products; companies are the businesses across the portfolio**. Sector names come from existing material. Counts describe the seven brands and thirteen directory entries actually presented, rather than implying market scale, ownership or capacity.

## Architecture and page decisions

| Route | Purpose and implementation |
| --- | --- |
| `/` | Corporate identity, plain sector description, brand/company pathways, three featured brands and seven brand links, brief history, chairman preview, four company examples, operating principles and footer. Long biographies and the full company directory have moved out. |
| `/about/` | Group introduction, contextual Islamabad landscape, concise family-business narrative, four existing historical milestones, four sector groupings and operating principles. Heritage copy explicitly names the former KK Group chairmanship. |
| `/brands/` | All seven existing brands in individual editorial sections, jump navigation, concise descriptions, existing ranges/pack formats, complete product imagery, larger-image links and two verified brand Instagram links. |
| `/leadership/` | Chairman first; three directors and CFO next; Raja Muhammad Farooq in a distinct enterprise/community section; Sheikh Abdul Islam in a separate heritage section. Substantial existing chairman and heritage details remain available through disclosures. |
| `/companies/` | Thirteen existing company names, sectors and logos in a structured directory. Entries have no pointer affordance, fake CTA or empty detail destination. A clear link distinguishes consumer brands. |
| Custom not-found | Branded 404 with real homepage and Brands route links, plus the shared navigation/footer. Export generates `404.html`. |

No Contact, News, product-detail, person-detail, brand-detail or company-detail routes were fabricated. These require enough approved material to justify publication. Shared `PageIntro`, `EditorialLink`, navigation data and portfolio data support future expansion.

The homepage retains meaningful `#story`, `#leadership`, `#brands`, `#portfolio` and `#standards` targets. Existing `brand-*` fragments also remain as brand-index links. Brand-page sections use matching fragment names. No server-side fragment redirect was attempted.

## Hero, navigation and footer

- The primary identity is one stable corporate hero with RK Group, its sectors and two clear onward actions. The eight-slide hero component and its timer/control UI were removed.
- The Islamabad image is geographic context, captioned as Islamabad, Pakistan. It is not described as an RK Group facility.
- Header and footer use the visible name RK Group. Navigation is route-based: About, Brands, Leadership, Companies; active routes have `aria-current`.
- The mobile menu uses a native disclosure with an explicit Menu label, large rows, close state, Escape handling, focus-return to the summary and closure when focus leaves or a route is selected.
- Logo links return to `/` from every route. Breadcrumbs offer homepage recovery.
- The footer has route links, the verified RK Group Instagram account, a back-to-top link, and room for later approved legal/contact links. Existing privacy-notice wording and date were retained verbatim; it is not a new legal assessment.

## Design system, typography and motion

The rewritten global stylesheet consolidates the page system instead of layering more overrides onto the original carousel design. The obsolete Standards CSS module was removed. Font imports now occur only through the existing layout imports, without the former duplicate CSS imports.

| Element | Decision |
| --- | --- |
| Palette | Warm paper `#f4f1e9`, off-white `#fffefa`, ink `#142e25`, dark green `#10291f`, green `#225c3c`, muted text `#5b665f`; subdued brand-specific backgrounds. |
| Type | Existing locally served Space Grotesk headings, IBM Plex Sans body, Georgia editorial emphasis. No new typefaces or remote font requests. |
| Scale | Fluid headings, 16–18px primary copy, supporting labels/captions at least 13px; controlled line lengths. |
| Layout | Maximum 1320px content width; 48px desktop, 32px tablet and 20px phone side gutters; fluid section spacing. |
| Components | Thin dividers, editorial rows, rectangular primary buttons and underlined text links. No shadows/cards around every content block. |
| Motion | Short underline, arrow and image hover transitions; smooth in-page scrolling; no timed rotation, reveal dependency or scroll listener. Reduced motion disables transitions/animations and smooth scrolling. |
| Next.js integration | `data-scroll-behavior="smooth"` allows Next.js 16 to suppress smooth scrolling during route transitions, as its installed documentation specifies. |

## Brands, leadership and company assets

All seven brand images use `object-fit: contain`, so the complete existing composition remains visible on phones and tablets. A larger-image link opens the original local asset in a new tab, explicitly labelled and protected with `noopener noreferrer`. No packaging, identity, product photography or logos were generated or redrawn. Displayed **Dewan** is preserved; the existing `deewan` filename/fragment spelling remains a compatibility detail.

Brand descriptions were shortened, removing generic prestige wording without adding claims. Existing pack formats and product variants were retained as source content, not independently authenticated specifications. New verified social links are limited to RK Group, ACP and Islamabad Macaroni. The existing Abdul Haseeb LinkedIn link remains.

Portraits have explicit aspect-ratio containers and deliberate fit/positioning. Team profiles use two columns on wider layouts and one on phones, avoiding the former dense four-column tablet presentation. The former chairman's landscape image uses its native aspect ratio and `contain`. Raja Muhammad Farooq is not assigned an invented RK executive title. Director and CFO descriptions were condensed instead of padded with imagined achievements. Long chairman and historical disclosures retain their original detail and sources.

The company directory separates fixed logo regions from readable names and sector labels. Raster marks remain intact; the wider Brother Oil mark receives additional spacing. The homepage company preview uses two columns through tablet widths and four on wide screens. It does not imply clickable detail pages.

Operating principles now appear as three plain numbered editorial columns: care in the process, a long-term view and room to improve. Decorative seals and certification-like emblems were removed; no accreditation claims were added.

## Responsive and accessibility validation

Five routes were checked at **375, 390, 430, 768, 1024, 1440 and 1920px** (35 route/width combinations), with screenshot review of their first viewports and DOM checks for horizontal overflow, visible text/figure overflow, heading count and failed loaded images. Every page has one H1. These checks are not an exhaustive WCAG or cross-browser certification.

Additional visual inspection covered the full About page, all thirteen companies on mobile, the full brand catalogue, the tablet Macaroni range, mobile ACP range, chairman/director layouts, former-chairman portrait and disclosure, homepage brand/company previews, principles, footer, menu and 404. Images outside the viewport remain lazy and were reviewed as sections were reached; an unloaded offscreen image was not classified as a broken image.

Corrections made after rendering:

1. A homepage company-preview overflow at 768px was corrected by switching to two columns on tablets. Final homepage checks at all seven widths reported no horizontal overflow and no missing legacy anchors.
2. Small support labels were increased to 13px.
3. The Next.js route-transition scroll warning was resolved using the documented HTML attribute.
4. The first meaningful images on About, Brands and Leadership were made eager after development LCP warnings; other content images remain lazy. The homepage has one hero preload.

Interaction checks verified mobile-menu opening, Escape closing with focus returned to the summary, closure after route selection, heritage disclosure expansion without overflow, brand anchors, shared-logo navigation and custom-404 homepage recovery. The final exported homepage console check returned no warnings or errors.

Accessibility provisions include a skip link, semantic landmarks/headings, visible focus outlines, native disclosure semantics, descriptive image text, decorative logo/image alternatives where adjacent names already provide the information, explicit new-tab labels, and large primary/navigation controls. Text is never hidden pending a reveal animation. Test physical touch, screen-reader output, zoom and all platform-specific states in Phase 4.

Local screenshots and machine-readable responsive results are saved outside the repository under:

`C:/Users/destr/.codex/visualizations/2026/10/07/01a11686-cdf6-7843-9b91-7ed38b16f754/phase1/`

Key evidence: `home-desktop-final.jpg`, `home-mobile-final.jpg`, `review-{width}.jpg`, `responsive-matrix.json`, and `homepage-final-recheck.json`. The initial matrix records the discovered 768px issue; the final homepage recheck records its correction. These are local review artifacts, not public website routes.

## Build and technical results

| Check | Result |
| --- | --- |
| `npm run lint` | Passed, including after final source edits. |
| `npm run build` | Passed; five core routes plus custom not-found and existing metadata assets exported statically. |
| `node node_modules/typescript/bin/tsc --noEmit` | Passed after the final build. |
| `git diff --check` / staged diff check | Passed. Git's LF/CRLF conversion notices are not whitespace errors. |
| Exported internal reference check | Six HTML documents; 280 root-relative/fragment links and assets checked; zero missing files or fragment targets. |
| Production-output smoke check | Local static export served on port 3001; custom 404 and homepage recovery verified; final homepage captured without development UI. |
| User-file preservation | All five SHA-256 values matched the initial state after restoration. |

No dependencies, trackers, forms, persistent storage, CMS, animation framework, video, remote imagery or server-runtime features were added. Static export, trailing-slash behavior and unoptimized local images remain configured as before. Fewer hero images mount and only Header needs client interaction; no Core Web Vitals improvement percentage is claimed without measurement. Image sizing remains a Phase 4 performance investigation item.

## Files changed

Modified:

- `src/app/globals.css`
- `src/app/layout.tsx` — scroll-behavior attribute only; metadata/schema deliberately unchanged
- `src/app/page.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/Leadership.tsx`
- `src/components/Logo.tsx`
- `src/components/Standards.tsx`

Created:

- `src/app/about/page.tsx`
- `src/app/brands/page.tsx`
- `src/app/companies/page.tsx`
- `src/app/leadership/page.tsx`
- `src/app/not-found.tsx`
- `src/components/EditorialLink.tsx`
- `src/components/PageIntro.tsx`
- `src/lib/content.ts`
- `PHASE1_DESIGN_REPORT.md`

Removed as obsolete implementation code: `src/components/HeroSlideshow.tsx`, `src/components/Standards.module.css`. Existing public/source assets were not deleted or changed. Package files, configuration, audit reports, robots, sitemap and manifest were not redesigned.

## Asset limitations and recommended originals

- Obtain approved high-resolution original portraits of Saim Khalid, Atif Islam and Abdul Haseeb: provenance records describe generative clothing/background edits. No further reconstruction was performed.
- Obtain stronger original portraits for Raja Muhammad Farooq and Raja Abubakar Farooq before large-scale publication; compression/softness remains visible. Consider a consistent professional session for all seven people.
- Preserve Sheikh Abdul Islam's source scan and investigate the actual Apple rendering report. The improved container is not proof that the Apple issue is solved. Chairman Khalid Islam's existing image remains usable, subject to publication approval.
- Request SVG/vector masters for the Group identity and all thirteen company marks; raster marks contain different amounts of whitespace and small embedded wording.
- Request approved product photography and original pack artwork. Existing composites, including documented generated Macaroni imagery, are presentations rather than a verified SKU catalogue.
- Confirm the Islamabad image's source/license. Obtain real approved facilities photography if the company wants to depict its own property; the current cityscape must remain geographic context.

## Required company information and exact RK/KK questions

Existing source content was reorganized, not independently certified. RK Group must confirm:

1. Are RK Group and KK Group separate organizations, sister groups, related family businesses, or another arrangement? What exact public sentence describes that relationship?
2. Which of the thirteen listed companies belongs to, is owned by, or is merely affiliated with each group? What legal/trading names, business descriptions and public URLs are approved?
3. Which group should receive attribution for the 1953/1965 history and each later milestone? Are historical shareholdings in the heritage disclosure approved for continued publication, and what dated source supports them?
4. Are ACP, KK Oil & Ghee Mills, KKR Oil & Ghee Mills, Kashmir Oil & Ghee Mills and Mirpur Oil & Ghee Mills distinct entities? Which brands/manufacturers map to each? No names have been merged by inference.
5. Are all chairmanships, directorships, CFO appointments, association terms, chamber memberships and qualifications current and correctly attributed? What is Raja Muhammad Farooq's approved relationship to the Group beyond his existing community/business profile?
6. What is the approved founder identity and relationship? The old schema assertion was not expanded into visible copy.
7. What is the official Dewan/Deewan spelling, current catalogue, availability, pack sizing and approved category wording? Is Oxygen + historical only?
8. Are portrait likenesses, edits and publication permissions approved? Which Saim image is the approved final choice?

Additional content needed: verified public email, telephone, address, receiving team and inquiry purpose before Contact; owned editorial inventory before News; substantive company/person/brand facts before detail pages; evidence and approved wording before certifications, facilities, capacity, employee/revenue figures or sustainability claims. No such gaps were filled with fabricated data.

## Later-phase handoff

**Phase 2 — privacy, legal and security:** The existing notice remains untouched in meaning. Confirm controller identity, contact, hosting integrations/log retention and actual data processing. Decide approved policies and consent needs from observed technologies. Reassess the dependency advisories recorded in Phase 0, select the authoritative lockfile/package manager, and implement static-host security headers with regression testing. No tracking was added, and no legal-compliance guarantee is made.

**Phase 3 — SEO and entity architecture:** Existing inherited titles still use RK Group Of Industries, canonical/robots/sitemap configuration still contains the old domain, new page metadata is inherited, and the old Organization schema includes an unverified founder and naming inconsistencies. The OG image dimension issue remains. Resolve approved entities, relationship wording, titles, canonical URLs, social sameAs, Person/Brand schemas, sitemap, robots, indexing and Search Console together. No new hardcoded old-domain strings were introduced. Existing metadata is not ready for production acceptance simply because Phase 1 builds.

**Phase 4 — rigorous QA:** Test physical iPhone/iPad/macOS Safari, particularly Sheikh Abdul Islam's portrait decode/orientation/intrinsic-size behavior; all image crops and source approvals; native disclosure/focus behavior; menu resize/rotation; direct deep links, legacy hashes and back/forward scroll restoration; reduced motion, screen readers, keyboard-only operation and 200–400% zoom; narrow/landscape phones and tablet transitions; actual Vercel 404 status and refreshes; real network/load conditions, CLS/LCP and image transfer sizes; social links and expanded biography/privacy states. Phase 1 used the Codex in-app browser and does not claim full browser/device coverage.

**Phase 5:** Perform staging/regression acceptance after the remaining phases and company-content confirmation. This branch has not been promoted to production.
