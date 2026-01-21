
import React from 'react';
import { View } from '../types';

interface HeroProps {
  onExplore: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech background" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-xs font-bold tracking-[0.4em] text-red-500">NEXT-GEN EDUCATION</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
            EMPOWER<br />
            YOUR <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-700">DIPTO</span><br />
            FUTURE
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg mb-12 leading-relaxed font-light">
            ACCESS PREMIUM DIGITAL COURSES CURATED BY INDUSTRY LEADERS. 
            MASTER AI, DEVELOPMENT, AND DESIGN WITH PRECISION.
          </p>
          
          <button 
            onClick={() => onExplore('courses')}
            className="group relative px-10 py-5 bg-red-600 overflow-hidden transition-all hover:bg-red-700"
          >
            <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            <span className="relative text-sm font-bold tracking-widest">EXPLORE COURSES</span>
          </button>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute -top-10 -right-10 p-6 bg-black/40 backdrop-blur-xl border border-red-500/30 rounded-lg z-20">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-black text-red-500">72,000+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">Graduated<br />Digital<br />Students</div>
            </div>
          </div>
          
          <div className="relative p-2 border border-red-900/20 rounded-2xl">
             <img 
               src="https://images.unsplash.com/photo-1522071823991-b51c1747c3b6?auto=format&fit=crop&q=80&w=800" 
               alt="Digital student" 
               className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 brightness-75 hover:brightness-100"
             />
             <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
