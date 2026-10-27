import React from 'react';
import { FileText, Check, ArrowRight } from 'lucide-react';
import { programmes } from '../data/content';

export default function Programmes({ onSelectProgramme }) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0c1a2f] tracking-tight">
            Test Series Programmes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Choose the right test series as per your preparation needs.
          </p>
        </div>

        {/* 3 Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              className={`relative bg-white rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                prog.featured
                  ? 'border-2 border-[#c28422] shadow-xl md:-translate-y-2'
                  : 'border border-gray-200/90 shadow-sm hover:shadow-md hover:border-amber-300'
              }`}
            >
              {/* Featured Top Banner Badge */}
              {prog.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0c1a2f] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {prog.badgeText}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#c28422] flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                  {prog.name}
                </h3>

                {/* Bullets */}
                <ul className="space-y-3.5 mb-8">
                  {prog.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#c28422] flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                {prog.featured ? (
                  <button
                    onClick={() => onSelectProgramme(prog.name)}
                    className="w-full bg-[#c28422] hover:bg-[#aa6f15] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{prog.ctaText}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectProgramme(prog.name)}
                    className="w-full bg-white hover:bg-amber-50/60 border border-[#c28422] text-[#c28422] font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{prog.ctaText}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
