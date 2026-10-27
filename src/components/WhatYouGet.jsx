import React from 'react';
import { Check, Download, ArrowRight } from 'lucide-react';
import { whatYouGetContent } from '../data/content';

export default function WhatYouGet({ onOpenModal }) {
  return (
    <section className="bg-[#0b192e] text-white py-12 sm:py-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Exact Test Series Booklets from Original Flyer */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <img
                src="/images/booklets.png"
                alt="Dhyeya IAS Test Series Question and Answer Booklets"
                className="w-full h-auto object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Center: What You Get Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Pill */}
            <div className="inline-block mb-2">
              <span className="px-3 py-1 rounded-full border border-amber-400/60 bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase">
                {whatYouGetContent.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-5">
              {whatYouGetContent.title}
            </h2>

            {/* Checklist */}
            <ul className="space-y-3">
              {whatYouGetContent.benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#c28422] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-200 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-7">
              <button
                onClick={() => onOpenModal('What You Get CTA')}
                className="inline-flex items-center gap-2 bg-[#c28422] hover:bg-[#aa6f15] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample Test & Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right: Exact Hand Writing Image from Original Flyer */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px]">
              <img
                src="/images/handwriting.png"
                alt="Aspirant writing on answer sheet"
                className="w-full h-auto object-contain rounded-xl filter drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
