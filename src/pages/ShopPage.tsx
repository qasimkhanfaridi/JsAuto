import React, { useState, useMemo } from 'react';
import type { Product, FilterState } from '../types';
import { STORE_CONFIG } from '../config/storeConfig';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import {
  SlidersHorizontal,
  X,
  Search,
  ArrowUpDown
} from 'lucide-react';

interface ShopPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onSelectProduct,
  filters,
  setFilters,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract all unique brands across catalog
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach((p) => brandsSet.add(p.brand));
    return Array.from(brandsSet).sort();
  }, [products]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Category
      if (filters.category !== 'all' && p.category !== filters.category) {
        return false;
      }

      // 2. Condition (Brand New vs Japanese Kabli)
      if (filters.conditionFilter !== 'all' && p.condition !== filters.conditionFilter) {
        return false;
      }

      // 3. Brand
      if (
        filters.selectedBrands.length > 0 &&
        !filters.selectedBrands.includes(p.brand)
      ) {
        return false;
      }

      // 4. Search query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesDesc = p.shortDescription.toLowerCase().includes(query);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCompat = p.compatibility?.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesTags && !matchesCompat) {
          return false;
        }
      }

      // 5. In stock
      if (filters.inStockOnly && !p.inStock) {
        return false;
      }

      // 6. Selected Tag
      if (filters.selectedTag && !p.tags.includes(filters.selectedTag)) {
        return false;
      }

      // 7. Price range (check if any variant falls in range)
      const minVariantPrice = Math.min(...p.variants.map((v) => v.price));
      if (minVariantPrice < filters.minPrice || minVariantPrice > filters.maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const minPriceA = Math.min(...a.variants.map((v) => v.price));
      const minPriceB = Math.min(...b.variants.map((v) => v.price));

      if (filters.sortBy === 'price-low') {
        return minPriceA - minPriceB;
      }
      if (filters.sortBy === 'price-high') {
        return minPriceB - minPriceA;
      }
      if (filters.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      // default: featured
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, filters]);

  const activeCategoryName =
    STORE_CONFIG.categories.find((c) => c.id === filters.category)?.name || 'All Products';

  const removeBrandFilter = (brand: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedBrands: prev.selectedBrands.filter((b) => b !== brand),
    }));
  };

  const handleClearAll = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      conditionFilter: 'all',
      selectedBrands: [],
      minPrice: 0,
      maxPrice: 350000,
      inStockOnly: false,
      selectedTag: null,
      sortBy: 'featured',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Title & Sort Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeCategoryName}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-100 text-brand-800">
              {filteredProducts.length} items
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Brand New OEM & Japanese Kabli (Qabli) Parts: Engines, Gearboxes, Shocks, Brakes, Lights & Maintenance Fluids.
          </p>
        </div>

        {/* Controls: Mobile Filter Button & Sort Selector */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-600" />
            <span>Filters</span>
            {(filters.selectedBrands.length > 0 || filters.category !== 'all' || filters.searchQuery) && (
              <span className="w-2 h-2 rounded-full bg-brand-600" />
            )}
          </button>

          <div className="flex items-center space-x-2 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:block" />
            <span className="text-slate-500 hidden sm:inline">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as FilterState['sortBy'],
                }))
              }
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-brand-500 shadow-2xs"
            >
              <option value="featured">Featured / Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Product Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {(filters.category !== 'all' ||
        filters.conditionFilter !== 'all' ||
        filters.selectedBrands.length > 0 ||
        filters.searchQuery ||
        filters.selectedTag ||
        filters.inStockOnly) && (
        <div className="flex flex-wrap items-center gap-2 py-3 border-b border-slate-100 text-xs">
          <span className="text-slate-400 font-medium">Active filters:</span>

          {filters.conditionFilter !== 'all' && (
            <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg border font-bold ${
              filters.conditionFilter === 'kabli'
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              <span>Condition: {filters.conditionFilter === 'kabli' ? 'Japanese Kabli (Qabli)' : 'Brand New'}</span>
              <button
                type="button"
                onClick={() => setFilters((p) => ({ ...p, conditionFilter: 'all' }))}
              >
                <X className="w-3 h-3 hover:opacity-75" />
              </button>
            </span>
          )}

          {filters.category !== 'all' && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-medium">
              <span>Category: {activeCategoryName}</span>
              <button
                type="button"
                onClick={() => setFilters((p) => ({ ...p, category: 'all' }))}
              >
                <X className="w-3 h-3 hover:text-brand-900" />
              </button>
            </span>
          )}

          {filters.selectedBrands.map((brand) => (
            <span
              key={brand}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-medium"
            >
              <span>{brand}</span>
              <button type="button" onClick={() => removeBrandFilter(brand)}>
                <X className="w-3 h-3 hover:text-brand-900" />
              </button>
            </span>
          ))}

          {filters.searchQuery && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-medium">
              <span>Search: "{filters.searchQuery}"</span>
              <button
                type="button"
                onClick={() => setFilters((p) => ({ ...p, searchQuery: '' }))}
              >
                <X className="w-3 h-3 hover:text-brand-900" />
              </button>
            </span>
          )}

          {filters.selectedTag && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-medium">
              <span>#{filters.selectedTag}</span>
              <button
                type="button"
                onClick={() => setFilters((p) => ({ ...p, selectedTag: null }))}
              >
                <X className="w-3 h-3 hover:text-brand-900" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold hover:underline ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Main Catalog Layout */}
      <div className="flex gap-8 pt-6 items-start">
        {/* Sidebar Filters */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          availableBrands={availableBrands}
          totalProductsCount={products.length}
          filteredProductsCount={filteredProducts.length}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
        />

        {/* Products Grid / Empty State */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">No products match your criteria</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                  Try adjusting your price range, clearing brand selections, or searching for broader terms like "0W-20" or "Toyota".
                </p>
              </div>
              <button
                type="button"
                onClick={handleClearAll}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
