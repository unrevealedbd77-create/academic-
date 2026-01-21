
import React from 'react';

const Platform: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 bg-red-600/10 border border-red-500/30 text-[10px] font-bold text-red-500 tracking-[0.4em] uppercase mb-6">
            INFRASTRUCTURE EXCELLENCE
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            DIPTO PLATFORM<br />ARCHITECTURE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white group-hover:text-red-500 transition-colors uppercase">
              ULTRA-LOW LATENCY LMS
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Built on global edge nodes for instant video streaming and real-time interactive coding environments. No buffering, no delays.
            </p>
          </div>
          
          <div className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white group-hover:text-red-500 transition-colors uppercase">
              AI-DRIVEN PROGRESSION
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Our neural learning algorithm tracks your mastery in real-time, personalizing your curriculum based on performance data.
            </p>
          </div>
        </div>

        {/* Decorative Grid Element */}
        <div className="mt-32 relative h-96 w-full border border-red-900/20 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative text-[20vw] font-black text-white/[0.02] select-none uppercase tracking-tighter">
                DIPTO.NET
            </div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent top-1/2" />
            <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent left-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Platform;
