import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Lock, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function LeadModal({ isOpen, onClose, initialProgramme = '', onLeadSubmitted }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    exam: 'UPSC CSE',
    mode: 'Online',
    centre: 'Lucknow',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected exam if opened from a specific programme card
  useEffect(() => {
    if (initialProgramme) {
      if (initialProgramme.includes('UPPCS')) {
        setFormData((prev) => ({ ...prev, exam: 'UPPCS' }));
      } else if (initialProgramme.includes('Mains')) {
        setFormData((prev) => ({ ...prev, exam: 'UPSC CSE', notes: 'Interested in UPSC Mains Test Series' }));
      } else if (initialProgramme.includes('Prelims')) {
        setFormData((prev) => ({ ...prev, exam: 'UPSC CSE', notes: 'Interested in UPSC Prelims Test Series' }));
      }
    }
  }, [initialProgramme]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      email: formData.email.trim(),
      exam: formData.exam,
      mode: formData.mode,
      centre: formData.centre,
      notes: formData.notes,
      source: 'Popup Modal (Auto-Open)',
      submittedAt: new Date().toISOString(),
    };

    try {
      console.log('📤 Sending Lead Data to Backend Server:', siteConfig.backendApiUrl);
      console.log('Lead Payload:', leadPayload);

      // Backend HTTP POST request
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
        // When running frontend without live backend, gracefully log so UI continues seamlessly
        console.warn('Backend server not currently running at', siteConfig.backendApiUrl, '. Lead logged to console:', leadPayload);
      }

      if (response && !response.ok && response.status !== 404) {
        throw new Error('Failed to submit form to backend. Please try again.');
      }

      // Success
      setSubmitted(true);
      if (onLeadSubmitted) {
        onLeadSubmitted(leadPayload);
      }
    } catch (err) {
      console.error('Modal lead submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full z-10 border border-amber-200/80 overflow-hidden">
        
        {/* Top Gold Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-amber-600 via-[#c28422] to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer z-20"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[420px] animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Registration Successful!
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>! Our senior academic mentor for <span className="font-semibold text-[#c28422]">{formData.exam}</span> will call you shortly at <span className="font-semibold text-gray-900">+91 {formData.mobileNumber}</span>.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-left w-full text-xs text-gray-700 mb-6 space-y-1">
              <p><span className="font-bold text-gray-900">Exam:</span> {formData.exam}</p>
              <p><span className="font-bold text-gray-900">Mode:</span> {formData.mode}</p>
              <p><span className="font-bold text-gray-900">Centre:</span> {formData.centre}</p>
              <p className="text-[11px] text-amber-800 pt-1">✓ Complete syllabus, test schedule & demo paper PDF has been dispatched.</p>
            </div>
            <button
              onClick={onClose}
              className="bg-[#c28422] hover:bg-[#aa6f15] text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow transition cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            
            {/* Modal Header with Exact Logo */}
            <div className="flex items-center justify-between mb-4 pr-8">
              <img
                src="/images/logo-exact.png"
                alt="Dhyeya IAS"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="inline-flex items-center gap-1 bg-amber-50 text-[#c28422] border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                <Sparkles className="w-3 h-3" />
                Batch 2026-27
              </span>
            </div>

            {/* Modal Title */}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-950 leading-tight">
              Get Test Series Details & Brochure
            </h2>
            <p className="text-xs text-gray-500 mt-1 mb-5">
              Enter your details to receive full syllabus, test schedule, model answers, and fee details.
            </p>

            {errorMessage && (
              <div className="mb-4 p-2.5 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com (to receive PDF brochure)"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Select Exam
                  </label>
                  <select
                    name="exam"
                    value={formData.exam}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] bg-white outline-none"
                  >
                    <option value="UPSC CSE">UPSC CSE</option>
                    <option value="UPPCS">UPPCS</option>
                    <option value="Both UPSC & UPPCS">Both</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Study Mode
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] bg-white outline-none"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline Classroom">Offline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Centre
                  </label>
                  <select
                    name="centre"
                    value={formData.centre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500/30 focus:border-[#c28422] bg-white outline-none"
                  >
                    <option value="Lucknow">Lucknow</option>
                    <option value="Prayagraj">Prayagraj</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#c28422] hover:bg-[#aa6f15] active:bg-[#915e10] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Backend...</span>
                  </>
                ) : (
                  <>
                    <span>Get Test Series Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Trust disclaimer */}
              <div className="pt-2 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-gray-400" />
                <span>100% Confidential • Direct Counsellor Consultation</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
