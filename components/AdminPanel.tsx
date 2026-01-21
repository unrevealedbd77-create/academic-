import React, { useState } from 'react';
import { Course } from '../types';

const SECTIONS = [
  { id: 'dashboard', label: '1. Admin Dashboard (Platform Overview)', icon: '📊' },
  { id: 'courses', label: '2. Course Management', icon: '📚' },
  { id: 'curriculum', label: '3. Lesson & Curriculum Builder', icon: '🏗️' },
  { id: 'media', label: '4. Video & Media Management', icon: '🎬' },
  { id: 'students', label: '5. Student Management', icon: '👥' },
  { id: 'instructors', label: '6. Instructor / Teacher Management', icon: '👨‍🏫' },
  { id: 'enrollment', label: '7. Enrollment & Access Control', icon: '🛡️' },
  { id: 'quizzes', label: '8. Quizzes, Exams & Assignments', icon: '📝' },
  { id: 'certs', label: '9. Certification Management', icon: '📜' },
  { id: 'payments', label: '10. Payments & Monetization', icon: '💰' },
  { id: 'marketing', label: '11. Marketing & Growth Tools', icon: '🚀' },
  { id: 'feedback', label: '12. Reviews, Feedback & Community', icon: '💬' },
  { id: 'analytics', label: '13. Analytics & Reporting', icon: '📈' },
  { id: 'notifications', label: '14. Notifications & Communication', icon: '🔔' },
  { id: 'cms', label: '15. CMS & Page Management', icon: '🖥️' },
  { id: 'roles', label: '16. User Roles & Permissions', icon: '🔑' },
];

