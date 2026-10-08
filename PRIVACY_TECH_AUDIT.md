# RK Group — privacy, data and security baseline

Date: 7 October 2026, Asia/Karachi. Audit-only evidence from source, browser DOM/console, live HTTP responses and read-only npm advisory query. This is a technical inventory, not legal advice or a compliance certification.

## Actual implementation

The current site is an informational static export. No forms, accounts, payments, newsletter, upload, search submission, API routes, Server Actions, database, email provider or CMS were found. Rendered local DOM contained zero forms and zero iframes. Header interactions and carousel state use React state/refs; disclosures use native HTML. No visitor input is intentionally persisted by authored source.

Search covered `src`, Next config, package manifest/lockfiles, README and environment example for cookie/storage APIs, SDKs, fetch/axios, forms, embeds, external URLs and environment references. No authored `document.cookie`, localStorage, sessionStorage, IndexedDB or service worker usage found. No GA/GTM, Meta Pixel, Vercel Analytics/Speed Insights, advertising pixel, chat, CAPTCHA, newsletter SDK, maps, Instagram embed or YouTube/video embed found. A site-verification token is metadata, not Google Analytics.

## Cookie/storage inventory — no invented entries

| Technology | Actual key/name discovered | Source evidence | Runtime evidence | Provider / purpose / expiry / category / consent |
|---|---|---|---|---|
| Cookies | None identified | No cookie API/library | No Set-Cookie on inspected production homepage, metadata endpoints or 404 responses | No item to classify; cannot supply a duration or consent classification for an undiscovered cookie |
| localStorage | None identified | No usage | Browser tool did not expose the storage API; enumeration unavailable | Not established |
| sessionStorage | None identified | No usage | Same limitation | Not established |
| IndexedDB | None identified | No usage | Database enumeration unavailable | Not established |
| React state | active slide, paused flag, menu ref | HeroSlideshow/Header | Controls visibly function | In-memory UI state; resets on reload; not persistent browser storage |
| HTTP/browser cache | Static HTML, scripts, styles, fonts, images | Static export | Vercel cache headers observed | Delivery mechanism, not an identified tracking cookie; retention varies by resource/browser and is not a declared personal-data retention schedule |

**Important limit:** The read-only browser scope did not expose localStorage/sessionStorage/document.cookie inventory; an attempted enumeration could not run. An absent Set-Cookie header does not rule out JavaScript-created cookies, existing cookies, hosting challenges, regional variations or platform injection. Therefore the result is **no authored storage/tracking found, no response cookies observed**, not “proven cookie-free.” Phase 2 must check a fresh browser profile and full network/storage panels, including reload and expanded sections. Do not deploy a generic cookie list or consent banner based on assumptions.

## Providers, scripts and external destinations

| Provider/surface | Current use | Data flow / consent implications to assess |
|---|---|---|
| Vercel | Production host confirmed by Server header | Requests necessarily reach hosting infrastructure; actual log fields, purpose, access, regions and retention need account/company confirmation |
| Next.js/React | Local JS chunks, hydration and static generation | Production DOM showed seven same-origin external script URLs plus inline framework scripts and JSON-LD; no external analytics script URL seen |
| Fontsource fonts | Bundled Space Grotesk and IBM Plex Sans | Delivered locally; no Google Fonts CDN request integration in source |
| npm | Build/development dependency registry | Not an authored visitor-facing data endpoint; this audit queried public dependency advisories |
| PVMA, Dawn, Tribune, Business Recorder | External biography references | Ordinary same-tab links. Visitor may disclose normal request/referrer information if clicked; no embed SDK is loaded by those links |
| LinkedIn | Existing Abdul Haseeb profile link | External link only; account ownership not independently authenticated |
| Instagram | Three user-verified accounts supplied for future use | Currently not linked, embedded or added to schema; no Instagram runtime integration |
| schema.org | JSON-LD vocabulary URL | Declarative vocabulary, not itself an external tracking script |

No remote font CDN, media CDN, form provider, CAPTCHA, chat provider, map service, newsletter tool or external runtime script was identified in application source. Runtime verification was a DOM script inventory, not a complete captured network log. Hosting-level integrations must still be confirmed in Vercel settings.

## Forms and submitted data

No form exists. Accordingly fields, validation, submission destination, email delivery, storage, spam handling, sensitive fields, consent checkbox and unsubscribe workflow are **not applicable to the current authored implementation**. There is also no visible mailto/tel or public contact channel. Do not invent a form backend or retention policy. A future contact form would create new requirements and should be designed only after its recipient, provider, processing purpose and access rules are confirmed.

## Existing privacy/legal content

`Footer.tsx` contains an expandable Privacy notice (`#privacy`), last updated **21 September 2026**. It says the site intentionally has no accounts/forms/payments/newsletters; no non-essential cookies, advertising trackers or analytics; the host may process technical request information; and future tools would prompt notice/consent changes. It also renders “Cookie status: no non-essential cookies.”

This is explanatory text, **not a consent manager or live cookie detection system**. The wording broadly matches source but must be validated against hosting behavior. It lacks a confirmed legal controller/entity, business/privacy contact, jurisdiction/applicability assessment, verified provider/logging details, retention basis, rights/request mechanism and company approval. A copyright line exists. There are no standalone Privacy Policy, Cookie Policy, Terms of Use, cookie settings, marketing consent or trademark terms. Their necessity/content must follow actual processing and legal/company review.

## Live security headers and transport

Read-only HTTP checks at approximately 18:24 PKT on 7 October 2026:

