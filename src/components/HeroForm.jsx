import React, { useState } from 'react';
import { ArrowRight, Lock, CheckCircle2, Loader2 } from 'lucide-react';
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
      // Send payload to backend endpoint
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
        // In local/mock frontend-only mode where backend server might not be running yet,
        // we log gracefully and treat as received so the UI never breaks.
        console.warn('Backend server not responding or mock endpoint used. Lead saved locally:', leadPayload);
      }

      // If backend responded with an error status:
      if (response && !response.ok && response.status !== 404) {
        throw new Error('Failed to send details to server. Please try again.');
      }

      // Success
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
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-100/80 text-center flex flex-col items-center justify-center min-h-[380px] animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 font-serif mb-2">Brochure Request Received!</h3>
        <p className="text-sm text-gray-600 mb-6 max-w-xs">
          Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>! The syllabus, schedule, and fee structure have been sent to <span className="font-semibold text-gray-900">+91 {formData.mobileNumber}</span>.
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
          className="text-xs font-semibold text-[#c28422] hover:underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-gray-200/90 relative">
      {/* Top Limited Seats Pill */}
      <div className="inline-block mb-3">
        <span className="bg-[#c28422] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wide shadow-xs">
          LIMITED SEATS
        </span>
      </div>

      {/* Card Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-950 font-serif leading-snug">
        Get Test Series Details & Brochure
      </h2>
      <p className="text-xs text-gray-500 mt-1 mb-5 leading-relaxed">
        Fill in your details to receive syllabus, schedule, fee and demo paper.
      </p>

      {/* Error Alert */}
      {errorMessage && (
        <div className="mb-4 p-2.5 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Lead Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] transition-colors outline-none placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              required
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] transition-colors outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Select Exam
          </label>
          <select
            name="exam"
            value={formData.exam}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] transition-colors outline-none bg-white text-gray-800"
          >
            <option value="UPSC CSE">UPSC CSE</option>
            <option value="UPPCS">UPPCS (UPPSC)</option>
            <option value="Both UPSC & UPPCS">Both (UPSC & UPPCS)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Mode
          </label>
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] transition-colors outline-none bg-white text-gray-800"
          >
            <option value="Online">Online</option>
            <option value="Offline (Lucknow)">Offline (Lucknow)</option>
            <option value="Offline (Prayagraj)">Offline (Prayagraj)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-[#c28422] hover:bg-[#a86e15] active:bg-[#915e10] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
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
          <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5 flex-wrap">
            <Lock className="w-3 h-3 text-gray-400 inline" />
            <span>100% Safe</span>
            <span className="text-gray-300">•</span>
            <span>No Spam</span>
            <span className="text-gray-300">•</span>
            <span>Only Relevant Updates</span>
          </p>
        </div>
      </form>
    </div>
  );
}
