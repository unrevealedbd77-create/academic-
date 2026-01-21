
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="dipto-logo text-4xl font-black mb-8 bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent">
              DIPTO
            </div>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Advancing the next generation of digital architects, engineers, and creative thinkers through world-class interactive education.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-8">CATEGORIES</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-red-500 transition-colors">DEVELOPMENT</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-red-500 transition-colors">AI & ML</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-red-500 transition-colors">DESIGN</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-red-500 transition-colors">CYBERSECURITY</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-8">UPDATES</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-black border border-white/10 px-4 py-3 text-xs w-full focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 px-6 font-black text-[10px] tracking-widest hover:bg-red-700 transition-colors">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">
            © 2025 DIPTO ACADEMY. ALL SYSTEM RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] font-bold text-gray-600 hover:text-white tracking-widest uppercase">TERMS</a>
            <a href="#" className="text-[10px] font-bold text-gray-600 hover:text-white tracking-widest uppercase">PRIVACY</a>
            <a href="#" className="text-[10px] font-bold text-gray-600 hover:text-white tracking-widest uppercase">SECURITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
