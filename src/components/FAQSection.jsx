import React, { useState } from 'react';
import { ChevronDown, Headset, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

const upscFaqs = [
  {
    id: "faq-1",
    num: "1",
    badge: "Flagship 2027",
    question: "Which is the best UPSC Test Series for Prelims and Mains 2027?",
    answer: "The Dhyeya IAS UPSC-2027 All India Pre-cum-Mains Test Series is one of the most trusted programmes because it combines 54 UPSC-aligned tests (covering GS Prelims, CSAT, GS Mains I–IV, and Essay) with a micro-level Personal Report Card, line-by-line Mains copy evaluation, and bilingual support."
  },
  {
    id: "faq-2",
    num: "2",
    badge: "Test Strategy",
    question: "How many mock tests should I attempt before UPSC Prelims 2027?",
    answer: "A serious aspirant should complete 30 to 35 quality Prelims mock tests—including sectional tests, current affairs tests, CSAT papers, and at least 8–10 full-length simulators—while revising each paper's solutions at least three times."
  },
  {
    id: "faq-3",
    num: "3",
    badge: "Current Affairs & CSAT",
    question: "Does the Dhyeya IAS UPSC Test Series cover Current Affairs and CSAT?",
    answer: "Yes. Every GS paper integrates 15 months of dynamic current affairs linked with static topics, and dedicated UPSC CSAT mock test papers are included to ensure you comfortably clear Paper-II alongside GS Paper-I."
  },
  {
    id: "faq-4",
    num: "4",
    badge: "Online & Offline Flexibility",
    question: "Can I switch between online and offline modes in this IAS GS Test Series?",
    answer: "Yes, Dhyeya IAS provides both online and offline test modes. If you miss a scheduled offline test date at the centre, you can still attempt the test and access your Personal Report Card and video discussion through your student portal."
  },
  {
    id: "faq-5",
    num: "5",
    badge: "Mains Copy Evaluation",
    question: "How quickly are Mains test copies evaluated at Dhyeya IAS?",
    answer: "Mains answer booklets submitted online or offline are evaluated within a strict turnaround window by trained subject experts, complete with inline annotations, macro-level evaluator comments, and model answers."
  }
];

export default function FAQSection({ onOpenModal }) {
  // First item open by default for immediate clarity
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleFAQ = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleExpandAll = () => {
    const allOpen = {};
    upscFaqs.forEach((_, idx) => {
      allOpen[idx] = true;
    });
    setOpenItems(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  const isAllExpanded = Object.keys(openItems).length === upscFaqs.length && Object.values(openItems).every(Boolean);

  const googleDocUrl = "https://docs.google.com/document/d/1D6fZQ1KPxqv_EFBHltMBSAInudo8-2tUV3V8qi35t0A/edit#";

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-[#f4f7fb] border-t border-gray-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact styling: Navy color & gradient underline bar */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-[#102a56] text-xs font-bold tracking-wide uppercase shadow-2xs mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#2259d6]" />
            <span>Frequently Asked Questions • UPSC CSE 2027 Batch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#102a56] tracking-tight leading-tight m-0">
            Frequently Asked Questions (FAQs) on UPSC Test Series 2027
          </h2>

          {/* Exact gradient underline bar as in provided stylesheet */}
          <div
            className="w-16 h-1 mt-3 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #0b9f9a, #2259d6, #7147d7)'
            }}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <p className="text-sm sm:text-base text-[#5c6b82] m-0">
              Clear answers to the most common questions regarding test formats, schedules, evaluation, and flexibility.
            </p>

            {/* Creative Toggle: Expand / Collapse All */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#102a56] bg-white border border-gray-200 px-2.5 py-1 rounded-md shadow-2xs">
                {upscFaqs.length} Questions Answered
              </span>
              <button
                type="button"
                onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
                className="text-xs font-bold text-[#2259d6] hover:text-[#7147d7] bg-white hover:bg-blue-50/50 border border-blue-200 px-3 py-1 rounded-md transition-colors cursor-pointer shadow-2xs"
              >
                {isAllExpanded ? "Collapse All" : "Expand All"}
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Accordion (8 cols) + Creative Counsellor Card (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Creative Interactive Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {upscFaqs.map((faq, index) => {
              const isOpen = !!openItems[index];
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                    isOpen
                      ? 'border-[#2259d6]/50 shadow-md ring-1 ring-[#2259d6]/20'
                      : 'border-gray-200/90 hover:border-blue-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4 transition-colors cursor-pointer group focus:outline-none"
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      {/* Topic Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[#102a56] text-[11px] font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3 text-[#0b9f9a]" />
                        <span>{faq.badge}</span>
                      </div>

                      {/* Question in Semantic <h3> Tag with exact styling */}
                      <h3 className="m-0 text-base sm:text-[1.12rem] font-bold text-[#294b8b] group-hover:text-[#2259d6] transition-colors leading-snug">
                        {faq.num}. {faq.question}
                      </h3>
                    </div>

                    {/* Animated Chevron Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#2259d6] text-white rotate-180 shadow-xs'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-[#2259d6]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Smooth Expandable Answer in Semantic <p> Tag */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-[#1b2940] text-sm sm:text-base leading-relaxed border-t border-gray-100/80 bg-gradient-to-b from-[#f9fbff] to-white animate-fade-in">
                      <p className="m-0 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Creative "Talk to a Counsellor" Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6ff] rounded-2xl p-6 sm:p-7 border border-blue-200/90 shadow-sm text-center flex flex-col items-center">
              
              {/* Headset Icon in Gradient Circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm text-white"
                style={{
                  background: 'linear-gradient(135deg, #102a56 0%, #2259d6 100%)'
                }}
              >
                <Headset className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#102a56] mb-2 m-0">
                Still have questions?
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#5c6b82] mb-6 max-w-xs leading-relaxed m-0">
                Need guidance choosing between Integrated Pre-cum-Mains vs dedicated Prelims batches? Talk to our academic mentorship team.
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('FAQ 1-on-1 Mentorship')}
                className="w-full text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                style={{
                  background: 'linear-gradient(100deg, #ffb547, #ff7b39)',
                  color: '#172746'
                }}
              >
                <span>Talk to a Counsellor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 pt-4 border-t border-gray-200/70 w-full text-left space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Helpline:</span>
                  <a href="tel:+919205274741" className="text-[#2259d6] font-bold hover:underline">
                    +91 92052 74741
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Support Hours:</span>
                  <span>9:30 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Download Card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-2xs">
              <h4 className="text-sm font-bold text-[#102a56] mb-1.5">
                Download Full 2027 Test Calendar
              </h4>
              <p className="text-xs text-gray-500 mb-3.5">
                Get the complete 54-test topic-wise dates, syllabus breakdown, and evaluation criteria.
              </p>
              <a
                href={googleDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-lg border border-[#2259d6] text-[#2259d6] hover:bg-blue-50 text-xs font-bold transition-colors"
              >
                Download Schedule PDF →
              </a>
            </div>
          </div>

        </div>

        {/* Final Registration CTA Card (From user's snippet styling) */}
        <div
          className="mt-14 p-7 sm:p-9 rounded-2xl text-white font-semibold flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          style={{
            background: 'linear-gradient(120deg, #102a56 0%, #2259d6 100%)'
          }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-2">
              <span>All India Ranking • Real Exam Temperament</span>
            </div>
            <p className="m-0 text-lg sm:text-xl font-bold text-white">
              Ready to benchmark your preparation against All-India competition?
            </p>
            <p className="m-0 text-xs sm:text-sm text-blue-100 mt-1 font-normal">
              Join thousands of serious civil services aspirants in Dhyeya IAS flagship 2027 batch.
            </p>
          </div>

          <a
            href={googleDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center flex-shrink-0 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-center w-full md:w-auto"
            style={{
              background: 'linear-gradient(100deg, #ffb547, #ff7b39)',
              color: '#172746'
            }}
          >
            Register for UPSC-2027 Pre-cum-Mains Series
          </a>
        </div>

      </div>
    </section>
  );
}
