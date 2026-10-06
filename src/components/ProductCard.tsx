import React, { useState } from 'react';
import type { Product, ProductVariant } from '../types';
import { ProductImage } from './ProductImage';
import { formatPrice, buildSingleProductWhatsAppUrl } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';
import { ShoppingCart, MessageCircle, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: 'default', label: 'Standard', price: 0 }
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = buildSingleProductWhatsAppUrl(
      product.name,
      selectedVariant.label,
      selectedVariant.price,
      1
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col overflow-hidden cursor-pointer h-full"
    >
      {/* Product Image / Illustration Banner */}
      <div className="p-3 bg-slate-50/50">
        <ProductImage
          category={product.category}
          brand={product.brand}
          name={product.name}
          size="md"
        />
      </div>

      {/* Body Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Brand & Rating Bar */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-brand-600 uppercase tracking-wide">
              {product.brand}
            </span>
            {product.rating && (
              <span className="flex items-center space-x-1 text-amber-500 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-slate-800 text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-2.5">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Variants Selector */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          {product.variants.length > 1 && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-500 block">
                Select Option / Size:
              </label>
              <div
                className="flex flex-wrap gap-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                {product.variants.map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                        isSelected
                          ? 'bg-brand-600 text-white shadow-xs ring-1 ring-brand-600'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Real-time Dynamic Price Display */}
          <div className="flex items-baseline justify-between pt-1">
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Estimated Price:</span>
              <span className="text-lg font-bold text-slate-900">
                {formatPrice(selectedVariant.price)}
              </span>
            </div>
            {selectedVariant.sku && (
              <span className="text-[10px] text-slate-400 font-mono">
                {selectedVariant.sku}
              </span>
            )}
          </div>

          {/* Action CTAs: Order on WhatsApp & Add to Cart */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center space-x-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              title="Direct Order on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0 fill-white" />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all active:scale-[0.98] ${
                justAdded
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
