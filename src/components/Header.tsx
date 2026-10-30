"use client";

import Link from "next/link";

import { useRef } from "react";
import Logo from "./Logo";

const links = [["/#brands", "Brands"], ["/#leadership", "Leadership"], ["/#story", "Story"], ["/#portfolio", "Companies"], ["/#order", "Order"], ["/#standards", "Standards"]] as const;

export default function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Logo />
        <div className="header-actions">
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/#order">Place an Order</Link>
        <details className="mobile-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
          <summary aria-label="Toggle navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation"><Link className="header-cta header-cta--menu" href="/#order" onClick={() => { if (menu.current) menu.current.open = false; }}>Place an Order</Link>{links.map(([href, label]) => <Link href={href} key={href} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}</Link>)}</nav>
        </details>
        </div>
      </div>
    </header>
  );
}
