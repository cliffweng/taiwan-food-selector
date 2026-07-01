import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { foodData } from '../src/data/foodData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const credits = JSON.parse(fs.readFileSync(path.join(__dirname, 'credits.json'), 'utf8'));
const creditsById = Object.fromEntries(credits.map(c => [c.id, c]));

const byCategory = {};
for (const item of foodData) {
  byCategory[item.category] = byCategory[item.category] || [];
  byCategory[item.category].push(item);
}

const categoryNames = {
  mains: 'Classic Mains',
  snacks: 'Street Snacks',
  soups: 'Soups & Stews',
  desserts: 'Desserts & Sweets',
  drinks: 'Drinks & Beverages'
};

let md = `# Photo Credits\n\nAll food photos are sourced from [Wikimedia Commons](https://commons.wikimedia.org) and used under their respective open licenses. Photos were resized/compressed for use in this app; original files are linked below.\n\n`;

for (const [cat, items] of Object.entries(byCategory)) {
  md += `## ${categoryNames[cat] || cat}\n\n`;
  for (const item of items) {
    const c = creditsById[item.id];
    if (!c) continue;
    md += `- **${item.name} (${item.english})** — photo by [${c.artist}](${c.descriptionUrl}), licensed [${c.license}](${c.licenseUrl || c.descriptionUrl})\n`;
  }
  md += '\n';
}

fs.writeFileSync(path.join(__dirname, '../CREDITS.md'), md);
console.log('Wrote CREDITS.md');
