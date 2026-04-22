import React from 'react';
import { Megaphone, Calendar, Sparkles, ChevronRight } from 'lucide-react';

const Announcements = () => {
  const news = [
    { 
      tag: "Camp", 
      title: "Summer Skills & Values Camp", 
      date: "July 2026",
      color: "bg-orange-50",
      accent: "text-orange-500",
      icon: <Megaphone className="w-5 h-5" />
    },
    { 
      tag: "Event", 
      title: "End of Year Showcase", 
      date: "Dec 15, 2026",
      color: "bg-sky-50",
      accent: "text-sky-500",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 mb-2">
        <Sparkles size={14} className="text-yellow-400 animate-spin-slow" /> What's Happening!
      </h3>
      
      {/* Stacked Banners */}
      <div className="flex flex-col gap-3">
        {news.map((item, idx) => (
          <div 
            key={idx} 
            className={`group flex items-center gap-4 ${item.color} p-4 rounded-2xl border border-black/5 hover:border-black/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
          >
            {/* Icon Strip */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${item.accent} group-hover:animate-bounce`}>
              {item.icon}
            </div>
            
            {/* Content Info */}
            <div className="flex-grow min-w-0">
              <span className={`block text-[8px] font-black uppercase tracking-widest ${item.accent}`}>
                {item.tag}
              </span>
              <h4 className="font-bold text-gray-800 text-[14px] truncate group-hover:text-black transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-1 text-gray-400 mt-0.5">
                <Calendar size={10} />
                <span className="text-[9px] font-bold uppercase">{item.date}</span>
              </div>
            </div>

            {/* Arrow/CTA */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-300 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
               <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;