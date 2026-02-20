import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import {
  ClipboardCheck,
  CalendarDays,
  Hammer,
  BadgeCheck,
  ArrowRight,
  X,
  Send // Added for the form
} from "lucide-react";

export default function Portfolio() {
  // Local state for the popup
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fastReveal = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const steps = [
    {
      id: "01",
      title: "Request Quote",
      desc: "Tell us about your NJ home project through our simple online form.",
      icon: <ClipboardCheck size={32} className="text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: "02",
      title: "Get Scheduled",
      desc: "We provide a transparent estimate and pick a time that fits your life.",
      icon: <CalendarDays size={32} className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      id: "03",
      title: "Expert Repair",
      desc: "Our licensed pros handle the work with precision and clean up after.",
      icon: <Hammer size={32} className="text-slate-900" />,
      color: "bg-slate-100"
    },
    {
      id: "04",
      title: "Final Approval",
      desc: "You review the work. We only finish when you are 100% satisfied.",
      icon: <BadgeCheck size={32} className="text-emerald-500" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <motion.section
      id="howitworks"
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full min-h-screen lg:min-h-screen flex items-center bg-white overflow-hidden py-24 lg:py-32 px-6"
    >
      {/* --- POPUP FORM MODAL (HOMEPAGE STYLE) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={28} />
              </button>

              <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase mb-2">
                Get Your <span className="text-orange-500">Quote</span>
              </h2>
              <p className="text-slate-500 font-medium mb-8">Fill in the details for your NJ home project.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Location</label>
                    <input type="text" placeholder="Jersey City" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Address</label>
                    <input type="text" placeholder="123 Main St" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                  </div>
                </div>
                <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 shadow-xl transition-all flex items-center justify-center gap-3 mt-4">
                  Send Quote Request <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div variants={fastReveal} className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-4">
              Simple 4-Step Process
            </h2>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              How we get the <br />
              <span className="text-slate-400 italic">Job Done.</span>
            </h1>
          </motion.div>
          
          <motion.button
            variants={fastReveal}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)} // Connected to local state
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-900 hover:text-orange-600 transition-colors"
          >
            Start step one <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fastReveal}
              className="relative group"
            >
              <span className="absolute -top-10 -left-4 text-9xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                {step.id}
              </span>

              <div className="relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-orange-200/20 transition-all h-full flex flex-col">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                  <span className="text-orange-500 mr-2">{step.id}.</span>
                  {step.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          variants={fastReveal}
          className="mt-20 p-10 lg:p-16 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
          <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-6">
            Ready to experience <span className="text-orange-500">Elite</span> home care?
          </h3>
          <button
            onClick={() => setIsFormOpen(true)} // Connected to local state
            className="px-12 py-6 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-500 hover:text-white transition-all shadow-xl"
          >
            Get My Free Estimate
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}