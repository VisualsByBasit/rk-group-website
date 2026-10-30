// Leadership content shared by the homepage section and the /leadership/<slug>/ pages.
// Only text already published on the site belongs here; do not add roles, links or claims that are not confirmed.
export type Credential = { text: string; kind?: "primary" | "secondary" };
export type BioSection = { heading?: string; paragraphs: string[] };
export type Milestone = { when: string; title: string; copy: string };
export type Leader = {
  slug: string;
  name: string;
  nameLines?: [string, string]; // how the homepage breaks the name over two lines
  alternateName?: string;
  image: string;
  imageAlt: string;
  caption?: string; // portrait caption chip, only where the homepage shows one
  label: string; // eyebrow above the name
  jobTitle: string; // JSON-LD jobTitle
  rkRole: boolean; // true when the person holds a role at RK Group (JSON-LD worksFor), otherwise affiliation
  intro?: [string, string]; // two-line statement in the serif accent, where the homepage has one
  summary: string[]; // the paragraph(s) shown on the homepage card
  credentials: Credential[]; // roles, memberships and qualifications, as the homepage pills show them
  bio: BioSection[]; // the "More about" content
  pageBio?: string[]; // extra paragraphs for the profile page only; use facts already on the site
  milestones?: Milestone[];
  milestonesNote?: string;
  sources?: { label: string; href: string }[]; // further reading
  profiles?: { label: string; href: string }[]; // the person's own profiles (also JSON-LD sameAs)
  seo: { title: string; description: string };
  home: { variant: "chairman" | "former" | "team" | "finance"; detailLabel: string; portraitClass?: string };
};

