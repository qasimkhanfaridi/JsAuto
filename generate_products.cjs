const fs = require('fs');
const path = require('path');

const products = [
  // =================== ENGINE OILS (32 items) ===================
  {
    id: "oil-01",
    name: "Shell Helix Ultra 5W-40 Fully Synthetic",
    slug: "shell-helix-ultra-5w40",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Shell",
    shortDescription: "Premium fully synthetic motor oil formulated with PurePlus Technology from natural gas for maximum engine performance and protection.",
    tags: ["synthetic", "pureplus", "5w-40", "petrol", "diesel"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 38,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3450, sku: "SH-HU540-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 12800, sku: "SH-HU540-4L" }
    ]
  },
  {
    id: "oil-02",
    name: "Shell Helix Ultra 0W-20 SP Fully Synthetic",
    slug: "shell-helix-ultra-0w20",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Shell",
    shortDescription: "Ultra-low viscosity fuel economy oil engineered for modern Japanese and hybrid vehicles requiring SP/GF-6 standards.",
    tags: ["synthetic", "0w-20", "hybrid", "fuel-economy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 24,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3700, sku: "SH-HU020-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 13950, sku: "SH-HU020-4L" }
    ]
  },
  {
    id: "oil-03",
    name: "Shell Helix HX7 5W-30 Synthetic Technology",
    slug: "shell-helix-hx7-5w30",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Shell",
    shortDescription: "Synthetic technology motor oil that helps keep engines clean and efficiently running by preventing sludge buildup.",
    tags: ["synthetic-tech", "5w-30", "daily-driver"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 19,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 2550, sku: "SH-HX730-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 9600, sku: "SH-HX730-4L" }
    ]
  },
  {
    id: "oil-04",
    name: "Shell Helix HX7 10W-40 Synthetic Technology",
    slug: "shell-helix-hx7-10w40",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Shell",
    shortDescription: "Robust engine protection against wear in everyday city driving conditions, suitable for petrol and gas engines.",
    tags: ["synthetic-blend", "10w-40", "wear-protection"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 22,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 2350, sku: "SH-HX740-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 8900, sku: "SH-HX740-4L" }
    ]
  },
  {
    id: "oil-05",
    name: "Shell Helix HX5 15W-40 Premium Mineral",
    slug: "shell-helix-hx5-15w40",
    category: "engine-oils",
    subcategory: "Mineral",
    brand: "Shell",
    shortDescription: "Reliable mineral engine oil designed for high-mileage cars, maintaining viscosity and reducing oil consumption.",
    tags: ["mineral", "15w-40", "high-mileage"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 15,
    variants: [
      { id: "v-3L", label: "3 Litre Pack", price: 5400, sku: "SH-HX5-3L" },
      { id: "v-4L", label: "4 Litre Can", price: 6900, sku: "SH-HX5-4L" }
    ]
  },
  {
    id: "oil-06",
    name: "Shell Rimula R4 X 15W-40 Heavy Duty Diesel Oil",
    slug: "shell-rimula-r4x-15w40",
    category: "engine-oils",
    subcategory: "Diesel",
    brand: "Shell",
    shortDescription: "Triple protection against acid and corrosion, wear, and deposits in high-output turbo diesel engines.",
    tags: ["diesel", "turbo", "15w-40", "4x4", "hilux"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 31,
    variants: [
      { id: "v-4L", label: "4 Litre Pack", price: 7800, sku: "SH-RIM4-4L" },
      { id: "v-5L", label: "5 Litre Pack", price: 9600, sku: "SH-RIM4-5L" }
    ]
  },
  {
    id: "oil-07",
    name: "Castrol EDGE 5W-30 LL Advanced Full Synthetic",
    slug: "castrol-edge-5w30-ll",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Castrol",
    shortDescription: "Engineered with Fluid TITANIUM technology to transform under extreme pressure, unlocking true engine power.",
    tags: ["synthetic", "titanium", "5w-30", "performance"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 42,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3850, sku: "CAS-EDG530-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 14500, sku: "CAS-EDG530-4L" }
    ]
  },
  {
    id: "oil-08",
    name: "Castrol EDGE 5W-40 Advanced Full Synthetic",
    slug: "castrol-edge-5w40",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Castrol",
    shortDescription: "High-shear-strength synthetic lubricant providing uninterrupted film strength across extreme temperatures.",
    tags: ["synthetic", "titanium", "5w-40"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 17,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3750, sku: "CAS-EDG540-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 14200, sku: "CAS-EDG540-4L" }
    ]
  },
  {
    id: "oil-09",
    name: "Castrol MAGNATEC 5W-30 Stop-Start DDES",
    slug: "castrol-magnatec-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Castrol",
    shortDescription: "Intelligent Dualock molecules cling like a magnet to critical engine components, dramatically reducing warm-up and stop-start wear.",
    tags: ["stop-start", "5w-30", "dualock"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 29,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3100, sku: "CAS-MAG530-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 11800, sku: "CAS-MAG530-4L" }
    ]
  },
  {
    id: "oil-10",
    name: "Castrol MAGNATEC 10W-40 Semi-Synthetic",
    slug: "castrol-magnatec-10w40",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Castrol",
    shortDescription: "Trusted magnetic molecular formula engineered for dependable city protection in variable Pakistani ambient temperatures.",
    tags: ["semi-synthetic", "10w-40", "dualock"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 25,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 2600, sku: "CAS-MAG1040-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 9800, sku: "CAS-MAG1040-4L" }
    ]
  },
  {
    id: "oil-11",
    name: "Castrol GTX 20W-50 Conventional Anti-Sludge",
    slug: "castrol-gtx-20w50",
    category: "engine-oils",
    subcategory: "Mineral",
    brand: "Castrol",
    shortDescription: "Double-action formula that clears away old sludge while protecting against new sludge formation in older and hot-running engines.",
    tags: ["mineral", "20w-50", "anti-sludge", "summer"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 18,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 1800, sku: "CAS-GTX-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 6800, sku: "CAS-GTX-4L" }
    ]
  },
  {
    id: "oil-12",
    name: "Mobil 1 ESP 5W-30 Advanced Full Synthetic",
    slug: "mobil-1-esp-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Mobil 1",
    shortDescription: "Expert formulation designed to help prolong the life and maintain efficiency of Emission Reduction Systems in petrol and diesel cars.",
    tags: ["synthetic", "5w-30", "emission-friendly", "german-spec"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 33,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 3950, sku: "MOB-ESP530-1L" },
      { id: "v-4L", label: "4 Litre Pack", price: 15200, sku: "MOB-ESP530-4L" }
    ]
  },
  {
    id: "oil-13",
    name: "Mobil 1 FS 0W-40 European Car Formula",
    slug: "mobil-1-fs-0w40",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Mobil 1",
    shortDescription: "World-renowned flagship synthetic engine oil with Triple Action Power for outstanding engine cleanliness and wear resistance.",
    tags: ["synthetic", "0w-40", "european-spec", "performance"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 20,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 4100, sku: "MOB-FS040-1L" },
      { id: "v-4L", label: "4 Litre Pack", price: 15800, sku: "MOB-FS040-4L" }
    ]
  },
  {
    id: "oil-14",
    name: "Mobil Super 2000 X1 10W-40 Semi-Synthetic",
    slug: "mobil-super-2000-10w40",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Mobil 1",
    shortDescription: "Enhanced engine protection and sludge prevention under everyday demanding traffic conditions.",
    tags: ["semi-synthetic", "10w-40", "reliable"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 14,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 2450, sku: "MOB-S2000-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 9200, sku: "MOB-S2000-4L" }
    ]
  },
  {
    id: "oil-15",
    name: "Liqui Moly Molygen New Generation 5W-30",
    slug: "liqui-moly-molygen-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Liqui Moly",
    shortDescription: "High-performance low-friction motor oil with innovative MFC (Molecular Friction Control) technology and unmistakable green fluorescent tint.",
    tags: ["synthetic", "molygen", "5w-30", "german", "green-oil"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 51,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 4400, sku: "LM-MOL530-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 16800, sku: "LM-MOL530-4L" }
    ]
  },
  {
    id: "oil-16",
    name: "Liqui Moly Special Tec AA 0W-20",
    slug: "liqui-moly-special-tec-aa-0w20",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Liqui Moly",
    shortDescription: "Tailored specifically for modern Asian and American passenger cars. Exceptional fuel savings and thermal stability.",
    tags: ["synthetic", "0w-20", "asian-auto", "hybrid"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 28,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 4300, sku: "LM-ST020-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 16200, sku: "LM-ST020-4L" }
    ]
  },
  {
    id: "oil-17",
    name: "Liqui Moly Leichtlauf High Tech 5W-40",
    slug: "liqui-moly-leichtlauf-5w40",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Liqui Moly",
    shortDescription: "Top-tier synthetic motor oil for modern petrol and diesel engines with multi-valve technology, turbocharging and charge air cooling.",
    tags: ["synthetic", "5w-40", "turbo", "german"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 19,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 4200, sku: "LM-LL540-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 15900, sku: "LM-LL540-4L" }
    ]
  },
  {
    id: "oil-18",
    name: "Liqui Moly Super Leichtlauf 10W-40",
    slug: "liqui-moly-super-leichtlauf-10w40",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Liqui Moly",
    shortDescription: "All-season low-friction motor oil based on high-tech synthetic blend technology. Rapid oil delivery at low start temperatures.",
    tags: ["semi-synthetic", "10w-40", "german"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 16,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 3200, sku: "LM-SLL1040-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 12200, sku: "LM-SLL1040-4L" }
    ]
  },
  {
    id: "oil-19",
    name: "Toyota Genuine Motor Oil TGMO 0W-20 SP",
    slug: "toyota-genuine-tgmo-0w20",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Toyota Genuine",
    shortDescription: "Original factory-approved Toyota formulation engineered for maximum fuel efficiency and cold-start protection on Corolla, Yaris, and Prius.",
    tags: ["toyota", "oem", "synthetic", "0w-20", "hybrid"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 47,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 3600, sku: "TOY-0W20-1L" },
      { id: "v-4L", label: "4 Litre Tin Pack", price: 13500, sku: "TOY-0W20-4L" }
    ]
  },
  {
    id: "oil-20",
    name: "Toyota Genuine Motor Oil TGMO 5W-30 SN/CF",
    slug: "toyota-genuine-tgmo-5w30",
    category: "engine-oils",
    subcategory: "Semi-Synthetic",
    brand: "Toyota Genuine",
    shortDescription: "OEM motor oil engineered specifically for Toyota engines operating under heavy traffic and variable driving climates.",
    tags: ["toyota", "oem", "5w-30", "corolla", "yaris"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 36,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 2950, sku: "TOY-5W30-1L" },
      { id: "v-4L", label: "4 Litre Tin Pack", price: 11200, sku: "TOY-5W30-4L" }
    ]
  },
  {
    id: "oil-21",
    name: "Toyota Genuine Motor Oil TGMO 20W-50 SL/CF",
    slug: "toyota-genuine-tgmo-20w50",
    category: "engine-oils",
    subcategory: "Mineral",
    brand: "Toyota Genuine",
    shortDescription: "Heavy-bodied genuine lubricant offering heavy film protection for older Toyota vehicles and commercial applications.",
    tags: ["toyota", "oem", "20w-50", "mineral"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 14,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 1950, sku: "TOY-20W50-1L" },
      { id: "v-4L", label: "4 Litre Tin Pack", price: 7400, sku: "TOY-20W50-4L" }
    ]
  },
  {
    id: "oil-22",
    name: "Honda Genuine Engine Oil 0W-20 Ultra LEO",
    slug: "honda-genuine-0w20-ultra-leo",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Honda Genuine",
    shortDescription: "Designed by Honda R&D to optimize VTEC and Earth Dreams engines for fuel efficiency and seamless response.",
    tags: ["honda", "oem", "0w-20", "civic", "city", "br-v"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 34,
    variants: [
      { id: "v-1L", label: "1 Litre Pack", price: 3650, sku: "HON-0W20-1L" },
      { id: "v-4L", label: "4 Litre Tin Pack", price: 13800, sku: "HON-0W20-4L" }
    ]
  },
  {
    id: "oil-23",
    name: "Honda Genuine Engine Oil 5W-30 SN",
    slug: "honda-genuine-5w30-sn",
    category: "engine-oils",
    subcategory: "Semi-Synthetic",
    brand: "Honda Genuine",
    shortDescription: "Balanced viscosity genuine engine lubricant developed to keep Honda i-VTEC engines running silky smooth.",
    tags: ["honda", "oem", "5w-30", "i-vtec"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 21,
    variants: [
      { id: "v-1L", label: "1 Litre Pack", price: 2900, sku: "HON-5W30-1L" },
      { id: "v-4L", label: "4 Litre Tin Pack", price: 11000, sku: "HON-5W30-4L" }
    ]
  },
  {
    id: "oil-24",
    name: "Suzuki Genuine Oil SGO 0W-20 Premium Eco",
    slug: "suzuki-genuine-sgo-0w20",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Suzuki Genuine",
    shortDescription: "Factory engineered formulation for Suzuki Alto 660cc, Wagon R, and Cultus K-Series engines, boosting fuel economy.",
    tags: ["suzuki", "oem", "0w-20", "alto", "wagon-r", "cultus"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 39,
    variants: [
      { id: "v-3L", label: "3 Litre Pack (Alto/Cultus)", price: 8200, sku: "SUZ-0W20-3L" },
      { id: "v-4L", label: "4 Litre Pack", price: 10800, sku: "SUZ-0W20-4L" }
    ]
  },
  {
    id: "oil-25",
    name: "Suzuki Genuine Oil SGO 10W-40 Ultimate",
    slug: "suzuki-genuine-sgo-10w40",
    category: "engine-oils",
    subcategory: "Semi-Synthetic",
    brand: "Suzuki Genuine",
    shortDescription: "Reliable OEM lubricant providing smooth gearshifts, clean engine internals, and friction protection.",
    tags: ["suzuki", "oem", "10w-40", "swift", "bolan"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 22,
    variants: [
      { id: "v-3L", label: "3 Litre Pack", price: 6100, sku: "SUZ-1040-3L" },
      { id: "v-4L", label: "4 Litre Pack", price: 7900, sku: "SUZ-1040-4L" }
    ]
  },
  {
    id: "oil-26",
    name: "ZIC X9 5W-30 Fully Synthetic VHVI",
    slug: "zic-x9-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "ZIC",
    shortDescription: "Engineered with YUBASE Group III base oils to provide superior fuel economy and extended drain intervals.",
    tags: ["synthetic", "yubase", "5w-30", "sk-zic"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 19,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 3100, sku: "ZIC-X930-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 11900, sku: "ZIC-X930-4L" }
    ]
  },
  {
    id: "oil-27",
    name: "ZIC X7 5W-20 Fully Synthetic",
    slug: "zic-x7-5w20",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "ZIC",
    shortDescription: "Cost-effective fully synthetic motor oil formulated for tight clearance Japanese engines requiring light viscosity.",
    tags: ["synthetic", "5w-20", "fuel-saver"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 15,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 2750, sku: "ZIC-X720-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 10400, sku: "ZIC-X720-4L" }
    ]
  },
  {
    id: "oil-28",
    name: "ZIC X7 10W-40 Synthetic Technology",
    slug: "zic-x7-10w40",
    category: "engine-oils",
    subcategory: "Semi-Synthetic",
    brand: "ZIC",
    shortDescription: "A versatile synthetic formula offering exceptional wear protection and sludge deterrence in high ambient temperatures.",
    tags: ["semi-synthetic", "10w-40", "all-weather"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 23,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 2400, sku: "ZIC-X740-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 8900, sku: "ZIC-X740-4L" }
    ]
  },
  {
    id: "oil-29",
    name: "Caltex Havoline ProDS Fully Synthetic 5W-30",
    slug: "caltex-havoline-prods-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Caltex",
    shortDescription: "Deposit Shield technology that delivers full synthetic performance against heat degradation and thermal breakdown.",
    tags: ["synthetic", "deposit-shield", "5w-30"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 18,
    variants: [
      { id: "v-1L", label: "1 Litre Pack", price: 3200, sku: "CAL-PDS-1L" },
      { id: "v-4L", label: "4 Litre Pack", price: 12100, sku: "CAL-PDS-4L" }
    ]
  },
  {
    id: "oil-30",
    name: "Caltex Havoline Formula 10W-40 Deposit Shield",
    slug: "caltex-havoline-formula-10w40",
    category: "engine-oils",
    subcategory: "Semi-Synthetic",
    brand: "Caltex",
    shortDescription: "Highly stable multigrade motor oil safeguarding passenger cars against urban stop-and-go engine wear.",
    tags: ["semi-synthetic", "10w-40", "urban-driving"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 13,
    variants: [
      { id: "v-1L", label: "1 Litre Pack", price: 2300, sku: "CAL-FORM-1L" },
      { id: "v-4L", label: "4 Litre Pack", price: 8700, sku: "CAL-FORM-4L" }
    ]
  },
  {
    id: "oil-31",
    name: "Total Quartz 9000 Future GF-6 5W-30",
    slug: "total-quartz-9000-5w30",
    category: "engine-oils",
    subcategory: "Fully Synthetic",
    brand: "Total",
    shortDescription: "Advanced synthetic technology oil with Age-Resistance technology for extreme endurance in stop-start urban traffic.",
    tags: ["synthetic", "5w-30", "total-quartz", "gf6"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 16,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 3150, sku: "TOT-Q9000-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 11950, sku: "TOT-Q9000-4L" }
    ]
  },
  {
    id: "oil-32",
    name: "Total Quartz 7000 10W-40 Synthetic Technology",
    slug: "total-quartz-7000-10w40",
    category: "engine-oils",
    subcategory: "Synthetic Blend",
    brand: "Total",
    shortDescription: "Reinforced wear protection suited for standard unleaded, turbocharged, and CNG vehicles.",
    tags: ["semi-synthetic", "10w-40", "reliable"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 12,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 2400, sku: "TOT-Q7000-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 8950, sku: "TOT-Q7000-4L" }
    ]
  },

  // =================== ENGINE COOLANTS (16 items) ===================
  {
    id: "cool-01",
    name: "Prestone Ready-To-Use 50/50 Prediluted Antifreeze Coolant",
    slug: "prestone-prediluted-50-50-coolant",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Prestone",
    shortDescription: "Universal Cor-Guard technology protects all makes and models up to 10 years or 300,000 miles against rust and corrosion.",
    tags: ["coolant", "premixed", "universal", "cor-guard"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 41,
    variants: [
      { id: "v-1gal", label: "1 Gallon (3.78 Litres)", price: 4200, sku: "PRS-5050-GAL" }
    ]
  },
  {
    id: "cool-02",
    name: "Prestone Concentrated High Performance Coolant",
    slug: "prestone-concentrated-coolant",
    category: "coolants",
    subcategory: "Concentrate",
    brand: "Prestone",
    shortDescription: "Concentrated formula that allows custom freeze and boil-over protection mixtures when diluted with distilled water.",
    tags: ["coolant", "concentrate", "high-performance"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 22,
    variants: [
      { id: "v-1gal", label: "1 Gallon (3.78 Litres)", price: 4900, sku: "PRS-CONC-GAL" }
    ]
  },
  {
    id: "cool-03",
    name: "Toyota Super Long Life Coolant SLLC Pink 50/50",
    slug: "toyota-super-long-life-coolant-pink",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Toyota Genuine",
    shortDescription: "OEM factory-fill pink premixed coolant formulated specifically for aluminum cooling systems in Toyota, Lexus, and Daihatsu.",
    tags: ["toyota", "oem", "pink-coolant", "sllc", "premixed"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 56,
    variants: [
      { id: "v-4L", label: "4 Litre Can", price: 8200, sku: "TOY-SLLC-4L" }
    ]
  },
  {
    id: "cool-04",
    name: "Toyota Genuine Long Life Coolant Red Concentrate",
    slug: "toyota-long-life-coolant-red-concentrate",
    category: "coolants",
    subcategory: "Concentrate",
    brand: "Toyota Genuine",
    shortDescription: "Ethylene glycol based non-silicate formula preventing rust and boil-over in older Toyota cooling systems.",
    tags: ["toyota", "oem", "red-coolant", "concentrate"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 19,
    variants: [
      { id: "v-1L", label: "1 Litre Can", price: 2400, sku: "TOY-LLC-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 8500, sku: "TOY-LLC-4L" }
    ]
  },
  {
    id: "cool-05",
    name: "Honda Type 2 All Season Coolant Blue Premixed",
    slug: "honda-type-2-coolant-blue",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Honda Genuine",
    shortDescription: "OEM blue ethylene glycol coolant with organic corrosion inhibitors for Civic, City, Accord, and Vezel.",
    tags: ["honda", "oem", "blue-coolant", "type-2", "premixed"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 37,
    variants: [
      { id: "v-1gal", label: "1 Gallon (3.78 Litres)", price: 7900, sku: "HON-COOL-GAL" }
    ]
  },
  {
    id: "cool-06",
    name: "Guard Premium Radiator Coolant Red Ready-to-Use",
    slug: "guard-radiator-coolant-red",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Guard",
    shortDescription: "Locally manufactured heavy-duty anti-rust and anti-freeze solution engineered for extreme Pakistani summer heat.",
    tags: ["guard", "red-coolant", "budget-friendly", "anti-rust"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 26,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 850, sku: "GRD-CLR-1L" },
      { id: "v-4L", label: "4 Litre Gallon", price: 2950, sku: "GRD-CLR-4L" }
    ]
  },
  {
    id: "cool-07",
    name: "Guard Premium Radiator Coolant Green Ready-to-Use",
    slug: "guard-radiator-coolant-green",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Guard",
    shortDescription: "Formulated to prevent electrolysis, scaling, and cavitation in cast iron and copper radiator setups.",
    tags: ["guard", "green-coolant", "anti-scaling"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 20,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 850, sku: "GRD-CLG-1L" },
      { id: "v-4L", label: "4 Litre Gallon", price: 2950, sku: "GRD-CLG-4L" }
    ]
  },
  {
    id: "cool-08",
    name: "AISIN Super Long Life Coolant LLC Pink",
    slug: "aisin-super-long-life-coolant-pink",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "AISIN",
    shortDescription: "Japanese OEM manufacturing standard coolant for Toyota and Daihatsu. Phosphated organic acid technology (POAT).",
    tags: ["aisin", "japan", "pink-coolant", "poat"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 16,
    variants: [
      { id: "v-4L", label: "4 Litre Can", price: 6800, sku: "AIS-CLP-4L" }
    ]
  },
  {
    id: "cool-09",
    name: "AISIN Super Long Life Coolant LLC Blue",
    slug: "aisin-super-long-life-coolant-blue",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "AISIN",
    shortDescription: "Direct OEM replacement for Honda, Nissan, and Subaru blue coolant requirements.",
    tags: ["aisin", "japan", "blue-coolant"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 14,
    variants: [
      { id: "v-4L", label: "4 Litre Can", price: 6800, sku: "AIS-CLB-4L" }
    ]
  },
  {
    id: "cool-10",
    name: "Shell Coolant Extra Ready-to-Use 50/50",
    slug: "shell-coolant-extra-ready-to-use",
    category: "coolants",
    subcategory: "Premixed 50/50",
    brand: "Shell",
    shortDescription: "High-grade hybrid technology coolant offering corrosion protection up to 3 years without water top-ups.",
    tags: ["shell", "coolant", "hybrid-tech"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 18,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 1550, sku: "SH-COLEX-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 5600, sku: "SH-COLEX-4L" }
    ]
  },
  {
    id: "cool-11",
    name: "Shell Coolant Longlife Concentrate",
    slug: "shell-coolant-longlife-concentrate",
    category: "coolants",
    subcategory: "Concentrate",
    brand: "Shell",
    shortDescription: "Silicate-free OAT technology concentrate providing cavitation and freeze protection up to 5 years.",
    tags: ["shell", "concentrate", "oat-technology"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 11,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 2100, sku: "SH-COLLC-1L" },
      { id: "v-4L", label: "4 Litre Can", price: 7800, sku: "SH-COLLC-4L" }
    ]
  },
  {
    id: "cool-12",
    name: "Liqui Moly Radiator Stop Leak (Kühlerdichter)",
    slug: "liqui-moly-radiator-stop-leak-150ml",
    category: "coolants",
    subcategory: "Additives & Flush",
    brand: "Liqui Moly",
    shortDescription: "Permanently and reliably seals hair cracks and minor radiator leaks without clogging coolant passages.",
    tags: ["liqui-moly", "stop-leak", "radiator-additive", "german"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 30,
    variants: [
      { id: "v-150ml", label: "150ml Can", price: 2150, sku: "LM-STOPL-150" }
    ]
  },
  {
    id: "cool-13",
    name: "Liqui Moly Radiator Cleaner Flush (Kühlerreiniger)",
    slug: "liqui-moly-radiator-cleaner-300ml",
    category: "coolants",
    subcategory: "Additives & Flush",
    brand: "Liqui Moly",
    shortDescription: "Dissolves rust, limescale deposits, and sludge from radiator pipes before replacing coolant.",
    tags: ["liqui-moly", "radiator-flush", "german"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 25,
    variants: [
      { id: "v-300ml", label: "300ml Can", price: 2450, sku: "LM-RADCLN-300" }
    ]
  },
  {
    id: "cool-14",
    name: "Wurth Radiator Sealant HP",
    slug: "wurth-radiator-sealant-150ml",
    category: "coolants",
    subcategory: "Additives & Flush",
    brand: "Wurth",
    shortDescription: "Professional-grade micro-particle radiator sealant compatible with all coolants and heater cores.",
    tags: ["wurth", "german", "radiator-seal"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 13,
    variants: [
      { id: "v-150ml", label: "150ml Bottle", price: 1950, sku: "WRT-SEAL-150" }
    ]
  },
  {
    id: "cool-15",
    name: "Wurth Radiator Cleaner & Degreaser",
    slug: "wurth-radiator-cleaner-250ml",
    category: "coolants",
    subcategory: "Additives & Flush",
    brand: "Wurth",
    shortDescription: "Removes oily residues caused by cylinder head gasket leaks and restores heat dissipation efficiency.",
    tags: ["wurth", "degreaser", "radiator-clean"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 15,
    variants: [
      { id: "v-250ml", label: "250ml Bottle", price: 2200, sku: "WRT-CLN-250" }
    ]
  },
  {
    id: "cool-16",
    name: "STP Radiator Flush Fast Acting Cleaner",
    slug: "stp-radiator-flush-cleaner",
    category: "coolants",
    subcategory: "Additives & Flush",
    brand: "STP",
    shortDescription: "Fast-acting 10-minute radiator flush cleaning cooling systems and preventing overheating.",
    tags: ["stp", "flush", "overheating-solution"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 17,
    variants: [
      { id: "v-354ml", label: "354ml Bottle", price: 1650, sku: "STP-RFL-354" }
    ]
  },

  // =================== FILTERS (26 items) ===================
  {
    id: "flt-01",
    name: "Toyota Genuine Oil Filter 90915-YZZE2",
    slug: "toyota-genuine-oil-filter-yzze2",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Toyota Genuine",
    shortDescription: "OEM oil filter for Toyota Corolla (1.3/1.6/1.8), Yaris, and Vitz. Dual-layered element with anti-drainback silicone valve.",
    tags: ["toyota", "oem", "oil-filter", "corolla", "yaris"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 68,
    variants: [
      { id: "v-1pc", label: "1 Unit (OEM Box)", price: 1650, sku: "TOY-OF-E2" }
    ]
  },
  {
    id: "flt-02",
    name: "Toyota Genuine Oil Filter 90915-YZZD2 (Hilux / Prado)",
    slug: "toyota-genuine-oil-filter-yzzd2",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Toyota Genuine",
    shortDescription: "Large capacity genuine oil filter for Toyota Hilux Revo, Fortuner (1GD/2GD/2TR), and Prado engines.",
    tags: ["toyota", "hilux", "revo", "fortuner", "oil-filter"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 44,
    variants: [
      { id: "v-1pc", label: "1 Unit (OEM Box)", price: 2350, sku: "TOY-OF-D2" }
    ]
  },
  {
    id: "flt-03",
    name: "Toyota Genuine Air Filter 17801-21050 (Corolla Altis)",
    slug: "toyota-genuine-air-filter-corolla-altis",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Toyota Genuine",
    shortDescription: "High-flow OEM intake air filter specifically sized for Toyota Corolla 11th Gen (2014-2022) 1.6 and 1.8.",
    tags: ["toyota", "corolla", "air-filter", "oem"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 39,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 3400, sku: "TOY-AF-21050" }
    ]
  },
  {
    id: "flt-04",
    name: "Toyota Genuine Air Filter 17801-0Y040 (Yaris)",
    slug: "toyota-genuine-air-filter-toyota-yaris",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Toyota Genuine",
    shortDescription: "Original factory air filter designed for Pakistani Toyota Yaris 1.3L and 1.5L engines.",
    tags: ["toyota", "yaris", "air-filter", "oem"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 23,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 3100, sku: "TOY-AF-0Y040" }
    ]
  },
  {
    id: "flt-05",
    name: "Toyota Genuine Carbon Cabin AC Filter",
    slug: "toyota-genuine-carbon-cabin-ac-filter",
    category: "filters",
    subcategory: "Cabin Filters",
    brand: "Toyota Genuine",
    shortDescription: "Activated charcoal cabin filter neutralizing pollen, smog, and dust inside Toyota Corolla, Yaris, and Fortuner.",
    tags: ["toyota", "cabin-filter", "ac-filter", "carbon"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 31,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1850, sku: "TOY-CF-CARB" }
    ]
  },
  {
    id: "flt-06",
    name: "Honda Genuine Oil Filter 15400-RAF-T01",
    slug: "honda-genuine-oil-filter-raf-t01",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Honda Genuine",
    shortDescription: "Factory OEM oil filter for Honda Civic (Reborn, Rebirth, X, 11th Gen), City, and BR-V engines.",
    tags: ["honda", "oem", "oil-filter", "civic", "city"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 52,
    variants: [
      { id: "v-1pc", label: "1 Unit (OEM Box)", price: 1750, sku: "HON-OF-T01" }
    ]
  },
  {
    id: "flt-07",
    name: "Honda Genuine Air Filter (Civic X 1.8L)",
    slug: "honda-genuine-air-filter-civic-x",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Honda Genuine",
    shortDescription: "Genuine engine air intake filter with bonded seal preventing dust ingress into Honda Civic 1.8 R18Z1 engines.",
    tags: ["honda", "civic", "air-filter", "oem"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 27,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 3800, sku: "HON-AF-CIVX" }
    ]
  },
  {
    id: "flt-08",
    name: "Honda Genuine Air Filter (City 1.3L / 1.5L)",
    slug: "honda-genuine-air-filter-city-13-15",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Honda Genuine",
    shortDescription: "OEM pleated paper filter media ensuring optimal air-fuel mixture and throttle response on Honda City.",
    tags: ["honda", "city", "air-filter", "oem"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 29,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 3200, sku: "HON-AF-CITY" }
    ]
  },
  {
    id: "flt-09",
    name: "Honda Genuine Premium Cabin Pollen Filter",
    slug: "honda-genuine-cabin-filter-civic-city",
    category: "filters",
    subcategory: "Cabin Filters",
    brand: "Honda Genuine",
    shortDescription: "High-efficiency particulate cabin filter ensuring clean airflow from the car's AC blower.",
    tags: ["honda", "cabin-filter", "ac-filter"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 18,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1950, sku: "HON-CF-POL" }
    ]
  },
  {
    id: "flt-10",
    name: "Suzuki Genuine Oil Filter 16510-84M00 (Alto 660cc)",
    slug: "suzuki-genuine-oil-filter-alto-660cc",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Suzuki Genuine",
    shortDescription: "Genuine compact oil filter specifically calibrated for the Suzuki Alto 660cc (R06A engine) and Japanese 660cc Kei cars.",
    tags: ["suzuki", "alto", "660cc", "oil-filter", "oem"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 61,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1350, sku: "SUZ-OF-84M" }
    ]
  },
  {
    id: "flt-11",
    name: "Suzuki Genuine Oil Filter 16510-61A31 (Cultus / Wagon R)",
    slug: "suzuki-genuine-oil-filter-cultus-wagon-r",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Suzuki Genuine",
    shortDescription: "OEM oil filter element designed for Suzuki Wagon R, Cultus New Shape (K10B engine), and Swift.",
    tags: ["suzuki", "wagon-r", "cultus", "swift", "oil-filter"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 35,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1450, sku: "SUZ-OF-61A" }
    ]
  },
  {
    id: "flt-12",
    name: "Suzuki Genuine Air Filter (Alto 660cc 13780-74P00)",
    slug: "suzuki-genuine-air-filter-alto-660",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Suzuki Genuine",
    shortDescription: "Factory OEM air filter replacement for Suzuki Alto 8th Gen 660cc engine.",
    tags: ["suzuki", "alto", "air-filter", "oem"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 40,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 2100, sku: "SUZ-AF-74P" }
    ]
  },
  {
    id: "flt-13",
    name: "Suzuki Genuine Air Filter (Cultus New Shape / Wagon R)",
    slug: "suzuki-genuine-air-filter-cultus-wagonr",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Suzuki Genuine",
    shortDescription: "Original intake air cleaner filter for Pak Suzuki Wagon R and Cultus.",
    tags: ["suzuki", "wagon-r", "cultus", "air-filter"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 26,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 2400, sku: "SUZ-AF-K10B" }
    ]
  },
  {
    id: "flt-14",
    name: "Mann-Filter Oil Filter W 68/3 (Japanese Engines)",
    slug: "mann-filter-oil-filter-w68-3",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Mann-Filter",
    shortDescription: "Premium German engineered spin-on oil filter with maximum dirt holding capacity for Toyota and Suzuki models.",
    tags: ["mann", "german", "oil-filter", "premium"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 31,
    variants: [
      { id: "v-1pc", label: "1 Unit (Original Import)", price: 1850, sku: "MAN-W68-3" }
    ]
  },
  {
    id: "flt-15",
    name: "Mann-Filter Oil Filter W 712/75",
    slug: "mann-filter-oil-filter-w712-75",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Mann-Filter",
    shortDescription: "High-spec European oil filter for precision clearances and synthetic oil durability.",
    tags: ["mann", "german", "oil-filter"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 17,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 2200, sku: "MAN-W712-75" }
    ]
  },
  {
    id: "flt-16",
    name: "Guard Premium Oil Filter G-68 (Universal Japanese)",
    slug: "guard-premium-oil-filter-g-68",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Guard",
    shortDescription: "Pakistan's most trusted aftermarket oil filter for Toyota Corolla, Vitz, and Yaris.",
    tags: ["guard", "oil-filter", "corolla", "budget-pick"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewsCount: 48,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 750, sku: "GRD-OF-G68" }
    ]
  },
  {
    id: "flt-17",
    name: "Guard Premium Oil Filter G-84 (Suzuki Mini)",
    slug: "guard-premium-oil-filter-g-84",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Guard",
    shortDescription: "Economical and dependable oil filter for Suzuki Alto, Cultus, Mehran, and Wagon R.",
    tags: ["guard", "oil-filter", "suzuki", "mehran", "alto"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 36,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 650, sku: "GRD-OF-G84" }
    ]
  },
  {
    id: "flt-18",
    name: "Guard Air Filter GA-953 (Toyota Corolla 2014-2022)",
    slug: "guard-air-filter-ga-953-corolla",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Guard",
    shortDescription: "Direct-fit air filter manufactured with imported non-woven filter media for high dust retention.",
    tags: ["guard", "air-filter", "corolla"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 30,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1150, sku: "GRD-AF-953" }
    ]
  },
  {
    id: "flt-19",
    name: "Guard Air Filter GA-1011 (Honda Civic X)",
    slug: "guard-air-filter-ga-1011-civic-x",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Guard",
    shortDescription: "Engine air filter element customized for Honda Civic 2016-2021 1.8.",
    tags: ["guard", "air-filter", "civic"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 22,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1350, sku: "GRD-AF-1011" }
    ]
  },
  {
    id: "flt-20",
    name: "Guard Cabin AC Filter (Toyota Universal)",
    slug: "guard-cabin-ac-filter-toyota",
    category: "filters",
    subcategory: "Cabin Filters",
    brand: "Guard",
    shortDescription: "Cost-effective cabin filter restoring AC cooling flow in Corolla, Yaris, and Hilux.",
    tags: ["guard", "cabin-filter", "ac-filter"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 25,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 750, sku: "GRD-CF-TOY" }
    ]
  },
  {
    id: "flt-21",
    name: "Leppon Heavy Duty Oil Filter LOP-3011 (Hilux Revo / Vigo)",
    slug: "leppon-heavy-duty-oil-filter-hilux",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Leppon",
    shortDescription: "Heavy-duty spin-on oil filter engineered for 2.8L and 3.0L turbo diesel commercial 4x4 vehicles.",
    tags: ["leppon", "diesel", "hilux", "revo", "4x4"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 19,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 1450, sku: "LEP-OF-3011" }
    ]
  },
  {
    id: "flt-22",
    name: "Leppon Air Filter LAP-1102 (Suzuki Alto 660cc)",
    slug: "leppon-air-filter-suzuki-alto-660",
    category: "filters",
    subcategory: "Air Filters",
    brand: "Leppon",
    shortDescription: "Quality air filter providing dust protection and smooth breathing for small displacement engines.",
    tags: ["leppon", "alto", "air-filter"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 16,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 950, sku: "LEP-AF-1102" }
    ]
  },
  {
    id: "flt-23",
    name: "Vic Japan Oil Filter C-110 (Toyota)",
    slug: "vic-japan-oil-filter-c-110",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Vic",
    shortDescription: "Imported 100% Made in Japan oil filter with silicone back valve for Toyota Corolla, Vitz, and Premio.",
    tags: ["vic", "japan", "imported", "oil-filter", "toyota"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 28,
    variants: [
      { id: "v-1pc", label: "1 Unit (Made in Japan)", price: 1950, sku: "VIC-C110" }
    ]
  },
  {
    id: "flt-24",
    name: "Vic Japan Oil Filter C-901 (Honda)",
    slug: "vic-japan-oil-filter-c-901",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Vic",
    shortDescription: "Precision Japanese made oil filter with high-grade synthetic blend media for Honda engines.",
    tags: ["vic", "japan", "imported", "oil-filter", "honda"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 24,
    variants: [
      { id: "v-1pc", label: "1 Unit (Made in Japan)", price: 1950, sku: "VIC-C901" }
    ]
  },
  {
    id: "flt-25",
    name: "Bosch Premium Oil Filter 3300",
    slug: "bosch-premium-oil-filter-3300",
    category: "filters",
    subcategory: "Oil Filters",
    brand: "Bosch",
    shortDescription: "FILTECH filtration technology screens out more harmful particles for maximum engine life.",
    tags: ["bosch", "oil-filter", "german-tech"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 21,
    variants: [
      { id: "v-1pc", label: "1 Unit", price: 2100, sku: "BOS-OF-3300" }
    ]
  },
  {
    id: "flt-26",
    name: "Toyota Genuine Diesel Fuel Filter Element 23390-0L050",
    slug: "toyota-genuine-fuel-filter-hilux-fortuner",
    category: "filters",
    subcategory: "Fuel Filters",
    brand: "Toyota Genuine",
    shortDescription: "Crucial OEM water-separating diesel fuel filter for Hilux Revo and Fortuner D4D common rail injection systems.",
    tags: ["toyota", "fuel-filter", "diesel", "hilux", "revo"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 35,
    variants: [
      { id: "v-1pc", label: "1 Unit with O-Ring", price: 3800, sku: "TOY-FF-0L050" }
    ]
  },

  // =================== LUBRICANTS & SPRAYS (16 items) ===================
  {
    id: "sp-01",
    name: "WD-40 Multi-Use Product Spray (Smart Straw & Classic)",
    slug: "wd-40-multi-use-product-spray",
    category: "lubricants-sprays",
    subcategory: "Penetrating & Lubrication",
    brand: "WD-40",
    shortDescription: "The world's #1 multi-use product: Stops squeaks, drives out moisture, cleans and protects, loosens rusted parts, and frees sticky mechanisms.",
    tags: ["wd-40", "spray", "lubricant", "anti-rust", "penetrant"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 89,
    variants: [
      { id: "v-100ml", label: "100ml Pocket Can", price: 950, sku: "WD-MU-100" },
      { id: "v-200ml", label: "200ml Aerosol Can", price: 1450, sku: "WD-MU-200" },
      { id: "v-330ml", label: "330ml Smart Straw Can", price: 1950, sku: "WD-MU-330" },
      { id: "v-400ml", label: "400ml Industrial Can", price: 2350, sku: "WD-MU-400" }
    ]
  },
  {
    id: "sp-02",
    name: "WD-40 Specialist Fast Drying Contact Cleaner",
    slug: "wd-40-specialist-contact-cleaner",
    category: "lubricants-sprays",
    subcategory: "Electrical Cleaners",
    brand: "WD-40",
    shortDescription: "Non-conductive electrical contact cleaner that removes oil, dirt, flux residue, and condensation from sensitive electronics without residue.",
    tags: ["wd-40", "specialist", "contact-cleaner", "electronics", "sensors"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 46,
    variants: [
      { id: "v-400ml", label: "400ml Aerosol Can", price: 2750, sku: "WD-SPEC-CC" }
    ]
  },
  {
    id: "sp-03",
    name: "WD-40 Specialist High Performance Silicone Lubricant",
    slug: "wd-40-specialist-silicone-lubricant",
    category: "lubricants-sprays",
    subcategory: "Penetrating & Lubrication",
    brand: "WD-40",
    shortDescription: "Non-staining, hard-working formula providing excellent lubrication for rubber window channels, door seals, belts, and pulleys.",
    tags: ["wd-40", "silicone", "rubber-care", "window-channel"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 38,
    variants: [
      { id: "v-400ml", label: "400ml Aerosol Can", price: 2750, sku: "WD-SPEC-SIL" }
    ]
  },
  {
    id: "sp-04",
    name: "WD-40 Specialist White Lithium Grease Spray",
    slug: "wd-40-specialist-white-lithium-grease",
    category: "lubricants-sprays",
    subcategory: "Greases",
    brand: "WD-40",
    shortDescription: "High-viscosity thick grease formula that sprays on evenly and sets as a durable protective barrier for metal-to-metal hinges, latches, and gears.",
    tags: ["wd-40", "white-lithium", "door-hinges", "grease"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 27,
    variants: [
      { id: "v-400ml", label: "400ml Aerosol Can", price: 2850, sku: "WD-SPEC-WLG" }
    ]
  },
  {
    id: "sp-05",
    name: "WD-40 Specialist Fast Release Penetrant",
    slug: "wd-40-specialist-fast-release-penetrant",
    category: "lubricants-sprays",
    subcategory: "Penetrating & Lubrication",
    brand: "WD-40",
    shortDescription: "Targeted fast penetrant that breaks through severely rusted or seized nuts, bolts, and suspension threads within seconds.",
    tags: ["wd-40", "penetrant", "rusted-bolts", "chassis"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 22,
    variants: [
      { id: "v-400ml", label: "400ml Aerosol Can", price: 2750, sku: "WD-SPEC-PEN" }
    ]
  },
  {
    id: "sp-06",
    name: "WD-40 Specialist Fast Acting Degreaser",
    slug: "wd-40-specialist-fast-acting-degreaser",
    category: "lubricants-sprays",
    subcategory: "Degreasers",
    brand: "WD-40",
    shortDescription: "Solvent-based deep-cleaning spray that rapidly strips stubborn baked-on oil, grease, grime, and road tar from engine bays.",
    tags: ["wd-40", "degreaser", "engine-bay", "cleaning"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 20,
    variants: [
      { id: "v-500ml", label: "500ml Aerosol Can", price: 3100, sku: "WD-SPEC-DEG" }
    ]
  },
  {
    id: "sp-07",
    name: "Gunk Heavy Duty Original Engine Degreaser",
    slug: "gunk-heavy-duty-engine-degreaser",
    category: "lubricants-sprays",
    subcategory: "Degreasers",
    brand: "Gunk",
    shortDescription: "America's #1 engine degreaser aerosol. Easily sprays on, penetrates deep into grease, and washes away with water.",
    tags: ["gunk", "degreaser", "engine-wash", "heavy-duty"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 42,
    variants: [
      { id: "v-425g", label: "425g Aerosol Can", price: 2150, sku: "GNK-ENG-425" }
    ]
  },
  {
    id: "sp-08",
    name: "Gunk Carburetor & Choke Cleaner Aerosol",
    slug: "gunk-carburetor-choke-cleaner",
    category: "lubricants-sprays",
    subcategory: "Throttle & Carb Cleaners",
    brand: "Gunk",
    shortDescription: "Quickly dissolves varnish, gum, sludge, and carbon deposits on carburetors, butterfly valves, and PCV valves.",
    tags: ["gunk", "carb-cleaner", "choke-cleaner"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 28,
    variants: [
      { id: "v-354g", label: "354g Aerosol Can", price: 1850, sku: "GNK-CARB-354" }
    ]
  },
  {
    id: "sp-09",
    name: "STP Throttle Body & Air Intake Cleaner",
    slug: "stp-throttle-body-cleaner",
    category: "lubricants-sprays",
    subcategory: "Throttle & Carb Cleaners",
    brand: "STP",
    shortDescription: "Specially formulated to clean butterfly valves, throttle bodies, and idle air control valves to eliminate rough idling and stalling.",
    tags: ["stp", "throttle-body", "idle-control", "intake"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 34,
    variants: [
      { id: "v-340g", label: "340g Spray Can", price: 2050, sku: "STP-TB-340" }
    ]
  },
  {
    id: "sp-10",
    name: "Liqui Moly LM 40 Multi-Function Spray",
    slug: "liqui-moly-lm-40-multi-function-spray",
    category: "lubricants-sprays",
    subcategory: "Penetrating & Lubrication",
    brand: "Liqui Moly",
    shortDescription: "Universal combination of active ingredients for corrosion protection, moisture displacement, and creeping lubrication.",
    tags: ["liqui-moly", "german", "multi-spray", "lubricant"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 23,
    variants: [
      { id: "v-400ml", label: "400ml Aerosol Can", price: 2300, sku: "LM-40-400" }
    ]
  },
  {
    id: "sp-11",
    name: "Liqui Moly Electronic Spray (Kontaktspray)",
    slug: "liqui-moly-electronic-spray-200ml",
    category: "lubricants-sprays",
    subcategory: "Electrical Cleaners",
    brand: "Liqui Moly",
    shortDescription: "Special synthetic contact spray which makes electronic components corrosion-proof and lowers contact resistance.",
    tags: ["liqui-moly", "contact-spray", "german", "auto-electrician"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 25,
    variants: [
      { id: "v-200ml", label: "200ml Can", price: 2250, sku: "LM-ELEC-200" }
    ]
  },
  {
    id: "sp-12",
    name: "Wurth Rost Off Extra Penetrating Rust Remover",
    slug: "wurth-rost-off-penetrating-rust-remover",
    category: "lubricants-sprays",
    subcategory: "Penetrating & Lubrication",
    brand: "Wurth",
    shortDescription: "High-grade penetrating oil with optimum creeping capacity and OMC2 friction reduction technology.",
    tags: ["wurth", "rust-remover", "german", "seized-bolts"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 19,
    variants: [
      { id: "v-300ml", label: "300ml Spray Can", price: 2400, sku: "WRT-ROST-300" }
    ]
  },
  {
    id: "sp-13",
    name: "Wurth Rapid Brake & Clutch Cleaner",
    slug: "wurth-brake-cleaner-rapid-degreaser",
    category: "lubricants-sprays",
    subcategory: "Degreasers",
    brand: "Wurth",
    shortDescription: "High-pressure fast flash-off cleaner for brake discs, drums, clutch plates, and mechanical linkages.",
    tags: ["wurth", "brake-cleaner", "degreaser", "fast-drying"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 37,
    variants: [
      { id: "v-500ml", label: "500ml Spray Can", price: 2350, sku: "WRT-BRK-500" }
    ]
  },
  {
    id: "sp-14",
    name: "ABRO Carb & Choke Cleaner CC-220",
    slug: "abro-carb-choke-cleaner-cc-220",
    category: "lubricants-sprays",
    subcategory: "Throttle & Carb Cleaners",
    brand: "ABRO",
    shortDescription: "Famous high-solvent spray removes gum, varnish, and carbon from carburetors and injectors fast.",
    tags: ["abro", "carb-cleaner", "budget-pick"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 32,
    variants: [
      { id: "v-283g", label: "283g Aerosol Can", price: 1150, sku: "ABR-CC220" }
    ]
  },
  {
    id: "sp-15",
    name: "ABRO Masters Multipurpose Lithium Grease Spray",
    slug: "abro-masters-lithium-grease-spray",
    category: "lubricants-sprays",
    subcategory: "Greases",
    brand: "ABRO",
    shortDescription: "Long-lasting heavy duty water and heat resistant lithium grease lubricant in convenient aerosol form.",
    tags: ["abro", "lithium-grease", "water-resistant"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 18,
    variants: [
      { id: "v-284g", label: "284g Can", price: 1550, sku: "ABR-LG284" }
    ]
  },
  {
    id: "sp-16",
    name: "ABRO Electronic Contact Cleaner EC-533",
    slug: "abro-electronic-contact-cleaner-ec533",
    category: "lubricants-sprays",
    subcategory: "Electrical Cleaners",
    brand: "ABRO",
    shortDescription: "Residue-free rapid drying cleaner for electronic boards, spark plugs, sensors, and circuit switches.",
    tags: ["abro", "contact-cleaner", "electronics"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 21,
    variants: [
      { id: "v-163g", label: "163g Aerosol Can", price: 1350, sku: "ABR-EC533" }
    ]
  },

  // =================== WIPERS & CONSUMABLES (10 items) ===================
  {
    id: "cons-01",
    name: "Bosch Aerotwin Frameless Wiper Blades (Set of 2)",
    slug: "bosch-aerotwin-frameless-wiper-blades-pair",
    category: "consumables",
    subcategory: "Wiper Blades",
    brand: "Bosch",
    shortDescription: "Dual rubber compound with graphite coating and customized spring strip for crystal-clear, streak-free visibility at high speeds.",
    tags: ["bosch", "aerotwin", "wiper-blades", "frameless"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 45,
    variants: [
      { id: "v-24-16", label: "24\" + 16\" Pair (Corolla / Yaris)", price: 4400, sku: "BOS-AERO-2416" },
      { id: "v-26-18", label: "26\" + 18\" Pair (Civic X / XI)", price: 4600, sku: "BOS-AERO-2618" },
      { id: "v-21-18", label: "21\" + 18\" Pair (Alto / Cultus)", price: 4200, sku: "BOS-AERO-2118" }
    ]
  },
  {
    id: "cons-02",
    name: "Bosch Clear Advantage All-Weather Beam Wiper Blade",
    slug: "bosch-clear-advantage-beam-wiper",
    category: "consumables",
    subcategory: "Wiper Blades",
    brand: "Bosch",
    shortDescription: "Patented beam design resists wind lift and ice buildup for smooth, quiet wiping in heavy rainstorms.",
    tags: ["bosch", "wiper-blade", "beam"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 22,
    variants: [
      { id: "v-16in", label: "16\" Single Blade", price: 1850, sku: "BOS-CA-16" },
      { id: "v-20in", label: "20\" Single Blade", price: 1950, sku: "BOS-CA-20" },
      { id: "v-24in", label: "24\" Single Blade", price: 2150, sku: "BOS-CA-24" }
    ]
  },
  {
    id: "cons-03",
    name: "Silicone Water-Repellent Hybrid Wiper Blades (Pair)",
    slug: "silicone-water-repellent-hybrid-wipers",
    category: "consumables",
    subcategory: "Wiper Blades",
    brand: "JS Auto",
    shortDescription: "Durable silicone infused wiper blades coat your windscreen with a water-beading film with every sweep.",
    tags: ["silicone", "hybrid", "water-beading", "pair"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewsCount: 31,
    variants: [
      { id: "v-pair-sedan", label: "24\" + 14\" (Sedan Pair)", price: 2800, sku: "JSA-SIL-SED" },
      { id: "v-pair-hatch", label: "20\" + 16\" (Hatchback Pair)", price: 2600, sku: "JSA-SIL-HAT" }
    ]
  },
  {
    id: "cons-04",
    name: "Osram Night Breaker 200 H4 Headlight Halogen Bulbs (Pair)",
    slug: "osram-night-breaker-200-h4",
    category: "consumables",
    subcategory: "Automotive Bulbs",
    brand: "Osram",
    shortDescription: "Up to 200% more brightness and up to 150m long beam compared to minimum legal standards for ultimate night driving safety.",
    tags: ["osram", "night-breaker", "h4", "headlight-bulbs", "high-visibility"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 53,
    variants: [
      { id: "v-h4-pair", label: "H4 High/Low Beam (Pair)", price: 6800, sku: "OSR-NB200-H4" }
    ]
  },
  {
    id: "cons-05",
    name: "Osram Night Breaker Laser H7 Headlight Bulbs (Pair)",
    slug: "osram-night-breaker-laser-h7",
    category: "consumables",
    subcategory: "Automotive Bulbs",
    brand: "Osram",
    shortDescription: "Laser ablation technology delivers intense illumination and up to 20% whiter light for modern projector headlamps.",
    tags: ["osram", "h7", "headlight-bulbs", "laser"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 29,
    variants: [
      { id: "v-h7-pair", label: "H7 Single Filament (Pair)", price: 6900, sku: "OSR-NBL-H7" }
    ]
  },
  {
    id: "cons-06",
    name: "Philips X-tremeVision Pro150 H4 Headlight Bulbs (Pair)",
    slug: "philips-xtreme-vision-pro150-h4",
    category: "consumables",
    subcategory: "Automotive Bulbs",
    brand: "Philips",
    shortDescription: "Striking brightness with advanced quartz-glass technology resisting thermal shocks and vibrations on rough roads.",
    tags: ["philips", "h4", "headlight-bulbs", "bright-beam"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 30,
    variants: [
      { id: "v-h4-pair", label: "H4 Set of 2", price: 6400, sku: "PHL-XVP-H4" }
    ]
  },
  {
    id: "cons-07",
    name: "Philips Ultinon Essential LED H4 Headlight Conversion Kit",
    slug: "philips-ultinon-essential-led-h4",
    category: "consumables",
    subcategory: "Automotive Bulbs",
    brand: "Philips",
    shortDescription: "Crisp 6500K cool white LED beam with integrated heatsink and dual heat-dissipation design for plug-and-play installation.",
    tags: ["philips", "led", "h4", "white-light", "conversion"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 38,
    variants: [
      { id: "v-h4-kit", label: "H4 LED Kit (Pair)", price: 11500, sku: "PHL-LED-H4" }
    ]
  },
  {
    id: "cons-08",
    name: "Castrol Response DOT 4 Synthetic Brake Fluid",
    slug: "castrol-response-dot4-brake-fluid",
    category: "consumables",
    subcategory: "Brake Fluids",
    brand: "Castrol",
    shortDescription: "High-boiling point synthetic brake fluid preventing vapor lock under heavy braking in mountainous and city traffic.",
    tags: ["castrol", "dot4", "brake-fluid", "hydraulic"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 27,
    variants: [
      { id: "v-500ml", label: "500ml Bottle", price: 1850, sku: "CAS-BF-DOT4" }
    ]
  },
  {
    id: "cons-09",
    name: "Seiken DOT 3 Heavy Duty Brake Fluid (Japan)",
    slug: "seiken-dot3-heavy-duty-brake-fluid",
    category: "consumables",
    subcategory: "Brake Fluids",
    brand: "Seiken",
    shortDescription: "100% genuine Japanese brake fluid engineered to preserve master cylinder rubber seals and stop brake pedal fade.",
    tags: ["seiken", "japan", "dot3", "brake-fluid"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 24,
    variants: [
      { id: "v-355ml", label: "355ml Metal Can (Japan)", price: 1450, sku: "SEI-DOT3-355" }
    ]
  },
  {
    id: "cons-10",
    name: "AGS De-Ionized Battery Water 1 Litre",
    slug: "ags-de-ionized-battery-water-1l",
    category: "consumables",
    subcategory: "Battery Care",
    brand: "AGS",
    shortDescription: "Pure mineral-free de-ionized water prevents sulfation and extends lead-acid battery cell lifespan.",
    tags: ["ags", "battery-water", "maintenance"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewsCount: 19,
    variants: [
      { id: "v-1L", label: "1 Litre Bottle", price: 200, sku: "AGS-BW-1L" },
      { id: "v-pack4", label: "Pack of 4 Litres", price: 750, sku: "AGS-BW-4L" }
    ]
  }
];

const targetPath = path.join(__dirname, 'src', 'data', 'products.json');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, JSON.stringify(products, null, 2), 'utf-8');

console.log(`Successfully generated ${products.length} products to ${targetPath}`);
