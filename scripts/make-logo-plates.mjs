// Generates the header logo marks with a solid light background in the image itself.
// In normal mode the plate matches the header and is invisible. If a browser forces dark anyway and darkens
// the header, the marks stay readable because browsers do not recolour this image data.
// Run with: node scripts/make-logo-plates.mjs
import path from "node:path";
import sharp from "sharp";

const PLATE = "#fbfaf6"; // same as .site-header
const assets = path.join("public", "assets");

// Each mark is trimmed to its letters and padded by 10% of their height, so both plates can share one CSS height.
for (const [source, output] of [["rk-mark.png", "rk-mark-plate.png"], ["kk-group-mark-bold.png", "kk-group-mark-plate.png"]]) {
  const { data, info } = await sharp(path.join(assets, source)).trim({ threshold: 40 }).png().toBuffer({ resolveWithObject: true });
  const pad = Math.round(info.height * 0.1);
  const plate = await sharp(data).extend({ top: pad, bottom: pad, left: pad, right: pad, background: PLATE }).flatten({ background: PLATE }).png({ compressionLevel: 9 }).toFile(path.join(assets, output));
  console.log(output, `${plate.width}x${plate.height}`);
}

// The menu icon gets the same treatment: two lines drawn into a light plate.
const menu = `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="64"><rect width="84" height="64" fill="${PLATE}"/><rect x="8" y="22" width="68" height="2" fill="#0b0c0b"/><rect x="8" y="40" width="68" height="2" fill="#0b0c0b"/></svg>`;
await sharp(Buffer.from(menu)).png({ compressionLevel: 9 }).toFile(path.join(assets, "menu-plate.png"));
