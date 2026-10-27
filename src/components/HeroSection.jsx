import React from 'react';
import { FileText, Users, TrendingUp, Target } from 'lucide-react';
import HeroForm from './HeroForm';
import { heroContent } from '../data/content';

const iconMap = {
  FileText: FileText,
  Users: Users,
  TrendingUp: TrendingUp,
  Target: Target,
};

export default function HeroSection({ onLeadSubmitted }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5] pt-6 pb-14 lg:pt-10 lg:pb-16 border-b border-gray-100">
      
      {/* Exact Hero Student with Lucknow Monument (Desktop Positioned as in Original Flyer) */}
      <div className="hidden lg:block absolute top-2 right-[360px] xl:right-[410px] w-[500px] xl:w-[560px] h-[480px] pointer-events-none z-0 select-none">
        <img
          src="/images/hero-student.png"
          alt="Dhyeya IAS Aspirants Test Series Lucknow"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Badge, Headline, Subtext & 4 Feature Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-2">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf5e8] border border-amber-300/80 text-[#b37719] text-xs font-bold tracking-wide uppercase w-fit mb-4 shadow-xs">
              <span>{heroContent.badge}</span>
            </div>

            {/* Main Headline (Practice Today. Perform Tomorrow.) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-black tracking-tight leading-[1.12] text-[#0d1b30]">
              <span>{heroContent.titlePart1}</span>
              <br />
              <span className="text-[#c28422]">
                {heroContent.titlePart2}
              </span>
            </h1>

            {/* Subheading & Description */}
            <div className="mt-4 space-y-2 max-w-xl">
              <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {heroContent.subheading}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                {heroContent.description}
              </p>
            </div>

            {/* Mobile / Tablet View of the Student Image */}
            <div className="block lg:hidden my-6 w-full max-w-sm mx-auto">
              <img
                src="/images/hero-student.png"
                alt="Dhyeya IAS Aspirants preparing in Lucknow"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            {/* 4 Feature Badges with exact circular border styling from original flyer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-2 max-w-2xl relative z-10">
              {heroContent.stats.map((item) => {
                const IconComponent = iconMap[item.icon] || FileText;
                return (
                  <div key={item.id} className="flex flex-col items-start group">
                    <div className="w-11 h-11 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center mb-2.5 shadow-xs group-hover:border-[#c28422] group-hover:text-[#c28422] transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Hero Form Card */}
          <div className="lg:col-span-5 lg:pl-4 relative z-20">
            <div className="sticky top-24">
              <HeroForm onLeadSubmitted={onLeadSubmitted} source="Hero Form" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
