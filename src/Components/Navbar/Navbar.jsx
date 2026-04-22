import React, { useState } from 'react';
import { Search, UserCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Added this

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // 2. Initialized navigation

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Support Us', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Classes', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const policyLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Safeguarding', href: '#' },
    { name: 'Child Protection', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top Banner - Solid Gold */}
      <div className="bg-[#d4af37] text-black text-[9px] md:text-xs py-2 text-center font-bold px-4 tracking-[0.2em] uppercase">
        Psalm 24:7-8 - Open up, Gates! Let the King of Glory in! Who is He? The Lord, Strong and Mighty in Battle
      </div>

      {/* Main Nav */}
      <nav className="bg-[#0b2b26] border-b border-white/10 px-6 py-4 flex items-center justify-between text-white transition-all duration-300">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-12 h-12 bg-white rounded-full p-1 border-2 border-[#d4af37] transition-transform group-hover:scale-110">
            <img src="/logo.jpg" alt="KADA Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <span className="hidden sm:block font-serif font-bold text-xl tracking-tighter text-white uppercase">KADA</span>
        </div>

        {/* Desktop Links (Center-Right) */}
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.25em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#d4af37] transition-all duration-300 relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Info Dropdown */}
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition-colors">
            Info <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            <div className="absolute top-full left-0 mt-4 w-56 bg-[#0b2b26] border border-white/10 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {policyLinks.map((policy) => (
                <a key={policy.name} href={policy.href} className="block px-6 py-2 text-white/60 hover:text-[#d4af37] hover:bg-white/5 text-[9px] tracking-widest transition-all">
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Action Section: Search + Members Login */}
        <div className="flex items-center gap-4 md:gap-6">
          <Search size={18} className="cursor-pointer hover:text-[#d4af37] transition-colors hidden sm:block" />
          
          {/* MEMBERS LOGIN - Clickable now */}
          <button 
            onClick={() => navigate('/user-login')} 
            className="flex items-center gap-2 bg-[#d4af37] text-black px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-lg shadow-black/20"
          >
            <UserCircle size={16} />
            <span className="hidden xs:inline">Members Login</span>
            <span className="xs:hidden">Login</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1 text-white hover:text-[#d4af37]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0b2b26] transition-transform duration-500 z-[-1] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif italic text-white hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="h-[1px] w-24 bg-[#d4af37]/30" />
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {policyLinks.map((policy) => (
              <a key={policy.name} href={policy.href} className="text-white/40 text-[9px] uppercase tracking-[0.2em] hover:text-[#d4af37]">
                {policy.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white/40 mb-4">
            <Search size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Search Academy</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;