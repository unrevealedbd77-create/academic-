
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, isLoggedIn, isAdmin, onLogout }) => {
  const navItems: { label: string; view: View }[] = [
    { label: 'HOME', view: 'home' },
    { label: 'COURSES', view: 'courses' },
    { label: 'PLATFORM', view: 'platform' },
    { label: 'SUBSCRIPTIONS', view: 'subscriptions' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="dipto-logo text-2xl font-black cursor-pointer bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent"
          onClick={() => onViewChange('home')}
        >
          DIPTO
        </div>
        
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onViewChange(item.view)}
              className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${
                currentView === item.view ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          {isAdmin && (
            <button
              onClick={() => onViewChange('admin')}
              className={`text-xs font-black tracking-[0.2em] transition-colors duration-300 ${
                currentView === 'admin' ? 'text-red-500' : 'text-red-600 hover:text-red-500'
              }`}
            >
              ADMIN
            </button>
          )}
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <button 
                onClick={onLogout}
                className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-red-500 transition-colors uppercase"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <button 
              onClick={() => onViewChange('login')}
              className={`text-[10px] font-bold tracking-[0.2em] px-6 py-2 border border-red-500/50 hover:bg-red-500 hover:text-white transition-all duration-300 ${
                currentView === 'login' ? 'bg-red-500 text-white' : 'text-red-500'
              }`}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
