import React from 'react';

interface ProductImageProps {
  category: string;
  brand: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  category,
  brand,
  name,
  className = '',
  size = 'md',
}) => {
  // Select distinct color palettes and icons based on automotive category
  let badgeBg = 'bg-sky-50 text-sky-700 border-sky-200';
  let iconPath: React.ReactNode = null;
  let categoryLabel = 'Auto Part';

  if (category === 'engine-oils') {
    badgeBg = 'bg-amber-50 text-amber-800 border-amber-200';
    categoryLabel = 'Engine Oil';
    iconPath = (
      // Oil canister silhouette
      <svg className="w-16 h-16 text-amber-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="18" y="24" width="28" height="34" rx="4" fill="currentColor" fillOpacity="0.08" />
        <path d="M26 14h12v10H26z" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M22 14h20M24 10h16" strokeLinecap="round" />
        <path d="M38 24v12a6 6 0 0 1-6 6" strokeLinecap="round" />
        <circle cx="32" cy="42" r="5" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  } else if (category === 'coolants') {
    badgeBg = 'bg-cyan-50 text-cyan-800 border-cyan-200';
    categoryLabel = 'Coolant Fluid';
    iconPath = (
      // Radiator coolant jug
      <svg className="w-16 h-16 text-cyan-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 20h20l4 12v22a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V32l4-12z" fill="currentColor" fillOpacity="0.08" />
        <path d="M28 12h8v8h-8z" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M26 12h12" strokeLinecap="round" />
        <path d="M22 28h20M32 36v12M26 42h12" strokeLinecap="round" />
      </svg>
    );
  } else if (category === 'filters') {
    badgeBg = 'bg-blue-50 text-blue-800 border-blue-200';
    categoryLabel = 'Filter Element';
    iconPath = (
      // Air / Oil filter
      <svg className="w-16 h-16 text-blue-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="22" strokeDasharray="4 2" fill="currentColor" fillOpacity="0.05" />
        <circle cx="32" cy="32" r="14" fill="currentColor" fillOpacity="0.15" />
        <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity="0.3" />
        <path d="M32 10v6M32 48v6M10 32h6M48 32h6" strokeLinecap="round" />
      </svg>
    );
  } else if (category === 'lubricants-sprays') {
    badgeBg = 'bg-blue-50 text-blue-900 border-blue-300';
    categoryLabel = 'Spray / Aerosol';
    iconPath = (
      // Spray aerosol can
      <svg className="w-16 h-16 text-blue-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="22" y="24" width="20" height="34" rx="3" fill="currentColor" fillOpacity="0.08" />
        <rect x="28" y="16" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
        <path d="M26 16h12" strokeLinecap="round" />
        <path d="M40 18l10-4M42 22l8 2M40 14l8-6" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    );
  } else {
    // Consumables / Wipers
    badgeBg = 'bg-indigo-50 text-indigo-800 border-indigo-200';
    categoryLabel = 'Consumable';
    iconPath = (
      // Wiper / Bulb / Tool
      <svg className="w-16 h-16 text-indigo-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 48C20 28 44 18 52 16" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 52l6-4M46 20l6-4" strokeLinecap="round" />
        <circle cx="14" cy="50" r="3" fill="currentColor" />
        <path d="M28 34l8 8" strokeDasharray="3 3" />
      </svg>
    );
  }

  const heightClass = size === 'sm' ? 'h-32' : size === 'lg' ? 'h-64 sm:h-72' : 'h-48';

  return (
    <div
      className={`relative w-full ${heightClass} bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-100 rounded-xl flex flex-col items-center justify-center p-4 border border-slate-200/80 overflow-hidden group select-none ${className}`}
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Brand badge top left */}
      <div className="absolute top-2.5 left-2.5">
        <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-white/90 text-slate-700 shadow-xs border border-slate-200">
          {brand}
        </span>
      </div>

      {/* Category indicator top right */}
      <div className="absolute top-2.5 right-2.5">
        <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border ${badgeBg}`}>
          {categoryLabel}
        </span>
      </div>

      {/* Central Visual Graphic */}
      <div className="my-auto flex items-center justify-center">
        {iconPath}
      </div>

      {/* Product Name Snippet bottom overlay */}
      <div className="w-full text-center px-2 z-10">
        <span className="text-[11px] font-medium text-slate-500 truncate block max-w-full">
          {name.split(' ').slice(0, 4).join(' ')}
        </span>
      </div>
    </div>
  );
};
