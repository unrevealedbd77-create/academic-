
import React from 'react';
import { SUBSCRIPTIONS } from '../constants';

const Subscriptions: React.FC = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <div className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase mb-6">MEMBERSHIP TIERS</div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            ACADEMY<br />SUBSCRIPTIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SUBSCRIPTIONS.map((plan) => (
            <div 
              key={plan.id}
              className={`p-16 border ${plan.id === 'pro' ? 'border-red-500' : 'border-white/10'} bg-[#050505] flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-3xl font-black mb-12 tracking-tight uppercase">{plan.name}</h3>
                <div className="mb-12">
                  <span className="text-6xl font-black">${plan.price}</span>
                  <span className="text-gray-500 font-bold text-sm tracking-widest ml-4">/ MO</span>
                </div>
                <ul className="space-y-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-4 text-gray-400 font-medium">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      <span className="text-sm uppercase tracking-wider">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`mt-16 py-6 font-black text-xs tracking-[0.3em] uppercase transition-all duration-300 ${
                plan.id === 'pro' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-gray-200'
              }`}>
                SUBSCRIBE NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
