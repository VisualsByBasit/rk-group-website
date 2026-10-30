// Generates the header logo marks with a solid light background in the image itself.
// In normal mode the plate matches the header and is invisible. If a browser forces dark anyway and darkens
// the header, the marks stay readable because browsers do not recolour this image data.
// Run with: node scripts/make-logo-plates.mjs
import path from "node:path";
import sharp from "sharp";

const PLATE = "#fbfaf6"; // same as .site-header
const assets = path.join("public", "assets");

for (const [source, output] of [["rk-mark.png", "rk-mark-plate.png"], ["kk-group-mark.png", "kk-group-mark-plate.png"]]) {
  await sharp(path.join(assets, source)).extend({ top: 22, bottom: 22, left: 26, right: 26, background: PLATE }).flatten({ background: PLATE }).png({ compressionLevel: 9 }).toFile(path.join(assets, output));
}

// The menu icon gets the same treatment: two lines drawn into a light plate.
const menu = `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="64"><rect width="84" height="64" fill="${PLATE}"/><rect x="8" y="22" width="68" height="2" fill="#0b0c0b"/><rect x="8" y="40" width="68" height="2" fill="#0b0c0b"/></svg>`;
await sharp(Buffer.from(menu)).png({ compressionLevel: 9 }).toFile(path.join(assets, "menu-plate.png"));
