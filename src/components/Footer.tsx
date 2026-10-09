import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "@/lib/content";
export default function Footer() { return <footer className="site-footer"><div className="shell footer-top"><div><Logo light /><h2>Explore RK Group.</h2></div><nav className="footer-nav" aria-label="Footer navigation">{navigation.map(([href, label]) => <Link href={href} key={href}>{label}<span aria-hidden="true">↗</span></Link>)}</nav><div className="footer-social"><span>Food · Manufacturing · Energy · Infrastructure</span><a href="https://www.instagram.com/rkgroup_of_industries/">RK Group on Instagram ↗</a></div></div>      <div className="shell privacy-row">
        <details className="privacy-policy" id="privacy">
          <summary>Privacy</summary>
          <div className="privacy-copy">
            <h2>Privacy notice</h2>
            <p>This website is an informational presentation of RK Group. It does not currently provide accounts, forms, payments, newsletters or other features that intentionally collect personal information.</p>
            <p>RK Group does not currently use non-essential cookies, advertising trackers or analytics on this website. The hosting provider may process basic technical information, such as an IP address, browser type and request time, to deliver and secure the website.</p>
            <p>If analytics, marketing tools or data-collection features are introduced, this notice will be updated and appropriate consent controls will be presented before non-essential technologies are used.</p>
            <p className="privacy-date">Last updated: 21 September 2026</p>
          </div>
        </details>
        <span className="cookie-status">Cookie status: no non-essential cookies</span>
      </div>
<div className="shell footer-bottom"><span>© {new Date().getFullYear()} RK Group</span><a href="#top">Back to top ↑</a></div></footer>; }
