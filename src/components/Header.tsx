import React, { useState } from 'react';
import { STORE_CONFIG } from '../config/storeConfig';
import { useCart } from '../context/CartContext';
import { buildGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import type { CategoryKey } from '../types';
import { Logo } from './Logo';
import {
  ShoppingCart,
  Search,
  MessageCircle,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, category?: CategoryKey) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  searchQuery,
  setSearchQuery,
}) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string, category?: CategoryKey) => {
    onNavigate(tab, category);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('shop');
  };

  const openWhatsApp = () => {
    window.open(buildGeneralInquiryWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Announcement & Verification Bar */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-sky-600 text-white text-[11px] py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate">{STORE_CONFIG.announcement}</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 shrink-0 text-white/90">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-sky-200" />
              <span>Opposite Bahria Phase 4 Gate, GT Rd, Rawalpindi</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-sky-200" />
              <span>{STORE_CONFIG.hours}</span>
            </span>
            <a
              href={`tel:${STORE_CONFIG.whatsappDisplayNumber}`}
              className="flex items-center space-x-1 hover:text-white underline underline-offset-2"
            >
              <Phone className="w-3 h-3 text-sky-200" />
              <span>{STORE_CONFIG.whatsappDisplayNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Action Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer shrink-0"
        >
          <Logo />
        </div>

        {/* Global Search Bar (Center) */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 max-w-lg hidden sm:block relative"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 100+ oils, coolants, filters, WD-40, brands..."
              className="w-full bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm pl-10 pr-10 py-2.5 rounded-2xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-800 placeholder-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Right CTAs: WhatsApp & Cart */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* WhatsApp Direct Chat Button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className="hidden md:inline-flex items-center space-x-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-semibold transition-colors"
            title="Chat with Auto Specialist on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            <span>Ask Specialist</span>
          </button>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 rounded-xl transition-all active:scale-95 flex items-center space-x-2"
            title="Open Order Cart"
          >
            <ShoppingCart className="w-5 h-5 text-brand-700" />
            <span className="hidden sm:inline text-xs font-bold text-brand-800">
              Cart
            </span>
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs ring-2 ring-white">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-2.5 sm:hidden">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search oils, filters, coolants, WD-40..."
            className="w-full bg-slate-100 text-xs pl-9 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden md:block bg-slate-50/90 border-t border-slate-200/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center space-x-1 py-1.5 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'home'
                  ? 'bg-brand-600 text-white font-bold'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'shop'
                  ? 'bg-brand-600 text-white font-bold'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white'
              }`}
            >
              All Products
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'engine-oils')}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-white transition-colors"
            >
              Engine Oils
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'coolants')}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-white transition-colors"
            >
              Coolants
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'filters')}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-white transition-colors"
            >
              Filters
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'lubricants-sprays')}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-white transition-colors"
            >
              WD-40 & Sprays
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop', 'consumables')}
              className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-white transition-colors"
            >
              Wipers & Consumables
            </button>

            {/* Coming Soon Category: Auto Decorations */}
            <div className="relative group inline-flex items-center px-3 py-1.5 rounded-lg text-slate-400 cursor-not-allowed">
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500/70" />
                <span>Auto Decorations</span>
              </span>
              <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold bg-amber-100 text-amber-800 rounded-sm">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 py-1.5">
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'about'
                  ? 'text-brand-700 bg-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white'
              }`}
            >
              Location & Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1 text-sm font-semibold">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'all')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            All Products (100 Catalog Items)
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'engine-oils')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Engine Oils
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'coolants')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Engine Coolants
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'filters')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Air / Oil / Fuel Filters
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'lubricants-sprays')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            WD-40, Greases & Sprays
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('shop', 'consumables')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            Wiper Blades & Consumables
          </button>
          <div className="py-2 px-3 rounded-lg text-slate-400 flex items-center justify-between">
            <span>Auto Decorations</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm">
              Coming Soon
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            About & Workshop Location (Rawalpindi GT Rd)
          </button>
        </div>
      )}
    </header>
  );
};
