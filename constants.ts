
import { Course, Subscription } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    category: 'DEVELOPMENT',
    title: 'FULLSTACK MASTERY',
    description: 'Master the modern web from React to Node.js with real-world enterprise projects.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    duration: '12 WEEKS',
    level: 'PRO LEVEL',
    longDescription: 'Our Fullstack Mastery program is an intensive journey through the MERN stack. You will learn everything from database architecture with MongoDB to complex state management in React. We also cover modern DevOps practices including Docker and CI/CD pipelines.'
  },
  {
    id: '2',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'AI ENGINEERING',
    description: 'Learn to integrate LLMs, computer vision, and predictive analytics.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    duration: '16 WEEKS',
    level: 'ADVANCED',
    longDescription: 'Deep dive into neural networks, transformer architectures, and the mathematics of machine learning. Build production-ready AI applications.'
  },
  {
    id: '3',
    category: 'DESIGN',
    title: 'UX/UI ARCHITECTURE',
    description: 'Design beautiful, accessible, and high-converting digital products.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600',
    duration: '8 WEEKS',
    level: 'INTERMEDIATE',
    longDescription: 'Master the principles of user-centered design, information architecture, and high-fidelity prototyping using industry-standard tools.'
  },
  {
    id: '4',
    category: 'DATA SCIENCE',
    title: 'DATA INTELLIGENCE',
    description: 'Unlock insights in big data using Python, R, and Tableau.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600',
    duration: '10 WEEKS',
    level: 'PRO LEVEL',
    longDescription: 'Transform raw data into strategic assets. Learn statistical modeling, data visualization, and automated reporting systems.'
  }
];

export const SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'basic',
    name: 'Standard Access',
    price: 29,
    features: ['Access to 10+ courses', 'Course certificates', 'Community access']
  },
  {
    id: 'pro',
    name: 'Academy Pro',
    price: 79,
    features: ['Unlimited course access', 'Live mentorship', 'Lifetime updates', 'Job placement support']
  }
];
