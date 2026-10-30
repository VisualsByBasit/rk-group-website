// Pack photographs for the brand pages, keyed by brand slug. Each Nimco and bulk image shows the front and back of the pack.
// Images only: do not copy nutrition facts, ingredients or other text from the packs onto the page.
export type PackImage = { src: string; width: number; height: number; alt: string; caption?: string };
export type PackGroup = { layout: "feature" | "strip" | "bulk"; title: string; sizes: string[]; images: PackImage[] };

const pack = (file: string, width: number, height: number, alt: string, caption?: string): PackImage => ({ src: `/assets/packaging/${file}.webp`, width, height, alt, caption });
const mixSizes = ["25 g", "35 g", "100 g", "200 g"];

export const brandPackaging: Record<string, PackGroup[]> = {
  "islamabad-nimco": [
    { layout: "feature", title: "Premium Classic Mix pouch", sizes: ["200 g", "400 g"], images: [pack("nimco-premium-classic-mix", 1226, 1283, "Islamabad Nimco Premium Classic Mix pouch, front and back")] },
    { layout: "strip", title: "Classic, Chatpata and Special Mix", sizes: mixSizes, images: [
      pack("nimco-classic-mix", 1448, 1086, "Islamabad Nimco Classic Mix 200 g pack, front and back", "Classic Mix"),
      pack("nimco-chatpata-mix", 1448, 1086, "Islamabad Nimco Chatpata Mix 200 g pack, front and back", "Chatpata Mix"),
      pack("nimco-special-mix", 1448, 1086, "Islamabad Nimco Special Mix 200 g pack, front and back", "Special Mix"),
    ] },
    { layout: "bulk", title: "25 kg bulk bag", sizes: [], images: [pack("nimco-25kg-bulk-bag", 1448, 1086, "Islamabad Nimco 25 kg bulk bag, front and back")] },
  ],
  "islamabad-macaroni": [
    { layout: "feature", title: "Elbow retail pack", sizes: ["400 g"], images: [
      pack("macaroni-elbow-front", 853, 1280, "Islamabad Macaroni Elbow 400 g retail pack, front", "Front"),
      pack("macaroni-elbow-back", 1024, 1536, "Islamabad Macaroni Elbow 400 g retail pack, back", "Back"),
    ] },
    { layout: "bulk", title: "25 kg bulk bag", sizes: [], images: [pack("macaroni-25kg-bulk-bag", 1448, 1086, "Islamabad Macaroni 25 kg bulk bag, front and back")] },
  ],
};
