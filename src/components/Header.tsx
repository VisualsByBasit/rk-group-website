"use client";

import { useRef } from "react";
import Logo from "./Logo";

const links = [["#story", "Story"], ["#leadership", "Leadership"], ["#brands", "Brands"], ["#portfolio", "Companies"], ["#standards", "Standards"]] as const;

export default function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <details className="mobile-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
          <summary aria-label="Toggle navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">{links.map(([href, label]) => <a href={href} key={href} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}</a>)}</nav>
        </details>
      </div>
    </header>
  );
}
