import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Download,
  Target,
  BarChart3,
  Languages,
  FileCheck,
  MapPin,
} from 'lucide-react';
import HeroForm from './HeroForm';
import './upsc-test-series.css';

export default function HeroSection({ onLeadSubmitted }) {
  const googleDocUrl =
    'https://docs.google.com/document/d/1D6fZQ1KPxqv_EFBHltMBSAInudo8-2tUV3V8qi35t0A/edit#';

  return (
    <section className="upsc-hero-section relative overflow-hidden w-full bg-[#f4f7fb] pt-3 pb-8 sm:pt-6 sm:pb-12 border-b border-gray-200/80">
      <div className="page upsc-hero-page" style={{ marginTop: '0', marginBottom: '0' }}>
        <article
          className="content upsc-hero-content relative overflow-hidden"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          {/* Subtle Ambient Background Decorative Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Geometric Tech Grid Lines Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07] z-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Subtle Translucent Student & Heritage Watermark Silhouette on Large Displays */}
          <div className="hidden xl:block absolute bottom-0 right-[390px] w-[340px] h-[380px] pointer-events-none opacity-20 select-none z-0">
            <img
              src="/images/hero-student-clean.png"
              alt=""
              className="w-full h-full object-contain object-bottom filter grayscale contrast-125"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch upsc-hero-grid">
            {/* Left Column: Heading, Paragraphs, Highlights, and CTAs */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between upsc-hero-left">
              {/* Top Badge Pill with Crystal Clear White Text */}
              <div className="pt-8 px-6 sm:px-8 lg:pt-10 lg:px-[54px]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-[#ffd269] font-extrabold">2027 Admissions Open</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white font-bold">Bilingual Prelims &amp; Mains</span>
                </div>
              </div>

              {/* Exact H1 with Ultra-Clear High-Contrast Colors */}
              <h1 className="!pt-3 !pb-3 !px-6 sm:!px-8 lg:!px-[54px] text-white">
                <span className="block font-black text-white text-2xl sm:text-3xl lg:text-[2.65rem] leading-[1.18] tracking-tight">
                  UPSC Prelims and Mains Test Series
                </span>
                <span className="block mt-1 sm:mt-2 text-[#ffd269] font-black text-2xl sm:text-3xl lg:text-[2.65rem] leading-[1.18] tracking-tight">
                  | IAS GS Test Series 2027
                </span>
              </h1>

              {/* 4-Pillar Feature Capsules with Crisp White Text & Vivid Gold Icons */}
              <div className="px-6 sm:px-8 lg:px-[54px] py-1.5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-bold backdrop-blur-md shadow-2xs">
                  <FileCheck className="w-4 h-4 text-[#ffd269]" />
                  <span>54 Comprehensive Tests</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-bold backdrop-blur-md shadow-2xs">
                  <Languages className="w-4 h-4 text-[#ffd269]" />
                  <span>English &amp; हिन्दी Medium</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-bold backdrop-blur-md shadow-2xs">
                  <BarChart3 className="w-4 h-4 text-[#ffd269]" />
                  <span>Personal Report Card</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-bold backdrop-blur-md shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#ffd269]" />
                  <span>Online &amp; Offline Centres</span>
                </span>
              </div>

              {/* Paragraphs: Crystal Clear High-Contrast Text with Elegant Left Accents */}
              <div className="px-6 sm:px-8 lg:px-[54px] pt-3 space-y-3.5">
                {/* Paragraph 1 */}
                <div className="border-l-3 border-[#ffd269] pl-4 py-0.5">
                  <p className="!m-0 !p-0 text-[#f0f5ff] text-[0.96rem] sm:text-[1.02rem] leading-relaxed font-normal">
                    Completing the UPSC syllabus once is only half the battle. In the actual exam hall, aspirants lose marks not because they haven't read standard books, but because of <span className="text-white font-bold">two-option confusion in Prelims</span>, <span className="text-white font-bold">poor time allocation in CSAT</span>, and <span className="text-white font-bold">unstructured answers in Mains</span>. A strategically designed UPSC Test Series <span className="text-[#ffd269] font-bold">bridges the gap between passive reading and exam-day execution</span>.
                  </p>
                </div>

                {/* Paragraph 2 */}
                <div className="border-l-3 border-[#38bdf8] pl-4 py-0.5">
                  <p className="!m-0 !p-0 text-[#f0f5ff] text-[0.96rem] sm:text-[1.02rem] leading-relaxed font-normal">
                    Dhyeya IAS presents the <span className="text-white font-bold">UPSC-2027 All India Pre-cum-Mains Test Series</span>—a rigorous, research-backed testing ecosystem built for serious Civil Services aspirants. Featuring <span className="text-[#ffd269] font-bold">54 comprehensive tests</span>, <span className="text-white font-bold">bilingual support (English &amp; Hindi)</span>, flexible <span className="text-white font-bold">online and offline modes</span>, and a <span className="text-[#38bdf8] font-bold">Personal Report Card after every test</span>, this UPSC Test Series turns every mock paper into a <span className="text-[#ffd269] font-bold">measurable step toward the final merit list</span>.
                  </p>
                </div>
              </div>

              {/* Exact CTA Buttons with High-Contrast Text & Sharp Borders */}
              <div
                className="cta-row hero-ctas !pt-6 !pb-8 sm:!pb-10"
                aria-label="UPSC Test Series actions"
              >
                <a
                  className="btn btn-primary group"
                  href={googleDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Enrol Now in 2027 Batch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  className="btn btn-secondary group"
                  href={googleDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 text-[#153e90] group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Complete Test Schedule PDF</span>
                </a>
                <a className="btn btn-outline group" href="#free-mock-test">
                  <Target className="w-4 h-4 text-[#ffd269] group-hover:rotate-45 transition-transform" />
                  <span>Attempt Free Open UPSC Mock Test</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Form Card with Elevated Styling */}
            <div className="lg:col-span-5 xl:col-span-5 p-4 sm:p-6 lg:p-0 lg:pt-8 lg:pr-10 lg:pb-8 flex flex-col items-center justify-center upsc-hero-right">
              {/* Form Floating Top Header */}
              <div className="w-full max-w-md mb-2 flex items-center justify-between px-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffd269] tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd269]" />
                  <span>Limited Batch Size • Mentorship</span>
                </span>
                <span className="text-[11px] font-bold text-white bg-white/20 px-2.5 py-0.5 rounded-full border border-white/25">
                  2027 Admissions
                </span>
              </div>

              {/* Form Component Wrapper */}
              <div className="w-full max-w-md hero-form-wrapper shadow-2xl rounded-2xl ring-1 ring-white/30">
                <HeroForm onLeadSubmitted={onLeadSubmitted} source="Hero Form" />
              </div>

              {/* Social Proof Strip under Form with Crisp High-Contrast Text */}
              <div className="w-full max-w-md mt-3.5 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src="/images/avatar-aman-exact.png"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="/images/avatar-ritika-exact.png"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="/images/avatar-vivek-exact.png"
                      alt="Student"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Trusted by 15,000+ IAS Aspirants
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#ffd269] text-xs font-black">
                  <span>★ 4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
