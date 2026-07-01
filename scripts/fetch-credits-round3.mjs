import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'round3-mapping.json'), 'utf8'));

const UA = 'TaiwanFoodSelectorApp/1.0 (contact: sandyhillwestport@gmail.com)';
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function filenameFromUrl(url) {
  const last = url.split('/').pop();
  return decodeURIComponent(last);
}

async function getMetadata(filename) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=' +
    encodeURIComponent('File:' + filename) + '&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await res.json();
  const pages = data.query.pages;
  for (const pid in pages) {
    const p = pages[pid];
    if (p.imageinfo && p.imageinfo[0].extmetadata) {
      const meta = p.imageinfo[0].extmetadata;
      return {
        artist: meta.Artist ? meta.Artist.value.replace(/<[^>]+>/g, '').trim() : 'Unknown',
        license: meta.LicenseShortName ? meta.LicenseShortName.value : 'Unknown',
        licenseUrl: meta.LicenseUrl ? meta.LicenseUrl.value : ''
      };
    }
  }
  return { artist: 'Unknown', license: 'Unknown', licenseUrl: '' };
}

const credits = [];
for (const item of mapping) {
  const filename = filenameFromUrl(item.url);
  try {
    const meta = await getMetadata(filename);
    credits.push({
      id: item.id,
      filename,
      descriptionUrl: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(filename),
      ...meta
    });
    console.log(`OK  ${item.id.padEnd(35)} ${meta.artist} — ${meta.license}`);
  } catch (e) {
    credits.push({ id: item.id, filename, error: e.message });
    console.log(`FAIL ${item.id}: ${e.message}`);
  }
  await sleep(600);
}

const existing = JSON.parse(fs.readFileSync(path.join(__dirname, 'credits.json'), 'utf8'));
const merged = [...existing, ...credits];
fs.writeFileSync(path.join(__dirname, 'credits.json'), JSON.stringify(merged, null, 2));
console.log(`\nDone. ${credits.length} new entries merged, ${merged.length} total.`);
