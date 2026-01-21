import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import CourseDetailModal from './components/CourseDetailModal';
import Checkout from './components/Checkout';
import Platform from './components/Platform';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import { COURSES } from './constants';
import { Course, View } from './types';

const STORAGE_KEYS = {
  COURSES: 'dipto_courses_v3',
  STUDENTS: 'dipto_students_v3',
  NOTIFICATIONS: 'dipto_notifications_v3',
  USER: 'dipto_current_user',
  IS_ADMIN: 'dipto_is_admin'
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Platform Global States
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
    return saved ? JSON.parse(saved) : COURSES;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    return saved ? JSON.parse(saved) : [
      { id: 'ST-001', name: 'Alex Thompson', email: 'alex@unit.net', status: 'ACTIVE', progress: '85%', joined: '2025-01-12' },
      { id: 'ST-002', name: 'Sarah Miller', email: 'sarah.m@dev.io', status: 'ACTIVE', progress: '42%', joined: '2025-02-05' },
    ];
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
    return saved ? JSON.parse(saved) : [
      { id: '1', type: 'purchase', title: 'NEW PURCHASE', message: 'User diptoislam2006@gmail.com purchased AI Engineering.', time: '2m ago', read: false },
    ];
  });

  const [user, setUser] = useState<string | null>(localStorage.getItem(STORAGE_KEYS.USER));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem(STORAGE_KEYS.IS_ADMIN) === 'true');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }, [courses, students, notifications]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnrollTrigger = (course: Course) => {
    setSelectedCourse(course);
    if (!user) {
      setCurrentView('login');
      return;
    }
    setCurrentView('checkout');
  };

  const handleCompletePurchase = () => {
    const newNotif = {
      id: Date.now().toString(),
      type: 'purchase',
      title: 'NEW ENROLLMENT',
      message: `${user} enrolled in ${selectedCourse?.title}`,
      time: 'Just now',
      read: false
    };
    setNotifications([newNotif, ...notifications]);
    alert("Enrollment successful!");
    setCurrentView('home');
    setSelectedCourse(null);
  };

  const handleLoginSuccess = (email: string, isAdminStatus: boolean) => {
    setUser(email);
    setIsAdmin(isAdminStatus);
    localStorage.setItem(STORAGE_KEYS.USER, email);
    localStorage.setItem(STORAGE_KEYS.IS_ADMIN, String(isAdminStatus));
    setCurrentView(isAdminStatus ? 'admin' : 'home');
  };

  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
    setCurrentView('home');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[200]">
        <div className="dipto-logo text-6xl font-black bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent animate-pulse">
          DIPTO
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isLoggedIn={!!user} 
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />

      <main>
        {currentView === 'home' && (
          <>
            <Hero onExplore={setCurrentView} />
            <section className="py-24 bg-white text-black">
              <div className="max-w-7xl mx-auto px-6">
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.slice(0, 4).map(course => (
                      <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
                    ))}
                 </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'courses' && (
          <section className="pt-40 pb-32 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-7xl font-black mb-20 tracking-tighter uppercase">ACADEMY DIRECTORY</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
                ))}
              </div>
            </div>
          </section>
        )}

        {currentView === 'platform' && <Platform />}
        {currentView === 'subscriptions' && <Subscriptions />}
        {currentView === 'login' && <Login onLoginSuccess={handleLoginSuccess} onViewChange={setCurrentView} selectedCourse={selectedCourse} />}
        {currentView === 'register' && <Register onRegisterSuccess={handleLoginSuccess} onViewChange={setCurrentView} selectedCourse={selectedCourse} />}
        {currentView === 'admin' && isAdmin && (
          <AdminPanel 
            courses={courses} 
            setCourses={setCourses} 
            students={students} 
            setStudents={setStudents}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        )}
        {currentView === 'checkout' && selectedCourse && (
          <Checkout course={selectedCourse} onComplete={handleCompletePurchase} onCancel={() => setCurrentView('courses')} />
        )}
      </main>

      {currentView !== 'checkout' && <Footer />}
      {selectedCourse && !['checkout', 'admin', 'login', 'register'].includes(currentView) && (
        <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} onEnroll={handleEnrollTrigger} />
      )}
    </div>
  );
};

export default App;