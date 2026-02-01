"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

// --- Icons & UI Components ---

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 512 223.537 c 0 -61.46 -49.773 -111.264 -111.264 -111.264 c -11.768 0 -22.922 2.31 -33.496 5.644 C 366.948 56.657 317.346 7.084 255.985 7.084 c -61.32 0 -110.993 49.573 -111.224 110.833 c -10.573 -3.334 -21.728 -5.644 -33.496 -5.644 C 49.774 112.273 0 162.077 0 223.537 c 0 49.241 32.171 90.479 76.533 105.12 c -13.294 18.354 -21.276 40.656 -21.276 64.985 c 0 61.46 49.773 111.274 111.254 111.274 c 36.86 0 69.222 -18.043 89.475 -45.646 c 20.283 27.603 52.645 45.646 89.465 45.646 c 61.521 0 111.264 -49.813 111.264 -111.274 c 0 -24.329 -7.993 -46.631 -21.246 -64.985 C 479.829 314.017 512 272.779 512 223.537 Z M 255.985 337.433 c -31.971 0 -57.927 -25.916 -57.927 -57.887 c 0 -31.981 25.956 -57.897 57.927 -57.897 c 32 0 57.926 25.916 57.926 57.897 C 313.912 311.517 287.986 337.433 255.985 337.433 Z" />
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
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      if (!savedTheme) localStorage.setItem("theme", "light");
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
          bg-rose-quartz group-hover:scale-110 transition-transform duration-200
        `}>
           {isDark ? (
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-opacity"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
           ) : (
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-opacity"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
           )}
        </div>
      </div>
    </div>
  );
};

// --- Main Portfolio Component ---

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-85%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    { 
      title: "Product Intern", 
      company: "Aventis Technology",
      date: "Sept 2025 – Jan 2026",
      desc: "Optimized Zoho Desk workflows for Customer Support and conducted UAT on 5+ features.",
      tags: ["Zoho Desk", "Agile", "UAT"] 
    },
    { 
      title: "Content Writer", 
      company: "GDG on Campus - DLSU",
      date: "Sept 2024 – Sept 2025",
      desc: "Created publicity materials’ captions and Facebook reels to enhance presence in the tech community.",
      tags: ["Content", "Social Media"] 
    },
    { 
      title: "IMC - Publicity", 
      company: "CCS Week",
      date: "Jun 2024 – Nov 2024",
      desc: "Expanded student engagement by making captions and Facebook reels on numerous projects.",
      tags: ["Publicity", "Engagement"] 
    },
    { 
      title: "Engagement Planner", 
      company: "GDG on Campus - DLSU",
      date: "Oct 2023 – Oct 2024",
      desc: "Facilitated officer general assembly to connect and gather tech-related insights.",
      tags: ["Events", "Strategy"] 
    },
    { 
      title: "Product Owner", 
      company: "Salud Panciteria",
      date: "Oct 2024 – Jan 2025",
      desc: "Managed business needs alignment and handled manual testing to ensure quality standards.",
      tags: ["DevOps", "Product"] 
    },
    { 
      title: "Junior Officer", 
      company: "LSCS",
      date: "Nov 2022 – Aug 2023",
      desc: "Worked with committees in implementing initiatives that provided valuable organizational skills.",
      tags: ["Teamwork", "Growth"] 
    },
  ];

  const projects = [
    { title: "CrowdCast", desc: "An application for visualizing crowding uncertainties for commuters in Metro Manila.", tags: ["Data Viz", "Next.js"], color: "bg-rose-quartz" },
    { title: "OCR Pipeline", desc: "A computer vision system utilizing OpenCV and Tesseract for text extraction.", tags: ["C++", "OpenCV"], color: "bg-serenity" },
    { title: "CropSagip", desc: "A study on consumer perceptions of food waste and 'imperfect' produce.", tags: ["Sustainability", "UI/UX"], color: "bg-rose-quartz" }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-serenity selection:text-white dark:bg-slate-900 transition-colors duration-500 overflow-x-hidden">
      
      {/* --- SHARED GRID OVERLAY --- */}
      {/* This grid persists behind both modes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] dark:opacity-[0.1] bg-[grid] dark:bg-[grid-dark]" 
           style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      {/* --- STICKY NAVIGATION BAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
        scrolled ? "bg-serenity/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="max-w-full flex justify-between items-center mx-auto">
          <div className="relative w-16 h-10 hover:scale-105 transition-transform cursor-pointer">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain drop-shadow-sm" priority />
          </div>
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex space-x-8 text-sm font-bold px-8 py-4 rounded-full transition-all duration-500 text-off-white ${
              scrolled 
                ? "bg-transparent border-transparent shadow-none" 
                : "bg-white/20 backdrop-blur-md border-2 border-off-white/30 shadow-sm"
            }`}>
              <a href="#experience" className="hover:text-rose-quartz transition-colors">Experience</a>
              <a href="#projects" className="hover:text-rose-quartz transition-colors">Projects</a>
              <a href="#contact" className="hover:text-rose-quartz transition-colors">Contact</a>
            </div>
            <HangingLampSwitch />
          </div>
        </div>
      </nav>

      {/* --- HERO / SERENITY CONTAINER --- */}
      <div className="mx-4 md:mx-8 bg-serenity rounded-b-[60px] relative z-10 shadow-xl pt-48 pb-32">
        <div className="text-off-white px-6 text-center">
          <FlowerIcon className="absolute top-20 left-[10%] w-12 h-12 text-off-white/40 animate-spin-slow" />
          <FlowerIcon className="absolute bottom-10 right-[15%] w-16 h-16 text-off-white/30 rotate-12" />
          <header className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block bg-white text-deep-slate px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm transform -rotate-2 border border-deep-slate/10">Hello!</span>
            <h1 className="font-serif text-6xl md:text-8xl font-black mb-6 leading-tight">I'm Alexis.</h1>
            <p className="text-lg md:text-xl font-medium text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              I am a <strong className="text-off-white font-black">Computer Science senior</strong> at DLSU and an aspiring Product Manager/UI/UX Designer.
              I blend technical strategy with user-centered design to build functional solutions.
            </p>
          </header>
        </div>
      </div>

      {/* --- HORIZONTAL SCROLL EXPERIENCE --- */}
      {/* Grid is visible here as well due to the dark:bg-slate-900 container */}
      <section ref={targetRef} className="relative h-[450vh] bg-transparent">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <FlowerIcon className="w-8 h-8 text-serenity dark:text-rose-quartz" />
              <h2 className="font-serif text-5xl font-bold text-deep-slate dark:text-off-white transition-colors">Experience</h2>
              <FlowerIcon className="w-8 h-8 text-serenity dark:text-rose-quartz" />
            </div>
            <motion.div style={{ x }} className="flex gap-12 pl-[10%] pr-[10%]">
              {experiences.map((exp, i) => (
                <div key={i} className="group relative min-w-[450px] md:min-w-[550px] flex">
                  <div className={`absolute inset-0 rounded-[60px] transform rotate-1 transition-transform group-hover:rotate-2 ${i % 2 === 0 ? 'bg-serenity/40' : 'bg-rose-quartz/30'}`} />
                  <div className="relative bg-white dark:bg-slate-800 border-2 border-deep-slate/10 dark:border-white/10 rounded-[60px] p-12 w-full flex flex-col items-center text-center shadow-2xl transition-colors">
                    <div className={`mb-4 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${i % 2 === 0 ? 'bg-serenity text-white' : 'bg-rose-quartz text-white'}`}>
                      {exp.company}
                    </div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-6">{exp.date}</span>
                    <h3 className="font-serif text-3xl font-bold mb-6 text-deep-slate dark:text-white leading-tight">{exp.title}</h3>
                    <p className="text-lg text-slate-600 dark:text-off-white/70 mb-10 leading-relaxed">{exp.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-3 justify-center">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-white">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative z-20 bg-white dark:bg-slate-900 py-20 px-6 transition-colors duration-500">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="font-serif text-5xl font-black text-center mb-16 text-deep-slate dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="group bg-slate-50 dark:bg-slate-800 rounded-[40px] p-8 shadow-xl transition-all hover:-translate-y-2">
                <div className={`h-40 w-full ${proj.color} rounded-[30px] mb-8 relative overflow-hidden flex items-center justify-center`}>
                   <FlowerIcon className="w-16 h-16 text-white/30" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-deep-slate dark:text-white">{proj.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-32 px-6 bg-white dark:bg-slate-900 z-20 transition-colors">
        <div className="max-w-4xl mx-auto bg-serenity rounded-[60px] p-12 text-center shadow-lg relative overflow-hidden">
          <FlowerIcon className="absolute -top-10 -left-10 w-48 h-48 text-white/10" />
          <h2 className="font-serif text-3xl md:text-6xl font-black mb-8 text-off-white">Let's connect!</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="mailto:beaarcega28@gmail.com" className="bg-white text-serenity px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Email Me</a>
             <a href="https://linkedin.com/in/alexisarcega" target="_blank" className="bg-transparent text-white border-2 border-white/50 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="text-right pr-10 pb-10 pt-10 text-xs font-bold uppercase text-slate-500 bg-white dark:bg-slate-900 z-20 transition-colors">
        © {new Date().getFullYear()} Bea Alexis Arcega
      </footer>
    </div>
  );
}