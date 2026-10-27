import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function ToastNotification({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-xl shadow-2xl border-l-4 border-[#c28422] p-4 flex items-start gap-3 animate-fade-in">
      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h4 className="text-xs font-bold text-gray-900">Lead Saved & Sent!</h4>
        <p className="text-xs text-gray-600 mt-0.5">
          {message || 'Details transmitted to backend. Our counsellor will get back to you shortly.'}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
