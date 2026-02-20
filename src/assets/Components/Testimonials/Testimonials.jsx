import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X, Send, ArrowRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Jersey City, NJ",
      text: "The best handyman service I've used. They fixed my leaky sink and installed custom shelving in one visit. Professional and spotless cleanup!",
      rating: 5
    },
    {
      name: "Mark Thompson",
      location: "Hoboken, NJ",
      text: "Extremely reliable. They mounted my 75-inch TV and hid all the wires perfectly. It looks like a showroom now. Highly recommend!",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      location: "Bayonne, NJ",
      text: "Found my go-to repair team. They were on time, transparent about the pricing, and the quality of work is elite.",
      rating: 5
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { type: "spring", damping: 25, stiffness: 120 } 
    }
  };

  return (
    <motion.section
      id="testimonials"
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      // Changed bg-slate-100 to bg-white
      className="relative w-full min-h-screen py-24 lg:py-32 bg-white overflow-hidden flex items-center justify-center px-6"
    >
      
      {/* --- BACKGROUND (CLEAN WHITE THEME) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Removed Orange Glow - Replaced with very soft Slate/Blue neutral blurs for depth */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-slate-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-slate-50/50 blur-[120px] rounded-full" />
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
        
        {/* Thin Inner Frame */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-slate-100 rounded-[4rem] pointer-events-none" />
      </div>

      {/* --- FORM MODAL (UNCHANGED) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl"
            >
              <button onClick={() => setIsFormOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={28} />
              </button>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase mb-2">Get Your <span className="text-orange-500">Quote</span></h2>
              <p className="text-slate-500 font-medium mb-8">Join our 5-star NJ customers today.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500/20 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500/20 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Project Details</label>
                  <textarea placeholder="How can we help?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl h-24 resize-none outline-none focus:ring-2 focus:ring-orange-500/20" />
                </div>
                <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 shadow-xl transition-all flex items-center justify-center gap-3 mt-4">
                  Send Quote Request <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <motion.div variants={itemVars} className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 backdrop-blur-md shadow-sm border border-slate-100 rounded-full w-fit">
            <ShieldCheck size={18} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">5-Star Verified Reviews</span>
          </motion.div>

          <motion.h2 variants={itemVars} className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
            Trusted by the <br /> <span className="text-orange-500 italic uppercase">Neighborhood.</span>
          </motion.h2>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={itemVars}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              // Background is now white with a cleaner shadow
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative group transition-all"
            >
              <Quote size={40} className="absolute top-8 right-10 text-slate-50 group-hover:text-orange-100 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f97316" className="text-orange-500" />
                ))}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight">{review.name}</h4>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          variants={itemVars}
          className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20"
        >
          {/* Subtle glow for the CTA card remains to make it pop from the white background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
          <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Ready to be our next <br /> <span className="text-orange-500 italic">Happy Customer?</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-12 py-6 bg-orange-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4"
            >
              Get Your Quote <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}