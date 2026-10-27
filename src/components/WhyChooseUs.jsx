import React from 'react';
import { FileCheck, PenTool, BarChart3, Award } from 'lucide-react';
import { whyChooseUsFeatures } from '../data/content';

const iconMap = {
  FileCheck: FileCheck,
  PenTool: PenTool,
  BarChart3: BarChart3,
  Award: Award,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0c1a2f] tracking-tight">
            Why Choose Dhyeya IAS Test Series?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            A systematic practice system designed for real exam success.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] || FileCheck;
            return (
              <div
                key={feature.id}
                className="bg-[#faf8f5]/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-amber-300 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-xl bg-amber-50 border border-amber-200/90 text-[#c28422] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#c28422] group-hover:text-white transition-all duration-200 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 font-serif group-hover:text-[#c28422] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100/80 flex items-center text-xs font-semibold text-[#c28422] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span className="ml-1 font-sans">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
