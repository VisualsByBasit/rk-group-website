// Generates the 1200x630 share images in public/share. Run with: node scripts/make-share-images.mjs
// Brand images show the whole lineup on the brand's colour. Leader images show the head and shoulders centred
// on the site's dark green, because Facebook and WhatsApp centre-crop tall portraits. Crops are in source pixels.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const out = (name) => path.join("public", "share", `${name}.jpg`);
const save = (image, name) => image.jpeg({ quality: 82, mozjpeg: true }).toFile(out(name));

const brands = {
  "acp-banaspati-ghee": ["acp-no-tub", "#ec9f30"],
  "islamabad-macaroni": ["islamabad-macaroni-v2", "#073c2d"],
  "dilpasand-banaspati": ["dilpasand-no-tub", "#ffd637"],
  "deewan-banaspati": ["deewan-no-tub", "#f3c62d"],
  "kashmir-tea": ["kashmir-tea", "#8d0c11"],
  "islamabad-nimco": ["islamabad-nimco", "#f3e6c6"],
  "gulberg-banaspati-ghee": ["gulberg", "#f4cd39"],
};

const leaders = {
  "sheikh-khalid-islam": ["sheikh-khalid-islam", { left: 0, top: 30, width: 1100, height: 900 }],
  "sheikh-abdul-islam": ["sheikh-abdul-islam", { left: 0, top: 0, width: 1100, height: 820 }],
  "raja-muhammad-farooq": ["raja-muhammad-farooq", { left: 0, top: 10, width: 1000, height: 660 }],
  "sheikh-saim-khalid": ["sheikh-saim-khalid-suit-v2", { left: 190, top: 190, width: 780, height: 640 }],
  "sheikh-atif-islam": ["sheikh-atif-islam", { left: 0, top: 40, width: 800, height: 640 }],
  "raja-abubakar-farooq": ["raja-abubakar-farooq", { left: 100, top: 10, width: 800, height: 640 }],
  "abdul-haseeb": ["abdul-haseeb", { left: 0, top: 30, width: 800, height: 640 }],
};

await mkdir(path.join("public", "share"), { recursive: true });

for (const [slug, [lineup, background]] of Object.entries(brands)) {
  const image = await sharp(path.join("public", "assets", "brand-lineups", `${lineup}.webp`)).resize({ height: HEIGHT }).toBuffer();
  await save(sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background } }).composite([{ input: image, gravity: "east" }]), slug);
}

for (const [slug, [portrait, crop]] of Object.entries(leaders)) {
  const image = await sharp(path.join("public", "assets", "leadership", `${portrait}.webp`)).extract(crop).resize({ height: HEIGHT }).toBuffer();
  await save(sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background: "#112b24" } }).composite([{ input: image, gravity: "center" }]), slug);
}

await save(sharp(path.join("public", "assets", "hero", "islamabad.webp")).resize(WIDTH, HEIGHT, { fit: "cover" }), "our-story");
