
import React, { useState } from 'react';
import { Course, View } from '../types';

interface CheckoutProps {
  course: Course;
  onComplete: () => void;
  onCancel: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ course, onComplete, onCancel }) => {
  const [method, setMethod] = useState<'card' | 'paypal' | 'crypto'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Left: Course Summary */}
        <div className="animate-fade-in">
          <button 
            onClick={onCancel}
            className="flex items-center space-x-2 text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest mb-12 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>BACK TO ACADEMY</span>
          </button>

          <div className="text-red-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">INVOICE ITEM #2941</div>
          <h2 className="text-5xl font-black tracking-tighter uppercase leading-none mb-12">
            ORDER<br />SUMMARY
          </h2>

          <div className="p-8 border border-white/5 bg-white/[0.02] flex space-x-8 items-center mb-12">
            <img src={course.image} className="w-32 h-32 object-cover grayscale brightness-50 border border-white/10" />
            <div>
              <div className="text-red-500 text-[8px] font-bold tracking-widest mb-1 uppercase">{course.category}</div>
              <div className="text-2xl font-black text-white uppercase tracking-tighter">{course.title}</div>
              <div className="text-xs text-gray-400 font-bold tracking-widest uppercase mt-2">{course.duration} | {course.level}</div>
            </div>
          </div>

          <div className="space-y-6 border-t border-white/5 pt-12">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">SUBTOTAL</span>
              <span className="text-lg font-black text-white">${course.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">PLATFORM TAX (0%)</span>
              <span className="text-lg font-black text-white">$0.00</span>
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-white/5">
              <span className="text-xs font-black text-white uppercase tracking-widest">TOTAL AMOUNT DUE</span>
              <span className="text-4xl font-black text-red-500">${course.price}</span>
            </div>
          </div>

          <div className="mt-12 p-6 border border-red-500/20 bg-red-500/5 flex items-start space-x-4">
            <div className="text-xl">🛡️</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
              ENCRYPTED 256-BIT SECURE TRANSACTION. YOUR ACCESS WILL BE INITIALIZED IMMEDIATELY UPON PAYMENT VERIFICATION.
            </div>
          </div>
        </div>

        {/* Right: Payment Form */}
        <div className="bg-[#050505] border border-white/5 p-12 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4">
             <div className="text-[8px] font-black text-green-500 uppercase tracking-widest">SSL SECURE ●</div>
          </div>
          
          <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-12 border-b border-white/5 pb-4">CHOOSE PAYMENT GATEWAY</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-12">
            {(['card', 'paypal', 'crypto'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`py-4 text-[10px] font-black uppercase tracking-widest border transition-all ${
                  method === m ? 'bg-red-600 text-white border-red-600' : 'border-white/10 text-gray-500 hover:border-white/30'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <form onSubmit={handlePay} className="space-y-8">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">UNIT OPERATOR NAME</label>
              <input 
                required
                type="text" 
                placeholder="FULL LEGAL NAME" 
                className="w-full bg-black border border-white/10 p-5 text-xs focus:outline-none focus:border-red-500 transition-colors uppercase font-black placeholder:text-gray-800" 
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">IDENTIFICATION NUMBER / CARD</label>
              <input 
                required
                type="text" 
                placeholder="0000 0000 0000 0000" 
                className="w-full bg-black border border-white/10 p-5 text-xs focus:outline-none focus:border-red-500 transition-colors font-black placeholder:text-gray-800" 
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">VALID THRU</label>
                <input 
                  required
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-full bg-black border border-white/10 p-5 text-xs focus:outline-none focus:border-red-500 transition-colors font-black placeholder:text-gray-800" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">SECURITY CODE</label>
                <input 
                  required
                  type="password" 
                  placeholder="***" 
                  className="w-full bg-black border border-white/10 p-5 text-xs focus:outline-none focus:border-red-500 transition-colors font-black placeholder:text-gray-800" 
                />
              </div>
            </div>

            <div className="pt-8">
              <button 
                disabled={isProcessing}
                type="submit"
                className="w-full py-6 bg-white text-black font-black text-sm tracking-[0.4em] uppercase transition-all duration-300 hover:bg-red-600 hover:text-white relative overflow-hidden group"
              >
                {isProcessing ? (
                  <span className="animate-pulse">VERIFYING TRANSACTION...</span>
                ) : (
                  <>
                    <span className="relative z-10">AUTHORIZE PAYMENT</span>
                    <div className="absolute inset-0 bg-red-700 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
