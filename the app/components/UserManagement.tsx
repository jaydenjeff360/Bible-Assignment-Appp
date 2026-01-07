
import React from 'react';

const students = [
  { name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 555-0123', course: 'Gospel of John', level: 'Level 2', progress: 75, status: 'Active', lastActive: '2 hours ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYNCvJA7uhqCNBJDJJXDepAEoz23TsWTqB4IISdyZNr7OI9iBvTGPzdryeLgR-Xw9qBEADwfD6gE6p5GHWbxo4Pm4lcI8hKLKASRYOUMCJY3z7aWDrLLR_yTUaU_UP-7fSokBm4H34Apya-Q4C49vAeXDZ9krT1V-shLPgyjdTFKwmAeneBu35SXlko6kOI1qDzmnhmkjjCFuJYPOmjjE8F_aSXoWxQorA4gdahZJ5TfK8FY5Aabzgc4nQemewrFCQme8OPEQ0hiZV' },
  { name: 'Michael Chen', email: 'm.chen88@example.com', phone: '+1 555-0124', course: 'Genesis Study', level: 'Level 1', progress: 30, status: 'Active', lastActive: '1 day ago', initial: 'MC' },
  { name: 'Emma Davis', email: 'emma.d@example.com', phone: '+1 555-0125', course: 'Gospel of John', level: 'Level 2', progress: 0, status: 'Paused', lastActive: '3 days ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHw8_wxc13i00vSkqiGsnodfUMNUzwP8zWZpGe9S3IM7esHXU5ZJB5lkcv8GPnoUk4hcUadKOHEX1tnGoRTphpYte3G4KPWpmJZ_rsUHZlcQZKW4qNgjTcp-KWMmWPLC5Fu1Z0I9gg1M45Par98YYZx01I_JY4U8_tkMMJqOPIpKuNuKzxnFbn0gO0XoIV9vVKt20lDs9BlUoC57CQsY60UNRTc1Db7h0J9ckJLiEb0zwcf9TONAq0wRUSTK7CQPCjckkdYKBZ9kXI' },
  { name: 'James Rodriguez', email: 'j.rodriguez@example.com', phone: '+1 555-0126', course: 'Romans', level: 'Level 3', progress: 92, status: 'Active', lastActive: '5 hours ago', initial: 'JR' },
];

const UserManagement: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm">
            <button className="text-text-secondary hover:text-white" onClick={() => alert('Going home...')}>Home</button>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-white">User Management</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight font-display">User Directory</h1>
              <p className="text-text-secondary text-base max-w-2xl">Manage student enrollments, track progress on WhatsApp learning modules, and update profiles.</p>
            </div>
            <button 
              onClick={() => alert('Opening student enrollment form...')}
              className="flex items-center gap-2 bg-primary hover:bg-emerald-400 active:scale-95 text-background-dark px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Add New User</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallStatCard label="Total Students" value="1,240" trend="+12%" icon="groups" />
          <SmallStatCard label="Active Learners" value="890" trend="+5%" icon="smartphone" sub="Engaged this week" />
          <SmallStatCard label="Courses Completed" value="450" trend="+8%" icon="school" />
        </div>

        <div className="flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 border-b border-border-dark flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-[#18322a]">
            <div className="relative w-full lg:w-96 group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-secondary"><span className="material-symbols-outlined transition-colors group-focus-within:text-primary">search</span></span>
              <input className="block w-full pl-10 pr-3 py-2.5 rounded-lg bg-background-dark text-white border-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Search students..." type="text" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <select className="bg-background-dark border border-border-dark text-white text-sm rounded-lg py-2.5 px-3 focus:ring-primary outline-none"><option>All Status</option><option>Active</option><option>Paused</option></select>
              <select className="bg-background-dark border border-border-dark text-white text-sm rounded-lg py-2.5 px-3 focus:ring-primary outline-none"><option>All Courses</option><option>Gospel of John</option></select>
              <button 
                onClick={() => alert('Generating CSV export...')}
                className="flex items-center gap-2 bg-background-dark border border-border-dark hover:border-primary/50 active:scale-95 text-text-secondary px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#12261f] text-text-secondary font-medium border-b border-border-dark uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="p-4 w-12"><input type="checkbox" className="rounded bg-background-dark border-border-dark text-primary focus:ring-primary" /></th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">WhatsApp</th>
                  <th className="p-4">Course</th>
                  <th className="p-4">Progress</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark text-white">
                {students.map((student, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-primary/5 transition-colors group cursor-pointer"
                    onClick={() => alert(`Viewing details for ${student.name}`)}
                  >
                    <td className="p-4" onClick={(e) => e.stopPropagation()}><input type="checkbox" className="rounded bg-background-dark border-border-dark text-primary focus:ring-primary" /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {student.avatar ? (
                          <img src={student.avatar} className="w-10 h-10 rounded-full object-cover border border-border-dark" alt="" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary font-bold border border-primary/20">{student.initial}</div>
                        )}
                        <div className="flex flex-col">
                          <span className="font-medium text-white group-hover:text-primary transition-colors">{student.name}</span>
                          <span className="text-xs text-text-secondary">{student.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div 
                        className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); alert(`Messaging ${student.name}...`); }}
                      >
                        <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                        <span>{student.phone}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1a3830] text-xs font-medium text-primary border border-primary/20">{student.level}</span>
                      <span className="ml-2 text-sm">{student.course}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1 w-32">
                        <div className="flex justify-between text-[10px] text-text-secondary"><span>{student.progress}%</span></div>
                        <div className="w-full bg-background-dark rounded-full h-1.5 overflow-hidden">
                          <div className={`h-full rounded-full ${student.progress > 50 ? 'bg-primary' : 'bg-yellow-500'} transition-all duration-700`} style={{ width: `${student.progress}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${student.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 text-right text-text-secondary text-xs">{student.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-border-dark flex items-center justify-between bg-[#12261f]">
            <p className="text-sm text-text-secondary">Showing <span className="text-white font-bold">1-4</span> of 1,240 results</p>
            <div className="flex gap-2">
              <button 
                onClick={() => alert('Previous page')}
                className="p-1.5 rounded border border-border-dark text-text-secondary hover:text-white active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={() => alert('Next page')}
                className="p-1.5 rounded border border-border-dark text-text-secondary hover:text-white active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SmallStatCard: React.FC<any> = ({ label, value, trend, icon, sub }) => (
  <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-1 shadow-sm relative overflow-hidden group cursor-default">
    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <span className="material-symbols-outlined text-6xl text-white">{icon}</span>
    </div>
    <p className="text-text-secondary text-[10px] font-bold uppercase tracking-wider">{label}</p>
    <div className="flex items-end gap-3">
      <h3 className="text-white text-3xl font-bold font-display">{value}</h3>
      <span className="text-primary text-sm font-medium mb-1 flex items-center">
        <span className="material-symbols-outlined text-[16px]">trending_up</span> {trend}
      </span>
    </div>
    {sub && <p className="text-[10px] text-text-secondary mt-1">{sub}</p>}
  </div>
);

export default UserManagement;
