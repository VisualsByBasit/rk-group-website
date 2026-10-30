import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

const links = [["/", "Home"], ["/#brands", "Our brands"], ["/#order", "Place an Order"]] as const;

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="shell">
        <p className="eyebrow light"><span /> Page not found</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title">We could not find that page.</h1>
        <p className="not-found-note">It may have moved, or the link may be out of date. These will get you back on track.</p>
        <nav aria-label="Helpful links">{links.map(([href, label]) => <Link href={href} key={href} {...(href === "/#order" && { "data-track": "Place an Order", "data-where": "404" })}>{label} <span aria-hidden="true">↗</span></Link>)}</nav>
      </div>
    </section>
  );
}
