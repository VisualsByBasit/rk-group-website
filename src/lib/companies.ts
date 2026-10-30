// The Group's operating companies, shared by the homepage and the story page.
export const companies = [
  ["AA Foods", "Food processing", "aa-foods.webp"],
  ["Al-Khalid Flour Mills", "Flour & grain milling", "al-khalid-flour.webp"],
  ["Basila Industries", "Manufacturing", "basila-industries.webp"],
  ["Brother Oil & Ghee", "Edible oils", "brother-oil.webp"],
  ["Islamabad Chemical", "Industrial solutions", "islamabad-chemical.webp"],
  ["Kam Foods", "Food products", "kam-foods.webp"],
  ["Karco", "Consumer products", "karco.webp"],
  ["KF Food Complex", "Food production", "kf-food-complex.webp"],
  ["Khyber Green Energy", "Renewable energy", "khyber-green-energy.webp"],
  ["KKR Oil & Ghee Mills", "Edible oils", "kkr-oil.webp"],
  ["Noor Industries", "Manufacturing", "noor-industries.webp"],
  ["Salam Food Industries", "Food production", "salam-food.webp"],
  ["Pak Tameerat", "Infrastructure", "pak-tameerat.webp"],
] as const;

// Groups use the sector labels above; each company still shows its own label.
const groups = [
  { title: "Food", sectors: ["Food processing", "Flour & grain milling", "Food products", "Food production"] },
  { title: "Edible oils", sectors: ["Edible oils"] },
  { title: "Manufacturing", sectors: ["Manufacturing"] },
  { title: "Industrial solutions", sectors: ["Industrial solutions"] },
  { title: "Consumer products", sectors: ["Consumer products"] },
  { title: "Renewable energy", sectors: ["Renewable energy"] },
  { title: "Infrastructure", sectors: ["Infrastructure"] },
];

export const companyGroups = groups.map(group => ({ title: group.title, companies: companies.filter(([, sector]) => group.sectors.includes(sector)) }));
