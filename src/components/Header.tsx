"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Logo from "./Logo";
import { navigation } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const active = (href: string) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return <header className="site-header"><div className="shell nav-wrap">
    <Logo />
    <nav className="desktop-nav" aria-label="Main navigation">
      {navigation.map(([href, label]) => <Link href={href} key={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
    </nav>
    <details className="mobile-menu" key={pathname} ref={menu}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}
      onKeyDown={event => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
      <summary>Menu <span className="menu-mark" aria-hidden="true"><i /><i /></span></summary>
      <nav aria-label="Mobile navigation"><p className="eyebrow">Explore RK Group</p>
        {navigation.map(([href, label], i) => <Link href={href} key={href} aria-current={active(href) ? "page" : undefined} onClick={() => { if (menu.current) menu.current.open = false; }}><span>{label}</span><small>0{i + 1}</small></Link>)}
        <Link className="menu-home" href="/" onClick={() => { if (menu.current) menu.current.open = false; }}>Back to homepage <span aria-hidden="true">↗</span></Link>
      </nav>
    </details>
  </div></header>;
}
