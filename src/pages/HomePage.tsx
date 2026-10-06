import React from 'react';
import type { Product, CategoryKey } from '../types';
import { STORE_CONFIG } from '../config/storeConfig';
import { ProductCard } from '../components/ProductCard';
import { buildGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  Star,
  CheckCircle2,
  Droplet,
  Filter,
  ThermometerSnowflake,
  Sparkles,
  Wrench,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigateToShop: (category?: CategoryKey) => void;
  onNavigateToAbout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onSelectProduct,
  onNavigateToShop,
  onNavigateToAbout,
}) => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  const openWhatsApp = () => {
    window.open(buildGeneralInquiryWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-white pt-10 pb-16 border-b border-slate-200/60">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-600" />
                <span>Rawalpindi & Islamabad's Genuine Auto Fluids Store</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Premium Engine Oils, Filters & Lubricants.{' '}
                <span className="text-brand-600 block mt-1">Direct to Your Doorstep.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Browse 100% genuine Japanese & European engine oils (Mobil 1, Shell, Castrol, Liqui Moly, Toyota OEM), genuine filters, and WD-40 sprays. Order instantly on WhatsApp without cumbersome sign-ups.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigateToShop('all')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <span>Explore 100+ Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order Directly on WhatsApp</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Genuine Guaranteed</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Same-Day Twin Cities Dispatch</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-800">5.0 Star Rated Workshop</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Location & Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Store & Workshop Open
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{STORE_CONFIG.hours}</span>
                </div>

                <div className="flex items-center space-x-3.5 pb-2">
                  <img
                    src={`${import.meta.env.BASE_URL}js-auto-official-logo.jpg`}
                    alt="JS Auto Official Logo"
                    className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-brand-100 shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-black tracking-tight text-slate-900 flex items-center space-x-1">
                      <span className="italic text-red-600">JS</span>
                      <span className="italic text-slate-900">AUTO</span>
                    </h4>
                    <p className="text-[10px] font-bold text-brand-700 uppercase tracking-wide">
                      {STORE_CONFIG.tagline}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Opposite Bahria Town Phase 4 Gate, GT Road
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                    <div className="font-bold text-slate-800">Verified Workshop & Parts Center:</div>
                    <ul className="space-y-1 text-[11px] text-slate-500 list-disc list-inside">
                      <li>100% genuine sealed engine oils & OEM filters</li>
                      <li>Diagnostic scan, auto electrician & mechanical repair</li>
                      <li>Instant WhatsApp order confirmation ({STORE_CONFIG.phone})</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={onNavigateToAbout}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold text-center transition-colors"
                  >
                    View Map & Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToShop('all')}
                    className="py-2.5 px-3 rounded-xl bg-brand-50 text-brand-700 hover:bg-brand-100 text-xs font-semibold text-center transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Browse Parts</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Browse by Department
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToShop('all')}
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center space-x-1"
          >
            <span>View All (100)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {/* Category 1: Engine Oils */}
          <div
            onClick={() => onNavigateToShop('engine-oils')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                Engine Oils
              </h3>
              <p className="text-xs text-slate-500 mt-1">32 Products</p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-600 group-hover:underline">
                Explore Oils →
              </span>
            </div>
          </div>

          {/* Category 2: Coolants */}
          <div
            onClick={() => onNavigateToShop('coolants')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                Engine Coolants
              </h3>
              <p className="text-xs text-slate-500 mt-1">16 Products</p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-600 group-hover:underline">
                Explore Coolants →
              </span>
            </div>
          </div>

          {/* Category 3: Filters */}
          <div
            onClick={() => onNavigateToShop('filters')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
              <Filter className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                Air & Oil Filters
              </h3>
              <p className="text-xs text-slate-500 mt-1">26 Products</p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-600 group-hover:underline">
                Explore Filters →
              </span>
            </div>
          </div>

          {/* Category 4: WD-40 & Sprays */}
          <div
            onClick={() => onNavigateToShop('lubricants-sprays')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                WD-40 & Sprays
              </h3>
              <p className="text-xs text-slate-500 mt-1">16 Products</p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-600 group-hover:underline">
                Explore Sprays →
              </span>
            </div>
          </div>

          {/* Category 5: Consumables & Wipers */}
          <div
            onClick={() => onNavigateToShop('consumables')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                Wipers & Bulbs
              </h3>
              <p className="text-xs text-slate-500 mt-1">10 Products</p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-600 group-hover:underline">
                Explore Items →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured / Best-Selling Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
              Top Picks
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Popular & Verified Products
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToShop('all')}
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center space-x-1"
          >
            <span>See Full Store</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* How WhatsApp Ordering Works Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              Simple 3-Step WhatsApp Ordering
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Order Genuine Car Care Without Hassle
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No credit card numbers required. Pick your oil bottle or filters, tap the WhatsApp button, and send the auto-generated order message. We confirm stock and dispatch right away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                1
              </div>
              <h4 className="font-bold text-white text-base">Select Your Product</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Choose the correct viscosity (0W-20, 5W-30, etc.) or volume (1L / 4L).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                2
              </div>
              <h4 className="font-bold text-white text-base">Click "WhatsApp Order"</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                A formatted message with your chosen variant, quantity, and PKR price opens automatically.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-sky-400 text-slate-900 font-bold flex items-center justify-center text-sm shadow-md">
                3
              </div>
              <h4 className="font-bold text-white text-base">Confirmation & Delivery</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We confirm rider delivery to your address in Rawalpindi or Islamabad. Pay upon delivery!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">100% Genuine Fluids</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Directly sourced from authorized distributors. Zero compromise on engine safety or oil seals.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Fast Dispatch</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Same-day rider delivery within Rawalpindi (Bahria, DHA, Saddar, Chaklala) and Islamabad.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 shrink-0">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">5.0 Star Rated Workshop</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Trusted auto repair & electrical shop opposite Bahria Town Phase 4 Gate, GT Road.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
