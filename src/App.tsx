import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';
import type { Product, FilterState, CategoryKey } from './types';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { buildGeneralInquiryWhatsAppUrl } from './utils/whatsapp';
import { MessageCircle } from 'lucide-react';

const products: Product[] = productsData as Product[];

export const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    selectedBrands: [],
    minPrice: 0,
    maxPrice: 20000,
    inStockOnly: false,
    selectedTag: null,
    sortBy: 'featured',
  });

  // Simple Hash-based Router for deep-linking & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash.startsWith('shop')) {
        setCurrentTab('shop');
        const params = new URLSearchParams(hash.split('?')[1] || '');
        const cat = params.get('category') as CategoryKey;
        if (cat) {
          setFilters((prev) => ({ ...prev, category: cat }));
        }
      } else if (hash === 'about') {
        setCurrentTab('about');
      } else if (hash === 'home') {
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (tab: string, category?: CategoryKey) => {
    setCurrentTab(tab);
    if (tab === 'shop') {
      if (category) {
        setFilters((prev) => ({ ...prev, category }));
        window.location.hash = `shop?category=${category}`;
      } else {
        window.location.hash = 'shop';
      }
    } else {
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const openWhatsAppFloating = () => {
    window.open(buildGeneralInquiryWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onNavigate={navigateTo}
        searchQuery={filters.searchQuery}
        setSearchQuery={handleSearchQuery}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            products={products}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onNavigateToShop={(cat) => navigateTo('shop', cat)}
            onNavigateToAbout={() => navigateTo('about')}
          />
        )}

        {currentTab === 'shop' && (
          <ShopPage
            products={products}
            onSelectProduct={(p) => setSelectedProduct(p)}
            filters={filters}
            setFilters={setFilters}
          />
        )}

        {currentTab === 'about' && <AboutContactPage />}

        {!['home', 'shop', 'about'].includes(currentTab) && (
          <NotFoundPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateShop={() => navigateTo('shop')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Cart Drawer */}
      <CartDrawer onNavigateToShop={() => navigateTo('shop')} />

      {/* Floating Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={openWhatsAppFloating}
          className="flex items-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 group"
          title="Direct WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs sm:text-sm font-semibold pr-1 hidden sm:inline">
            Order on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
