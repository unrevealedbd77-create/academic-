
import React, { useState } from 'react';
import { Course } from '../types';

interface CheckoutModalProps {
  course: Course;
  onClose: () => void;
  onComplete: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ course, onClose, onComplete }) => {
  const [method, setMethod] = useState<'card' | 'paypal' | 'crypto'>('card');

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#111] border border-white/10 overflow-hidden rounded-sm animate-fade-in shadow-2xl">
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <h3 className="font-black text-sm tracking-widest uppercase">SECURE PAYMENT</h3>
          <button onClick={onClose} className="text-white hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="flex space-x-2 mb-8">
            {(['card', 'paypal', 'crypto'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${
                  method === m ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/30'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">ACCOUNT HOLDER</label>
              <input type="text" placeholder="JOHN DOE" className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors uppercase font-medium" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">CARD NUMBER</label>
              <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors font-medium" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">EXPIRY DATE</label>
                <input type="text" placeholder="MM / YY" className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">CVC</label>
                <input type="text" placeholder="123" className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors font-medium" />
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">TOTAL PAYMENT</div>
              <div className="text-3xl font-black">${course.price}</div>
            </div>
            <button 
              onClick={onComplete}
              className="px-8 py-4 bg-white text-black font-black text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              COMPLETE PURCHASE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
