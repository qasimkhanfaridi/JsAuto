import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice, buildCartWhatsAppUrl } from '../utils/whatsapp';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface CartDrawerProps {
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToShop }) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalCount
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const url = buildCartWhatsAppUrl(items);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBrowseCatalog = () => {
    setIsCartOpen(false);
    onNavigateToShop();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200">
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-100 text-brand-700 rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Your Order Cart</h2>
                <p className="text-xs text-slate-500">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Your cart is empty</h3>
                  <p className="text-xs text-slate-500 max-w-xs mt-1">
                    Add engine oils, coolants, filters, or WD-40 sprays to prepare your WhatsApp order.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleBrowseCatalog}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Browse Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-slate-500">Items in order</span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-rose-600 hover:text-rose-700 font-medium hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variantId}`}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2.5 hover:border-brand-200 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                          {item.brand}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                          {item.productName}
                        </h4>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Variant: <span className="font-medium text-slate-700">{item.variantLabel}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.productId, item.variantId)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.variantId, item.quantity - 1)
                          }
                          className="p-1 rounded bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.variantId, item.quantity + 1)
                          }
                          className="p-1 rounded bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-2xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-slate-400 block">
                            ({formatPrice(item.price)} each)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50/70 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Subtotal ({totalCount} items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Estimated Delivery (Twin Cities)</span>
                  <span className="text-emerald-600 font-medium">To be confirmed</span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Estimated Total</span>
                  <span className="text-brand-700 text-lg">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-[11px] text-sky-800 flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <p>
                  No online card needed! Clicking below creates a pre-filled WhatsApp message. We confirm exact price and delivery directly on chat.
                </p>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order on WhatsApp ({formatPrice(totalPrice)})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
