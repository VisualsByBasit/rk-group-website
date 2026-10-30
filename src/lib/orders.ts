// What can be ordered and how. Shared by the order section, the enquiry form and the brand blocks.
// Nothing is sold as single packs: every order is 25 kg bags, or packs by the carton.
export type OrderProduct = {
  id: string;
  label: string;
  kind: "ghee" | "bagged"; // ghee has one packaging; bagged products choose bags or branded retail packs
  packs: string[];
};

// Macaroni is Elbow only for now; say so in the form, not on the homepage or brand pages.
export const orderProducts: OrderProduct[] = [
  { id: "acp", label: "ACP Banaspati Ghee", kind: "ghee", packs: ["1 kg", "900 g", "450 g"] },
  { id: "dilpasand", label: "Dilpasand Banaspati", kind: "ghee", packs: ["1 kg", "900 g", "450 g", "225 g"] },
  { id: "deewan", label: "Deewan Banaspati Ghee", kind: "ghee", packs: ["1 kg", "900 g", "450 g", "225 g"] },
  { id: "gulberg", label: "Gulberg Banaspati Ghee", kind: "ghee", packs: ["1 kg", "900 g"] },
  { id: "nimco", label: "Islamabad Nimco", kind: "bagged", packs: ["25 g", "35 g", "100 g", "200 g", "Premium Classic Mix 200 g", "Premium Classic Mix 400 g"] },
  { id: "macaroni", label: "Islamabad Macaroni (Elbow)", kind: "bagged", packs: ["400 g"] },
];

export const bagRules = { options: [25, 50, 100], minimum: 25, multipleOf: 25 };
export const orderHints = {
  bags: "Supplied in 25 kg bags, order in multiples of 25 kg",
  branded: "Packs are sold by the carton",
  ghee: "Pouches in cartons. Give the quantity in cartons or kg",
};

export const kg = (amount: number) => `${amount.toLocaleString("en-US")} kg`;
