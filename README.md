# RK Group website

Premium, responsive single-page corporate website for RK Group. The site is built with Next.js and TypeScript and exports to static HTML for straightforward deployment.

## Local development

```bash
pnpm install
pnpm dev
```

Create a production export with `pnpm build`. The deployable site is written to `out/`.

## Image optimization

Original high-resolution artwork is retained under `source-assets/`. Production-ready WebP and optimized PNG files are generated under `public/assets/`.

```bash
pnpm optimize:images
```

## Search and social readiness

The site includes canonical metadata, Open Graph and Twitter metadata, Organization structured data, a static sitemap, robots rules, descriptive alternative text and semantic page structure.

To connect Google Search Console:

1. Add the deployed domain as a URL-prefix property.
2. Choose the HTML tag verification method.
3. Copy only the verification token into the deployment environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
4. Rebuild and deploy the site.
5. Verify ownership in Search Console.
6. Submit `https://rkgroupindustries.com/sitemap.xml`.

After deployment, test the live URL with Google Rich Results Test, Facebook Sharing Debugger and LinkedIn Post Inspector.

## Privacy

The current site does not intentionally use analytics, advertising trackers, forms or non-essential cookies. The footer privacy notice must be reviewed whenever a feature that processes visitor data is introduced.
