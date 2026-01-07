
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark">
      <div className="absolute inset-0 z-0">
        <div className="flex h-full w-full">
          <div className="hidden lg:block w-1/2 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
            <div 
              className="h-full w-full bg-cover bg-center opacity-60" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIsI2hB1ndr10Rh8BBfDYxVTnB3_a183C_oYMqPfddnp1tx9oza_G_QOwzres_YTdA3LXaSDmDqfObn1EhBoGeKmi0vi9M713eplLc5PDBXf8h-4HPOYl_Sp-oE0jqffIYhb6hLszFN5tV_-yJLPjhiDKKuS7hNoE_IbO09jZuzWB2RlHuJnK23IVQQK2UqJKKVJOEDRLQ6-sp-FEk0kqVTaQgcyx_HAx6McItbIdM6LgC__kzvAhn-ln4ldH1PK16QQWZWRwZ5-Qe')" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-12 z-20 bg-gradient-to-t from-background-dark to-transparent w-full">
              <blockquote className="text-white max-w-lg">
                <p className="text-2xl font-light italic mb-4 font-display">"Thy word is a lamp unto my feet, and a light unto my path."</p>
                <footer className="text-sm font-bold text-slate-400">— Psalm 119:105</footer>
              </blockquote>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-background-dark relative flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-md flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <div className="size-8">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white font-display">Bible Learning Admin</span>
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white font-display">Welcome Back</h1>
                <p className="text-text-secondary text-sm">Sign in to manage the learning system operations.</p>
              </div>

              <form 
                className="flex flex-col gap-5 w-full bg-surface-dark p-8 rounded-xl shadow-lg border border-border-dark"
                onSubmit={(e) => { e.preventDefault(); onLogin(); }}
              >
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
                    <input className="w-full rounded-lg bg-[#111722] border-border-dark text-white pl-11 focus:ring-2 focus:ring-primary/50 h-12" placeholder="admin@example.com" type="email" defaultValue="admin@bibleadmin.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-white">Password</label>
                    <button type="button" className="text-sm font-medium text-primary hover:text-emerald-400">Forgot Password?</button>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">lock</span>
                    <input className="w-full rounded-lg bg-[#111722] border-border-dark text-white pl-11 focus:ring-2 focus:ring-primary/50 h-12" placeholder="••••••••" type="password" defaultValue="password123" />
                  </div>
                </div>

                <button type="submit" className="mt-2 flex w-full items-center justify-center rounded-lg h-12 bg-primary hover:bg-emerald-400 text-background-dark text-base font-bold shadow-md transition-colors">
                  Sign In
                </button>
              </form>

              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span>Secure Admin Portal</span>
                </div>
                <div className="text-xs text-slate-500">
                  © 2024 Bible Learning System. Powered by Google Workspace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
