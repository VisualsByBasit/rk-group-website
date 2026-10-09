import EditorialLink from "@/components/EditorialLink";
export default function NotFound() {
  return <section className="not-found tone-dark" id="top"><div className="shell"><p className="eyebrow">RK Group / 404</p><h1>This page<br /><em>could not be found.</em></h1><p>The link may have changed. Explore RK Group from the homepage or browse our brands.</p><div className="hero-actions"><EditorialLink href="/" button>Back to homepage</EditorialLink><EditorialLink href="/brands/">Explore our brands</EditorialLink></div></div></section>;
}
