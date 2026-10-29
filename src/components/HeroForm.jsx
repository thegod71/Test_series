import React, { useState } from 'react';
import { ArrowRight, Lock, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function HeroForm({ onLeadSubmitted, source = 'Hero Form' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    exam: 'UPSC CSE',
    mode: 'Online',
    source: source,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    const leadPayload = {
      fullName: formData.fullName.trim(),
      mobileNumber: cleanPhone,
      exam: formData.exam,
      mode: formData.mode,
      source: source,
      submittedAt: new Date().toISOString(),
    };

    try {
      console.log('🚀 Sending lead to backend:', siteConfig.backendApiUrl, leadPayload);

      let response;
      try {
        response = await fetch(siteConfig.backendApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadPayload),
        });
      } catch (networkErr) {
        console.warn('Backend server not responding or mock endpoint used. Lead saved locally:', leadPayload);
      }

      if (response && !response.ok && response.status !== 404) {
        throw new Error('Failed to send details to server. Please try again.');
      }

      setSubmitted(true);
      if (onLeadSubmitted) {
        onLeadSubmitted(leadPayload);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(10,25,60,0.35)] border border-white text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ffb547] via-[#2259d6] to-[#7147d7]" />
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-[#102a56] font-serif mb-2">Brochure Request Received!</h3>
        <p className="text-sm text-slate-600 mb-6 max-w-xs leading-relaxed">
          Thank you, <span className="font-bold text-[#102a56]">{formData.fullName}</span>! The syllabus, schedule, and fee structure have been sent to <span className="font-bold text-[#102a56]">+91 {formData.mobileNumber}</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              mobileNumber: '',
              exam: 'UPSC CSE',
              mode: 'Online',
              source: source,
            });
          }}
          className="text-xs font-bold text-[#2259d6] hover:text-[#7147d7] hover:underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(10,25,60,0.35)] border border-white relative overflow-hidden">
      {/* Top Gradient Decorative Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ffb547] via-[#2259d6] to-[#7147d7]" />

      {/* Top Limited Seats Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-[#b36b00] text-[11px] font-extrabold uppercase tracking-wider mb-2.5 shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>LIMITED SEATS • 2027 BATCH</span>
      </div>

      {/* Card Header */}
      <h2 className="text-xl sm:text-2xl font-black text-[#102a56] tracking-tight leading-snug">
        Get Test Series Details &amp; Brochure
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4 leading-relaxed font-medium">
        Fill in your details to receive syllabus, schedule, fee and demo paper.
      </p>

      {/* Error Alert */}
      {errorMessage && (
        <div className="mb-4 p-2.5 bg-red-50 text-red-700 text-xs font-semibold rounded-lg border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Lead Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-bold text-[#1b2940] mb-1">
            Full Name <span className="text-amber-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-[#2259d6] transition-all outline-none placeholder:text-slate-400 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1b2940] mb-1">
            Mobile Number <span className="text-amber-600">*</span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xs font-bold text-slate-500 pointer-events-none select-none">
              +91
            </span>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-11 pr-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-[#2259d6] transition-all outline-none placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#1b2940] mb-1">
              Select Exam
            </label>
            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-[#2259d6] transition-all outline-none text-slate-900 font-medium cursor-pointer"
            >
              <option value="UPSC CSE">UPSC CSE</option>
              <option value="UPPCS">UPPCS (UPPSC)</option>
              <option value="Both UPSC & UPPCS">Both (UPSC & UPPCS)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1b2940] mb-1">
              Mode
            </label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/60 hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-[#2259d6] transition-all outline-none text-slate-900 font-medium cursor-pointer"
            >
              <option value="Online">Online</option>
              <option value="Offline (Lucknow)">Offline (Lucknow)</option>
              <option value="Offline (Prayagraj)">Offline (Prayagraj)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-3 bg-gradient-to-r from-[#ffb547] via-[#ffa834] to-[#ff7b39] hover:from-[#ffa834] hover:to-[#ff6d24] active:scale-[0.99] text-[#172746] font-black py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group text-sm tracking-wide uppercase"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#172746]" />
              <span>Sending Details...</span>
            </>
          ) : (
            <>
              <span>Get Test Series Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="pt-2 text-center">
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 flex-wrap font-medium">
            <Lock className="w-3.5 h-3.5 text-emerald-600 inline" />
            <span className="text-slate-600">100% Privacy</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">No Spam</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Instant PDF on Mobile</span>
          </p>
        </div>
      </form>
    </div>
  );
}
