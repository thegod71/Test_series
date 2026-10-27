import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-18 bg-[#faf8f5]/40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0c1a2f] tracking-tight">
            Trusted by Aspirants Like You
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
            Hear from our test series students.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar and Quote layout */}
                <div className="flex items-start gap-3.5 mb-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-13 h-13 rounded-full object-cover flex-shrink-0 shadow-xs"
                  />
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-3 pl-1">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-950 font-serif">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {item.examTag}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-3 pt-2.5 border-t border-gray-100/80">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
