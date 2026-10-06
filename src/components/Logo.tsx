import React from 'react';
import { STORE_CONFIG } from '../config/storeConfig';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'badge-only';
  variant?: 'light' | 'dark' | 'badge';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
  if (variant === 'badge' || size === 'badge-only') {
    const badgeSizes = {
      sm: 'w-10 h-10',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      'badge-only': 'w-12 h-12'
    };
    const badgeClass = badgeSizes[size] || 'w-14 h-14';

    return (
      <div className={`relative inline-block ${className}`}>
        <img
          src="/js-auto-official-logo.jpg"
          alt="JS Auto Official Logo"
          className={`${badgeClass} rounded-full object-cover shadow-md border-2 border-brand-500/30 hover:scale-105 transition-transform`}
        />
      </div>
    );
  }

  const isDark = variant === 'dark';
  const autoColor = isDark ? 'text-white' : 'text-slate-900';
  const taglineColor = isDark ? 'text-slate-300' : 'text-slate-600';

  const avatarSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };
  const avatarClass = avatarSizes[size] || 'w-11 h-11';

  return (
    <div className={`flex items-center space-x-3 select-none group ${className}`}>
      {/* Official Circular Badge Emblem */}
      <div className="relative shrink-0">
        <img
          src="/js-auto-official-logo.jpg"
          alt="JS Auto Official Emblem"
          className={`${avatarClass} rounded-full object-cover shadow-md ring-2 ring-brand-500/40 group-hover:ring-brand-400 group-hover:scale-105 transition-all`}
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" title="Open Now" />
      </div>

      {/* Typography from Official Brand */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none">
          <span className="text-xl sm:text-2xl font-black italic text-red-600 drop-shadow-xs">
            JS
          </span>
          <span className={`text-xl sm:text-2xl font-black italic tracking-wide ${autoColor} ml-1`}>
            AUTO
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase mt-1 ${taglineColor}`}>
          {STORE_CONFIG.tagline}
        </span>
      </div>
    </div>
  );
};
