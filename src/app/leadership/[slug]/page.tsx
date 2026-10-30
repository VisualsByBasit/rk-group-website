import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { leaders, leaderBySlug, leaderImage, leaderPath } from "@/lib/leaders";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return leaders.map(({ slug }) => ({ slug })); }

async function getLeader(params: Props["params"]) {
  const leader = leaderBySlug((await params).slug);
  if (!leader) notFound();
  return leader;
}

export async function generateMetadata({ params }: Props) {
  const leader = await getLeader(params);
  return pageMetadata(leader.seo.title, leader.seo.description, leaderPath(leader), leaderImage(leader));
}

export default async function LeaderPage({ params }: Props) {
  const leader = await getLeader(params);
  const url = `${siteUrl}${leaderPath(leader)}`;
  const roles = leader.credentials.filter(item => item.kind !== "secondary");
  const memberships = leader.credentials.filter(item => item.kind === "secondary");
  const others = leaders.filter(other => other.slug !== leader.slug);
  const organization = { "@id": `${siteUrl}/#organization` };

  return <article className="profile">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Person", "@id": `${url}#person`, name: leader.name, ...(leader.alternateName && { alternateName: leader.alternateName }), url, image: `${siteUrl}${leaderImage(leader)}`, jobTitle: leader.jobTitle, description: leader.seo.description, ...(leader.rkRole ? { worksFor: organization } : { affiliation: organization }), ...(leader.profiles && { sameAs: leader.profiles.map(profile => profile.href) }) },
      { "@type": "ProfilePage", "@id": `${url}#webpage`, url, name: leader.seo.title, description: leader.seo.description, mainEntity: { "@id": `${url}#person` }, isPartOf: { "@id": `${siteUrl}/#website` }, publisher: organization },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "RK Group", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Leadership", item: `${siteUrl}/#leadership` }, { "@type": "ListItem", position: 3, name: leader.name, item: url }] },
    ] }} />

    <header className="profile-hero">
      <div className="shell profile-hero-inner">
        <nav className="profile-breadcrumb" aria-label="Breadcrumb"><Link href="/">RK Group</Link><span aria-hidden="true">/</span><Link href="/#leadership">Leadership</Link><span aria-hidden="true">/</span><span aria-current="page">{leader.name}</span></nav>
        <div className={`profile-portrait profile-portrait--${leader.slug}`}><Image src={leaderImage(leader)} alt={leader.imageAlt} fill sizes="(max-width: 860px) 100vw, 42vw" preload />{leader.caption && <span className="portrait-caption">{leader.caption}</span>}</div>
        <div className="profile-hero-body">
          <p className="eyebrow light"><span /> {leader.label}</p>
          <h1>{leader.name}</h1>
          <p className="profile-statement">{leader.intro ? <>{leader.intro[0]}<br />{leader.intro[1]}</> : leader.summary[0]}</p>
          <ul className="credential-pills profile-roles" aria-label={`${leader.name} roles`}>{roles.filter(item => item.kind === "primary").map(item => <li className="credential-pill credential-pill--primary" key={item.text}>{item.text}</li>)}</ul>
        </div>
      </div>
    </header>

    <div className="shell profile-body">
      <div className="profile-story">
        <h2>About {leader.name}</h2>
        {leader.intro && leader.summary.map(paragraph => <p className="profile-lead" key={paragraph}>{paragraph}</p>)}
        {leader.bio.map((section, index) => <Fragment key={index}>
          {section.heading && <h3>{section.heading}</h3>}
          {section.paragraphs.map((paragraph, paragraphIndex) => <p className={!leader.intro && index === 0 && paragraphIndex === 0 ? "profile-lead" : undefined} key={paragraph}>{paragraph}</p>)}
        </Fragment>)}
        {leader.pageBio?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {leader.milestones && <section className="profile-milestones" aria-labelledby="milestones-title">
          <h2 id="milestones-title">KK Group history and group concerns</h2>
          <ol>{leader.milestones.map(milestone => <li key={milestone.title}><span>{milestone.when}</span><div><h3>{milestone.title}</h3><p>{milestone.copy}</p></div></li>)}</ol>
          {leader.milestonesNote && <p className="profile-note">{leader.milestonesNote}</p>}
        </section>}
        {leader.sources && <p className="profile-sources">Further reading: {leader.sources.map((source, index) => <Fragment key={source.href}>{index > 0 && (index === leader.sources!.length - 1 ? " and " : ", ")}<a href={source.href}>{source.label}</a></Fragment>)}.</p>}
      </div>

      <aside className="profile-record" aria-labelledby="record-title">
        <h2 id="record-title">Roles and record</h2>
        <ol className="record-list">{roles.map((item, index) => <li key={item.text}><span>{String(index + 1).padStart(2, "0")}</span>{item.text}</li>)}</ol>
        {memberships.length > 0 && <><h3>Memberships</h3><ul className="record-list record-list--plain">{memberships.map(item => <li key={item.text}>{item.text.replace(/^Member, /, "")}</li>)}</ul></>}
        {leader.profiles && <><h3>Profiles</h3><ul className="record-list record-list--plain">{leader.profiles.map(profile => <li key={profile.href}><a href={profile.href} rel="noopener noreferrer" target="_blank">{profile.label} <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a></li>)}</ul></>}
        <Link className="profile-back" href="/#leadership"><span aria-hidden="true">←</span> Back to the leadership</Link>
      </aside>
    </div>

    <section className="profile-others" aria-labelledby="others-title">
      <div className="shell">
        <div className="profile-others-head">
          <div><p className="eyebrow"><span /> The people behind the progress</p><h2 id="others-title">More of our leadership</h2></div>
          <Link className="brand-page-link" href="/#leadership">See the leadership on the homepage ↗</Link>
        </div>
        <ul className="profile-others-grid">
          {others.map(other => <li key={other.slug}>
            <Link href={leaderPath(other)}>
              <span className={`profile-others-portrait profile-portrait--${other.slug}`}><Image src={leaderImage(other)} alt="" fill sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 200px" /></span>
              <span className="profile-others-label">{other.label}</span>
              <span className="profile-others-name">{other.name}</span>
            </Link>
          </li>)}
        </ul>
      </div>
    </section>
  </article>;
}
