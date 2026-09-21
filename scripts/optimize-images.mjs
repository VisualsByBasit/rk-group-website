import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourcePath = (...parts) => path.join(root, "source-assets", ...parts);
const assetPath = (...parts) => path.join(root, "public", "assets", ...parts);

const conversions = [
  ["hero/islamabad.png", "hero/islamabad.webp", 1792, 82],
  ["leadership/sheikh-khalid-islam.png", "leadership/sheikh-khalid-islam.webp", 1100, 86],
  ["leadership/sheikh-saim-khalid.png", "leadership/sheikh-saim-khalid.webp", 1100, 86],
  ["brands/deewan.png", "brands/deewan.webp", 1200, 88],
  ["brands/kashmir-tea.png", "brands/kashmir-tea.webp", 1200, 88],
];

for (const [input, output, width, quality] of conversions) {
  await mkdir(path.dirname(assetPath(output)), { recursive: true });
  await sharp(sourcePath(input))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(assetPath(output));
}

const companySourceDirectory = sourcePath("companies");
const companyOutputDirectory = assetPath("companies");
for (const file of await readdir(companySourceDirectory)) {
  if (!file.endsWith(".png")) continue;
  await sharp(path.join(companySourceDirectory, file))
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(path.join(companyOutputDirectory, file.replace(/\.png$/i, ".webp")));
}

await sharp(sourcePath("rk-group-logo-transparent.png"))
  .resize({ width: 900, withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true, quality: 100 })
  .toFile(assetPath("rk-group-logo.png"));

console.log("Optimized website images created.");
