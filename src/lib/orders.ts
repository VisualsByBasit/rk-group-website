// What can be ordered and how. Shared by the order section, the enquiry form and the brand blocks.
// Nothing is sold as single packs: every order is 25 kg bulk bags, or packs by the carton.
export type OrderProduct = {
  id: string;
  label: string;
  kind: "ghee" | "bagged"; // ghee has one packaging; bagged products choose bulk bags or retail packs
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
  bags: "Supplied in 25 kg bulk bags, order in multiples of 25 kg",
  retail: "Packs are sold by the carton",
  ghee: "Pouches in cartons. Give the quantity in cartons or kg",
};

export const orderSummary = (product: OrderProduct) => product.kind === "ghee" ? "Pouches in cartons, any quantity." : product.id === "macaroni" ? "25 kg bulk bags, or 400 g retail packs by the carton." : "25 kg bulk bags, or retail packs by the carton.";
export const ratesLine = "Rates depend on the size of your order. Larger orders get better rates, agreed when you get in touch.";
export const paymentLine = "Payment is made in cash, on the spot, when you collect.";
export const collectionLine = "Collect with your own transport from Islamabad or Mirpur, or an agreed spot arranged after we talk.";

export const kg = (amount: number) => `${amount.toLocaleString("en-US")} kg`;
