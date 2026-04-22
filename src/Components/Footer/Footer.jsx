import React from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, FileText, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b2b26] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        
        {/* NEWSLETTER COLUMN */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-black uppercase tracking-tight">Keep in Touch</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Stay updated with our latest dance workshops, student showcases, and academy news.
          </p>
          
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 w-full focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-white/30"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="accent-[#d4af37]" />
              <label htmlFor="newsletter" className="text-[10px] text-white/50 uppercase tracking-widest">
                Yes, subscribe me to your newsletter
              </label>
            </div>
            <button className="bg-[#d4af37] text-[#0b2b26] font-black uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95">
              Subscribe <Send size={14} />
            </button>
          </div>
        </div>

        {/* CONTACT COLUMN */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-black uppercase tracking-tight">Reach Us</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-[#d4af37] flex-shrink-0" size={20} />
              <div className="text-white/70 text-sm">
                <p className="font-bold text-white">North Birmingham Academy</p>
                <p>395 College Road</p>
                <p>Birmingham, B44 0HF</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <Mail className="text-[#d4af37]" size={20} />
              <span>info@kingsarkdance.com</span>
            </div>

            <div className="flex items-center gap-4 text-white/70 text-sm">
              <Phone className="text-[#d4af37]" size={20} />
              <span>+44 7535 897732</span>
            </div>
          </div>
        </div>

        {/* LEGAL LINKS COLUMN */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-black uppercase tracking-tight">Academy Policy</h3>
          <nav className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 text-white/60 hover:text-[#d4af37] transition-colors text-sm font-medium">
              <FileText size={16} /> Terms & Conditions
            </a>
            <a href="#" className="flex items-center gap-3 text-white/60 hover:text-[#d4af37] transition-colors text-sm font-medium">
              <Lock size={16} /> Privacy Policy
            </a>
            <a href="#" className="flex items-center gap-3 text-white/60 hover:text-[#d4af37] transition-colors text-sm font-medium">
              <ShieldCheck size={16} /> Child Protection Policy
            </a>
          </nav>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-[10px] uppercase tracking-[0.2em]">
        © 2026 King's Ark Dance Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;