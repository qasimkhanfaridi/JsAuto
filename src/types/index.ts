export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  sku?: string;
  inStock?: boolean;
}

export type ProductCondition = 'new' | 'kabli';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  brand: string;
  condition: ProductCondition; // 'new' for Brand New, 'kabli' for Genuine Japanese Qabli / Used
  shortDescription: string;
  image?: string;
  variants: ProductVariant[];
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
  compatibility?: string[]; // Compatible car models (e.g. Corolla, Civic, Alto, Vitz)
}

export interface CartItem {
  productId: string;
  productName: string;
  variantId: string;
  variantLabel: string;
  price: number;
  quantity: number;
  brand: string;
  category: string;
  condition?: ProductCondition;
  image?: string;
}

export type CategoryKey = 
  | 'all'
  | 'kabli-parts'
  | 'new-spare-parts'
  | 'engine-mechanical'
  | 'suspension-brakes'
  | 'electrical-lights'
  | 'engine-oils'
  | 'coolants-sprays';

export interface FilterState {
  searchQuery: string;
  category: CategoryKey;
  conditionFilter: 'all' | 'new' | 'kabli';
  selectedBrands: string[];
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  selectedTag: string | null;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'name-asc';
}
