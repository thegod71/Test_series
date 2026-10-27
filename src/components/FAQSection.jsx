import React, { useState } from 'react';
import { ChevronDown, Headset, ArrowRight } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#faf8f5]/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: FAQ Accordion (8 columns) */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a2f] tracking-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-gray-200/90 overflow-hidden transition-all duration-200 shadow-xs hover:border-amber-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-medium text-gray-900 hover:text-[#c28422] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#c28422]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-amber-50/20 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: "Still have questions?" Card (4 columns) */}
          <div className="lg:col-span-4">
            <div className="bg-[#fef8ee] rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center justify-center">
              
              {/* Headphone Icon in Golden circle */}
              <div className="w-14 h-14 rounded-full bg-amber-100/80 text-[#c28422] flex items-center justify-center mb-4 shadow-xs">
                <Headset className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-xs leading-relaxed">
                Talk to our counselling team for personalised guidance.
              </p>

              {/* Action Button */}
              <button
                onClick={() => onOpenModal('Still Have Questions CTA')}
                className="w-full bg-[#c28422] hover:bg-[#aa6f15] text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Talk to a Counsellor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 text-[11px] text-gray-500">
                Mon - Sat: 9:30 AM to 7:00 PM IST
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
