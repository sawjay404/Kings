import React from 'react';
import { BookOpen, HandCoins, ArrowRight } from 'lucide-react';

const Classes = () => {
  const classList = [
    {
      id: 1,
      image: "/kids.jpg", // Ensure this image exists in your public folder
      range: "5-10",
      title: "Kids Dance Classes",
      location: "Birmingham",
      description: "Foundational movement, rhythm, and confidence building for our youngest dancers."
    },
    {
      id: 2,
      image: "/teens.jpg", // Ensure this image exists in your public folder
      range: "11-16",
      title: "Youth Dance Classes",
      location: "Birmingham",
      description: "Developing technique, artistry, and performance skills for the next generation."
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf7] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#0b2b26] uppercase tracking-tighter mb-4">
            Our Classes
          </h2>
          <div className="w-20 h-1 bg-[#d4af37]"></div>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {classList.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl border border-black/5 shadow-xl shadow-black/5 hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden group"
            >
              {/* IMAGE SECTION */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Age Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0b2b26]">
                  Ages {item.range}
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#0b2b26] mb-2">{item.title}</h3>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">{item.location}</p>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Pay What You Can Badge */}
                <div className="mb-8 p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-amber-500">
                      <HandCoins size={16} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-amber-700">
                    Flexible Tuition: Pay What You Can
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#0b2b26] hover:text-[#d4af37] transition-colors">
                    Read More <BookOpen size={14} />
                  </button>
                  <button className="flex-grow bg-black text-white py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#0b2b26] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;