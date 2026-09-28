import Image from "next/image";

const leaders = [
  {
    name: "Raja Muhammad Farooq",
    image: "raja-muhammad-farooq.webp",
    label: "Enterprise & community",
    roles: ["Entrepreneur & community leader", "Former Senior Vice Chairman, PVMA · Two terms"],
    copy: "From Sahamni, Azad Jammu & Kashmir, to Islamabad and Mirpur, a life shaped by enterprise, public service and a lasting commitment to the people of Kashmir.",
    detail: "farooq" as const,
  },
  {
    name: "Sheikh Saim Khalid",
    image: "sheikh-saim-khalid.webp",
    label: "Next-generation leadership",
    roles: ["Director, RK Group", "Director, KK Group"],
    copy: "Carrying a family tradition of enterprise into its next chapter, with a focus on enduring relationships, thoughtful progress and the values established over generations.",
    detail: "saim" as const,
  },
  {
    name: "Raja Abubakar Farooq",
    image: "raja-abubakar-farooq.webp",
    label: "Business & professional service",
    roles: ["Director, RK Group", "Director, KK Group", "Law graduate"],
    copy: "Bringing a legal education and an active connection with the business community to his directorships at RK Group and KK Group.",
    detail: "abubakar" as const,
  },
];

function FarooqBiography() {
  return (
    <div className="biography-copy">
      <p>Originally from Sahamni, AJK, Raja Muhammad Farooq moved to Islamabad in 1985. With an MBA, CA and LLB, he built interests in oil, plastics, tea, soap and ghee manufacturing.</p>
      <p>The first PTI President in Azad Kashmir and twice Senior Vice Chairman of PVMA, he continues his business projects in Mirpur and community service in Sahamni. His son, Raja Abubakar Farooq, carries forward the family’s enterprise.</p>
    </div>
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
        <article className="chairman-feature">
          <div className="chairman-portrait"><Image src="/assets/leadership/sheikh-khalid-islam.webp" alt="Sheikh Khalid Islam, Chairman of RK Group" fill sizes="(max-width: 720px) 100vw, 42vw" /><span className="portrait-caption">Office of the Chairman</span></div>
          <div className="chairman-body">
            <p className="eyebrow light"><span /> Chairman · RK Group & KK Group</p>
            <h3>Sheikh<br />Khalid Islam</h3>
            <p className="chairman-intro">Guiding the Group.<br />Building for generations.</p>
            <p>With extensive experience in Pakistan’s edible oil and banaspati ghee industry, Sheikh Khalid Islam leads RK Group and KK Group with an emphasis on operating discipline, resilience and product quality.</p>
            <ul className="chairman-credentials"><li><span>Industry leadership</span>Vice Chairman, PVMA · 2024–2026</li><li><span>Previous service</span>Vice Chairman, PVMA · 2017–2018</li><li><span>Business community</span>Member, FPCCI</li></ul>
            <details className="profile-details"><summary>More about the Chairman <span aria-hidden="true">+</span></summary><div className="biography-copy"><p>His service to the Pakistan Vanaspati Manufacturers Association spans two terms as Vice Chairman. He first assumed the office for 2017–18 and was elected again for 2024–26, with both appointments made unopposed and unanimously by the PVMA Executive Committee.</p><p>These repeated appointments reflect sustained confidence in his experience and his contribution to the wider edible-oil industry. His leadership continues to shape enterprises designed to create enduring value.</p></div></details>
          </div>
        </article>
        <div className="leadership-divider"><span>Shared values. Complementary experience.</span><span>Our leadership</span></div>
        <div className="leadership-team">
          {leaders.map((leader) => (
            <article className="team-profile" key={leader.name}>
              <div className={`team-portrait team-portrait--${leader.detail}`}><Image src={`/assets/leadership/${leader.image}`} alt={leader.name} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div>
              <div className="team-body"><p className="leader-index">{leader.label}</p><h3>{leader.name}</h3><ul className="team-roles">{leader.roles.map(role => <li key={role}>{role}</li>)}</ul><p className="team-description">{leader.copy}</p>
                {leader.detail === "abubakar" && <ul className="chamber-list"><li>Member, Mirpur Chamber of Commerce</li><li>Member, Islamabad Chamber of Commerce</li></ul>}
                <details className="profile-details"><summary>{leader.detail === "farooq" ? "Read his journey" : "More about " + (leader.detail === "saim" ? "Saim" : "Abubakar")} <span aria-hidden="true">+</span></summary>
                  {leader.detail === "farooq" ? <FarooqBiography /> : <div className="biography-copy"><p>{leader.detail === "saim" ? "As Director of RK Group and KK Group, Sheikh Saim Khalid represents the next generation of a family enterprise shaped by resilience, ambition and long-term thinking. With respect for the reputation built by earlier generations, his presence reinforces the Group’s commitment to continuity and thoughtful growth." : "Raja Abubakar Farooq holds a degree in law and serves as Director of both RK Group and KK Group. A member of the Mirpur Chamber of Commerce and Islamabad Chamber of Commerce, he maintains connections across the regional business community. He is the son of Raja Muhammad Farooq."}</p></div>}
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
