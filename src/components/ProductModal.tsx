import React, { useState } from 'react';
import type { Product, ProductVariant } from '../types';
import { ProductImage } from './ProductImage';
import { formatPrice, buildSingleProductWhatsAppUrl } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';
import {
  X,
  MessageCircle,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  Plus,
  Minus
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: 'default', label: 'Standard', price: 0 }
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleWhatsAppOrder = () => {
    const url = buildSingleProductWhatsAppUrl(
      product.name,
      selectedVariant.label,
      selectedVariant.price,
      quantity
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const totalPrice = selectedVariant.price * quantity;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Close Button Header */}
        <div className="absolute top-4 right-4 z-20">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Visual Image / Graphics */}
            <div>
              <ProductImage
                category={product.category}
                brand={product.brand}
                name={product.name}
                condition={product.condition}
                size="lg"
              />
              <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>
                  {product.condition === 'kabli'
                    ? 'Tested Genuine Japanese Kabli Part (Pre-inspected)'
                    : '100% Brand New Genuine / OEM Part'}
                </span>
              </div>
            </div>

            {/* Product Meta & Configuration */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <span className="text-slate-300">•</span>
                  {product.condition === 'kabli' ? (
                    <span className="text-xs font-extrabold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md border border-purple-200">
                      Japanese Kabli (Qabli)
                    </span>
                  ) : (
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                      Brand New
                    </span>
                  )}
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-500 capitalize">
                    {product.subcategory || product.category.replace('-', ' ')}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 leading-snug">
                  {product.name}
                </h2>
                {product.rating && (
                  <div className="flex items-center space-x-1.5 mt-2 text-sm text-slate-700">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{product.rating.toFixed(1)}</span>
                    <span className="text-slate-400">({product.reviewsCount} verified reviews)</span>
                  </div>
                )}
              </div>

              {/* Price Display */}
              <div className="p-3 bg-brand-50/60 rounded-xl border border-brand-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-brand-700 block font-medium">Unit Price:</span>
                  <span className="text-2xl font-black text-brand-900">
                    {formatPrice(selectedVariant.price)}
                  </span>
                </div>
                {selectedVariant.sku && (
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">SKU</span>
                    <span className="text-xs font-mono font-medium text-slate-600">
                      {selectedVariant.sku}
                    </span>
                  </div>
                )}
              </div>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Choose Variant / Volume:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariant.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            isSelected
                              ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/20 text-brand-900'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="text-xs font-semibold">{v.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5 font-medium">
                            {formatPrice(v.price)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Picker */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-slate-700">Quantity:</span>
                <div className="flex items-center space-x-3 bg-slate-100 rounded-xl p-1 border border-slate-200">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="p-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm w-6 text-center text-slate-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="p-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Subtotal preview if qty > 1 */}
              {quantity > 1 && (
                <div className="text-xs text-right text-slate-500">
                  Total for {quantity} items: <strong className="text-slate-800">{formatPrice(totalPrice)}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Description & Tags */}
          <div className="space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Vehicle Compatibility list */}
            {product.compatibility && product.compatibility.length > 0 && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <span className="text-xs font-bold text-slate-800 block">Verified Vehicle Compatibility:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.compatibility.map((model) => (
                    <span
                      key={model}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      ✓ {model}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Trust Value Props */}
          <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <ShieldCheck className="w-4 h-4 mx-auto text-brand-600 mb-1" />
              <div className="text-[11px] font-bold text-slate-800">100% Genuine</div>
              <div className="text-[10px] text-slate-500">Official distributors</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <Truck className="w-4 h-4 mx-auto text-brand-600 mb-1" />
              <div className="text-[11px] font-bold text-slate-800">Fast Delivery</div>
              <div className="text-[10px] text-slate-500">Twin Cities same day</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <RotateCcw className="w-4 h-4 mx-auto text-brand-600 mb-1" />
              <div className="text-[11px] font-bold text-slate-800">Easy Returns</div>
              <div className="text-[10px] text-slate-500">If unsealed / intact</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Order Now on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl font-bold transition-all border ${
                justAdded
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-brand-600 hover:bg-brand-700 text-white border-brand-600 shadow-md hover:shadow-lg'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart ({quantity})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
