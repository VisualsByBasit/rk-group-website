import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div><Logo light /><p>Generations of enterprise.<br />A future built with purpose.</p></div>
        <a className="back-top" href="#top">Back to top <span>↑</span></a>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} RK Group</span><span>Food · Manufacturing · Energy · Infrastructure</span></div>
    </footer>
  );
}
