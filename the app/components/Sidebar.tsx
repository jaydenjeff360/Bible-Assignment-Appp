
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, onLogout }) => {
  const navItems = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
    { id: View.USERS, label: 'User Management', icon: 'group' },
    { id: View.COURSES, label: 'Course Management', icon: 'auto_stories' },
    { id: View.REPORTS, label: 'Analytics & Reports', icon: 'analytics' },
    { id: View.SETTINGS, label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark lg:flex">
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <div className="relative size-12 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkKkIDgoluaMFOu6HWvdpUz5TERADhh749-sszqC00GkGItOTZsQZHqhnHwgmLCl9n7gLkeSx0UKbw0wa5vuFCr_Ae7XdQZ3eaXZRULW-3aJbki05PUEK8ux-a2cIzmRKoyDznKvIXCpzV25iGhAEZPhSChZ6aVTc7OqUQK2ErPBbD0kiPfGSiFDcDXyFus3MEHlhKoj09rKcXjgTri1Mbk19GgH9l1AGeiluLbZr0rUWOSfweFeGpo1N0FTuXUCePAOX0CithFGjS')" }}
              ></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-surface-dark bg-primary"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold leading-tight font-display">Admin Portal</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Bible Learning System</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors w-full text-left ${
                  currentView === item.id
                    ? 'bg-primary/10 text-primary dark:bg-primary/20'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined text-[24px] ${currentView === item.id ? 'fill-1' : ''}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 pt-6 dark:border-slate-800">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-[24px]">logout</span>
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
