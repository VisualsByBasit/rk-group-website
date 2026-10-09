import Link from "next/link";
import type { ReactNode } from "react";
export default function PageIntro({ label, title, children, dark = false }: { label: string; title: ReactNode; children: ReactNode; dark?: boolean }) {
  return <section className={`page-intro ${dark ? "tone-dark" : ""}`} id="top"><div className="shell">
    <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
    <div className="intro-grid"><div><p className="eyebrow">{label}</p><h1>{title}</h1></div><div className="intro-copy">{children}</div></div>
  </div></section>;
}
