import Link from "next/link";
import Logo from "./Logo";

const links = [["/about", "About"], ["/brands", "Brands"], ["/industries", "Industries"], ["/leadership", "Leadership"]] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <nav>{links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
        </details>
      </div>
    </header>
  );
}
