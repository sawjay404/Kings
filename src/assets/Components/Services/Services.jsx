import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, Lightbulb, Hammer, 
  ArrowRight, ShieldCheck, Zap, Droplets,
  Box, Tv, Layout, PaintBucket, X, Send 
} from "lucide-react";

export default function Services() {
  // Local state to handle the popup within this specific component
  const [isFormOpen, setIsFormOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1,
      }
    }
  };

  const revealItem = {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 120 
      } 
    }
  };

  const mainServices = [
    { title: "Plumbing", icon: <Droplets size={24} />, desc: "Leaks, Faucets & Toilets" },
    { title: "Electrical", icon: <Zap size={24} />, desc: "Lights, Fans & Smart Home" },
    { title: "Carpentry", icon: <Hammer size={24} />, desc: "Shelving, Trim & Repairs" },
  ];

  const quickTasks = [
    { name: "TV Mounting", icon: <Tv size={16} /> },
    { name: "Furniture", icon: <Box size={16} /> },
    { name: "Drywall", icon: <Layout size={16} /> },
    { name: "Painting", icon: <PaintBucket size={16} /> },
  ];

  return (
    <motion.div 
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full min-h-screen lg:h-screen bg-slate-100 overflow-hidden flex items-center justify-center pt-32 pb-20 lg:pt-0 lg:pb-0 px-6"
    >
      
      {/* --- POPUP FORM MODAL (MATCHING HOMEPAGE STYLE) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 lg:p-6">
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
                <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all flex items-center justify-center gap-3 mt-4">
                  Send Quote Request <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-orange-300/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-slate-400/40 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] border border-white/50 rounded-[4rem] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <motion.div 
            variants={revealItem}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md shadow-sm border border-white rounded-full w-fit"
          >
            <ShieldCheck size={18} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Professional NJ Handyman</span>
          </motion.div>

          <motion.h1 
            variants={revealItem}
            className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.8] uppercase"
          >
            Elite <br />
            <span className="text-orange-500 italic uppercase">Service.</span>
          </motion.h1>

          <motion.p 
            variants={revealItem}
            className="text-slate-500 text-xl font-medium max-w-sm leading-relaxed"
          >
            We handle the technical repairs and small home improvements so you don't have to.
          </motion.p>

          <motion.button 
            variants={revealItem}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsFormOpen(true)}
            className="w-fit px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-orange-600 transition-all flex items-center gap-4"
          >
            Start Your Project <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mainServices.map((s, i) => (
              <motion.div 
                key={i}
                variants={revealItem}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group transition-all"
              >
                <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors shadow-lg">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">{s.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={revealItem}
            className="bg-slate-900 rounded-[3.5rem] p-10 relative overflow-hidden flex flex-col justify-center shadow-2xl shadow-slate-900/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
            
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-500"></span> 
              Popular Maintenance Tasks
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {quickTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                  <div className="text-orange-500">{task.icon}</div>
                  <span className="text-white font-bold uppercase tracking-tight text-xs">{task.name}</span>
                </div>
              ))}
            </div>
            
            <p className="text-slate-500 text-[10px] mt-8 font-bold uppercase tracking-[0.2em]">
              Licensed • Insured • NJ Local
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}