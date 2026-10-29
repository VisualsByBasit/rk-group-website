// Social profiles in one place. Used by the footer, brand pages, homepage brand blocks, JSON-LD sameAs and llms.txt.
export type SocialLink = { network: "Instagram" | "Facebook"; href: string };

export const rkGroupSocial: SocialLink[] = [
  { network: "Instagram", href: "https://www.instagram.com/rkgroup_of_industries/" },
  { network: "Facebook", href: "https://www.facebook.com/profile.php?id=61595048216359" },
];

// Brand Instagram accounts, keyed by brand slug. Brands not listed have no social links.
export const brandInstagram: Record<string, string> = {
  "acp-banaspati-ghee": "https://www.instagram.com/acpbanaspatighee/",
  "islamabad-macaroni": "https://www.instagram.com/islamabad_macaroni/",
  "islamabad-nimco": "https://www.instagram.com/islamabad_nimco/",
};
