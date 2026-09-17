// Single source of truth for every subsidiary shown on the site.
//
// To add a new company: add an object to the array below, then drop a
// logo file at /public/logos/<slug>.png (and optional photos at
// /public/photos/<slug>-1.jpg etc). No logo yet? Leave logo empty and
// the site automatically renders a monogram badge instead, so nothing
// breaks while real assets are being collected.

export type Sector =
  | "Food & Beverage"
  | "Milling & Grains"
  | "Edible Oils & Ghee"
  | "Chemicals"
  | "Energy"
  | "Manufacturing & Industrial"
  | "Infrastructure";

export type Company = {
  slug: string;
  name: string;
  tagline: string;
  sector: Sector;
  description: string;
  logo?: string; // path under /public, e.g. "/logos/islamabad-macarony.png"
  photos?: string[]; // paths under /public
  instagram?: string; // handle, e.g. "islamabadmacarony"
  phone?: string;
  email?: string;
  isNew?: boolean; // true while real content/assets are still pending
};

export const sectorOrder: Sector[] = [
  "Food & Beverage",
  "Milling & Grains",
  "Edible Oils & Ghee",
  "Chemicals",
  "Energy",
  "Manufacturing & Industrial",
  "Infrastructure",
];

export const companies: Company[] = [
  // ---------- Food & Beverage ----------
  {
    slug: "aa-foods",
    name: "AA Foods PVT LTD",
    tagline: "Setting the gold standard in premium food processing and nutritional quality.",
    sector: "Food & Beverage",
    description:
      "AA Foods PVT LTD sets the gold standard in premium food processing, combining rigorous quality control with a focus on nutritional value across its product lines.",
    logo: "/logos/aa-foods.png",
  },
  {
    slug: "kam-foods",
    name: "Kam Foods",
    tagline: "Next-generation food technology focused on consumer convenience and taste.",
    sector: "Food & Beverage",
    description:
      "Kam Foods applies next-generation food technology to everyday products, built around consumer convenience without compromising on taste.",
    logo: "/logos/kam-foods.png",
  },
  {
    slug: "kf-food-complex",
    name: "KF Food Complex",
    tagline: "A mega-scale facility dedicated to mass production and logistical excellence.",
    sector: "Food & Beverage",
    description:
      "KF Food Complex is a mega-scale production facility built for high-volume manufacturing and the logistics network that supports it nationwide.",
    logo: "/logos/kf-food-complex.png",
  },
  {
    slug: "salam-food-industries",
    name: "SALAM Food Industries",
    tagline: "Where hygiene meets heritage: producing food products of international standard.",
    sector: "Food & Beverage",
    description:
      "SALAM Food Industries produces food products to international hygiene and quality standards, rooted in traditional recipes and heritage flavours.",
    logo: "/logos/salam-food-industries.png",
  },
  {
    slug: "islamabad-macarony",
    name: "Islamabad Macarony",
    tagline: "Premium quality pasta. Good food, better moods.",
    sector: "Food & Beverage",
    description:
      "Islamabad Macarony makes premium quality pasta for Pakistani kitchens, from everyday Elbows and Penne to Fusilli, Shells, Farfalle and Vermicelli.",
    logo: "/logos/islamabad-macarony.png",
    isNew: true,
  },
  {
    slug: "kashmir-tea",
    name: "Kashmir Tea",
    tagline: "A cup rooted in the mountains.",
    sector: "Food & Beverage",
    description:
      "Kashmir Tea brings the region's tea-drinking tradition into every cup, sourced and blended for a rich, everyday brew.",
    logo: "/logos/kashmir-tea.png",
    isNew: true,
  },

  // ---------- Milling & Grains ----------
  {
    slug: "al-khalid-flour-mills",
    name: "Al-Khalid Flour Mills",
    tagline: "State-of-the-art milling delivering the finest flour to households nationwide.",
    sector: "Milling & Grains",
    description:
      "Al-Khalid Flour Mills operates state-of-the-art milling facilities, delivering consistent, high-quality flour to households across Pakistan.",
    logo: "/logos/al-khalid-flour-mills.png",
  },

  // ---------- Edible Oils & Ghee ----------
  {
    slug: "brother-oil-ghee",
    name: "Brother Oil & Ghee",
    tagline: "Trusted purity in edible oils and ghee, enriching traditional taste.",
    sector: "Edible Oils & Ghee",
    description:
      "Brother Oil & Ghee is trusted for the purity of its edible oils and ghee, enriching traditional Pakistani cooking with consistent quality.",
    logo: "/logos/brother-oil-ghee.png",
  },
  {
    slug: "kkr-oil-ghee-mills",
    name: "KKR Oil & Ghee Mills",
    tagline: "Committed to health and vitality through superior quality edible oils.",
    sector: "Edible Oils & Ghee",
    description:
      "KKR Oil & Ghee Mills is committed to health and vitality, producing superior-quality edible oils under strict quality control.",
    logo: "/logos/kkr-oil-ghee-mills.png",
  },
  {
    slug: "acp-banaspati-ghee",
    name: "ACP Banaspati Ghee",
    tagline: "Everyday purity, trusted in every home.",
    sector: "Edible Oils & Ghee",
    description:
      "ACP Banaspati Ghee delivers dependable, everyday quality vanaspati ghee for kitchens across Pakistan.",
    logo: "/logos/acp-banaspati-ghee.png",
    isNew: true,
  },

  // ---------- Chemicals ----------
  {
    slug: "islamabad-chemical",
    name: "Islamabad Chemical",
    tagline: "Pioneering chemical solutions for a safer and more efficient industrial sector.",
    sector: "Chemicals",
    description:
      "Islamabad Chemical develops chemical solutions that make Pakistan's industrial sector safer and more efficient.",
    logo: "/logos/islamabad-chemical.png",
  },

  // ---------- Energy ----------
  {
    slug: "khyber-green-energy",
    name: "Khyber Green Energy",
    tagline: "Harvesting nature to power the future through sustainable renewable energy.",
    sector: "Energy",
    description:
      "Khyber Green Energy harnesses renewable resources to build a more sustainable energy future for the region.",
    logo: "/logos/khyber-green-energy.png",
  },

  // ---------- Manufacturing & Industrial ----------
  {
    slug: "basila-industries",
    name: "Basila Industries",
    tagline: "Engineered for excellence: specialized manufacturing with industrial precision.",
    sector: "Manufacturing & Industrial",
    description:
      "Basila Industries specializes in precision manufacturing engineered to exacting industrial standards.",
    logo: "/logos/basila-industries.png",
  },
  {
    slug: "karco",
    name: "Karco PVT LTD",
    tagline: "Strategic industrial operations built to support Pakistan's evolving economy.",
    sector: "Manufacturing & Industrial",
    description:
      "Karco PVT LTD runs strategic industrial operations built to support the evolving needs of Pakistan's economy.",
    logo: "/logos/karco.png",
  },
  {
    slug: "noor-industries",
    name: "Noor Industries",
    tagline: "Versatile manufacturing capabilities serving both local and global markets.",
    sector: "Manufacturing & Industrial",
    description:
      "Noor Industries offers versatile manufacturing capabilities that serve both local demand and export markets.",
    logo: "/logos/noor-industries.png",
  },

  // ---------- Infrastructure ----------
  {
    slug: "pak-tameerat",
    name: "Pak Tameerat",
    tagline: "Constructing the nation's backbone through robust infrastructure development.",
    sector: "Infrastructure",
    description:
      "Pak Tameerat builds the physical backbone of the nation through robust, large-scale infrastructure development.",
    logo: "/logos/pak-tameerat.png",
  },
];

export function getCompany(slug: string) {
  return companies.find((c) => c.slug === slug);
}

export function companiesBySector(sector: Sector) {
  return companies.filter((c) => c.sector === sector);
}
