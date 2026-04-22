import React from 'react';
import Announcements from './Announcements';

const HeroSection = ({ setIsFormOpen }) => {
  return (
    <div className="bg-[#fcfaf7] font-sans overflow-x-hidden selection:bg-[#0b2b26] selection:text-white">
      
      {/* HERO CONTENT SECTION */}
      <section className="relative min-h-screen flex flex-col items-center pt-44 lg:pt-52 pb-20 px-6 overflow-hidden">

        {/* HERO GRID */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* TEXT COLUMN */}
          <div className="text-left">
            <p className="text-[#0b2b26] uppercase tracking-[0.4em] text-[10px] font-black mb-6 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#d4af37]"></span> 
              Soli Deo Gloria
            </p>

            <h1 className="text-5xl md:text-8xl font-black text-[#0b2b26] leading-[0.9] tracking-tighter mb-8 uppercase">
              Faith. <br />
              <span className="text-[#d4af37]">Culture.</span> <br />
              Excellence.
            </h1>
            
            <p className="text-[#0b2b26]/70 text-base md:text-lg font-medium mb-10 max-w-md leading-relaxed italic">
              A space dedicated to inspire, uplift, and nurture the next generation through movement and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-black text-white px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-[#0b2b26] active:scale-95 shadow-xl"
              >
                Join The Academy
              </button>
            </div>

            {/* Announcements */}
            <div className="mt-12 max-w-sm">
                <Announcements />
            </div>
          </div>

          {/* IMAGE COLUMN WITH ARTISTIC QUOTE */}
          <div className="flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            {/* The Image Container */}
            <div className="relative flex justify-center transform scale-90 sm:scale-100 max-w-xl w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[1px] border-black/5 rounded-sm" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[8px] md:border-[12px] border-black/90 rounded-sm" />
              
              <div className="relative z-20 w-full transform hover:scale-105 transition-all duration-700">
                <img 
                  src="/kid.png" 
                  alt="KADA Student" 
                  className="w-full h-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>

            {/* ARTISTIC QUOTE SECTION */}
            <div className="mt-12 flex flex-col items-center lg:items-end">
              {/* Decorative Line */}
              <div className="w-16 h-[2px] bg-[#d4af37] mb-6 animate-pulse"></div>
              
              <p className="font-serif italic text-xl md:text-3xl text-[#0b2b26] leading-tight max-w-[320px] text-center lg:text-right">
                Empowering the next generation
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/50 mt-2">
                Through Dance & Creativity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="bg-white py-16 md:py-24 border-y border-black/5 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 text-center md:text-left">
              <div className="space-y-1">
                <h3 className="font-serif italic text-2xl md:text-4xl text-black/30 whitespace-nowrap">
                  "Uplift & Inspire"
                </h3>
                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-black/20">Our Heartbeat</p>
              </div>

              <div className="h-10 md:h-16 w-[1px] bg-black/10 hidden md:block"/>

              <p className="text-[#0b2b26] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] leading-loose max-w-[280px] md:max-w-sm">
                Nurturing generations with <br className="hidden md:block" />
                <span className="text-[#d4af37]">Afro-inspired dance</span> <br className="hidden md:block" />
                styles, culture, and values.
              </p>
          </div>
      </section>
    </div>
  );
};

export default HeroSection;