// Existing portfolio content; entity relationships require company confirmation.
type Brand = {
  name: string;
  category: string;
  copy: string;
  lineup: string;
  formats: string[];
  className: string;
  formatsLabel: string;
  instagram?: string;
};

export const brands: Brand[] = [
  {
    "name": "ACP",
    "category": "Banaspati ghee",
    "copy": "ACP is part of the Group’s edible-oils story, with banaspati ghee presented in tins, pouches and trade cartons.",
    "lineup": "/assets/brand-lineups/acp-no-tub.webp",
    "formats": [
      "Metal tins",
      "Retail pouches",
      "Trade cartons"
    ],
    "className": "brand-acp",
    "formatsLabel": "Pack formats",
    "instagram": "https://www.instagram.com/acpbanaspatighee/"
  },
  {
    "name": "Islamabad Macaroni",
    "category": "Premium pasta",
    "copy": "A pasta range for family meals, with six shapes: elbows, penne, fusilli, shells, farfalle and vermicelli.",
    "lineup": "/assets/brand-lineups/islamabad-macaroni-v2.webp",
    "formats": [
      "Elbows",
      "Penne",
      "Fusilli",
      "Shells",
      "Farfalle",
      "Vermicelli"
    ],
    "className": "brand-islamabad",
    "formatsLabel": "The range",
    "instagram": "https://www.instagram.com/islamabad_macaroni/"
  },
  {
    "name": "Dilpasand",
    "category": "Banaspati",
    "copy": "Dilpasand brings banaspati to everyday cooking, with a range of retail and trade packaging.",
    "lineup": "/assets/brand-lineups/dilpasand-no-tub.webp",
    "formats": [
      "Metal tins",
      "Retail pouches",
      "Trade cartons"
    ],
    "className": "brand-dilpasand",
    "formatsLabel": "Pack formats"
  },
  {
    "name": "Dewan",
    "category": "Banaspati ghee",
    "copy": "Dewan is a banaspati ghee brand, presented in metal tins, retail pouches and trade cartons.",
    "lineup": "/assets/brand-lineups/deewan-no-tub.webp",
    "formats": [
      "Metal tins",
      "Retail pouches",
      "Trade cartons"
    ],
    "className": "brand-deewan",
    "formatsLabel": "Pack formats"
  },
  {
    "name": "Kashmir Tea",
    "category": "Premium tea",
    "copy": "Kashmir Tea brings tea to the everyday table, with a range of pack formats.",
    "lineup": "/assets/brand-lineups/kashmir-tea.webp",
    "formats": [
      "Loose-leaf tins",
      "Tea cartons",
      "Sealed pouches",
      "Gift caddies"
    ],
    "className": "brand-kashmir",
    "formatsLabel": "Pack formats"
  },
  {
    "name": "Islamabad Nimco",
    "category": "Traditional savoury snacks",
    "copy": "Savoury snacks for tea time and sharing, with Classic Mix, Special Mix and Chatpata Mix.",
    "lineup": "/assets/brand-lineups/islamabad-nimco.webp",
    "formats": [
      "Classic Mix",
      "Special Mix",
      "Chatpata Mix"
    ],
    "className": "brand-nimco",
    "formatsLabel": "The range"
  },
  {
    "name": "Gulberg",
    "category": "Banaspati ghee",
    "copy": "Gulberg Banaspati Ghee is presented in yellow-and-green retail pouches and trade cartons from KKR Oil & Ghee Mills.",
    "lineup": "/assets/brand-lineups/gulberg.webp",
    "formats": [
      "900g pouches",
      "Trade cartons"
    ],
    "className": "brand-gulberg",
    "formatsLabel": "Pack formats"
  }
];

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


export const navigation = [["/about/", "About"], ["/brands/", "Brands"], ["/leadership/", "Leadership"], ["/companies/", "Companies"]] as const;
