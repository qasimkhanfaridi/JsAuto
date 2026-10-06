import React from 'react';
import type { Product, CategoryKey } from '../types';
import { STORE_CONFIG } from '../config/storeConfig';
import { ProductCard } from '../components/ProductCard';
import { buildGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Droplet,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Wrench,
  Search
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
  const kabliHighlights = products.filter((p) => p.condition === 'kabli').slice(0, 4);
  const newPartHighlights = products.filter((p) => p.condition === 'new' && p.category !== 'engine-oils').slice(0, 4);

  const openWhatsApp = () => {
    window.open(buildGeneralInquiryWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const openPartInquiry = (partType: string) => {
    const text = `Hello ${STORE_CONFIG.name}, I am looking for a spare part: ${partType}. My car make/model is: `;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-white pt-10 pb-16 border-b border-slate-200/60">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-100/90 border border-brand-200 text-brand-900 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>{STORE_CONFIG.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                New OEM & Japanese Kabli (Qabli) Spare Parts.{' '}
                <span className="text-brand-600 block mt-1">For All Makes & Models.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Looking for a low-mileage Japanese Kabli engine, automatic gearbox, or genuine LED headlamp? Or brand new KYB shocks, ceramic brake pads, and sealed lubricants? JS Auto supplies every mechanical and electrical automotive part in Rawalpindi, Islamabad & nationwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigateToShop('all')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <span>Browse All Parts Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire Part on WhatsApp</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tested Japanese Kabli Cuts</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Brand New OEM Replacement</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-800">5.0 Star Rated Workshop</span>
                </div>
              </div>
            </div>

            {/* Right Card: Verified Workshop & Storefront */}
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
                    <div className="font-bold text-slate-800">Complete Spare Parts Range:</div>
                    <ul className="space-y-1 text-[11px] text-slate-500 list-disc list-inside">
                      <li><strong>Kabli Parts:</strong> Engines, Transmissions, Struts, Body cuts</li>
                      <li><strong>New Spare Parts:</strong> Suspension, Brakes, Plugs, Pumps, Bumpers</li>
                      <li><strong>Care & Fluids:</strong> 100% genuine sealed oils, coolants, WD-40</li>
                      <li><strong>Hotlines:</strong> {STORE_CONFIG.phone}</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={onNavigateToAbout}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold text-center transition-colors"
                  >
                    Workshop Location
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

      {/* 4 Major Inventory Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
            Comprehensive Inventory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Whatever Your Car Needs, We Have It
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Browse genuine imported Japanese cuts or factory-sealed new replacement parts with full quality guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Kabli / Qabli Parts */}
          <div
            onClick={() => onNavigateToShop('kabli-parts')}
            className="group p-6 bg-gradient-to-br from-purple-50/50 to-white rounded-3xl border border-purple-100 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <RotateCcw className="w-6 h-6" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-purple-100 text-purple-800">
                Low-Mileage Imports
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-purple-700 transition-colors">
                Japanese Kabli (Qabli) Parts
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Tested Half & Full Engines (1NZ, 2NZ, R06A, L15), Automatic/CVT Transmissions, Original LED Headlights, Body Cuts & Alternators.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:underline">
              <span>View Kabli Stock</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: Brand New Spare Parts */}
          <div
            onClick={() => onNavigateToShop('new-spare-parts')}
            className="group p-6 bg-gradient-to-br from-emerald-50/50 to-white rounded-3xl border border-emerald-100 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-800">
                Factory Sealed & OEM
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-emerald-700 transition-colors">
                Brand New Spare Parts
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                KYB Shocks, 555 Ball Joints, Kashiyama Ceramic Brake Pads, Brembo Discs, Denso Iridium Plugs, Bumpers, and Side Mirrors.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-emerald-50 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:underline">
              <span>View New Parts</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 3: Engine & Transmission */}
          <div
            onClick={() => onNavigateToShop('engine-mechanical')}
            className="group p-6 bg-gradient-to-br from-sky-50/50 to-white rounded-3xl border border-sky-100 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-sky-100 text-sky-800">
                Mechanical Core
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-sky-700 transition-colors">
                Engine & Transmission
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Water pumps, starter motors, alternators, throttle bodies, steering racks, ABS modulators, and engine mounts.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-sky-50 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:underline">
              <span>View Mechanical</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 4: Fluids & Maintenance */}
          <div
            onClick={() => onNavigateToShop('engine-oils')}
            className="group p-6 bg-gradient-to-br from-amber-50/50 to-white rounded-3xl border border-amber-100 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Droplet className="w-6 h-6" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-amber-100 text-amber-800">
                Fluids & Consumables
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mt-2 group-hover:text-amber-700 transition-colors">
                Oils, Coolants & WD-40
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                100% genuine Mobil 1, Shell, Castrol, Liqui Moly, Toyota OEM oils, Prestone Coolants, OEM filters, and WD-40 sprays.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:underline">
              <span>View Fluids</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Custom Sourcing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Search className="w-3.5 h-3.5" />
              <span>Looking for a specific or rare part?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Can't Find Your Part? Send Photo or Chassis Number!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We stock hundreds of Kabli body cuts, doors, suspension setups, and engine parts at our Rawalpindi warehouse. Message us on WhatsApp and our specialists will verify immediate availability and price.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openPartInquiry('Kabli Engine or Gearbox')}
              className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-bold shadow-md transition-all active:scale-95"
            >
              Inquire Kabli Part
            </button>
            <button
              type="button"
              onClick={() => openPartInquiry('Brand New Spare Part')}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold shadow-md transition-all active:scale-95 flex items-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Helpline</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Japanese Kabli Parts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">
              Tested Imports
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Japanese Kabli (Qabli) Highlights
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Low-mileage engines, automatic transmissions, and original Japanese LED assemblies.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToShop('kabli-parts')}
            className="text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-800 flex items-center space-x-1"
          >
            <span>View All Kabli</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kabliHighlights.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* Featured Brand New Spare Parts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
              OEM & Japanese Aftermarket
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Brand New Spare Parts
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              KYB Shocks, 555 Ball Joints, Kashiyama Ceramic Pads, Denso Iridium Plugs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToShop('new-spare-parts')}
            className="text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>View All New</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newPartHighlights.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* Top Picks / All-Round Featured Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
              Top Customer Picks
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Popular Mechanical & Maintenance Parts
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

      {/* Trust & Guarantee Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Tested Japanese Kabli Stock</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Every Kabli engine, transmission, and rack is pre-tested for compression, seals, and clean performance.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Brand New Genuine & OEM</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Directly sourced from trusted brands like KYB, 555 Japan, Denso, Aisin, and OEM Japanese manufacturers.
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
                Full-service workshop on GT Road Rawalpindi opposite Bahria Town Phase 4 Gate for fitting and diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
