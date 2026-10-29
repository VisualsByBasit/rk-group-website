import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { leaders, leaderImage, leaderPath, type Leader } from "@/lib/leaders";

const chairman = leaders.find(leader => leader.home.variant === "chairman")!;
const former = leaders.find(leader => leader.home.variant === "former")!;
const team = leaders.filter(leader => leader.home.variant === "team");
const finance = leaders.find(leader => leader.home.variant === "finance")!;

const pillClass = (kind?: string) => `credential-pill${kind ? ` credential-pill--${kind}` : ""}`;

function Sources({ leader }: { leader: Leader }) {
  if (!leader.sources) return null;
  return <p className="biography-sources">Further reading: {leader.sources.map((source, index) => <Fragment key={source.href}>{index > 0 && (index === leader.sources!.length - 1 ? " and " : ", ")}<a href={source.href}>{source.label}</a></Fragment>)}.</p>;
}

function Biography({ leader }: { leader: Leader }) {
  return (
    <div className="biography-copy">
      {leader.bio.map((section, index) => <Fragment key={index}>{section.heading && <h4>{section.heading}</h4>}{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</Fragment>)}
      {leader.milestones?.map(milestone => <Fragment key={milestone.title}><h4>{milestone.when ? `${milestone.when} · ${milestone.title}` : milestone.title}</h4><p>{milestone.copy}</p></Fragment>)}
      {leader.milestonesNote && <p>{leader.milestonesNote}</p>}
      <Sources leader={leader} />
      {leader.profiles?.map(profile => <p className="biography-sources" key={profile.href}><a href={profile.href}>View {leader.name} on {profile.label}</a></p>)}
    </div>
  );
}

function Feature({ leader, former: isFormer }: { leader: Leader; former?: boolean }) {
  const titleId = isFormer ? "former-chairman-title" : undefined;
  return (
    <article className={`chairman-feature${isFormer ? " former-chairman" : ""}`} aria-labelledby={titleId}>
      <div className="chairman-portrait"><Image src={leaderImage(leader)} alt={leader.imageAlt} fill sizes="(max-width: 720px) 100vw, 42vw" /><span className="portrait-caption">{leader.caption}</span></div>
      <div className="chairman-body">
        <p className="eyebrow light"><span /> {leader.label}</p>
        <h3 id={titleId}>{leader.nameLines?.[0]}<br />{leader.nameLines?.[1]}</h3>
        {!isFormer && <Link className="brand-page-link" href={leaderPath(leader)}>View {leader.name}’s profile ↗</Link>}
        {leader.intro && <p className="chairman-intro">{leader.intro[0]}<br />{leader.intro[1]}</p>}
        {leader.summary.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {!isFormer && <ul className="credential-pills chairman-credentials" aria-label="Chairman roles and memberships">{leader.credentials.map(item => <li className={pillClass(item.kind)} key={item.text}>{item.text}</li>)}</ul>}
        <details className="profile-details">
          <summary>{leader.home.detailLabel} <span aria-hidden="true">+</span></summary>
          <Biography leader={leader} />
        </details>
      </div>
    </article>
  );
}

function TeamCard({ leader, finance: isFinance }: { leader: Leader; finance?: boolean }) {
  const titleId = isFinance ? `${leader.slug}-title` : undefined;
  const roles = leader.credentials.filter(item => item.kind !== "secondary");
  const memberships = leader.credentials.filter(item => item.kind === "secondary");
  return (
    <article className={`team-profile${isFinance ? " finance-profile" : ""}`} aria-labelledby={titleId}>
      <div className={`team-portrait${leader.home.portraitClass ? ` team-portrait--${leader.home.portraitClass}` : ""}`}><Image src={leaderImage(leader)} alt={leader.imageAlt} fill sizes={isFinance ? "(max-width: 720px) 100vw, 320px" : "(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw"} /></div>
      <div className="team-body">
        <p className="leader-index">{leader.label}</p>
        <h3 id={titleId}>{leader.name}</h3>
        <ul className="credential-pills team-roles" aria-label={`${leader.name} ${isFinance ? "roles" : "roles and qualifications"}`}>{roles.map(item => <li className={pillClass(item.kind)} key={item.text}>{item.text}</li>)}</ul>
        {leader.summary.map(paragraph => <p className="team-description" key={paragraph}>{paragraph}</p>)}
        {memberships.length > 0 && <ul className="credential-pills chamber-list" aria-label={memberships.some(item => item.text.includes("PVMA")) ? "Industry and chamber memberships" : "Chamber memberships"}>{memberships.map(item => <li className={pillClass(item.kind)} key={item.text}>{item.text}</li>)}</ul>}
        <details className="profile-details">
          <summary>{leader.home.detailLabel} <span aria-hidden="true">+</span></summary>
          <Biography leader={leader} />
        </details>
      </div>
    </article>
  );
}

export default function Leadership() {
  return (
    <section className="leadership section-pad" id="leadership" aria-labelledby="leadership-title">
      <div className="shell section-heading leadership-heading">
        <div><p className="eyebrow light"><span /> The people behind the progress</p><h2 id="leadership-title">Rooted in experience.<br /><em>United by purpose.</em></h2></div>
        <p>Led by Chairman Sheikh Khalid Islam, our leadership connects generations of enterprise with the ambition to build lasting value.</p>
      </div>
      <div className="shell">
        <Feature leader={chairman} />
        <Feature leader={former} former />
        <div className="leadership-divider"><span>Shared values. Complementary experience.</span><span>Our leadership</span></div>
        <div className="leadership-team">
          {team.map(leader => <TeamCard leader={leader} key={leader.slug} />)}
        </div>
        <TeamCard leader={finance} finance />
      </div>
    </section>
  );
}
