
import React from 'react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnroll }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-red-900/30 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto md:overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
          </div>

          <div className="p-8 md:p-12">
            <div className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              COURSE SPECIALIZATION
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
              {course.title}
            </h2>
            
            <div className="flex items-center space-x-8 mb-12">
              <div className="text-2xl font-black text-white">${course.price}</div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                {course.category}
              </div>
            </div>

            <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed font-light">
              {course.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="p-6 border border-white/5 bg-white/[0.02]">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">DURATION</div>
                <div className="text-sm font-black uppercase">{course.duration}</div>
              </div>
              <div className="p-6 border border-white/5 bg-white/[0.02]">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">LEVEL</div>
                <div className="text-sm font-black uppercase">{course.level}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onEnroll(course)}
                className="flex-1 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-widest transition-all uppercase"
              >
                BUY NOW
              </button>
              <button className="px-8 py-5 border border-white/10 hover:bg-white/5 text-white font-black text-xs tracking-widest transition-all uppercase">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;
