import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  MapPin, 
  X, 
  Send, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { label: "Projects Done", value: "500+", icon: <CheckCircle2 className="text-orange-500" /> },
    { label: "Happy Clients", value: "100%", icon: <Users className="text-blue-500" /> },
    { label: "Response Time", value: "24h", icon: <Clock className="text-emerald-500" /> },
    { label: "NJ Counties", value: "5+", icon: <MapPin className="text-red-500" /> },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const revealItem = {
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
      id="about"
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full min-h-screen py-24 lg:py-0 bg-slate-100 overflow-hidden flex items-center justify-center px-6"
    >
      
      {/* --- BACKGROUND (CONSISTENT WITH SERVICES) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] bg-orange-300/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-slate-400/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[92%] border border-white/50 rounded-[4rem] pointer-events-none" />
      </div>

      {/* --- FORM MODAL (HOMEPAGE MATCH) --- */}
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
              <p className="text-slate-500 font-medium mb-8">Ready for professional home maintenance?</p>
              
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Service Required</label>
                  <textarea placeholder="Tell us about the project..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl h-24 resize-none outline-none focus:ring-2 focus:ring-orange-500/20" />
                </div>
                <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 shadow-xl transition-all flex items-center justify-center gap-3 mt-4">
                  Send Quote Request <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: CONTENT --- */}
        <div className="space-y-8">
          <motion.div variants={revealItem} className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md shadow-sm border border-white rounded-full w-fit">
            <ShieldCheck size={18} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">About Our Company</span>
          </motion.div>

          <motion.h2 variants={revealItem} className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
            The Gold <br /> <span className="text-orange-500 italic uppercase">Standard.</span>
          </motion.h2>

          <motion.p variants={revealItem} className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
            Based in New Jersey, we provide premium handyman services for homeowners who value precision, cleanliness, and reliability. From small repairs to smart home upgrades, we treat every house like our own.
          </motion.p>

          <motion.div variants={revealItem} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {stat.icon}
                  <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={revealItem}
            onClick={() => setIsFormOpen(true)}
            className="w-fit px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-orange-600 transition-all flex items-center gap-4"
          >
            Work With Us <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* --- RIGHT: VISUAL ELEMENT --- */}
        <motion.div variants={revealItem} className="relative group">
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[4rem] blur-2xl group-hover:bg-orange-500/20 transition-all" />
          <div className="relative bg-slate-900 rounded-[4rem] p-12 lg:p-20 overflow-hidden shadow-2xl">
             {/* Decorative Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full" />
            
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-500"></span> 
              Our Mission
            </h3>
            <p className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-tight italic">
              "To provide <span className="text-orange-500">stress-free</span> home maintenance so you can focus on what matters most."
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {['Licensed', 'Insured', 'NJ Local', 'Expert'].map((tag) => (
                <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}