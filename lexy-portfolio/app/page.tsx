"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image"; // <--- Added Image import

// --- Components ---

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 2.9 14.9 2 16 2C17.1 2 18 2.9 18 4C19.1 4 20 4.9 20 6C20 7.1 19.1 8 18 8C19.1 8 20 8.9 20 10C20 11.1 19.1 12 18 12C19.1 12 20 12.9 20 14C20 15.1 19.1 16 18 16C18 17.1 17.1 18 16 18C14.9 18 14 17.1 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 17.1 9.1 18 8 18C6.9 18 6 17.1 6 16C4.9 16 4 15.1 4 14C4 12.9 4.9 12 6 12C4.9 12 4 11.1 4 10C4 8.9 4.9 8 6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C6 2.9 6.9 2 8 2C9.1 2 10 2.9 10 4C10 2.9 10.9 2 12 2ZM12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14Z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

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
      setTimeout(() => setIsPulling(false), 300);
    }, 300); 
  };

  return (
    <div className="relative flex flex-col items-center justify-start z-50 -mt-2">
      <div 
        className="absolute top-[-100px] w-[2px] bg-white/60 transition-all duration-300 ease-in-out" 
        style={{ height: isPulling ? '150px' : '100px' }} 
      />
      <div 
        onClick={handleToggle}
        className="cursor-pointer group transition-all duration-300 ease-in-out relative"
        style={{ transform: `translateY(${isPulling ? '50px' : '0px'})` }}
      >
        <div className={`
          w-10 h-10 rounded-full border-[3px] border-white/80 shadow-md flex items-center justify-center
          ${isDark ? 'bg-rose-quartz' : 'bg-rose-quartz'} 
          group-hover:scale-110 transition-transform duration-200
        `}>
           {isDark ? (
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
           ) : (
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
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
      desc: "Optimized Zoho Desk workflows for Customer Support and conducted UAT on 5+ features.", 
      tags: ["Zoho Desk", "Agile", "UAT"] 
    },
    { 
      title: "Product Owner", 
      company: "Salud Panciteria",
      desc: "Managed business needs alignment and handled manual testing to ensure quality standards.", 
      tags: ["DevOps", "QA", "Product"] 
    },
    { 
      title: "Director", 
      company: "CSG DLSU",
      desc: "Led College of Computer Studies initiatives and managed communications for ID 122 CCS Batch.", 
      tags: ["Leadership", "Management"] 
    },
  ];

  const projects = [
    {
      title: "CrowdCast",
      desc: "An application for visualizing crowding uncertainties for MRT/LRT commuters in Metro Manila.",
      tags: ["Data Viz", "Next.js", "Research"],
      color: "bg-rose-quartz"
    },
    {
      title: "OCR Pipeline",
      desc: "A computer vision system utilizing OpenCV, Tesseract, and Leptonica for text extraction.",
      tags: ["C++", "OpenCV", "Vision"],
      color: "bg-serenity"
    },
    {
      title: "CropSagip",
      desc: "A study on consumer perceptions of food waste and willingness to buy 'imperfect' produce.",
      tags: ["Sustainability", "Research", "UI/UX"],
      color: "bg-rose-quartz"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-serenity selection:text-white">
      
      {/* --- HEADER CONTAINER --- */}
      <div className="mx-4 md:mx-8 bg-serenity rounded-b-[60px] relative z-10 shadow-xl">
        
        <div className="text-off-white pt-8 pb-32 px-6">
          <FlowerIcon className="absolute top-10 left-[10%] w-12 h-12 text-off-white/40 animate-spin-slow" />
          <FlowerIcon className="absolute bottom-10 right-[15%] w-16 h-16 text-off-white/30 rotate-12" />

          {/* Nav Container */}
          <nav className="max-w-5xl mx-auto flex justify-between items-center relative z-10 mb-16">
            
            {/* --- LOGO REPLACEMENT --- */}
            {/* Replaced text with Image component */}
            <div className="relative w-16 h-10 hover:scale-105 transition-transform cursor-pointer">
              <Image 
                src="/2.png" 
                alt="Logo" 
                fill 
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            
            {/* RIGHT SIDE CONTAINER */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8 text-sm font-bold bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-off-white/30 text-off-white shadow-sm">
                <a href="#experience" className="hover:text-off-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-off-white transition-colors">Projects</a>
                <a href="#contact" className="hover:text-off-white transition-colors">Contact</a>
              </div>
              <HangingLampSwitch />
            </div>
          </nav>

          <header className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block bg-white text-deep-slate px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm transform -rotate-2 border border-deep-slate/10">
              Hello!
            </span>
            
            <h1 className="font-serif text-6xl md:text-8xl font-black mb-6 text-off-white text-shadow-retro leading-[0.9]">
              I'm{' '}
              <span className="relative inline-block">
                 Alexis
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-rose-quartz" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>.
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              I'm <strong className="text-off-white font-black">Bea Alexis Arcega</strong>. Blending logic with creativity at De La Salle University.
            </p>
          </header>
        </div>
      </div>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20 pt-32 relative">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <FlowerIcon className="w-8 h-8 text-off-white" />
          <h2 className="font-serif text-4xl font-bold text-off-white">Experience</h2>
          <FlowerIcon className="w-8 h-8 text-off-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative">
              <div className={`
                absolute inset-0 rounded-[40px] transform rotate-1 transition-transform group-hover:rotate-3 group-hover:scale-105
                ${i % 2 === 0 ? 'bg-serenity/50' : 'bg-white/40'}
              `} />
              
              <div className="relative bg-white dark:bg-slate-800 border-2 border-deep-slate/10 dark:border-white/10 rounded-[40px] p-8 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className={`
                  mb-6 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border
                  ${i % 2 === 0 ? 'bg-serenity text-white border-serenity' : 'bg-rose-quartz text-white border-rose-quartz'}
                `}>
                  {exp.company}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-deep-slate dark:text-off-white leading-tight">
                  {exp.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-off-white/70 mb-8 leading-relaxed">
                  {exp.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 justify-center">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-rose-quartz/20 dark:bg-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-off-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 transform -skew-y-2 scale-110 z-0" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16">
             <span className="font-serif italic text-off-white text-xl mb-2">Technical & Creative</span>
             <h2 className="font-serif text-5xl md:text-6xl font-black text-off-white dark:text-cream text-center">
               Featured <span className="text-off-white relative inline-block">
                 Projects
                 <StarIcon className="absolute -top-6 -right-8 w-8 h-8 text-off-white animate-pulse" />
               </span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="group bg-white dark:bg-slate-800 rounded-t-[100px] rounded-b-[20px] p-6 pb-8 border-4 border-white dark:border-slate-700 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                <div className={`h-32 w-full ${proj.color} rounded-t-[80px] rounded-b-[20px] mb-6 flex items-center justify-center relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-white/20" />
                   <FlowerIcon className="text-white/40 w-16 h-16" />
                </div>
                
                <div className="text-center px-4">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-deep-slate dark:text-off-white">{proj.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-off-white/70 mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 border border-deep-slate/20 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-off-white/50 group-hover:bg-rose-quartz group-hover:text-white group-hover:border-transparent transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto bg-serenity/50 dark:bg-serenity/10 rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg border-4 border-white">
          <FlowerIcon className="absolute top-[-20px] left-[-20px] w-32 h-32 text-off-white animate-pulse" />
          
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-8 text-off-white dark:text-cream">
            Let's <span className="text-off-white">Create</span> <br/> Magic.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="mailto:beaarcega28@gmail.com" className="inline-block bg-deep-slate dark:bg-white text-white dark:text-deep-slate px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
               Email Me
             </a>
             <a href="https://linkedin.com/in/alexisarcega" target="_blank" className="inline-block bg-white dark:bg-slate-800 text-deep-slate dark:text-off-white px-10 py-4 rounded-full font-bold shadow-sm border-2 border-deep-slate/10 hover:scale-105 transition-transform">
               LinkedIn
             </a>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 pt-10 text-xs font-bold uppercase tracking-widest text-slate-500">
        © {new Date().getFullYear()} — Designed by Bea Alexis
      </footer>

    </div>
  );
}