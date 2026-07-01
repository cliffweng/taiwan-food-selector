# 🇹🇼 Taiwanese Food Selector (台灣美食選擇器)

A gorgeous, high-performance, and Vercel-ready React + Vite single-page application built to help users explore Taiwanese cuisine and easily decide what to eat! 

Designed with a vibrant **"Taiwanese Night Market" (夜市) neon theme**, the application serves as a visual guide and random decider. A single tap/click on any food card copies its Chinese name to the clipboard instantly, complete with a confetti burst and toast notification—making ordering street food at local markets a breeze.

---

## ✨ Features

*   **🔮 Destiny Wheel of Fortune:** An interactive, smooth spinning wheel of fortune that picks a random food from your selected category to help you decide what to eat.
*   **📋 Instant Clipboard Copy:** Click on any food card to instantly copy its traditional Chinese name to your clipboard, allowing you to quickly paste it into search engines, food delivery apps, or show it to street vendors.
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

## 🍲 Included Taiwanese Foods (58 Dishes)

The app contains descriptions, pinyin, English translations, and high-quality photo URLs for the following items:

*   **Classic Mains:** Beef Noodle Soup (牛肉麵), Braised Pork Rice (滷肉飯), Ba-Wan (肉圓), Savory Rice Pudding (碗粿), Oyster Omelette (蚵仔煎), Oyster Vermicelli (蚵仔麵線), Wonton (餛飩), Teppanyaki Steak (鐵板牛排), Savory Soy Milk (鹹豆漿), Qiezai Noodles (切仔麵), Stir-Fried Rice Noodles (炒米粉), Shrimp Fried Rice (蝦米炒飯), Three-Cup Chicken (三杯雞), Scallion Pancake (蔥油餅).
*   **Street Snacks:** Steamed Pork Belly Bun (刈包), Stinky Tofu (臭豆腐), Giant Fried Chicken Cutlet (炸雞排), Popcorn Chicken (鹽酥雞), Pig's Blood Cake (豬血糕), Sausage Wrapped in Sticky Rice (大腸包小腸), Black Pepper Pork Bun (胡椒餅), Sweet Potato Balls (地瓜球), Taiwanese Egg Crepe (蛋餅), Taiwanese Rice Ball (飯糰), Run Bing (潤餅), Grilled King Oyster Mushroom (醬烤杏鮑菇), Grilled Quail Eggs (烤鳥蛋), Charcoal Grilled Corn (碳烤玉米), Tian Bu La (甜不辣), Iron Eggs (鐵蛋).
*   **Soups & Stews:** Fuzhou Fish Ball Soup (福州魚丸湯), Milkfish Soup (虱目魚湯), Sesame Oil Pork Kidney (麻油腰花), Angelica Duck Soup (當歸鴨), Stinky Hotpot (臭臭鍋), Hot Pot (火鍋), Pork Rib Soup (排骨湯), Medicinal Pork Ribs Soup (藥燉排骨), Ginger Duck Hot Pot (薑母鴨), Teppanyaki (鐵板燒), Braised Tofu (滷豆腐), Braised Chinese Cabbage (滷白菜), Stir-Fried Sweet Potato Leaves (炒地瓜葉), Stir-Fried White Water Snowflake (炒水蓮).
*   **Desserts & Sweets:** Taiwanese Shaved Ice (剉冰), Mango Snowflake Ice (芒果雪花冰), Ice and Fire Pineapple Bun (冰火菠蘿), Douhua Tofu Pudding (豆花), Taro Balls (芋圓), Mee Tai Bak with Jelly Dessert (米苔目粉粿), Chocolate Pineapple Bun (巧克力菠蘿麵包), Pineapple Cake (鳳梨酥), Sun Cake (太陽餅), Peanut Roll with Ice Cream (花生捲冰淇淋).
*   **Drinks & Beverages:** Papaya Milk (木瓜牛奶), Grass Jelly Drink (仙草蜜), Bubble Milk Tea (珍珠奶茶), Winter Melon Tea (冬瓜茶), Guava Juice (芭樂汁), Starfruit Juice (楊桃汁), Brown Rice Milk (糙米漿), Taiwan 18-Days Draft Beer (台灣18天啤酒), Kyoho Grapes (巨峰葡萄).
