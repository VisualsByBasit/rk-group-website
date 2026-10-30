import Link from "next/link";

export default function PageHero({ title, intro, crumb }: { title: string; intro: string; crumb: string }) {
  return (
    <header className="page-hero">
      <div className="shell">
        <nav className="profile-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true">/</span><span aria-current="page">{crumb}</span></nav>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </header>
  );
}
