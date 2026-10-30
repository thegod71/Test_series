import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Navbar({ onOpenModal }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Exact Brand Logo from Original Design */}
        <a href="#top" className="flex items-center gap-2 group focus:outline-none">
          <img
            src="/images/Logo1.jpeg"
            alt="Dhyeya IAS - most trusted since 2005 - LUCKNOW"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-102 transition-transform duration-200"
          />
        </a>

        {/* Right Badges & CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* UPSC | UPPCS Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
            </span>
            <span>UPSC | UPPCS</span>
          </div>

          {/* Offline & Online Pill */}
          <div className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-white shadow-xs">
            OFFLINE & ONLINE
          </div>

          {/* 2027 Schedule Jump Link */}
          <a
            href="#upsc-2027-guide"
            className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#15376f] text-xs sm:text-sm font-bold hover:bg-blue-100 transition-colors shadow-xs"
          >
            2027 Batch Guide
          </a>

          {/* Quick Contact / Enquire Button */}
          <button
            onClick={() => onOpenModal('Header Enquire CTA')}
            className="inline-flex items-center gap-1.5 bg-[#ffa834] hover:bg-[#ff7b39] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>

      </div>
    </header>
  );
}
