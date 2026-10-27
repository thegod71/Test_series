import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#081324] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#c28422]" />
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Empowering civil services aspirants for over two decades with authentic guidance, rigorous test evaluation, and strategic mentorship.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Civil Services Mentorship</span>
            </div>
          </div>

          {/* Col 2: Centres (Lucknow & Prayagraj) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Our Offline Centres
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c28422] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Lucknow Centre:</span>
                  <span>A-12, Sector J, Aliganj & Kapoorthala, Lucknow - 226024</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c28422] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Prayagraj Centre:</span>
                  <span>Civil Lines & Katra Road, Prayagraj, UP - 211001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Test Series Quick Access */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Programmes
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onOpenModal('UPSC Prelims Series')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  UPSC Prelims GS & CSAT Test Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('UPSC Mains Series')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  UPSC Mains Quality Enrichment Test Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('UPPCS Prelims Series')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  UPPCS Prelims & UP Special Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('UPPCS Mains Series')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  UPPCS Mains Answer Evaluation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('Current Affairs Test')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Monthly Current Affairs Tests
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpline */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Academic Helpline
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400 mb-5">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c28422]" />
                <span className="font-semibold text-white">{siteConfig.helpline}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {siteConfig.whatsapp}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c28422]" />
                <span>{siteConfig.email}</span>
              </p>
            </div>
            <button
              onClick={() => onOpenModal('Footer Callback CTA')}
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
            >
              Request Immediate Callback
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dhyeya IAS. All Rights Reserved. Designed for civil services test aspirants.</p>
          <div className="flex gap-4">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Test Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
