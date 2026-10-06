import React from 'react';
import { STORE_CONFIG } from '../config/storeConfig';
import type { CategoryKey } from '../types';
import { Logo } from './Logo';
import { buildGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, category?: CategoryKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const openWhatsApp = () => {
    window.open(buildGeneralInquiryWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Logo variant="dark" />

            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted partner for 100% genuine engine oils, OEM filters, high-grade coolants, and maintenance sprays in Rawalpindi & Islamabad.
            </p>

            <div className="flex items-center space-x-2 text-xs text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 / 5.0 Rating</span>
              <span className="text-slate-400">({STORE_CONFIG.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Store Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'engine-oils')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Engine Oils (Synthetic & Mineral)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'coolants')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Radiator Coolants & Flushes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'filters')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Air, Oil & Fuel Filters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'lubricants-sprays')}
                  className="hover:text-brand-400 transition-colors"
                >
                  WD-40 & Specialty Sprays
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'consumables')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Wiper Blades & Consumables
                </button>
              </li>
              <li className="text-slate-500 flex items-center space-x-1.5">
                <span>Auto Decorations</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                  Phase 2
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Workshop & Store Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Rawalpindi Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{STORE_CONFIG.hours}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${STORE_CONFIG.phone}`} className="hover:text-white">
                  {STORE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: WhatsApp Ordering & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Order via WhatsApp
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions about oil viscosity or filter part numbers? Chat with our auto specialist right now.
            </p>
            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Chat</span>
            </button>
            <div className="flex items-center space-x-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>We confirm availability & price directly.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-slate-300"
            >
              About & Workshop
            </button>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="hover:text-slate-300"
            >
              Catalog
            </button>
            <a
              href="https://maps.google.com/?q=G4R7+3Q+Rawalpindi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 inline-flex items-center space-x-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
