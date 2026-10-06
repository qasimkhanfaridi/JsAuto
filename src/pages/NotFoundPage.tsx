import React from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateShop: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateShop,
}) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mx-auto text-3xl font-black">
        404
      </div>
      <div>
        <h1 className="text-2xl font-black text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
          The page or product category you're looking for doesn't exist or has moved. Explore our 100+ automotive fluids & filters catalog below.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-3 pt-2">
        <button
          type="button"
          onClick={onNavigateHome}
          className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center space-x-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
        <button
          type="button"
          onClick={onNavigateShop}
          className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Browse Catalog</span>
        </button>
      </div>
    </div>
  );
};
