
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { View } from '../types';

interface DashboardProps {
  onViewChange: (view: View) => void;
}

const data = [
  { name: 'Mon', engagement: 120 },
  { name: 'Tue', engagement: 150 },
  { name: 'Wed', engagement: 180 },
  { name: 'Thu', engagement: 140 },
  { name: 'Fri', engagement: 210 },
  { name: 'Sat', engagement: 250 },
  { name: 'Sun', engagement: 230 },
];

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  const handleSync = () => {
    alert('Syncing with Google Sheets...');
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <header className="sticky top-0 z-20 flex h-20 items-center justify-between bg-background-light/80 px-8 backdrop-blur-md dark:bg-background-dark/80 shrink-0">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Welcome back, Admin</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Overview of your platform's performance today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleSync}
            className="flex items-center gap-2 rounded-lg bg-surface-light border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-surface-dark dark:border-slate-700 dark:text-slate-300 dark:hover:bg-white/5 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">sync</span>
            <span>Sync Sheets</span>
          </button>
          <button 
            onClick={() => onViewChange(View.COURSES)}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background-dark shadow-sm hover:bg-primary-dark active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>New Course</span>
          </button>
        </div>
      </header>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Students" value="1,240" change="+12% from last month" icon="groups" trend="up" />
          <StatCard label="Active Classes" value="45" change="+3 new groups" icon="forum" trend="up" />
          <StatCard label="Completion Rate" value="78%" change="+5% retention" icon="emoji_events" trend="up" />
          <StatCard label="Messages Sent" value="12.5k" change="Last 30 days" icon="send" trend="neutral" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 rounded-xl bg-surface-light p-6 shadow-sm border border-slate-200 dark:bg-surface-dark dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">User Engagement</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Weekly active students interacting via WhatsApp</p>
              </div>
            </div>
            <div className="h-64 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#11d493" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#11d493" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1c322a', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#11d493' }}
                  />
                  <Area type="monotone" dataKey="engagement" stroke="#11d493" strokeWidth={3} fillOpacity={1} fill="url(#colorEng)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4 rounded-xl bg-surface-light p-6 shadow-sm border border-slate-200 dark:bg-surface-dark dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Popular Courses</h3>
            <div className="mt-2 flex flex-col gap-5">
              <ProgressItem label="Genesis" value={85} count="450 students" color="bg-primary" />
              <ProgressItem label="Gospel of John" value={60} count="320 students" color="bg-blue-500" />
              <ProgressItem label="Romans" value={40} count="210 students" color="bg-purple-500" />
              <ProgressItem label="Psalms" value={35} count="180 students" color="bg-amber-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentActivity />
          <QuickActions onViewChange={onViewChange} />
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; change: string; icon: string; trend: string }> = ({ label, value, change, icon, trend }) => (
  <div className="flex flex-col gap-1 rounded-xl bg-surface-light p-6 shadow-sm border border-slate-200 dark:bg-surface-dark dark:border-slate-800 hover:border-primary/30 transition-colors cursor-default">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white font-display">{value}</p>
    <div className="flex items-center gap-1">
      {trend === 'up' && <span className="material-symbols-outlined text-sm text-primary">trending_up</span>}
      {trend === 'neutral' && <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>}
      <p className={`text-xs font-medium ${trend === 'up' ? 'text-primary' : 'text-slate-500'}`}>{change}</p>
    </div>
  </div>
);

const ProgressItem: React.FC<{ label: string; value: number; count: string; color: string }> = ({ label, value, count, color }) => (
  <div className="group flex flex-col gap-2 cursor-pointer">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">{label}</span>
      <span className="text-slate-500 dark:text-slate-400">{count}</span>
    </div>
    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
      <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const RecentActivity: React.FC = () => (
  <div className="rounded-xl bg-surface-light p-6 shadow-sm border border-slate-200 dark:bg-surface-dark dark:border-slate-800">
    <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white font-display">Recent System Activity</h3>
    <div className="flex flex-col gap-4">
      <ActivityItem icon="check_circle" title="Daily Devo Sent" desc="Broadcast sent to 45 active groups successfully." time="2m ago" color="text-green-500" bg="bg-green-500/20" />
      <ActivityItem icon="person_add" title="New Enrollment" desc="Sarah M. joined 'Genesis 101'" time="15m ago" color="text-blue-500" bg="bg-blue-500/20" />
      <ActivityItem icon="warning" title="Sheet Sync Warning" desc="Group 12 responses failed to sync." time="1h ago" color="text-orange-500" bg="bg-orange-500/20" />
    </div>
  </div>
);

const ActivityItem: React.FC<any> = ({ icon, title, desc, time, color, bg }) => (
  <div className="flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${bg} ${color}`}>
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </div>
    <div className="flex flex-col">
      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{title}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
    </div>
    <span className="ml-auto text-xs text-slate-400">{time}</span>
  </div>
);

const QuickActions: React.FC<{ onViewChange: (view: View) => void }> = ({ onViewChange }) => (
  <div className="rounded-xl bg-surface-light p-6 shadow-sm border border-slate-200 dark:bg-surface-dark dark:border-slate-800">
    <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white font-display">Quick Actions</h3>
    <div className="grid grid-cols-2 gap-4">
      <ActionButton icon="send" label="New Broadcast" onClick={() => alert('Opening broadcast composer...')} />
      <ActionButton icon="group_add" label="Add Admin" onClick={() => alert('Inviting new administrator...')} />
      <ActionButton icon="table_view" label="View Sheet" onClick={() => window.open('https://sheets.google.com', '_blank')} />
      <ActionButton icon="school" label="Create Class" onClick={() => onViewChange(View.COURSES)} />
    </div>
  </div>
);

const ActionButton: React.FC<{ icon: string; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-50 p-4 hover:bg-slate-100 active:scale-95 dark:bg-white/5 dark:hover:bg-white/10 transition-all border border-transparent hover:border-primary/20"
  >
    <span className="material-symbols-outlined text-3xl text-primary">{icon}</span>
    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
  </button>
);

export default Dashboard;
