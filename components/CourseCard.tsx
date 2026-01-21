
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-red-500/50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/80 backdrop-blur border border-red-500/30 text-[10px] font-bold text-red-500 tracking-widest uppercase">
            {course.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-black mb-4 tracking-tight group-hover:text-red-500 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="text-lg font-black">${course.price}</div>
          <button 
            onClick={() => onSelect(course)}
            className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-red-500 transition-colors"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
