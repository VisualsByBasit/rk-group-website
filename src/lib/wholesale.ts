// Wholesale rules shared by the distributor section and the enquiry form.
export type WholesaleGroup = { unit: string; options: number[]; minimum: number; multipleOf?: number; hint?: string };

export const wholesaleGroups = {
  ghee: { unit: "cartons", options: [250, 500, 1000], minimum: 250 },
  bags: { unit: "25 kg bags", options: [25, 50, 100], minimum: 25, multipleOf: 25, hint: "Supplied in 25 kg bags, order in multiples of 25 kg" },
} satisfies Record<string, WholesaleGroup>;

export type WholesaleGroupId = keyof typeof wholesaleGroups;

// Labels as they appear in the enquiry form. Macaroni is Elbow only for now; say so in the form, not on the homepage or brand pages.
export const wholesaleProducts: { id: string; label: string; group: WholesaleGroupId }[] = [
  { id: "acp", label: "ACP Banaspati Ghee", group: "ghee" },
  { id: "dilpasand", label: "Dilpasand Banaspati", group: "ghee" },
  { id: "deewan", label: "Deewan Banaspati Ghee", group: "ghee" },
  { id: "gulberg", label: "Gulberg Banaspati Ghee", group: "ghee" },
  { id: "nimco", label: "Islamabad Nimco", group: "bags" },
  { id: "macaroni", label: "Islamabad Macaroni (Elbow)", group: "bags" },
];

export const kg = (amount: number) => `${amount.toLocaleString("en-US")} kg`;
