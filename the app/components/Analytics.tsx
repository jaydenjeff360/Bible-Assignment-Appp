
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Wk 1', score: 85 },
  { name: 'Wk 2', score: 90 },
  { name: 'Wk 3', score: 88 },
  { name: 'Wk 4', score: 98 },
];

const Analytics: React.FC = () => {
  const handleExport = () => {
    alert('Exporting analytics report as PDF...');
  };

  const handleImport = () => {
    alert('Select file to import learner data (CSV, XLSX)...');
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-background-dark p-6 md:p-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl font-display">Learner Progress Tracker</h1>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="material-symbols-outlined text-[18px] animate-spin-slow">sync</span>
              <p className="text-sm">Last synced with Google Sheets: 2 mins ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleImport}
              className="flex h-10 items-center gap-2 rounded-lg border border-border-dark bg-surface-dark px-4 text-sm font-bold text-white transition-all hover:bg-slate-700 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">upload</span>
              <span>Import Data</span>
            </button>
            <button 
              onClick={handleExport}
              className="flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 transition-all hover:bg-emerald-400 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Export Report</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TrendCard label="Active Learners" value="142" change="+5% this week" icon="groups" color="text-primary" />
          <TrendCard label="Avg. Completion" value="68%" change="+12% vs last batch" icon="bar_chart" color="text-primary" />
          <TrendCard label="Pending Reviews" value="24" change="Requires attention" icon="rate_review" color="text-orange-400" />
          <TrendCard label="At Risk" value="12" change="Inactive > 7 days" icon="warning" color="text-red-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-dark border border-border-dark rounded-xl p-8 shadow-2xl flex flex-col gap-8">
            <div className="flex justify-between items-center pb-6 border-b border-border-dark border-dashed">
              <div className="flex items-center gap-5">
                <div className="size-20 rounded-full p-1 border-2 border-primary overflow-hidden group">
                  <div className="size-full rounded-full bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvLbnwvFvxHSZ6z1ctitVHTxIwvvweV5X5Rk_mbyFepBU0rNusqBtRGMCjH8oOmD7D9Z0Wy5eWYjq3j-bZtBQgYOYXr8Z5rae-nAFoRN-GPJYhzk01fT2RYR70BL6Jmxc3xiOf3iAE0SBHxrQo8AG5kaoqvgN1YkF0GFq2eEQYIS3mXYgRGwxe5qS0b2ezmns92y2qKp7UC2jvw7Me5Q-TSea5XdZfJcmr8opgw7tH9ofAeJ7kOJlJXXqWdKH8PMFuKDIkqefLv-Rs')" }}></div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight font-display">Sarah Jenkins</h2>
                  <p className="text-text-secondary">Discipleship Batch 4 • <span className="text-primary font-medium cursor-help" title="Based on 100% quiz participation">Consistent Learner</span></p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-secondary uppercase tracking-wider font-bold">Overall Grade</div>
                <div className="text-4xl font-black text-primary">A+</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary">bar_chart</span>
                Weekly Performance
              </h3>
              <div className="h-48 w-full bg-[#11221c] rounded-lg border border-border-dark p-6 transition-colors hover:border-primary/30">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: '#19332b' }} contentStyle={{ backgroundColor: '#11221c', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#11d493' }} />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#11d493' : '#11d4934d'} className="cursor-pointer hover:opacity-80" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-4 font-display">Needs Attention</h3>
              <div className="flex flex-col gap-4">
                <AttentionItem name="Sarah Jenkins" issue="Inactive 9 days" color="text-red-400" />
                <AttentionItem name="Marcus Ray" issue="Missed Assignment 3" color="text-red-400" />
                <AttentionItem name="Elena Gomez" issue="Low Quiz Score" color="text-orange-400" />
              </div>
              <button 
                onClick={() => alert('Viewing all flagged students...')}
                className="w-full mt-4 py-2 text-xs font-bold text-text-secondary hover:text-white transition-colors border-t border-border-dark pt-4"
              >
                VIEW FULL LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendCard: React.FC<any> = ({ label, value, change, icon, color }) => (
  <div className="flex flex-col gap-1 rounded-xl border border-border-dark bg-surface-dark p-5 transition-all hover:border-primary/50 cursor-default">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
    </div>
    <p className="text-3xl font-bold text-white font-display">{value}</p>
    <p className={`text-xs font-medium ${color}`}>{change}</p>
  </div>
);

const AttentionItem: React.FC<any> = ({ name, issue, color }) => (
  <div className="flex items-center justify-between rounded-lg border border-red-900/30 bg-red-900/10 p-4 hover:bg-red-900/20 transition-colors cursor-pointer group">
    <div className="flex flex-col">
      <p className="font-bold text-white text-sm group-hover:text-primary transition-colors">{name}</p>
      <p className={`text-[10px] ${color}`}>{issue}</p>
    </div>
    <button 
      onClick={(e) => { e.stopPropagation(); alert(`Opening WhatsApp chat with ${name}...`); }}
      className="bg-white/5 hover:bg-white/10 p-1.5 rounded text-white transition-all active:scale-90"
    >
      <span className="material-symbols-outlined text-[16px]">chat</span>
    </button>
  </div>
);

export default Analytics;
