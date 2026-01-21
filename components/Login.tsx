
import React, { useState } from 'react';
import { View, Course } from '../types';

interface LoginProps {
  onLoginSuccess: (email: string, isAdmin: boolean) => void;
  onViewChange: (view: View) => void;
  selectedCourse?: Course | null;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onViewChange, selectedCourse }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Admin Credentials as requested:
    // Email: diptoislam2006@gmail.com
    // Password: password@12345@+
    
    setTimeout(() => {
      setIsSubmitting(false);
      const isAdmin = email === 'diptoislam2006@gmail.com' && password === 'password@12345@+';
      onLoginSuccess(email, isAdmin);
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-md p-8 bg-[#050505] border border-white/5 shadow-2xl animate-fade-in">
        <div className="text-center mb-10">
          <div className="dipto-logo text-4xl font-black mb-4 bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent">
            DIPTO
          </div>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">AUTHENTICATION GATEWAY</div>
          {selectedCourse && (
            <div className="mt-6 p-4 border border-red-500/20 bg-red-500/5">
              <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">LOGIN TO FINALIZE PURCHASE</p>
              <p className="text-xs text-white font-black mt-1 uppercase">{selectedCourse.title}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">EMAIL ADDRESS</label>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operator@dipto.net" 
              className="w-full bg-black border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors uppercase font-medium placeholder:text-gray-800"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">PASSWORD</label>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-black border border-white/10 p-4 text-sm focus:outline-none focus:border-red-500 transition-colors font-medium placeholder:text-gray-800"
            />
          </div>

          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-[0.3em] uppercase transition-all relative overflow-hidden group"
          >
            {isSubmitting ? <span className="animate-pulse">SYNCHRONIZING...</span> : "LOGIN"}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            NEW UNIT? <button onClick={() => onViewChange('register')} className="text-white hover:text-red-500 transition-colors ml-1 font-black">CREATE ACCOUNT</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
