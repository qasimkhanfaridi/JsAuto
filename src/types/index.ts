export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  sku?: string;
  inStock?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  brand: string;
  shortDescription: string;
  image?: string;
  variants: ProductVariant[];
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
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
  image?: string;
}

export type CategoryKey = 
  | 'all'
  | 'engine-oils'
  | 'coolants'
  | 'filters'
  | 'lubricants-sprays'
  | 'consumables';

export interface FilterState {
  searchQuery: string;
  category: CategoryKey;
  selectedBrands: string[];
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  selectedTag: string | null;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'name-asc';
}
