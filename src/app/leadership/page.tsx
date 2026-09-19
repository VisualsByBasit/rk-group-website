import Image from "next/image";

export const metadata = { title: "Leadership", description: "Meet Sheikh Khalid Islam, Chief Executive Officer of RK Group and Vice Chairman of the Pakistan Vanaspati Manufacturers Association.", alternates: { canonical: "/leadership/" }, openGraph: { url: "/leadership/", title: "Leadership at RK Group" } };

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero page-hero--leadership"><div className="shell"><p className="kicker"><span></span> Leadership</p><h1>Stewardship for<br /><em>the long term.</em></h1><p>RK Group’s leadership is grounded in disciplined enterprise, industry knowledge and a responsibility to build beyond the present.</p></div></section>
      <section className="leader-profile shell">
        <div className="leader-profile-image"><Image src="/leadership/sheikh-khalid-islam.jpg" alt="Sheikh Khalid Islam, Chief Executive Officer of RK Group" fill sizes="(max-width: 800px) 90vw, 44vw" priority /></div>
        <div className="leader-profile-copy"><p className="section-tag">Chief Executive Officer</p><h2>Sheikh Khalid Islam</h2><p className="leader-role">Chief Executive Officer, RK Group<br />Vice Chairman, Pakistan Vanaspati Manufacturers Association</p><p>Sheikh Khalid Islam leads RK Group with a practical, long-term approach to industrial growth. His work brings together operating discipline, product quality and the ambition to strengthen the sectors that serve everyday life.</p><p>His election as Vice Chairman of the Pakistan Vanaspati Manufacturers Association for the 2024–2026 term reflects active engagement with Pakistan’s edible oil and ghee industry.</p>
        <div className="quote-card"><span>“</span><p>Leadership is the discipline of turning responsibility into lasting progress.</p></div></div>
      </section>
    </>
  );
}
