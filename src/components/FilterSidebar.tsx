import React from 'react';
import type { FilterState, CategoryKey } from '../types';
import { STORE_CONFIG } from '../config/storeConfig';
import { formatPrice } from '../utils/whatsapp';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  availableBrands: string[];
  totalProductsCount: number;
  filteredProductsCount: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  availableBrands,
  totalProductsCount,
  filteredProductsCount,
  isOpenMobile,
  onCloseMobile,
}) => {
  const handleCategoryChange = (category: CategoryKey) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleBrandToggle = (brand: string) => {
    setFilters((prev) => {
      const exists = prev.selectedBrands.includes(brand);
      return {
        ...prev,
        selectedBrands: exists
          ? prev.selectedBrands.filter((b) => b !== brand)
          : [...prev.selectedBrands, brand],
      };
    });
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      selectedBrands: [],
      minPrice: 0,
      maxPrice: 20000,
      inStockOnly: false,
      selectedTag: null,
      sortBy: 'featured',
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.selectedBrands.length > 0 ||
    filters.minPrice > 0 ||
    filters.maxPrice < 20000 ||
    filters.inStockOnly ||
    filters.selectedTag !== null ||
    filters.searchQuery !== '';

  const filterContent = (
    <div className="space-y-6">
      {/* Active Count & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-slate-900 block">Filter Products</span>
          <span className="text-[11px] text-slate-500">
            Showing {filteredProductsCount} of {totalProductsCount}
          </span>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs text-brand-600 hover:text-brand-800 font-semibold flex items-center space-x-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
          Categories
        </label>
        <div className="space-y-1">
          {STORE_CONFIG.categories.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id as CategoryKey)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{cat.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Coming Soon Category: Auto Decorations */}
      <div className="p-3 rounded-2xl bg-slate-100/80 border border-dashed border-slate-300">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{STORE_CONFIG.comingSoonCategory.name}</span>
        </div>
        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 rounded-md">
          {STORE_CONFIG.comingSoonCategory.badge}
        </span>
        <p className="text-[11px] text-slate-500 mt-1 leading-tight">
          {STORE_CONFIG.comingSoonCategory.description}
        </p>
      </div>

      {/* Brands Multi-Select */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
          Brands
        </label>
        <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
          {availableBrands.map((brand) => {
            const isChecked = filters.selectedBrands.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center space-x-2 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none py-1 px-1 rounded-lg hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleBrandToggle(brand)}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-3.5 w-3.5"
                />
                <span className={isChecked ? 'font-semibold text-brand-700' : ''}>
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
          Price Range (PKR)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-[10px] text-slate-400 block">Min</span>
            <input
              type="number"
              min={0}
              step={500}
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, minPrice: Number(e.target.value) || 0 }))
              }
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 focus:ring-1 focus:ring-brand-500 focus:border-brand-500"
            />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block">Max</span>
            <input
              type="number"
              min={1000}
              step={500}
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) || 20000 }))
              }
              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 focus:ring-1 focus:ring-brand-500 focus:border-brand-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{formatPrice(filters.minPrice)}</span>
          <span>{formatPrice(filters.maxPrice)}</span>
        </div>
      </div>

      {/* In-Stock Toggle */}
      <div className="pt-2 border-t border-slate-200">
        <label className="flex items-center justify-between cursor-pointer py-1">
          <span className="text-xs font-medium text-slate-700">In Stock Only</span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, inStockOnly: e.target.checked }))
            }
            className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs h-fit sticky top-24">
        {filterContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-base">Filter Catalog</h3>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1">{filterContent}</div>
            <div className="pt-4 border-t border-slate-200 mt-6">
              <button
                type="button"
                onClick={onCloseMobile}
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold"
              >
                Apply Filters ({filteredProductsCount} products)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