| Control | Observed state |
|---|---|
| HTTPS | Homepage served 200 over HTTPS; HTTP request followed redirect to HTTPS |
| HSTS | `Strict-Transport-Security: max-age=63072000` on inspected responses; no includeSubDomains/preload directive in sample |
| Content-Security-Policy | Not present on inspected homepage/404/metadata responses; none configured in repo |
| Frame restrictions | No X-Frame-Options or CSP frame-ancestors observed |
| X-Content-Type-Options | Not observed |
| Referrer-Policy | Not observed; browser defaults may apply, but no explicit site policy established |
| Permissions-Policy | Not observed |
| CORS | `Access-Control-Allow-Origin: *` on sampled public static responses; not by itself evidence of private data exposure |
| Cookies | No Set-Cookie header on sampled responses |
| Content types | HTML text/html; robots text/plain; sitemap application/xml; manifest application/manifest+json |
| Caching | Sample homepage `Cache-Control: public, must-revalidate, max-age=0`, Vercel HIT; exact asset policies not exhaustively inventoried |

No `vercel.json`, middleware or custom security header configuration found. Static export changes where hardening is configured: verify Vercel/host-level response headers rather than assuming a Next runtime header function will govern exported files.

Other observations:

- No application secrets found in inspected source. Only public site URL and optional public Search Console verification token are referenced. Vercel private environment/secrets were not accessed; repository history was not exhaustively scanned for secrets.
- External links do not use target=_blank, so a missing rel=noopener on new-window links is not a current finding. Future new-window links need deliberate rel/referrer handling.
- JSON-LD uses dangerouslySetInnerHTML with `<` escaped. It is fixed content, not untrusted input. Next-generated inline hydration scripts also exist; a broad CSP could break functionality if introduced without an export-compatible hash/nonce strategy and testing.
- No user-input endpoint/form abuse surface in the authored static site. Hosting/admin/DNS account security remains outside this audit.
- No public `.map` files in the inspected local export; browser source-map generation not enabled in config. Live source-map exposure not exhaustively probed.
- Static export limits dynamic server attack surface but does not remove supply-chain/build, deployment-account or content-integrity risks.

## Dependency advisory results

`npm audit --json --ignore-scripts` succeeded as a query and returned exit 1 for findings: **7 package entries: 1 critical, 6 high**. It used the existing untracked npm lock; the tracked pnpm lock also contains the named Next/braces/source-map-js versions. No dependency was installed, updated or automatically fixed.

| Reported package(s) | Advisory / interpretation |
|---|---|
| next 16.3.5 — critical | [GHSA-vcvr-r3jv-pc5j](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j): Node next/og ImageResponse with attacker-controlled SVG input. Advisory lists 16.3.6 as patched. No next/og, ImageResponse or request-driven image endpoint found; exploitation path not established for this static export. Upgrade planning still required |
| braces plus micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next — five high entries | [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), pattern-related denial of service; much of count is dependency propagation in lint tooling, not five separate remote site exploits |
| source-map-js — high | [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q), indexed source-map denial of service; build/tooling applicability must be assessed |

Advisory pages were opened to check the audit output. npm suggested Next 16.4.0 and a major downgrade of eslint-config-next for part of the tree; **do not blindly apply audit fix --force or downgrade Next lint tooling**. In Phase 2 select compatible patched versions, establish the authoritative package manager/lockfile, rebuild and regress. These are dependency findings, not evidence that the production site has been compromised.

## Phase 2 implementation requirements (conditional, no implementation now)

1. Obtain company-approved public legal/controller identity, contact and applicable markets/jurisdictions. RK Group remains the public website name; domain wording is not proof of a legal name.
2. Verify actual hosting integrations, logs, access, transfers and retention with the account owner. Recheck cookies/storage/network in a clean session. Record real names, providers, triggers and expiry only when observed.
3. Draft a privacy notice reflecting verified processing, provider roles, purposes, contact/request handling and effective/review dates. Get company/legal approval; do not assert GDPR or national-law compliance.
4. Decide whether a separate cookie policy/settings mechanism is useful or legally relevant based on actual technologies. No evidence currently justifies inventing marketing/analytics cookies. If optional tracking/embeds are introduced, assess consent requirements, block appropriately before consent where applicable, provide withdrawal/settings and test choices.
5. If a contact form is approved later, document collected fields, destination, provider/storage, access, purpose, retention, validation, spam protection, disclosure and deletion/request workflow. Keep marketing consent separate from a basic inquiry if marketing is introduced.
6. Review Terms of Use, copyright/trademark attribution and external-link wording with the business/legal owner. Avoid blanket no-liability or legal-protection claims. Newsletter consent/unsubscribe is conditional on a newsletter actually being added.
7. Stage security headers appropriate to the static deployment: nosniff, explicit referrer and permissions policies, frame restrictions, and a tested CSP. Account for fonts, image assets, JSON-LD and Next inline scripts; use report-only evaluation first where practical. Preserve HTTPS/HSTS and confirm domain coverage before expansion.
8. Address dependency advisories with compatible upgrades and tests. Confirm reproducible builds and lockfile choice. No forced fixes in this audit.
9. Acceptance evidence: production-like response headers; fresh-session storage/network inventory; policy-to-implementation agreement; no console/CSP breakage; forms/consent tests only if implemented; company/legal sign-off recorded.

## Remaining unknowns

Exact legal identity, jurisdiction and target markets; Vercel project configuration and log retention; fresh-browser cookie/storage results; identity/rights authorization for published people and artwork; real-world currency of roles and historical ownership claims; physical Apple rendering; complete live network behavior. These unknowns should remain visible in later phases rather than being replaced by template assertions.
