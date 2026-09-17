# RK Group of Industries — Website

Corporate website for RK Group of Industries, a diversified Pakistani
conglomerate. Built as a static Next.js site so it can be hosted anywhere
(no server/database required) and handed off cleanly.

> Built by Abdulbasit through November 2026. This README exists so
> whoever takes over the site next can get productive in minutes, not days.

## Stack

- **Next.js 16** (App Router), exported as **static HTML** (`output: "export"`
  in `next.config.ts`) — no Node server needed in production, just static
  file hosting.
- **TypeScript**
- **Tailwind CSS v4** — theme tokens (colors, fonts) live in `src/app/globals.css`
  under `@theme inline`.
- **@fontsource** for self-hosted fonts (Space Grotesk for headings, IBM
  Plex Sans for body) — chosen over `next/font/google` because it doesn't
  require a network call to Google Fonts at build time, which matters in
  restricted build environments.

## Project structure

```
src/
  app/
    page.tsx                    Home page (hero + sector-grouped company grid)
    about/page.tsx               About / leadership page
    contact/page.tsx             Contact page (HQ details + subsidiary list)
    companies/[slug]/page.tsx    One page per subsidiary, generated from data/companies.ts
    layout.tsx                   Root layout: fonts, nav, footer
    globals.css                  Design tokens (colors, fonts) + base styles
  components/
    SiteNav.tsx, SiteFooter.tsx
    CompanyCard.tsx, SectorSection.tsx
    CompanyLogo.tsx              Renders the real logo if the file exists, else...
    MonogramBadge.tsx            ...an auto-generated initials badge fallback
  data/
    companies.ts                 THE source of truth for every subsidiary
    siteConfig.ts                Group-wide contact info + KK Group cross-link
public/
  logos/                         Drop <slug>.png logo files here (see below)
  photos/                        Drop <slug>-1.jpg etc. photo files here
```

## How to add or edit a subsidiary

Everything about a company lives in one object in `src/data/companies.ts`.
To add a new one: copy an existing object, change the fields, and give it
a unique `slug` (used in the URL `/companies/<slug>`). That's it — the
home page grid, the sector grouping, and the detail page are all generated
automatically from this file.

- **No logo yet?** Leave `logo` unset (or point it at a file that doesn't
  exist yet). The site automatically shows a colored initials badge
  instead, so nothing breaks while real assets are being collected.
- **Got the logo?** Drop the PNG at `public/logos/<slug>.png` and set
  `logo: "/logos/<slug>.png"` in the data file.
- **Product/facility photos:** drop files in `public/photos/` and list
  their paths in the company's `photos: []` array.
- `isNew: true` shows a small "content in progress" note on the card and
  detail page — remove it once the subsidiary's real content is filled in.

## Pending real content (as of handoff)

These are placeholders that need real data — search `TODO` across the
repo to find them all:

- `src/data/siteConfig.ts` — HQ address, phone, WhatsApp, email, group
  Instagram handle, Google Maps embed URL, KK Group logo + Instagram handle.
- Logo files for the three newest subsidiaries: **Islamabad Macarony**,
  **Kashmir Tea**, **ACP Banaspati Ghee** (currently showing monogram
  fallbacks) — plus their per-brand Instagram handles and phone/email in
  `src/data/companies.ts`.
- Logo files for the original 13 subsidiaries currently referenced from
  the old single-page site — re-export or re-download these at full
  resolution into `public/logos/` using the slugs already set in
  `companies.ts` (matching filenames are listed there).
- Leadership / CEO message text on the About page (`src/app/about/page.tsx`).

## Running it locally

```bash
npm install
npm run dev        # dev server at localhost:3000
npm run build      # static export -> ./out
```

The `out/` folder after `npm run build` is the entire deployable site —
upload it as-is to any static host (Vercel, Netlify, cPanel, S3, etc.).

## Design notes

Palette and type choices are grounded in the group's actual sectors
(grain/oil gold, industrial slate, deep green-black) rather than a generic
template look — see the comments in `globals.css` for the token list.
Sectors are shown as grouped sections (Food & Beverage, Milling & Grains,
Edible Oils & Ghee, Chemicals, Energy, Manufacturing & Industrial,
Infrastructure) rather than one flat grid, because that's the real
structure of the group.
