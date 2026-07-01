import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { foodData } from '../src/data/foodData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../public/images/food');
fs.mkdirSync(OUT_DIR, { recursive: true });

const UA = 'TaiwanFoodSelectorApp/1.0 (contact: sandyhillwestport@gmail.com)';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function downloadOne(item) {
  const res = await fetch(item.imageUrl, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${item.imageUrl}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(OUT_DIR, `${item.id}.jpg`);
  await sharp(buf)
    .resize({ width: 900, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  return { id: item.id, originalUrl: item.imageUrl, sizeKB: Math.round(stat.size / 1024) };
}

const results = [];
const errors = [];

for (const item of foodData) {
  try {
    const r = await downloadOne(item);
    results.push(r);
    console.log(`OK  ${r.id.padEnd(35)} ${r.sizeKB}KB`);
  } catch (e) {
    errors.push({ id: item.id, url: item.imageUrl, error: e.message });
    console.log(`FAIL ${item.id}: ${e.message}`);
  }
  await sleep(700);
}

fs.writeFileSync(path.join(__dirname, 'download-results.json'), JSON.stringify({ results, errors }, null, 2));
console.log(`\nDone. ${results.length} succeeded, ${errors.length} failed.`);
