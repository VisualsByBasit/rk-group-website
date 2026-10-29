import Link from "next/link";
import Logo from "./Logo";
import { emailReady, formReady, whatsappReady } from "@/lib/contact";

// The notice follows the contact switches so it always describes what the site actually does.
// Before adding the Meta Pixel or any analytics, update this notice and add a consent banner first.
const channels = ["phone", ...(whatsappReady ? ["WhatsApp"] : []), ...(emailReady ? ["email"] : [])];
const channelList = channels.length > 1 ? `${channels.slice(0, -1).join(", ")} or ${channels[channels.length - 1]}` : channels[0];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div><Logo light /><p>Generations of enterprise.<br />A future built with purpose.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation"><Link href="/#story">Our story</Link><Link href="/#leadership">Our leadership</Link><Link href="/#brands">Our brands</Link><Link href="/#distributors">Wholesale</Link><Link href="/#portfolio">Our companies</Link></nav>
        <a className="back-top" href="#top">Back to top <span>↑</span></a>
      </div>
      <div className="shell privacy-row">
        <details className="privacy-policy" id="privacy">
          <summary>Privacy</summary>
          <div className="privacy-copy">
            <h2>Privacy notice</h2>
            <p>This website presents RK Group and its brands. It has no accounts, payments or newsletters, and it does not store any personal information you enter.</p>
            <p>Wholesale enquiries are made directly with RK Group by {channelList}.{formReady && " The enquiry form on this website does not send or keep anything itself. It prepares your message and opens WhatsApp or your email app, and you decide whether to send it."}{whatsappReady && " Messages sent through WhatsApp are also covered by WhatsApp’s own privacy terms."}</p>
            <p>RK Group does not currently use non-essential cookies, advertising trackers or analytics on this website. The hosting provider may process basic technical information, such as an IP address, browser type and request time, to deliver and secure the website.</p>
            <p>If analytics, advertising or other data-collection tools are introduced, this notice will be updated and consent controls will be shown before any non-essential technology is used.</p>
            <p className="privacy-date">Last updated: 29 October 2026</p>
          </div>
        </details>
        <span className="cookie-status">Cookie status: no non-essential cookies</span>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} RK Group</span><span>Food · Manufacturing · Energy · Infrastructure</span></div>
    </footer>
  );
}
