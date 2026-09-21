import Logo from "./Logo";

const links = [["#story", "Story"], ["#leadership", "Leadership"], ["#brands", "Brands"], ["#portfolio", "Companies"], ["#standards", "Standards"]] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav>{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        </details>
      </div>
    </header>
  );
}
