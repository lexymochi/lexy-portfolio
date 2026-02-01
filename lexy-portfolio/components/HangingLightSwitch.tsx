"use client";
import { useEffect, useState } from "react";

export default function HangingLampSwitch() {
  const [isDark, setIsDark] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsPulling(true);
    setTimeout(() => setIsPulling(false), 400); 

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div 
      onClick={handleToggle}
      className={`relative cursor-pointer transition-all duration-500 ${isPulling ? 'animate-pull' : ''}`}
      style={{ height: '100px', width: '40px' }}
    >

      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-12 bg-slate-400 dark:bg-slate-600" />
      
      <div className={`absolute left-1/2 -translate-x-1/2 top-12 w-6 h-6 rounded-full border-2 shadow-sm transition-all duration-500
        ${isDark 
          ? 'bg-serenity border-serenity shadow-[0_0_15px_rgba(146,168,209,0.8)]' 
          : 'bg-rose-quartz border-rose-quartz shadow-[0_0_15px_rgba(247,202,201,0.8)]'
        }`} 
      />

      <span className="absolute top-20 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-tighter opacity-40 whitespace-nowrap">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </div>
  );
}