export const leaders: Leader[] = [
  {
    slug: "sheikh-khalid-islam",
    name: "Sheikh Khalid Islam",
    nameLines: ["Sheikh", "Khalid Islam"],
    alternateName: "Khalid Islam Sheikh",
    image: "sheikh-khalid-islam.webp",
    imageAlt: "Sheikh Khalid Islam, Chairman of RK Group",
    caption: "Office of the Chairman",
    label: "Chairman · RK Group & CEO · KK Group",
    jobTitle: "Chairman",
    rkRole: true,
    intro: ["Guiding the Group.", "Building for generations."],
    summary: ["A Pakistani industrialist with deep roots in edible oil and banaspati ghee manufacturing, Sheikh Khalid Islam leads RK Group and KK Group. His work connects manufacturing in Mirpur, Azad Jammu & Kashmir, with industry representation and business leadership in Islamabad."],
    credentials: [
      { text: "Chairman, RK Group", kind: "primary" },
      { text: "CEO, KK Group", kind: "primary" },
      { text: "Vice Chairman, PVMA · 2024–2026" },
      { text: "Vice Chairman, PVMA · 2017–2018" },
      { text: "Member, FPCCI", kind: "secondary" },
    ],
    bio: [
      { heading: "Manufacturing leadership", paragraphs: ["Also known professionally as Khalid Islam Sheikh, he serves as Chief Executive of Kashmir Oil & Ghee Mills (Pvt.) Ltd. and Mirpur Oil & Ghee Mills (Pvt.) Ltd. Both manufacturing businesses are based in Mirpur, AJK, with corporate operations in Islamabad."] },
      { heading: "Industry representation", paragraphs: ["Elected PVMA Vice Chairman for 2024–2026, he represents Pakistan’s edible-oil manufacturers.", "His companies are listed in the North Zone of the Pakistan Vanaspati Manufacturers Association, covering Islamabad, Khyber Pakhtunkhwa and AJK. His industry service also includes representation through the Federation of Pakistan Chambers of Commerce and Industry."] },
      { heading: "Supporting domestic production", paragraphs: ["He has advocated policies that support local manufacturers and encourage farmers to grow sunflower, canola and soybean. In public comments in 2024, he called for changes to the taxation of commercial imports and incentives for domestic oilseed cultivation to reduce dependence on imported seeds."] },
      { heading: "Supply-chain resilience", paragraphs: ["In May 2026, he joined PVMA leadership and industry representatives in discussions on raw-material availability, taxation, regulation, and the freight and transportation costs affecting ghee and cooking-oil producers."] },
    ],
    sources: [
      { label: "PVMA member directory", href: "https://pvma.com.pk/wp-content/uploads/2022/05/PVMA-General-Body-List-.pdf" },
      { label: "PVMA election", href: "https://www.dawn.com/news/1862447/vanaspati-manufacturers-body-elected" },
      { label: "industry advocacy", href: "https://tribune.com.pk/story/2456256/edible-oil-industry-advocates-tax-reform" },
      { label: "2026 industry discussions", href: "https://www.brecorder.com/news/40422924/pvma-holds-meeting-challenges-confronting-ghee-cooking-oil-industry-discussed-in-detail" },
    ],
    seo: { title: "Sheikh Khalid Islam, Chairman", description: "Meet Sheikh Khalid Islam, Chairman of RK Group and CEO of KK Group, with a background in edible oil and banaspati ghee manufacturing in Pakistan." },
    home: { variant: "chairman", detailLabel: "More about the Chairman" },
  },
  {
    slug: "sheikh-abdul-islam",
    name: "Sheikh Abdul Islam",
    nameLines: ["Sheikh", "Abdul Islam"],
    image: "sheikh-abdul-islam.webp",
    imageAlt: "Sheikh Abdul Islam, former Chairman of KK Group, in a classic suit",
    caption: "A legacy of enterprise",
    label: "Former Chairman · KK Group",
    jobTitle: "Former Chairman, KK Group",
    rkRole: false,
    intro: ["From trade to industry.", "A foundation for growth."],
    summary: [
      "Sheikh Abdul Islam served as Chairman of KK Group before Sheikh Khalid Islam. He joined the business in 1965 and expanded its trading activities into wheat and ghee, helping shape the Group’s development into manufacturing and other essential sectors.",
      "His chapter in the Group’s history encompasses edible oils, flour milling, petroleum retail and bottled water, with milestones including ACP Oil Mills in 1989, Al-Khalid Flour Mills in 1996 and KK Oil & Ghee Mills in 2012.",
    ],
    credentials: [{ text: "Former Chairman, KK Group", kind: "primary" }],
    bio: [],
    milestones: [
      { when: "1989", title: "A.C.P Oil Mills (Pvt.) Ltd.", copy: "The family entered ghee, cooking oil and soap manufacturing, with a 50% shareholding in the name of Sheikh Abdul Islam, then Chairman." },
      { when: "1996", title: "Al-Khalid Flour Mills (Pvt.) Ltd.", copy: "A flour mill was established in district Attock with 100% shareholding." },
      { when: "", title: "A.C.P Petroleum", copy: "The Group established a petrol pump and CNG station on Saidpur Road as a franchise for Total Parco Pakistan Ltd. products, with 50% shareholding." },
      { when: "2006", title: "Mik Mak Station", copy: "Established at Lawrencepur, district Attock, with 100% shareholding, the station sold petrol, diesel and other lubricants from Hascol Storage (Pvt.) Ltd." },
      { when: "2009", title: "Care Enterprises", copy: "M/S Care Enterprises was established to process and bottle mineral water under the “Oxygen +” brand, with 50% shareholding." },
      { when: "October 2012", title: "KK Oil & Ghee Mills (Pvt.) Ltd.", copy: "The company was established to process ghee, cooking oil and soap, with 100% shareholding." },
    ],
    milestonesNote: "Shareholding figures reflect the Group’s history at the time of these milestones.",
    seo: { title: "Sheikh Abdul Islam, Former Chairman of KK Group", description: "Sheikh Abdul Islam served as Chairman of KK Group, joining the business in 1965 and expanding it into edible oils, flour milling, petroleum retail and bottled water." },
    home: { variant: "former", detailLabel: "KK Group history & group concerns" },
  },
  {
    slug: "raja-muhammad-farooq",
    name: "Raja Muhammad Farooq",
    image: "raja-muhammad-farooq.webp",
    imageAlt: "Raja Muhammad Farooq",
    label: "Enterprise & community",
    jobTitle: "Entrepreneur and community leader",
    rkRole: false,
    summary: ["From Sahamni, Azad Jammu & Kashmir, to Islamabad and Mirpur, a life shaped by enterprise, public service and a lasting commitment to the people of Kashmir."],
    credentials: [{ text: "Entrepreneur & community leader" }, { text: "Former Senior Vice Chairman, PVMA · Two terms" }],
    bio: [{ paragraphs: [
      "Originally from Sahamni, AJK, Raja Muhammad Farooq moved to Islamabad in 1985. With an MBA, CA and LLB, he built interests in oil, plastics, tea, soap and ghee manufacturing.",
      "The first PTI President in Azad Kashmir and twice Senior Vice Chairman of PVMA, he continues his business projects in Mirpur and community service in Sahamni. His son, Raja Abubakar Farooq, carries forward the family’s enterprise.",
    ] }],
    seo: { title: "Raja Muhammad Farooq, Entrepreneur and Community Leader", description: "Raja Muhammad Farooq, entrepreneur, community leader and twice Senior Vice Chairman of PVMA, from Sahamni, Azad Kashmir, with business interests in Islamabad and Mirpur." },
    home: { variant: "team", detailLabel: "Read his journey", portraitClass: "farooq" },
  },
  {
    slug: "sheikh-saim-khalid",
    name: "Sheikh Saim Khalid",
    image: "sheikh-saim-khalid-suit-v2.webp",
    imageAlt: "Sheikh Saim Khalid",
    label: "Next-generation leadership",
    jobTitle: "Director",
    rkRole: true,
    summary: ["Carrying a family tradition of enterprise into its next chapter, with a focus on enduring relationships, thoughtful progress and the values established over generations."],
    credentials: [{ text: "Director, RK Group", kind: "primary" }, { text: "Director, KK Group", kind: "primary" }],
    bio: [{ paragraphs: ["As Director of RK Group and KK Group, Sheikh Saim Khalid represents the next generation of a family enterprise shaped by resilience, ambition and long-term thinking. With respect for the reputation built by earlier generations, his presence reinforces the Group’s commitment to continuity and thoughtful growth."] }],
    pageBio: ["His directorships connect him with a Group whose roots reach back to 1953, when a family enterprise began in the sugar trade. RK Group now brings together 13 companies across food, edible oils, manufacturing, energy and infrastructure."],
    seo: { title: "Sheikh Saim Khalid, Director of RK Group", description: "Sheikh Saim Khalid is Director of RK Group and KK Group, representing the next generation of a family enterprise built on continuity and thoughtful growth." },
    home: { variant: "team", detailLabel: "More about Saim", portraitClass: "saim" },
  },
  {
    slug: "sheikh-atif-islam",
    name: "Sheikh Atif Islam",
    image: "sheikh-atif-islam.webp",
    imageAlt: "Sheikh Atif Islam",
    label: "Business & industry",
    jobTitle: "Director",
    rkRole: true,
    summary: ["Sheikh Atif Islam serves as Director of RK Group and KK Group, with memberships in PVMA and the business chambers of Mirpur and Khyber."],
    credentials: [
      { text: "Director, RK Group", kind: "primary" },
      { text: "Director, KK Group", kind: "primary" },
      { text: "Member, PVMA", kind: "secondary" },
      { text: "Member, Mirpur Chamber of Commerce", kind: "secondary" },
      { text: "Member, Khyber Chamber of Commerce", kind: "secondary" },
    ],
    bio: [{ paragraphs: ["Alongside his directorships at RK Group and KK Group, Sheikh Atif Islam is a member of the Pakistan Vanaspati Manufacturers Association (PVMA), Mirpur Chamber of Commerce and Khyber Chamber of Commerce. These affiliations connect his business roles with industry and regional business communities."] }],
    pageBio: ["RK Group brings together 13 companies across food, edible oils, manufacturing, energy and infrastructure. Its edible-oil businesses include Brother Oil & Ghee and KKR Oil & Ghee Mills, and its brand family includes ACP, Dilpasand, Deewan and Gulberg."],
    seo: { title: "Sheikh Atif Islam, Director of RK Group", description: "Sheikh Atif Islam is Director of RK Group and KK Group and a member of PVMA and the Mirpur and Khyber chambers of commerce." },
    home: { variant: "team", detailLabel: "More about Atif", portraitClass: "atif" },
  },
  {
    slug: "raja-abubakar-farooq",
    name: "Raja Abubakar Farooq",
    image: "raja-abubakar-farooq.webp",
    imageAlt: "Raja Abubakar Farooq",
    label: "Business & professional service",
    jobTitle: "Director",
    rkRole: true,
    summary: ["Bringing a legal education and an active connection with the business community to his directorships at RK Group and KK Group."],
    credentials: [
      { text: "Director, RK Group", kind: "primary" },
      { text: "Director, KK Group", kind: "primary" },
      { text: "Law graduate" },
      { text: "Member, Mirpur Chamber of Commerce", kind: "secondary" },
      { text: "Member, Islamabad Chamber of Commerce", kind: "secondary" },
    ],
    bio: [{ paragraphs: ["Raja Abubakar Farooq holds a degree in law and serves as Director of both RK Group and KK Group. A member of the Mirpur Chamber of Commerce and Islamabad Chamber of Commerce, he maintains connections across the regional business community. He is the son of Raja Muhammad Farooq."] }],
    pageBio: ["His directorships connect him with a Group of 13 companies across food, edible oils, manufacturing, energy and infrastructure. His father, Raja Muhammad Farooq, twice served as Senior Vice Chairman of PVMA."],
    seo: { title: "Raja Abubakar Farooq, Director of RK Group", description: "Raja Abubakar Farooq is a law graduate, Director of RK Group and KK Group, and a member of the Mirpur and Islamabad chambers of commerce." },
    home: { variant: "team", detailLabel: "More about Abubakar", portraitClass: "abubakar" },
  },
  {
    slug: "abdul-haseeb",
    name: "Abdul Haseeb",
    image: "abdul-haseeb.webp",
    imageAlt: "Abdul Haseeb in a charcoal suit",
    label: "Finance leadership",
    jobTitle: "Chief Financial Officer (CFO)",
    rkRole: true,
    summary: ["Abdul Haseeb serves as Chief Financial Officer (CFO) of KK Group and RK Group, bringing a financial perspective to the leadership of both organisations."],
    credentials: [{ text: "CFO, KK Group", kind: "primary" }, { text: "CFO, RK Group", kind: "primary" }],
    bio: [{ heading: "Finance leadership across both groups", paragraphs: [
      "His appointments span both groups, placing him within the senior leadership of each organisation. As CFO, he represents the finance function alongside the chairmanship and directorships that shape the groups’ business direction.",
      "His profile reflects the role of financial leadership within a wider enterprise: connecting the financial side of the business with the broader priorities of its leadership.",
    ] }],
    pageBio: ["RK Group brings together 13 companies across food, edible oils, manufacturing, energy and infrastructure, while KK Group’s history takes in edible oils, flour milling, petroleum retail and bottled water."],
    profiles: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-haseeb-19447ba6/" }],
    seo: { title: "Abdul Haseeb, CFO of RK Group", description: "Abdul Haseeb is Chief Financial Officer of RK Group and KK Group, bringing a financial perspective to the leadership of both organisations." },
    home: { variant: "finance", detailLabel: "More about Abdul Haseeb" },
  },
];

export const leaderPath = (leader: Leader) => `/leadership/${leader.slug}/`;
export const leaderImage = (leader: Leader) => `/assets/leadership/${leader.image}`;
export const leaderBySlug = (slug: string) => leaders.find(leader => leader.slug === slug);
