
import React, { useState, useEffect } from 'react';

const LESSONS_DATA: Record<string, string> = {
  'Day 1: Why Pray?': `👋 Hi there! Welcome to Day 1 of our Prayer series.

Do you ever feel like prayer is complicated? Or maybe you just don't know what to say? You're not alone! The disciples even asked Jesus, "Lord, teach us to pray."

📝 *Today's Key Verse:*
"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6

💡 *Thought for the day:*
Prayer isn't a performance. It's simply a conversation with your Creator who loves you.

👇 *Question:*
What is one thing causing you anxiety today that you can turn into a prayer?`,
  'Day 2: How to Pray': `🙏 Day 2: The "How" of Prayer.

Jesus gave us a beautiful template in Matthew 6. It's not about long words, it's about the heart.

*Today's Tip:* 
Try the ACTS method:
A - Adoration
C - Confession
T - Thanksgiving
S - Supplication

Tell us: Have you heard of ACTS before?`,
  'Day 3: The Lord\'s Prayer': `✨ Exploring the most famous prayer in history.

"Our Father in heaven, hallowed be your name..." 

What part of the Lord's prayer speaks to you most today?`
};

const CourseEditor: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState('Day 1: Why Pray?');
  const [content, setContent] = useState(LESSONS_DATA['Day 1: Why Pray?']);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    setContent(LESSONS_DATA[activeLesson] || '');
  }, [activeLesson]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }, 1000);
  };

  const insertFormat = (symbol: string) => {
    const textarea = document.getElementById('lesson-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);
    
    const newContent = `${before}${symbol}${selected}${symbol}${after}`;
    setContent(newContent);
    
    textarea.focus();
    setTimeout(() => {
      textarea.setSelectionRange(start + symbol.length, end + symbol.length);
    }, 0);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-dark">
      <header className="h-16 flex items-center justify-between px-6 border-b border-border-dark bg-background-dark shrink-0">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight font-display">Course Manager</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('Generating preview links...')}
            className="px-4 h-9 rounded-lg border border-border-dark bg-transparent text-white text-sm font-semibold hover:bg-surface-dark transition-colors flex items-center gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            Preview
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 h-9 rounded-lg ${isSaving ? 'bg-slate-600' : 'bg-primary'} text-background-dark text-sm font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 disabled:cursor-not-allowed`}
          >
            <span className="material-symbols-outlined text-base">{isSaving ? 'sync' : 'save'}</span>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Hierarchy Tree */}
        <aside className="w-72 border-r border-border-dark flex flex-col bg-[#11221c] overflow-hidden hidden md:flex">
          <div className="p-4 border-b border-border-dark flex items-center justify-between">
            <h3 className="font-medium text-text-muted uppercase text-xs tracking-wider">Curriculum</h3>
            <button className="text-primary hover:text-primary-dark" onClick={() => alert('Create new folder...')}><span className="material-symbols-outlined text-sm">add_circle</span></button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <TreeFolder name="New Believer Course" isOpen>
              <TreeFolder name="Week 1 - Prayer" isOpen>
                <TreeItem name="Day 1: Why Pray?" isActive={activeLesson === 'Day 1: Why Pray?'} onClick={() => setActiveLesson('Day 1: Why Pray?')} />
                <TreeItem name="Day 2: How to Pray" isActive={activeLesson === 'Day 2: How to Pray?'} onClick={() => setActiveLesson('Day 2: How to Pray')} />
                <TreeItem name="Day 3: The Lord's Prayer" isActive={activeLesson === 'Day 3: The Lord\'s Prayer'} onClick={() => setActiveLesson('Day 3: The Lord\'s Prayer')} />
              </TreeFolder>
              <TreeFolder name="Week 2 - Scripture" onClick={() => alert('Week 2 loading...')} />
            </TreeFolder>
          </div>
        </aside>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-background-dark p-6 space-y-6">
          <div className="max-w-4xl mx-auto w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-muted">Internal Title</label>
                <input 
                  className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary" 
                  type="text" 
                  value={activeLesson}
                  onChange={(e) => setActiveLesson(e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-muted">Scripture Reference</label>
                <input className="w-full bg-surface-dark border border-border-dark rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary" type="text" defaultValue="Philippians 4:6-7" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-medium text-text-muted">WhatsApp Message Content</label>
                <span className="text-xs text-text-muted bg-surface-dark px-2 py-1 rounded border border-border-dark">{content.length} characters</span>
              </div>
              <div className="w-full bg-surface-dark border border-border-dark rounded-lg overflow-hidden flex flex-col min-h-[400px]">
                <div className="border-b border-border-dark p-2 flex items-center gap-1 bg-[#182d26]">
                  <button onClick={() => insertFormat('*')} className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white" title="Bold (*text*)"><span className="material-symbols-outlined text-lg">format_bold</span></button>
                  <button onClick={() => insertFormat('_')} className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white" title="Italic (_text_)"><span className="material-symbols-outlined text-lg">format_italic</span></button>
                  <div className="w-px h-5 bg-border-dark mx-1"></div>
                  <button onClick={() => alert('List formatting soon...')} className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white"><span className="material-symbols-outlined text-lg">list</span></button>
                  <button onClick={() => alert('Link insertion soon...')} className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white"><span className="material-symbols-outlined text-lg">link</span></button>
                  <button onClick={() => alert('Image attachment soon...')} className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white"><span className="material-symbols-outlined text-lg">image</span></button>
                  <div className="ml-auto">
                    {saveStatus === 'success' ? (
                      <span className="text-xs text-primary font-medium flex items-center gap-1 animate-pulse"><span className="material-symbols-outlined text-sm">cloud_done</span>Saved</span>
                    ) : (
                      <span className="text-xs text-text-muted font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">cloud_sync</span>Auto-sync enabled</span>
                    )}
                  </div>
                </div>
                <textarea 
                  id="lesson-textarea"
                  className="flex-1 w-full bg-transparent border-none p-4 text-white resize-none focus:ring-0 leading-relaxed font-light text-base"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  spellCheck="false"
                />
              </div>
              <p className="text-xs text-text-muted italic">* Formatting uses WhatsApp Markdown standards (*bold*, _italic_).</p>
            </div>
          </div>
        </div>

        {/* Right Preview Panel */}
        <aside className="w-80 border-l border-border-dark flex flex-col bg-[#162922] overflow-y-auto hidden lg:flex p-4 gap-6">
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">published_with_changes</span>
              Publication Status
            </h4>
            <div className="flex items-center justify-between bg-surface-dark p-3 rounded-lg border border-border-dark">
              <div className="flex flex-col">
                <span className="text-xs text-text-muted uppercase font-bold tracking-wider">Current State</span>
                <span className="text-sm font-medium text-white">Draft Mode</span>
              </div>
              <div className="h-6 w-11 rounded-full bg-border-dark relative flex items-center p-1 cursor-pointer" onClick={() => alert('Switching to Live mode...')}>
                <div className="h-4 w-4 rounded-full bg-text-muted"></div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">smartphone</span>
              Mobile Preview
            </h4>
            <div className="flex-1 bg-[#0b141a] rounded-xl border border-border-dark p-3 relative overflow-hidden flex flex-col gap-2" style={{ backgroundImage: 'radial-gradient(#1f2c34 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              <div className="flex items-center gap-2 mb-4 bg-[#1f2c34] p-2 rounded-lg">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#11221c] font-bold text-xs">BL</div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-bold">Bible Learning Bot</span>
                  <span className="text-[8px] text-text-muted">Business Account</span>
                </div>
              </div>
              <div className="bg-[#005c4b] p-2.5 rounded-lg rounded-tr-none text-white text-[11px] leading-relaxed shadow-md ml-auto max-w-[90%] relative">
                <div className="whitespace-pre-wrap">{content}</div>
                <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                  <span className="text-[8px]">8:01 AM</span>
                  <span className="material-symbols-outlined text-[10px]">done_all</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const TreeFolder: React.FC<any> = ({ name, isOpen: initialOpen, children, onClick }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className="group">
      <div 
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-dark cursor-pointer text-white"
        onClick={() => {
          setIsOpen(!isOpen);
          if (onClick) onClick();
        }}
      >
        <span className={`material-symbols-outlined text-text-muted text-lg transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`}>expand_more</span>
        <span className="material-symbols-outlined text-primary text-lg">{isOpen ? 'folder_open' : 'folder'}</span>
        <span className="text-sm font-medium truncate">{name}</span>
      </div>
      {isOpen && children && (
        <div className="pl-4 border-l border-border-dark ml-4 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const TreeItem: React.FC<any> = ({ name, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer active:scale-95 transition-all ${isActive ? 'bg-primary/20 text-primary border border-primary/20' : 'hover:bg-surface-dark text-text-muted hover:text-white'}`}
  >
    <span className="material-symbols-outlined text-lg">article</span>
    <span className="text-sm font-medium truncate">{name}</span>
  </div>
);

export default CourseEditor;
