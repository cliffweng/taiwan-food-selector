import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../public/images/food');
fs.mkdirSync(OUT_DIR, { recursive: true });

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'round3-mapping.json'), 'utf8'));

const UA = 'TaiwanFoodSelectorApp/1.0 (contact: sandyhillwestport@gmail.com)';
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function downloadOne(item) {
  const res = await fetch(item.url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${item.url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(OUT_DIR, `${item.id}.jpg`);
  await sharp(buf)
    .resize({ width: 900, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  return { id: item.id, originalUrl: item.url, sizeKB: Math.round(stat.size / 1024) };
}

const results = [];
const errors = [];

for (const item of mapping) {
  try {
    const r = await downloadOne(item);
    results.push(r);
    console.log(`OK  ${r.id.padEnd(35)} ${r.sizeKB}KB`);
  } catch (e) {
    errors.push({ id: item.id, url: item.url, error: e.message });
    console.log(`FAIL ${item.id}: ${e.message}`);
  }
  await sleep(700);
}

fs.writeFileSync(path.join(__dirname, 'download-round3-results.json'), JSON.stringify({ results, errors }, null, 2));
console.log(`\nDone. ${results.length} succeeded, ${errors.length} failed.`);