interface AdminPanelProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  students: any[];
  setStudents: React.Dispatch<React.SetStateAction<any[]>>;
  notifications: any[];
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  courses, setCourses, 
  students, setStudents, 
  notifications, setNotifications 
}) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Course Management
  const handleSaveCourse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedCourse: Course = {
      id: editingCourse?.id || Date.now().toString(),
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      longDescription: formData.get('longDescription') as string,
      price: parseFloat(formData.get('price') as string),
      image: formData.get('image') as string || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      duration: formData.get('duration') as string || '8 WEEKS',
      level: formData.get('level') as string || 'PRO LEVEL',
    };

    if (editingCourse) {
      setCourses(courses.map(c => c.id === editingCourse.id ? updatedCourse : c));
    } else {
      setCourses([updatedCourse, ...courses]);
    }
    setEditingCourse(null);
    setIsAddingCourse(false);
  };

  const deleteCourse = (id: string) => {
    if (confirm('Permanently delete this course?')) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div className="p-8 border border-white/10 bg-white/[0.02]">
        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">ACTIVE COURSES</div>
        <div className="text-4xl font-black">{courses.length}</div>
      </div>
      <div className="p-8 border border-white/10 bg-white/[0.02]">
        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">TOTAL STUDENTS</div>
        <div className="text-4xl font-black">{students.length}</div>
      </div>
      <div className="p-8 border border-white/10 bg-white/[0.02]">
        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">REVENUE</div>
        <div className="text-4xl font-black text-green-500">${(students.length * 49.99).toFixed(2)}</div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <input 
          type="text" 
          placeholder="FILTER ASSETS..." 
          className="bg-black border border-white/10 p-3 text-[10px] tracking-widest w-full max-w-sm font-bold uppercase"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setIsAddingCourse(true)} className="px-6 py-3 bg-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-700">
          ADD NEW COURSE +
        </button>
      </div>

      <div className="grid gap-4">
        {courses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())).map(course => (
          <div key={course.id} className="p-6 border border-white/5 bg-white/[0.01] flex items-center justify-between group">
            <div className="flex items-center space-x-6">
              <img src={course.image} className="w-16 h-16 object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all" />
              <div>
                <div className="text-red-500 text-[8px] font-bold uppercase">{course.category}</div>
                <div className="text-xl font-black uppercase tracking-tighter">{course.title}</div>
              </div>
            </div>
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setEditingCourse(course)} className="px-4 py-2 border border-white/10 text-[8px] font-black uppercase hover:bg-white hover:text-black transition-colors">EDIT</button>
              <button onClick={() => deleteCourse(course.id)} className="px-4 py-2 border border-red-500/20 text-[8px] font-black text-red-500 uppercase hover:bg-red-600 hover:text-white transition-colors">DELETE</button>
            </div>
          </div>
        ))}
      </div>

      {(isAddingCourse || editingCourse) && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
          <div className="bg-[#050505] border border-red-500/30 p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-black mb-8 uppercase text-red-500 tracking-tighter">
              {editingCourse ? 'RECONFIGURE ASSET' : 'INITIALIZE ASSET'}
            </h3>
            <form onSubmit={handleSaveCourse} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input name="title" required placeholder="TITLE" defaultValue={editingCourse?.title} className="bg-black border border-white/10 p-4 text-xs font-bold uppercase outline-none focus:border-red-500" />
                <input name="category" required placeholder="CATEGORY" defaultValue={editingCourse?.category} className="bg-black border border-white/10 p-4 text-xs font-bold uppercase outline-none focus:border-red-500" />
              </div>
              <input name="description" required placeholder="SHORT DESCRIPTION" defaultValue={editingCourse?.description} className="w-full bg-black border border-white/10 p-4 text-xs font-bold outline-none focus:border-red-500" />
              <textarea name="longDescription" rows={4} required placeholder="LONG DESCRIPTION" defaultValue={editingCourse?.longDescription} className="w-full bg-black border border-white/10 p-4 text-xs font-medium outline-none focus:border-red-500" />
              <div className="grid grid-cols-2 gap-4">
                <input name="price" type="number" required placeholder="PRICE ($)" defaultValue={editingCourse?.price} className="bg-black border border-white/10 p-4 text-xs font-bold outline-none focus:border-red-500" />
                <input name="image" placeholder="IMAGE URL" defaultValue={editingCourse?.image} className="bg-black border border-white/10 p-4 text-xs font-bold outline-none focus:border-red-500" />
              </div>
              <div className="flex space-x-4 pt-4">
                <button type="submit" className="flex-1 bg-red-600 py-4 text-[10px] font-black uppercase tracking-widest">SAVE SYSTEM ASSET</button>
                <button type="button" onClick={() => { setIsAddingCourse(false); setEditingCourse(null); }} className="px-8 border border-white/10 text-[10px] font-black uppercase">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-[#050505] border border-white/5 p-8">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">GLOBAL BROADCAST</h3>
        <div className="flex space-x-4">
          <input id="broadcastInput" type="text" placeholder="MESSAGE..." className="flex-1 bg-black border border-white/10 p-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-red-500" />
          <button 
            onClick={() => {
              const input = document.getElementById('broadcastInput') as HTMLInputElement;
              if (input.value) {
                setNotifications([{ id: Date.now().toString(), type: 'system', title: 'ADMIN ANNOUNCEMENT', message: input.value, time: 'Just now', read: false }, ...notifications]);
                input.value = '';
                alert('Broadcast initialized.');
              }
            }}
            className="px-8 bg-red-600 text-[10px] font-black uppercase tracking-widest"
          >
            SEND
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {notifications.map(n => (
          <div key={n.id} className="p-6 border border-white/5 bg-white/[0.01] flex justify-between items-center group">
             <div>
               <div className="text-[10px] font-black text-red-500 uppercase">{n.title}</div>
               <div className="text-sm font-bold uppercase text-white mt-1">{n.message}</div>
             </div>
             <span className="text-[8px] text-gray-600 font-mono">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPlaceholder = (label: string) => (
    <div className="flex flex-col items-center justify-center py-32 opacity-20 text-center animate-fade-in">
      <div className="text-6xl mb-6">⚙️</div>
      <div className="text-[10px] font-black uppercase tracking-[0.5em]">{label} OPERATIONAL</div>
      <p className="text-[8px] font-bold mt-4 uppercase">CONTROL UNIT ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'courses': return renderCourses();
      case 'notifications': return renderNotifications();
      case 'students': return (
        <div className="animate-fade-in overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-white/10">
              <tr>
                <th className="pb-4 text-[10px] font-black text-gray-500 uppercase">UNIT ID</th>
                <th className="pb-4 text-[10px] font-black text-gray-500 uppercase">OPERATOR</th>
                <th className="pb-4 text-[10px] font-black text-gray-500 uppercase">STATUS</th>
                <th className="pb-4 text-[10px] font-black text-gray-500 uppercase text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((s: any) => (
                <tr key={s.id} className="group hover:bg-white/[0.01]">
                  <td className="py-4 font-mono text-[10px] text-gray-500">{s.id}</td>
                  <td className="py-4 text-xs font-black uppercase">{s.name}</td>
                  <td className="py-4"><span className="text-[8px] font-black border border-green-500/20 text-green-500 px-2 py-0.5 uppercase">ACTIVE</span></td>
                  <td className="py-4 text-right">
                    <button onClick={() => setStudents(students.filter(std => std.id !== s.id))} className="text-[8px] font-black text-red-500 uppercase opacity-0 group-hover:opacity-100 hover:underline">REVOKE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      default: return renderPlaceholder(activeTab.replace('-', ' ').toUpperCase());
    }
  };

  return (
    <section className="min-h-screen pt-20 bg-black flex overflow-hidden">
      <aside className="w-72 border-r border-white/5 bg-[#020202] hidden lg:block overflow-y-auto max-h-[calc(100vh-80px)] sticky top-20 custom-scrollbar">
        <div className="p-6 border-b border-white/5">
          <div className="text-[10px] font-bold text-red-500 tracking-[0.4em] uppercase mb-1">UNIT STATUS</div>
          <div className="text-xl font-black text-white uppercase tracking-tighter">ADMIN_LEVEL_0</div>
        </div>
        <nav className="p-3 space-y-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-all relative group ${
                activeTab === section.id ? 'bg-red-600 text-white font-bold' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">{section.icon}</span>
              <span className="text-[10px] uppercase tracking-widest leading-none truncate">{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto bg-black h-[calc(100vh-80px)] custom-scrollbar">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 flex justify-between items-end border-b border-white/5 pb-8">
            <div>
              <div className="text-red-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-3">SYSTEM_ACCESS_GRANTED / {activeTab.toUpperCase()}</div>
              <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                {SECTIONS.find(s => s.id === activeTab)?.label.split('. ')[1]}
              </h2>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">ENCRYPTION: AES-256</div>
              <div className="text-xs font-black text-green-500 uppercase tracking-widest flex items-center justify-end">
                <span className="mr-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                ONLINE_NODE
              </div>
            </div>
          </header>
          {renderContent()}
        </div>
      </main>
    </section>
  );
};

export default AdminPanel;