
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import GalaxyEngine from './components/GalaxyEngine';
import { DiaryEntry } from './types';

const STORAGE_KEY = 'my_galaxy_diary_v2';
const ACCESS_CODE = '0921'; 

const MOOD_COLORS = [
  { hex: '#FFD700', label: '快乐' },
  { hex: '#4B0082', label: '忧郁' },
  { hex: '#00FA9A', label: '平静' },
  { hex: '#FF4500', label: '热情' },
  { hex: '#9370DB', label: '迷茫' },
  { hex: '#F8F8FF', label: '观察' },
];

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isError, setIsError] = useState(false);

  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [activeEntry, setActiveEntry] = useState<DiaryEntry | null>(null);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [inputCoord, setInputCoord] = useState<{ wx: number; wy: number; wz: number; sx: number; sy: number } | null>(null);
  const [inputText, setInputText] = useState('');
  const [inputImages, setInputImages] = useState<string[]>([]);
  const [selectedMoodColor, setSelectedMoodColor] = useState(MOOD_COLORS[0].hex);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [resetViewTrigger, setResetViewTrigger] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Timeline dragging state for "Time Tunnel" effect
  const [isTimelineDragging, setIsTimelineDragging] = useState(false);

  const sortedEntries = useMemo(() => [...diaryEntries].sort((a, b) => a.timestamp - b.timestamp), [diaryEntries]);
  
  const timeRange = useMemo(() => {
    if (sortedEntries.length === 0) return { min: Date.now() - 86400000, max: Date.now() };
    const min = sortedEntries[0].timestamp - 3600000;
    const max = sortedEntries[sortedEntries.length - 1].timestamp + 1000;
    return { min, max };
  }, [sortedEntries]);

  const [currentTime, setCurrentTime] = useState(timeRange.max);

  useEffect(() => {
    setCurrentTime(timeRange.max);
  }, [diaryEntries.length, timeRange.max]);

  const handleUnlock = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (passwordInput === ACCESS_CODE) {
      setIsUnlocked(true);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 500);
      setPasswordInput('');
    }
  };

  const handleStarClick = useCallback((entryId: string) => {
    if (!isUnlocked) return;
    const entry = diaryEntries.find(e => e.id === entryId);
    if (entry) {
      setActiveEntry(entry);
      setIsInputOpen(false);
    }
  }, [diaryEntries, isUnlocked]);

  const handleEmptySpaceClick = useCallback((wx: number, wy: number, wz: number, sx: number, sy: number) => {
    if (!isUnlocked || activeEntry) return;
    setInputCoord({ wx, wy, wz, sx, sy });
    setIsInputOpen(true);
    setInputText('');
    setInputImages([]);
    setSelectedMoodColor(MOOD_COLORS[0].hex);
  }, [activeEntry, isUnlocked]);

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (!isUnlocked || sortedEntries.length === 0) return;
    
    let nextIndex = -1;
    if (!activeEntry) {
      nextIndex = direction === 'right' ? 0 : sortedEntries.length - 1;
    } else {
      const currentIndex = sortedEntries.findIndex(e => e.id === activeEntry.id);
      if (direction === 'right') {
        nextIndex = Math.min(sortedEntries.length - 1, currentIndex + 1);
      } else {
        nextIndex = Math.max(0, currentIndex - 1);
      }
    }

    if (nextIndex !== -1) {
      const entry = sortedEntries[nextIndex];
      setActiveEntry(entry);
      setCurrentTime(entry.timestamp);
    }
  }, [activeEntry, sortedEntries, isUnlocked]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImages(prev => [...prev, reader.result as string].slice(-3)); // Limit to 3 images
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setInputImages(prev => prev.filter((_, i) => i !== index));
  };

  const saveEntry = async () => {
    if (!inputText.trim() || !inputCoord) return;
    setIsSaving(true);
    const newEntry: DiaryEntry = {
      id: `mem-${Date.now()}`,
      x: inputCoord.wx,
      y: inputCoord.wy,
      z: inputCoord.wz,
      text: inputText,
      images: inputImages,
      moodColor: selectedMoodColor,
      timestamp: Date.now(),
    };
    await new Promise(resolve => setTimeout(resolve, 800));
    const updatedEntries = [...diaryEntries, newEntry];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    setDiaryEntries(updatedEntries);
    setIsSaving(false);
    setIsInputOpen(false);
  };

  const formattedDate = (ts: number) => {
    return new Intl.DateTimeFormat('zh-CN', { month: 'long', year: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(ts));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-[#020205]">
      {/* Background Engine */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 ${activeEntry || isInputOpen || !isUnlocked ? 'opacity-30 blur-[20px] scale-105' : 'opacity-100 blur-0 scale-100'}`}>
        <GalaxyEngine 
          entries={diaryEntries}
          activeEntryId={activeEntry?.id || null}
          currentTime={currentTime}
          searchTerm={searchTerm}
          onStarClick={handleStarClick}
          onEmptySpaceClick={handleEmptySpaceClick}
          onSwipe={handleSwipe}
          resetTrigger={resetViewTrigger}
        />
      </div>

      {/* Top Controls */}
      <div className={`absolute top-12 right-12 z-50 flex items-center gap-6 transition-all duration-700 ${!isUnlocked || activeEntry || isInputOpen ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100'}`}>
        <button onClick={() => setResetViewTrigger(v => v + 1)} className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        <div className={`flex items-center glass-card rounded-full overflow-hidden transition-all duration-500 ${isSearchExpanded ? 'w-64 px-4' : 'w-10 px-0'}`}>
          <button onClick={() => setIsSearchExpanded(!isSearchExpanded)} className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <input type="text" placeholder="搜索记忆..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none text-[10px] text-white/80 tracking-widest uppercase w-full ml-2 placeholder:text-white/20" />
        </div>
      </div>

      {/* Timeline Control */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-12 transition-all duration-1000 ${!isUnlocked || activeEntry || isInputOpen ? 'opacity-0 translate-y-12 pointer-events-none' : 'opacity-100'}`}>
        <div className={`glass-card p-8 rounded-[2.5rem] flex flex-col gap-3 relative overflow-hidden transition-all duration-500 ${isTimelineDragging ? 'timeline-dragging scale-105' : ''}`}>
          
          {/* Decorative streaks for tunnel effect */}
          {isTimelineDragging && (
            <>
              <div className="streak top-1/4 left-10" style={{ animationDelay: '0s' }} />
              <div className="streak top-2/4 right-20" style={{ animationDelay: '0.5s' }} />
              <div className="streak bottom-1/4 left-40" style={{ animationDelay: '1s' }} />
            </>
          )}

          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-light">Memory Chrono</span>
            <div className={`text-center transition-all duration-300 ${isTimelineDragging ? 'scale-125 text-indigo-300 drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]' : 'text-white/60'}`}>
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono">{formattedDate(currentTime)}</span>
            </div>
            <span className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-light">Origin Axis</span>
          </div>

          <div className="relative flex items-center h-4">
            <div className="absolute inset-0 rounded-full timeline-track opacity-50" />
            <input 
              type="range" 
              min={timeRange.min} 
              max={timeRange.max} 
              value={currentTime} 
              onMouseDown={() => setIsTimelineDragging(true)}
              onMouseUp={() => setIsTimelineDragging(false)}
              onTouchStart={() => setIsTimelineDragging(true)}
              onTouchEnd={() => setIsTimelineDragging(false)}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10"
            />
          </div>

          <div className="flex justify-between text-[7px] tracking-[0.2em] text-white/10 uppercase px-2 mt-1">
            <span>{formattedDate(timeRange.min).split(' ')[0]}</span>
            <span>Current Space-Time</span>
            <span>{formattedDate(timeRange.max).split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* Diary Detail Modal */}
      {activeEntry && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-entrance" onClick={() => setActiveEntry(null)}>
          <div className="max-w-4xl w-full p-12 md:p-20 rounded-[3rem] glass-card relative pointer-events-auto" onClick={e => e.stopPropagation()}>
             <div className="absolute top-0 left-0 w-full h-1" style={{ background: activeEntry.moodColor }} />
             <button onClick={() => setActiveEntry(null)} className="absolute top-8 right-8 text-white/20 hover:text-white text-4xl font-thin transition-colors">×</button>
             
             <div className="text-center mb-10">
               <div className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Memory Resonated</div>
               <h3 className="text-xs font-mono text-white/40 tracking-widest uppercase">{formattedDate(activeEntry.timestamp)}</h3>
             </div>

             <div className="max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide text-center">
                <p className="text-2xl md:text-3xl font-extralight text-white/90 leading-relaxed tracking-wide mb-8">
                  {activeEntry.text}
                </p>
                {activeEntry.images && activeEntry.images.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {activeEntry.images.map((img, idx) => (
                      <img key={idx} src={img} alt="Memory" className="w-full max-w-md rounded-2xl object-cover shadow-2xl border border-white/10" />
                    ))}
                  </div>
                )}
             </div>
             
             <div className="mt-12 flex flex-col items-center">
                <div className="w-12 h-[1px] bg-white/10 mb-8" />
                <button onClick={() => setActiveEntry(null)} className="px-10 py-4 rounded-full border border-white/10 text-[10px] tracking-[0.5em] text-white/40 uppercase hover:bg-white/5 transition-all">收回思绪</button>
             </div>
          </div>
        </div>
      )}

      {/* Diary Input Modal */}
      {isInputOpen && inputCoord && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-entrance" onClick={() => setIsInputOpen(false)}>
           <div className="w-[520px] p-10 rounded-[3rem] glass-card pointer-events-auto border-white/5 shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-light">正在将记忆刻入星系</h2>
                <button onClick={() => setIsInputOpen(false)} className="text-white/20 hover:text-white/60 transition-colors">×</button>
              </div>

              <div className="flex gap-4 mb-10 justify-start">
                {MOOD_COLORS.map(m => (
                  <button 
                    key={m.hex} 
                    onClick={() => setSelectedMoodColor(m.hex)} 
                    className={`w-10 h-10 rounded-full transition-all duration-300 relative ${selectedMoodColor === m.hex ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'opacity-40 grayscale-[40%]'}`} 
                    style={{ backgroundColor: m.hex }}
                  >
                    {selectedMoodColor === m.hex && (
                      <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20" />
                    )}
                  </button>
                ))}
              </div>

              <div className="relative mb-6">
                <textarea 
                  autoFocus 
                  className="w-full bg-transparent border-none outline-none text-white/90 text-xl font-light h-48 resize-none mb-2 placeholder:text-white/10 leading-relaxed" 
                  placeholder="此时此刻的想法..." 
                  value={inputText} 
                  onChange={e => setInputText(e.target.value)} 
                />
                
                {/* Image Previews & Upload Button */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  {inputImages.map((img, idx) => (
                    <div key={idx} className="relative group w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                      <img src={img} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => removeImage(idx)} 
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs transition-opacity"
                      >
                        移除
                      </button>
                    </div>
                  ))}
                  
                  {inputImages.length < 3 && (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-20 h-20 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-white/20 hover:text-white/40 hover:border-white/20 transition-all gap-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
                      <span className="text-[8px] uppercase tracking-tighter">添加图片</span>
                    </button>
                  )}
                  
                  <input 
                    ref={fileInputRef} 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    className="hidden" 
                    onChange={handleImageUpload} 
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mb-8 px-1">
                 <button className="px-4 py-1.5 rounded-lg bg-white/5 text-[9px] text-white/30 uppercase tracking-[0.2em] border border-white/5 hover:bg-white/10 transition-all">Preview</button>
              </div>

              <button 
                onClick={saveEntry} 
                disabled={isSaving || !inputText.trim()} 
                className={`w-full py-5 rounded-3xl transition-all duration-500 text-[10px] text-white tracking-[0.5em] uppercase border ${
                  isSaving || !inputText.trim() 
                  ? 'bg-transparent border-white/5 text-white/10 cursor-not-allowed' 
                  : 'bg-white/5 hover:bg-white/10 border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]'
                }`}
              >
                {isSaving ? '正在镌刻星纹...' : '点亮这颗星'}
              </button>
           </div>
        </div>
      )}

      {/* Lock Screen */}
      {!isUnlocked && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center bg-[#020205] p-6 animate-entrance">
          <div className={`glass-card p-12 rounded-[4rem] w-full max-w-sm flex flex-col items-center ${isError ? 'shake' : ''}`}>
             <h2 className="text-xl font-extralight tracking-[0.5em] text-white/80 mb-12 uppercase">星系权限验证</h2>
             <input autoFocus type="password" maxLength={4} placeholder="密码" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleUnlock()} className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 text-center text-2xl text-white tracking-[1em] outline-none mb-8" />
             <button onClick={() => handleUnlock()} className="w-full py-4 rounded-full border border-white/10 text-[10px] text-white/40 tracking-[0.5em] uppercase hover:bg-white/5">开启接入</button>
          </div>
        </div>
      )}

      {/* App Branding */}
      <div className={`absolute top-12 left-12 z-10 pointer-events-none transition-all duration-1000 ${!isUnlocked || activeEntry || isInputOpen ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        <h1 className="text-5xl font-extralight tracking-[0.6em] text-white/90 drop-shadow-2xl">星系日记</h1>
        <p className="text-[10px] tracking-[0.5em] text-indigo-400/60 mt-4 uppercase">Galaxy Diary • {diaryEntries.length} 颗记忆星辰</p>
      </div>
    </div>
  );
};

export default App;
