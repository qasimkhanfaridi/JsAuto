import React from 'react';
import type { ProductCondition } from '../types';

interface ProductImageProps {
  category: string;
  brand: string;
  name: string;
  condition?: ProductCondition;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  category,
  brand,
  name,
  condition = 'new',
  className = '',
  size = 'md',
}) => {
  const isKabli = condition === 'kabli';
  const nameLower = name.toLowerCase();

  let iconPath: React.ReactNode = null;
  let categoryLabel = 'Spare Part';

  // Determine icon based on category and product title keywords
  if (nameLower.includes('engine') || nameLower.includes('1nz') || nameLower.includes('2nz') || nameLower.includes('r06a')) {
    categoryLabel = isKabli ? 'Kabli Engine' : 'Engine Assembly';
    iconPath = (
      // Engine Block SVG
      <svg className="w-16 h-16 text-slate-700/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 24h6v-6h12v6h14v-4h8v18h-4v14H16V38h-4V24z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="32" cy="38" r="6" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M22 28h20M24 46h16" strokeLinecap="round" />
        <path d="M6 30h6M52 30h6" strokeLinecap="round" />
      </svg>
    );
  } else if (nameLower.includes('gearbox') || nameLower.includes('transmission') || nameLower.includes('cvt')) {
    categoryLabel = isKabli ? 'Kabli Gearbox' : 'Transmission';
    iconPath = (
      // Gear / Transmission SVG
      <svg className="w-16 h-16 text-indigo-700/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="32" cy="32" r="14" fill="currentColor" fillOpacity="0.1" />
        <path d="M32 10v6M32 48v6M10 32h6M48 32h6M16 16l5 5M43 43l5 5M16 48l5-5M43 21l5-5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity="0.3" />
      </svg>
    );
  } else if (nameLower.includes('shock') || nameLower.includes('suspension') || nameLower.includes('ball joint') || nameLower.includes('rack')) {
    categoryLabel = 'Suspension';
    iconPath = (
      // Shock Absorber & Spring SVG
      <svg className="w-16 h-16 text-sky-700/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="32" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        <path d="M32 16v8" strokeLinecap="round" />
        <path d="M26 24h12l-10 6h10l-10 6h10l-10 6h12" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="44" width="8" height="12" rx="2" fill="currentColor" fillOpacity="0.15" />
        <circle cx="32" cy="56" r="3" fill="currentColor" fillOpacity="0.2" />
      </svg>
    );
  } else if (nameLower.includes('brake') || nameLower.includes('rotor') || nameLower.includes('pad') || nameLower.includes('abs')) {
    categoryLabel = 'Brakes';
    iconPath = (
      // Brake Rotor & Caliper SVG
      <svg className="w-16 h-16 text-rose-700/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="32" cy="32" r="18" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.08" />
        <circle cx="32" cy="32" r="8" fill="currentColor" fillOpacity="0.2" />
        <path d="M18 16c4-4 12-6 18-4l2 12c-6-1-14 0-18 6l-2-14z" fill="currentColor" fillOpacity="0.25" strokeLinejoin="round" />
      </svg>
    );
  } else if (nameLower.includes('headlight') || nameLower.includes('light') || nameLower.includes('mirror') || nameLower.includes('bumper') || nameLower.includes('body')) {
    categoryLabel = isKabli ? 'Kabli Body Cut' : 'Body & Lights';
    iconPath = (
      // Car Headlight / Body Part SVG
      <svg className="w-16 h-16 text-amber-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M14 20c12-6 26-2 36 6v16c-10 8-24 12-36 6V20z" fill="currentColor" fillOpacity="0.1" />
        <path d="M42 24l12-6M44 32h14M42 40l12 6" strokeLinecap="round" strokeDasharray="2 2" />
        <circle cx="28" cy="32" r="6" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  } else if (category === 'engine-oils') {
    categoryLabel = 'Engine Oil';
    iconPath = (
      // Oil canister silhouette
      <svg className="w-16 h-16 text-amber-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="18" y="24" width="28" height="34" rx="4" fill="currentColor" fillOpacity="0.08" />
        <path d="M26 14h12v10H26z" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M22 14h20M24 10h16" strokeLinecap="round" />
        <circle cx="32" cy="42" r="5" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  } else {
    // Sprays / Coolants / Parts
    categoryLabel = 'Parts & Care';
    iconPath = (
      <svg className="w-16 h-16 text-cyan-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="22" y="24" width="20" height="34" rx="3" fill="currentColor" fillOpacity="0.08" />
        <rect x="28" y="16" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
        <path d="M26 16h12" strokeLinecap="round" />
        <path d="M40 18l10-4M42 22l8 2" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    );
  }

  const heightClass = size === 'sm' ? 'h-32' : size === 'lg' ? 'h-64 sm:h-72' : 'h-48';

  return (
    <div
      className={`relative w-full ${heightClass} bg-gradient-to-br from-slate-50 via-slate-100/60 to-slate-200/50 rounded-xl flex flex-col items-center justify-center p-4 border border-slate-200/80 overflow-hidden group select-none ${className}`}
    >
      {/* Background tech mesh */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Condition Badge Top Left: KABLI vs BRAND NEW */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center space-x-1.5">
        {isKabli ? (
          <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md bg-purple-600 text-white shadow-xs ring-1 ring-purple-700">
            KABLI (QABLI)
          </span>
        ) : (
          <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md bg-emerald-600 text-white shadow-xs ring-1 ring-emerald-700">
            BRAND NEW
          </span>
        )}
      </div>

      {/* Brand & Category top right */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-white/95 text-slate-700 border border-slate-200 shadow-2xs">
          {brand}
        </span>
      </div>

      {/* Central Visual Graphic */}
      <div className="my-auto flex items-center justify-center">
        {iconPath}
      </div>

      {/* Category Snippet at bottom */}
      <div className="w-full text-center px-2 z-10">
        <span className="text-[11px] font-semibold text-slate-600 truncate block max-w-full">
          {categoryLabel}
        </span>
      </div>
    </div>
  );
};
