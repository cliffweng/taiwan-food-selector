# 🇹🇼 Taiwanese Food Selector (台灣美食選擇器)

A gorgeous, high-performance, and Vercel-ready React + Vite single-page application built to help users explore Taiwanese cuisine and easily decide what to eat! 

Designed with a vibrant **"Taiwanese Night Market" (夜市) neon theme**, the application serves as a visual guide and random decider. A single tap/click on any food card copies its Chinese name to the clipboard instantly, complete with a confetti burst and toast notification—making ordering street food at local markets a breeze (or searching it up on Google Maps).

---

## ✨ Features

*   **🔮 Destiny Wheel of Fortune:** An interactive, smooth spinning wheel of fortune that picks a random food from your selected category to help you decide what to eat.
*   **📋 Instant Clipboard Copy:** Click on any food card to instantly copy its traditional Chinese name to your clipboard, allowing you to quickly paste it into search engines, food delivery apps, Google Maps, or show it to street vendors.
*   **🔍 Live Search:** Instant, client-side filtering matching Chinese characters, English names, Pinyin transliterations, and description keywords.
*   **🏷️ Category Filters:** Easily filter foods by Classic Mains (`🍜`), Street Snacks (`🍢`), Soups & Stews (`🍲`), Desserts & Sweets (`🍧`), and Drinks & Beverages (`🥤`).
*   **🎨 Rich Night Market Aesthetics:** Curated neon-obsidian color palette with smooth CSS micro-animations, glassmorphic panels, custom scrollbars, and colorful floating notifications.
*   **🎉 Interactive Delights:** Satisfying confetti bursts using `canvas-confetti` when a dish is copied or selected by the wheel.

---

## 🛠️ Tech Stack

*   **Core:** React 18 & Vite (JavaScript)
*   **Styling:** Vanilla CSS (Tailored HSL neon tokens, glassmorphism, responsive grid layouts, custom keyframes)
*   **Icons:** Lucide React
*   **Effects:** Canvas Confetti
*   **Images:** Locally bundled JPEGs (compressed with `sharp`), sourced from Wikimedia Commons — see [Content Pipeline](#-content-pipeline--photo-credits) below
*   **Linter:** ESLint (.eslintrc.cjs config)
*   **Hosting:** Pre-configured for one-click Vercel Deployments (`vercel.json`)

---

## 🚀 Quick Launch Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 1. Install Dependencies
Clone the repository and run the following command in the project root:
```bash
npm install
```

### 2. Run the Development Server
Launch the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Production Build
Verify the production build or compile the application for deployment:
```bash
npm run build
```
This outputs a lightweight, optimized bundle in the `dist/` directory.

### 4. Code Quality & Linting
Run the linter to verify formatting and code health:
```bash
npm run lint
```

---

## ☁️ Deployment to Vercel

The application is pre-configured with a [vercel.json](vercel.json) file for zero-config deployments.

### Option A: Vercel CLI (Local CLI Deployment)
1. Install the Vercel CLI: `npm i -g vercel`
2. Run the deployment command in the root folder:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy in seconds.

### Option B: Git Integration (Continuous Deployment)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel will automatically detect **Vite** and configure the build settings.
4. Click **Deploy**.

---

## 🍲 Included Taiwanese Foods (110 Dishes)

Each entry includes a Chinese name, English translation, Pinyin, a short description, and a local photo. All dish data lives in [`src/data/foodData.js`](src/data/foodData.js), organized into five categories:

| Category | English | Count |
|---|---|---|
| 飽胃主食 | Classic Mains | 28 |
| 夜市小吃 | Street Snacks | 29 |
| 暖胃湯鍋 | Soups & Stews | 22 |
| 療癒甜品 | Desserts & Sweets | 18 |
| 解渴飲品 | Drinks & Beverages | 13 |

To add a new dish, add an entry to `foodData.js` (with a Wikimedia Commons image URL), then run the download pipeline described below to pull, compress, and credit the photo automatically.

---

## 📸 Content Pipeline & Photo Credits

All food photos are downloaded from [Wikimedia Commons](https://commons.wikimedia.org), compressed to web-friendly JPEGs with [`sharp`](https://sharp.pixelplumbing.com/), and stored locally in `public/images/food/` — the app never hotlinks external images, so it isn't affected by upstream files being renamed or deleted.

Reusable scripts live in `scripts/`:
*   `download-images.mjs` — downloads and resizes an image for every item in `foodData.js`
*   `fetch-credits.mjs` — pulls author/license metadata from the Commons API for each photo
*   `generate-credits-md.mjs` — regenerates [`CREDITS.md`](CREDITS.md) from that metadata

Most photos are licensed CC BY / CC BY-SA and require attribution — see [`CREDITS.md`](CREDITS.md) (also linked in the app footer) for the full list of photographers and licenses.
