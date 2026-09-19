import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Logo light /><p>Industry with purpose.<br />Everyday value, built to endure.</p></div>
        <div className="footer-nav"><span>Explore</span><Link href="/about">About</Link><Link href="/brands">Brands</Link><Link href="/industries">Industries</Link><Link href="/leadership">Leadership</Link></div>
        <div className="footer-mark" aria-hidden="true">RK</div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} RK Group</span><span>Pakistan</span></div>
    </footer>
  );
}
