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
    image: "sheikh-saim-khalid-suit-v2.webp",
    label: "Next-generation leadership",
    roles: ["Director, RK Group", "Director, KK Group"],
    copy: "Carrying a family tradition of enterprise into its next chapter, with a focus on enduring relationships, thoughtful progress and the values established over generations.",
    detail: "saim" as const,
  },
  {
    name: "Sheikh Atif Islam",
    image: "sheikh-atif-islam.webp",
    label: "Business & industry",
    roles: ["Director, RK Group", "Director, KK Group"],
    copy: "Sheikh Atif Islam serves as Director of RK Group and KK Group, with memberships in PVMA and the business chambers of Mirpur and Khyber.",
    detail: "atif" as const,
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
            <p className="eyebrow light"><span /> Chairman · RK Group & CEO · KK Group</p>
            <h3>Sheikh<br />Khalid Islam</h3>
            <p className="chairman-intro">Guiding the Group.<br />Building for generations.</p>
            <p>A Pakistani industrialist with deep roots in edible oil and banaspati ghee manufacturing, Sheikh Khalid Islam leads RK Group and KK Group. His work connects manufacturing in Mirpur, Azad Jammu & Kashmir, with industry representation and business leadership in Islamabad.</p>
            <ul className="credential-pills chairman-credentials" aria-label="Chairman roles and memberships">
              <li className="credential-pill credential-pill--primary">Chairman, RK Group</li>
              <li className="credential-pill credential-pill--primary">CEO, KK Group</li>
              <li className="credential-pill">Vice Chairman, PVMA · 2024–2026</li>
              <li className="credential-pill">Vice Chairman, PVMA · 2017–2018</li>
              <li className="credential-pill credential-pill--secondary">Member, FPCCI</li>
            </ul>
            <details className="profile-details">
              <summary>More about the Chairman <span aria-hidden="true">+</span></summary>
              <div className="biography-copy">
                <h4>Manufacturing leadership</h4>
                <p>Also known professionally as Khalid Islam Sheikh, he serves as Chief Executive of Kashmir Oil & Ghee Mills (Pvt.) Ltd. and Mirpur Oil & Ghee Mills (Pvt.) Ltd. Both manufacturing businesses are based in Mirpur, AJK, with corporate operations in Islamabad.</p>
                <h4>Industry representation</h4>
                <p>Elected PVMA Vice Chairman for 2024–2026, he represents Pakistan’s edible-oil manufacturers.</p>
                <p>His companies are listed in the North Zone of the Pakistan Vanaspati Manufacturers Association, covering Islamabad, Khyber Pakhtunkhwa and AJK. His industry service also includes representation through the Federation of Pakistan Chambers of Commerce and Industry.</p>
                <h4>Supporting domestic production</h4>
                <p>He has advocated policies that support local manufacturers and encourage farmers to grow sunflower, canola and soybean. In public comments in 2024, he called for changes to the taxation of commercial imports and incentives for domestic oilseed cultivation to reduce dependence on imported seeds.</p>
                <h4>Supply-chain resilience</h4>
                <p>In May 2026, he joined PVMA leadership and industry representatives in discussions on raw-material availability, taxation, regulation, and the freight and transportation costs affecting ghee and cooking-oil producers.</p>
                <p className="biography-sources">Further reading: <a href="https://pvma.com.pk/wp-content/uploads/2022/05/PVMA-General-Body-List-.pdf">PVMA member directory</a>, <a href="https://www.dawn.com/news/1862447/vanaspati-manufacturers-body-elected">PVMA election</a>, <a href="https://tribune.com.pk/story/2456256/edible-oil-industry-advocates-tax-reform">industry advocacy</a> and <a href="https://www.brecorder.com/news/40422924/pvma-holds-meeting-challenges-confronting-ghee-cooking-oil-industry-discussed-in-detail">2026 industry discussions</a>.</p>
              </div>
            </details>
          </div>
        </article>
        <article className="chairman-feature former-chairman" aria-labelledby="former-chairman-title">
          <div className="chairman-portrait"><Image src="/assets/leadership/sheikh-abdul-islam.webp" alt="Sheikh Abdul Islam, former Chairman of KK Group, in a classic suit" fill sizes="(max-width: 720px) 100vw, 42vw" /><span className="portrait-caption">A legacy of enterprise</span></div>
          <div className="chairman-body">
            <p className="eyebrow light"><span /> Former Chairman · KK Group</p>
            <h3 id="former-chairman-title">Sheikh<br />Abdul Islam</h3>
            <p className="chairman-intro">From trade to industry.<br />A foundation for growth.</p>
            <p>Sheikh Abdul Islam served as Chairman of KK Group before Sheikh Khalid Islam. He joined the business in 1965 and expanded its trading activities into wheat and ghee, helping shape the Group’s development into manufacturing and other essential sectors.</p>
            <p>His chapter in the Group’s history encompasses edible oils, flour milling, petroleum retail and bottled water, with milestones including ACP Oil Mills in 1989, Al-Khalid Flour Mills in 1996 and KK Oil & Ghee Mills in 2012.</p>
            <details className="profile-details">
              <summary>KK Group history & group concerns <span aria-hidden="true">+</span></summary>
              <div className="biography-copy">
                <h4>1989 · A.C.P Oil Mills (Pvt.) Ltd.</h4>
                <p>The family entered ghee, cooking oil and soap manufacturing, with a 50% shareholding in the name of Sheikh Abdul Islam, then Chairman.</p>
                <h4>1996 · Al-Khalid Flour Mills (Pvt.) Ltd.</h4>
                <p>A flour mill was established in district Attock with 100% shareholding.</p>
                <h4>A.C.P Petroleum</h4>
                <p>The Group established a petrol pump and CNG station on Saidpur Road as a franchise for Total Parco Pakistan Ltd. products, with 50% shareholding.</p>
                <h4>2006 · Mik Mak Station</h4>
                <p>Established at Lawrencepur, district Attock, with 100% shareholding, the station sold petrol, diesel and other lubricants from Hascol Storage (Pvt.) Ltd.</p>
                <h4>2009 · Care Enterprises</h4>
                <p>M/S Care Enterprises was established to process and bottle mineral water under the “Oxygen +” brand, with 50% shareholding.</p>
                <h4>October 2012 · KK Oil & Ghee Mills (Pvt.) Ltd.</h4>
                <p>The company was established to process ghee, cooking oil and soap, with 100% shareholding.</p>
                <p>Shareholding figures reflect the Group’s history at the time of these milestones.</p>
              </div>
            </details>
          </div>
        </article>
        <div className="leadership-divider"><span>Shared values. Complementary experience.</span><span>Our leadership</span></div>
        <div className="leadership-team">
          {leaders.map((leader) => (
            <article className="team-profile" key={leader.name}>
              <div className={`team-portrait team-portrait--${leader.detail}`}><Image src={`/assets/leadership/${leader.image}`} alt={leader.name} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div>
              <div className="team-body"><p className="leader-index">{leader.label}</p><h3>{leader.name}</h3><ul className="credential-pills team-roles" aria-label={`${leader.name} roles and qualifications`}>{leader.roles.map(role => <li className={`credential-pill${role.startsWith("Director,") ? " credential-pill--primary" : ""}`} key={role}>{role}</li>)}</ul><p className="team-description">{leader.copy}</p>
                {leader.detail === "abubakar" && <ul className="credential-pills chamber-list" aria-label="Chamber memberships"><li className="credential-pill credential-pill--secondary">Member, Mirpur Chamber of Commerce</li><li className="credential-pill credential-pill--secondary">Member, Islamabad Chamber of Commerce</li></ul>}
                {leader.detail === "atif" && <ul className="credential-pills chamber-list" aria-label="Industry and chamber memberships"><li className="credential-pill credential-pill--secondary">Member, PVMA</li><li className="credential-pill credential-pill--secondary">Member, Mirpur Chamber of Commerce</li><li className="credential-pill credential-pill--secondary">Member, Khyber Chamber of Commerce</li></ul>}
                <details className="profile-details"><summary>{leader.detail === "farooq" ? "Read his journey" : "More about " + (leader.detail === "saim" ? "Saim" : leader.detail === "atif" ? "Atif" : "Abubakar")} <span aria-hidden="true">+</span></summary>
                  {leader.detail === "farooq" ? <FarooqBiography /> : <div className="biography-copy"><p>{leader.detail === "saim" ? "As Director of RK Group and KK Group, Sheikh Saim Khalid represents the next generation of a family enterprise shaped by resilience, ambition and long-term thinking. With respect for the reputation built by earlier generations, his presence reinforces the Group’s commitment to continuity and thoughtful growth." : leader.detail === "atif" ? "Alongside his directorships at RK Group and KK Group, Sheikh Atif Islam is a member of the Pakistan Vanaspati Manufacturers Association (PVMA), Mirpur Chamber of Commerce and Khyber Chamber of Commerce. These affiliations connect his business roles with industry and regional business communities." : "Raja Abubakar Farooq holds a degree in law and serves as Director of both RK Group and KK Group. A member of the Mirpur Chamber of Commerce and Islamabad Chamber of Commerce, he maintains connections across the regional business community. He is the son of Raja Muhammad Farooq."}</p></div>}
                </details>
              </div>
            </article>
          ))}
        </div>
        <article className="team-profile finance-profile" aria-labelledby="abdul-haseeb-title">
          <div className="team-portrait">
            <Image src="/assets/leadership/abdul-haseeb.webp" alt="Abdul Haseeb in a charcoal suit" fill sizes="(max-width: 720px) 100vw, 320px" />
          </div>
          <div className="team-body">
            <p className="leader-index">Finance leadership</p>
            <h3 id="abdul-haseeb-title">Abdul Haseeb</h3>
            <ul className="credential-pills team-roles" aria-label="Abdul Haseeb roles">
              <li className="credential-pill credential-pill--primary">CFO, KK Group</li>
              <li className="credential-pill credential-pill--primary">CFO, RK Group</li>
            </ul>
            <p className="team-description">Abdul Haseeb serves as Chief Financial Officer (CFO) of KK Group and RK Group, bringing a financial perspective to the leadership of both organisations.</p>
            <details className="profile-details">
              <summary>More about Abdul Haseeb <span aria-hidden="true">+</span></summary>
              <div className="biography-copy">
                <h4>Finance leadership across both groups</h4>
                <p>His appointments span both groups, placing him within the senior leadership of each organisation. As CFO, he represents the finance function alongside the chairmanship and directorships that shape the groups’ business direction.</p>
                <p>His profile reflects the role of financial leadership within a wider enterprise: connecting the financial side of the business with the broader priorities of its leadership.</p>
                <p className="biography-sources"><a href="https://www.linkedin.com/in/abdul-haseeb-19447ba6/">View Abdul Haseeb on LinkedIn</a></p>
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  );
}
