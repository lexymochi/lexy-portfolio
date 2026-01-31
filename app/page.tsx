"use client";
import React, { useState, useEffect } from 'react';

const HangingLampSwitch = () => {
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
    setTimeout(() => {
      const newMode = !isDark;
      setIsDark(newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setTimeout(() => setIsPulling(false), 150);
    }, 100); 
  };

  return (
    <div className="absolute right-6 top-full h-0 w-0 z-[100]">
      <div 
        onClick={handleToggle}
        className="relative cursor-pointer flex flex-col items-center group"
        style={{ width: '44px' }}
      >
        <div 
          className="w-[1.5px] bg-slate-400 dark:bg-slate-500 shadow-sm transition-all duration-300 ease-out"
          style={{ height: isPulling ? '140px' : '100px' }} 
        />
        
        <div 
          className="relative transition-all duration-300 ease-out flex items-center justify-center"
          style={{ top: isPulling ? '0px' : '0px' }}
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-serenity drop-shadow-[0_0_15px_rgba(146,168,209,1)] transition-all duration-500">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-10 h-10 transition-all duration-500">
              <circle cx="12" cy="12" r="5" className="fill-rose-quartz drop-shadow-[0_0_15px_rgba(247,202,201,1)]" />
              <path 
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                className="stroke-rose-quartz drop-shadow-[0_0_15px_rgba(247,202,201,1)]" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const experiences = [
    { 
      title: "Product Intern", 
      company: "Aventis Technology",
      desc: "Optimized Zoho Desk workflows for Customer Support [cite: 13] and conducted UAT on 5+ features to identify friction points. [cite: 14, 16]", 
      tags: ["Zoho Desk", "UAT", "Agile"] 
    },
    { 
      title: "Product Owner & QA", 
      company: "Salud Panciteria Website",
      desc: "Aligned business needs with implementation [cite: 32] and handled manual testing to ensure quality standards. [cite: 33]", 
      tags: ["Agile", "DevOps", "QA"] 
    },
    { 
      title: "Director - Student Services", 
      company: "CSG DLSU",
      desc: "Led College of Computer Studies (CCS) enlistment initiatives [cite: 22] and managed university-wide announcements. [cite: 21]", 
      tags: ["Leadership", "Management"] 
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-700 selection:bg-rose-quartz/30 dark:text-white font-sans">
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-slate-300 dark:border-white/20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex justify-end items-center relative">
          <div className="flex space-x-12 text-[12px] font-bold uppercase tracking-[0.2em]">
            <a href="#projects" className="hover:text-rose-quartz transition-colors">Work</a>
            <a href="#contact" className="hover:text-serenity transition-colors">Contact</a>
          </div>
          <HangingLampSwitch />
        </div>
      </nav>

      <header className="max-w-5xl mx-auto px-6 py-32 md:py-48 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] uppercase">
          Bea Alexis <br />
          <span className="text-serenity">Arcega</span>[cite: 1].
        </h1>
        <p className="text-xl md:text-2xl opacity-70 max-w-3xl leading-relaxed font-medium mx-auto md:mx-0">
          BS Computer Science student at De La Salle University-Manila[cite: 4, 5]. Product Intern specializing in UI/UX, Software Technology, and Agile development. [cite: 11, 36]
        </p>
      </header>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-black uppercase tracking-[0.3em] mb-16 opacity-30">Selected Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="group p-10 border border-white/20 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2">
              <span className="text-[11px] font-bold text-serenity uppercase tracking-widest">{exp.company}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-serenity transition-colors">{exp.title}</h3>
              <p className="text-sm opacity-60 mb-8 leading-relaxed font-medium">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest bg-serenity/20 text-serenity px-3 py-1.5 rounded-full font-black">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-32">
        <div className="relative p-16 md:p-24 border border-white/20 rounded-[4rem] bg-white/30 dark:bg-slate-900/30 backdrop-blur-3xl overflow-hidden text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">Let's build <br />something.</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:beaarcega28@gmail.com" className="inline-block px-12 py-5 bg-serenity text-white font-black rounded-3xl shadow-2xl shadow-serenity/30 hover:scale-105 transition-transform uppercase tracking-widest text-xs">
              Email Me [cite: 2]
            </a>
            <a href="https://linkedin.com/in/alexisarcega" target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase tracking-widest hover:text-rose-quartz transition-colors">
              LinkedIn [cite: 2]
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-[10px] font-black tracking-[0.4em] opacity-30 uppercase">
        &copy; {new Date().getFullYear()} — Bea Alexis A. Arcega [cite: 1]
      </footer>
    </div>
  );
}