import Link from "next/link";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { rkGroupSocial } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div><Logo light /><p>Generations of enterprise.<br />A future built with purpose.</p>
          <div className="footer-social"><p id="footer-follow">Follow RK Group</p><ul aria-labelledby="footer-follow">{rkGroupSocial.map(link => <li key={link.network}><a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`RK Group on ${link.network} (opens in a new tab)`}><SocialIcon network={link.network} /></a></li>)}</ul></div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation"><Link href="/#brands">Our brands</Link><Link href="/#leadership">Our leadership</Link><Link href="/#story">Our story</Link><Link href="/#portfolio">Our companies</Link><Link href="/#order">Order</Link><Link href="/contact/">Contact</Link><Link href="/ordering-terms/">Ordering terms</Link><Link href="/privacy/">Privacy</Link></nav>
        <a className="back-top" href="#top">Back to top <span>↑</span></a>
      </div>
      <div className="shell privacy-row">
        <p className="privacy-summary">This website stores nothing you enter and uses no non-essential cookies. <Link href="/privacy/">Read the full privacy page</Link>.</p>
        <span className="cookie-status">Cookie status: no non-essential cookies</span>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} RK Group</span><span>Food · Manufacturing · Energy · Infrastructure</span></div>
    </footer>
  );
}
