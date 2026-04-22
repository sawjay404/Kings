import React, { useState } from 'react';
import { Heart, Star, ChevronRight, Check } from 'lucide-react';

const SupportUs = () => {
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState(30);
  const [isCustom, setIsCustom] = useState(false);
  const [comment, setComment] = useState('');

  const amounts = [20, 30, 50, 100];

  const handleDonate = () => {
    // This function will connect to your Stripe Edge Function
    console.log(`Processing donation: £${amount} | Frequency: ${frequency} | Note: ${comment}`);
    alert(`Redirecting to payment for £${amount}...`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-emerald-950 mb-6">Support Our Mission</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Every child deserves the chance to dance! Your donation helps sponsor a child’s place at KADA, ensuring no one misses out. 
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Column: Featured Plan (The Gold Standard) */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full border-t-4 border-amber-500">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star size={150} />
            </div>
            <h3 className="text-xl font-bold mb-1 text-amber-500 uppercase tracking-widest">Most Popular</h3>
            <h4 className="text-3xl font-bold mb-6">Monthly Sustainer</h4>
            <div className="text-6xl font-extrabold mb-8">£25<span className="text-xl font-medium opacity-60">/mo</span></div>
            <ul className="space-y-4 mb-10 text-emerald-50">
              <li className="flex items-center gap-3"><Check className="text-amber-500" /> Sponsor a child's spot</li>
              <li className="flex items-center gap-3"><Check className="text-amber-500" /> Quarterly impact report</li>
              <li className="flex items-center gap-3"><Check className="text-amber-500" /> Annual show invitation</li>
            </ul>
            <button 
              onClick={() => { setAmount(25); setFrequency('monthly'); }}
              className="w-full py-4 bg-amber-500 text-emerald-950 font-black rounded-xl hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
            >
              Select Plan
            </button>
          </div>
        </div>

        {/* Right Column: Donation Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl"><Heart fill="currentColor" size={28} /></div>
            <h2 className="text-3xl font-bold text-emerald-950">Make a Donation</h2>
          </div>

          {/* Frequency Toggle */}
          <div className="grid grid-cols-3 gap-3 mb-10 bg-slate-100 p-1.5 rounded-2xl">
            {['one-time', 'monthly', 'yearly'].map((f) => (
              <button 
                key={f}
                onClick={() => setFrequency(f)}
                className={`py-3 px-6 rounded-xl capitalize font-bold transition-all duration-300 ${frequency === f ? 'bg-white shadow-md text-emerald-900' : 'text-slate-500 hover:text-emerald-900'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Amount Selection */}
          <div className="mb-10">
            <label className="block text-sm font-black text-emerald-950 uppercase tracking-wider mb-5">Select Amount</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {amounts.map((amt) => (
                <button 
                  key={amt}
                  onClick={() => { setAmount(amt); setIsCustom(false); }}
                  // ADDED: text-emerald-950 ensures visibility
                  className={`py-5 border-2 rounded-2xl font-bold text-xl transition-all duration-300 text-emerald-950 ${amount === amt && !isCustom ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-amber-300'}`}
                >
                  £{amt}
                </button>
              ))}
            </div>
            {/* ADDED: text-emerald-950 ensures visibility in the custom input */}
            <input 
              type="number" 
              placeholder="Or enter custom amount"
              value={amount}
              className="w-full p-5 border-2 border-slate-200 rounded-2xl focus:border-amber-500 outline-none font-bold text-lg text-emerald-950"
              onChange={(e) => { setAmount(Number(e.target.value)); setIsCustom(true); }}
            />
          </div>

          {/* Optional Comment */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">Comment (optional)</label>
            <textarea 
              maxLength={100}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-amber-500 outline-none resize-none text-emerald-950"
              rows={2}
            />
            <div className="text-right text-xs text-gray-400 mt-1">{comment.length}/100</div>
          </div>

          <button 
            onClick={handleDonate}
            className="w-full py-5 bg-emerald-950 text-white font-black rounded-2xl hover:bg-emerald-900 transition-all duration-300 flex items-center justify-center gap-3 text-xl shadow-lg"
          >
            Donate £{amount || 0} {frequency === 'monthly' ? 'Monthly' : ''} <ChevronRight size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportUs;