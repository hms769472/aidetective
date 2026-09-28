/**
 * Auto-crop 5 suspect portraits from each case banner.
 *
 * Usage:
 *   node scripts/crop-suspects.js
 *
 * Input:  public/cases/case-XXX.jpeg     (1600x853 banner)
 * Output: public/cases/case-XXX-s1.jpeg  (suspect 1 portrait)
 *         public/cases/case-XXX-s2.jpeg  (suspect 2 portrait)
 *         ...
 *         public/cases/case-XXX-s5.jpeg
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const CASES_DIR = path.join(__dirname, "..", "public", "cases");

// ============ TUNE THESE IF CROPS ARE OFF ============
const LAYOUT = {
  // Where suspects row starts (as fraction of banner height, 0-1)
  // 0.65 = 65% down from top
  topOffset: 0.655,

  // Left margin before first suspect card (fraction of width)
  leftMargin: 0.008,

  // Width of each suspect card (fraction of banner width)
  // 5 cards across ~ 0.19 each = 0.95 total
  cardWidth: 0.19,

  // Height of each suspect card (fraction of banner height)
  cardHeight: 0.34,

  // Gap between cards (fraction of banner width)
  gap: 0.013,
};
// =====================================================

async function cropOne(bannerFile) {
  const caseId = bannerFile.match(/case-(\d{3})/)[1];
  const bannerPath = path.join(CASES_DIR, bannerFile);

  const meta = await sharp(bannerPath).metadata();
  const W = meta.width;
  const H = meta.height;

  const cardW = Math.round(W * LAYOUT.cardWidth);
  const cardH = Math.round(H * LAYOUT.cardHeight);
  const startY = Math.round(H * LAYOUT.topOffset);
  const startX = Math.round(W * LAYOUT.leftMargin);
  const gap = Math.round(W * LAYOUT.gap);

  console.log(
    `\n📸 ${bannerFile} (${W}×${H}) → crop ${cardW}×${cardH}`
  );

  const outFiles = [];
  for (let i = 0; i < 5; i++) {
    const left = startX + i * (cardW + gap);
    const top = startY;
    const outName = `case-${caseId}-s${i + 1}.jpeg`;
    const outPath = path.join(CASES_DIR, outName);

    // Clamp to prevent going out of bounds
    const safeLeft = Math.max(0, Math.min(left, W - cardW));
    const safeTop = Math.max(0, Math.min(top, H - cardH));

    await sharp(bannerPath)
      .extract({
        left: safeLeft,
        top: safeTop,
        width: cardW,
        height: cardH,
      })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outPath);

    outFiles.push(outName);
    console.log(`   ✓ ${outName}`);
  }

  return outFiles;
}

async function main() {
  if (!fs.existsSync(CASES_DIR)) {
    console.error(`✗ Folder not found: ${CASES_DIR}`);
    process.exit(1);
  }

  // Only match case-XXX.jpeg (not case-XXX-s1.jpeg etc)
  const banners = fs
    .readdirSync(CASES_DIR)
    .filter((f) => /^case-\d{3}\.jpeg$/.test(f))
    .sort();

  if (banners.length === 0) {
    console.log("No banner files found in public/cases/");
    process.exit(0);
  }

  console.log(`Found ${banners.length} banner(s) to process\n`);

  let total = 0;
  for (const banner of banners) {
    try {
      const outs = await cropOne(banner);
      total += outs.length;
    } catch (err) {
      console.error(`✗ Failed on ${banner}: ${err.message}`);
    }
  }

  console.log(`\n✅ Done! Created ${total} suspect portrait(s).`);
  console.log(`   Check: public/cases/case-XXX-s1.jpeg ... -s5.jpeg`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});