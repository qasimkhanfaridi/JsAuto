# JS Auto — Online Automotive Parts Store (Frontend Only)

A production-ready, frontend-only automotive e-commerce storefront designed for **JS Auto** (Rawalpindi). Built with React, Vite, and Tailwind CSS, featuring a clean automotive light-blue aesthetic, dynamic variant pricing, a persistent shopping cart, and one-tap order formatting via WhatsApp.

---

## 🚀 Key Features

- **Frontend-Only Architecture**: Zero backend, zero database, zero server requirements. Can be deployed to GitHub Pages, Vercel, Netlify, Cloudflare Pages, or any static host.
- **100 Realistic Seed Products**:
  - **Engine Oils** (Shell, Castrol, Mobil 1, Liqui Moly, Toyota Genuine, Honda Genuine, Suzuki Genuine, ZIC, Caltex, Total)
  - **Engine Coolants** (Prestone, Toyota Super Long Life, Honda Type 2, Guard, AISIN, Shell, flushes & additives)
  - **Filters** (Air, Oil, Fuel, Cabin filters for Corolla, Civic, City, Alto, Hilux from Toyota OEM, Honda, Suzuki, Mann-Filter, Guard, Leppon, Vic, Bosch)
  - **Lubricants & Sprays** (WD-40 Multi-use 100ml-400ml, Specialist Contact Cleaner, Silicone, White Lithium Grease, Gunk Engine Degreasers, STP Throttle Body cleaner, Wurth, ABRO)
  - **Wipers & Consumables** (Bosch Aerotwin blades, Silicone hybrid wipers, Osram & Philips headlight bulbs, DOT 3 / DOT 4 brake fluids, AGS battery water)
- **Multi-Variant Support**: Select sizes (e.g., 1L, 3L, 4L, 5L) or viscosities (e.g., 0W-20, 5W-30, 10W-40). Prices and SKUs update in real time.
- **WhatsApp Direct Ordering**:
  - **Single Product Order**: Auto-generates a clean WhatsApp message with product name, selected variant, quantity, unit price, and estimated line total.
  - **Cart Aggregated Checkout**: Formats all cart lines into an itemized numbered list with calculated grand total in PKR.
- **Client-Side Filters & Search**:
  - Filter by Category (with quick counts)
  - Multi-select Brand filters
  - Price Range min/max sliders and inputs
  - In-stock toggle and active tag filters
  - Instant client-side search across title, brand, description, and tags
  - Sorting: Featured, Price Low→High, Price High→Low, Name A→Z
- **Phase 2 Nav Item**: "Auto Decorations" is cleanly integrated in the navigation and filter bar with a distinct "Coming Soon" badge.
- **Verified Business Details**: Pre-configured with JS Auto's location (Opposite Bahria Town Phase 4 Gate, Main GT Rd, Sawan Camp, Rawalpindi), timings (Open daily · Closes 9 PM), phone/WhatsApp (+92 331 5804888), and 5.0 Google Reviews rating.

---

## 🛠️ Tech Stack

- **React 18** with **Vite 6**
- **Tailwind CSS 3.4** (with custom automotive Light Blue brand palette)
- **Lucide React** (modern, lightweight icons)
- **LocalStorage Cart Provider** (client-side persistence)

---

## 📂 Project Structure

```text
js-auto-store/
├── index.html                  # SEO meta tags, title & font setup
├── src/
│   ├── config/
│   │   └── storeConfig.ts      # Easy-to-edit WhatsApp number, phone, address, hours
│   ├── data/
│   │   └── products.json       # Exactly 100 catalog products with variants & PKR prices
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces for products, variants & cart
│   ├── utils/
│   │   └── whatsapp.ts         # WhatsApp message builders & URL generator
│   ├── context/
│   │   └── CartContext.tsx     # Shopping cart state & localStorage sync
│   ├── components/
│   │   ├── Header.tsx          # Sticky header, search bar, navigation & cart counter
│   │   ├── Footer.tsx          # Store details, hours, map link & copyright
│   │   ├── ProductCard.tsx     # Card with live variant picker, price & WhatsApp button
│   │   ├── ProductImage.tsx    # Clean automotive SVG product illustrations & badges
│   │   ├── ProductModal.tsx    # High-detail product modal with quantity & trust badges
│   │   ├── CartDrawer.tsx      # Slide-out drawer with line items & WhatsApp checkout
│   │   └── FilterSidebar.tsx   # Desktop sidebar & mobile slide-over filter drawer
│   ├── pages/
│   │   ├── HomePage.tsx        # Hero banner, department shortcuts & trust guarantees
│   │   ├── ShopPage.tsx        # Full catalog grid with multi-facet filters & sorting
│   │   ├── AboutContactPage.tsx# Shop address, Google map link & WhatsApp inquiry form
│   │   └── NotFoundPage.tsx    # Branded 404 fallback page
│   ├── App.tsx                 # Root application with hash-based routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind styles & custom scrollbars
└── generate_products.cjs       # Seed generator script to regenerate catalog if needed
```

---

## ⚙️ How to Customize for the Client

### 1. Change WhatsApp Number or Store Details
Open `src/config/storeConfig.ts`:
```ts
export const STORE_CONFIG = {
  name: "JS Auto",
  whatsappNumber: "923315804888", // Country code + number without '+' or spaces
  whatsappDisplayNumber: "+92 331 5804888",
  phone: "+92 331 5804888",
  address: "Opposite Bahria Town Phase 4 Gate, Main GT Road, Rawalpindi",
  hours: "Open Daily · Closes 9:00 PM",
  currency: "PKR",
  // ...
};
```

### 2. Replace or Update Product List
The store loads products directly from `src/data/products.json`. To modify products or prices, simply update `products.json`. No layout or component code changes are required.

Each product follows this structure:
```json
{
  "id": "oil-01",
  "name": "Shell Helix Ultra 5W-40 Fully Synthetic",
  "slug": "shell-helix-ultra-5w40",
  "category": "engine-oils",
  "brand": "Shell",
  "shortDescription": "Premium fully synthetic motor oil formulated with PurePlus Technology...",
  "tags": ["synthetic", "pureplus", "5w-40"],
  "inStock": true,
  "featured": true,
  "variants": [
    { "id": "v-1L", "label": "1 Litre Bottle", "price": 3450, "sku": "SH-HU540-1L" },
    { "id": "v-4L", "label": "4 Litre Can", "price": 12800, "sku": "SH-HU540-4L" }
  ]
}
```

---

## 💻 Development & Build Commands

Inside `C:\Users\qasim.faridi.LT-LE-126\.gemini\antigravity\scratch\js-auto-store`:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates the optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Runs a local static server serving the production `dist/` folder.
