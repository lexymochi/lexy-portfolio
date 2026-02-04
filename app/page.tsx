"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// --- Icons and UI Components ---

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 512 223.537 c 0 -61.46 -49.773 -111.264 -111.264 -111.264 c -11.768 0 -22.922 2.31 -33.496 5.644 C 366.948 56.657 317.346 7.084 255.985 7.084 c -61.32 0 -110.993 49.573 -111.224 110.833 c -10.573 -3.334 -21.728 -5.644 -33.496 -5.644 C 49.774 112.273 0 162.077 0 223.537 c 0 49.241 32.171 90.479 76.533 105.12 c -13.294 18.354 -21.276 40.656 -21.276 64.985 c 0 61.46 49.773 111.274 111.254 111.274 c 36.86 0 69.222 -18.043 89.475 -45.646 c 20.283 27.603 52.645 45.646 89.465 45.646 c 61.521 0 111.264 -49.813 111.264 -111.274 c 0 -24.329 -7.993 -46.631 -21.246 -64.985 C 479.829 314.017 512 272.779 512 223.537 Z M 255.985 337.433 c -31.971 0 -57.927 -25.916 -57.927 -57.887 c 0 -31.981 25.956 -57.897 57.927 -57.897 c 32 0 57.926 25.916 57.926 57.897 C 313.912 311.517 287.986 337.433 255.985 337.433 Z" />
  </svg> 
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const ArrowIcon = ({ className, direction }: { className?: string, direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
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
      <div className="absolute top-[-100px] w-[2px] bg-white/60 transition-all duration-300" style={{ height: isPulling ? '150px' : '100px' }} />
      <div onClick={handleToggle} className="cursor-pointer group relative transition-all duration-300" style={{ transform: `translateY(${isPulling ? '50px' : '0px'})` }}>
        <div className="w-10 h-10 rounded-full border-[3px] border-white/80 shadow-md flex items-center justify-center bg-rose-quartz group-hover:scale-110">
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
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    { title: "Product Intern", company: "Aventis Technology", date: "Sept 2025 – Jan 2026", desc: "Optimized Zoho Desk workflows for Customer Support and conducted UAT on 5+ features.", tags: ["Zoho Desk", "Agile", "UAT"] },
    { title: "Content Writer", company: "GDG on Campus - DLSU", date: "Sept 2024 – Sept 2025", desc: "Created publicity materials’ captions and Facebook reels to enhance presence in the tech community.", tags: ["Content", "Social Media"] },
    { title: "IMC - Publicity", company: "CCS Week", date: "Jun 2024 – Nov 2024", desc: "Expanded student engagement by making captions and Facebook reels on numerous projects.", tags: ["Publicity", "Engagement"] },
    { title: "Engagement Planner", company: "GDG on Campus - DLSU", date: "Oct 2023 – Oct 2024", desc: "Facilitated officer general assembly to connect and gather tech-related insights.", tags: ["Events", "Strategy"] },
    { title: "Product Owner", company: "Salud Panciteria", date: "Oct 2024 – Jan 2025", desc: "Managed business needs alignment and handled manual testing to ensure quality standards.", tags: ["DevOps", "Product"] },
    { title: "Junior Officer", company: "LSCS", date: "Nov 2022 – Aug 2023", desc: "Worked with committees in implementing initiatives that provided valuable organizational skills.", tags: ["Teamwork", "Growth"] },
  ];

  const projects = [
    { title: "CrowdCast", desc: "An application for visualizing crowding uncertainties for MRT/LRT commuters in Metro Manila.", tags: ["Data Viz", "Next.js", "Research"], color: "bg-rose-quartz" },
    { title: "OCR Pipeline", desc: "A computer vision system utilizing OpenCV, Tesseract, and Leptonica for text extraction.", tags: ["C++", "OpenCV", "Vision"], color: "bg-serenity" },
    { title: "CropSagip", desc: "A study on consumer perceptions of food waste and willingness to buy 'imperfect' produce.", tags: ["Sustainability", "Research", "UI/UX"], color: "bg-rose-quartz" },
    { title: "Paradise Kicks", desc: "Led product alignment and front-end design for a user-centered interface using Agile/DevOps.", tags: ["Product Owner", "Front-End", "Agile"], color: "bg-serenity" },
    { title: "Taft10 Website", desc: "A discovery platform helping students find and explore restaurants within the Taft vicinity.", tags: ["Web Dev", "UI/UX", "Community"], color: "bg-rose-quartz" },
    { title: "Payroll System", desc: "Developed a Ruby-based system to calculate salary and work hours using OOP paradigms.", tags: ["Ruby", "OOP", "Logic"], color: "bg-serenity" },
    { title: "Vending Machine", desc: "Built a program that simulated the operation of a vending machine factory.", tags: ["Java/C++", "OOP", "Simulation"], color: "bg-rose-quartz" },
    { title: "Stocks Classifier", desc: "Applied and analyzed machine learning algorithms for a classification task using Google dataset.", tags: ["ML", "Python", "Data Science"], color: "bg-serenity" }
  ];

  const maxIndex = Math.max(0, projects.length - 3);

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };
  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-serenity selection:text-white dark:bg-slate-900 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-6 ${scrolled ? "bg-serenity/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-full flex justify-between items-center mx-auto">
          <div className="relative w-16 h-10 hover:scale-105 transition-transform cursor-pointer">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain drop-shadow-sm" priority />
          </div>
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex space-x-8 text-sm font-bold px-8 py-4 rounded-full text-off-white ${scrolled ? "bg-transparent" : "bg-white/20 backdrop-blur-md border-2 border-off-white/30"}`}>
              <a href="#experience" className="hover:text-rose-quartz transition-colors">Experience</a>
              <a href="#projects" className="hover:text-rose-quartz transition-colors">Projects</a>
              <a href="#contact" className="hover:text-rose-quartz transition-colors">Contact</a>
            </div>
            <HangingLampSwitch />
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <div className="mx-4 md:mx-8 bg-serenity rounded-b-[60px] relative z-10 shadow-xl pt-48 pb-32">
        <div className="text-off-white px-6 text-center max-w-4xl mx-auto relative">
          <FlowerIcon className="absolute top-20 left-[15%] w-12 h-12 text-off-white/40 animate-spin-slow" />
          <FlowerIcon className="absolute bottom-10 right-[15%] w-16 h-16 text-off-white/30 rotate-12" />
          <header className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block bg-white text-deep-slate px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm transform -rotate-2 border border-deep-slate/10">Hello!</span>
            <h1 className="font-serif text-6xl md:text-8xl font-black mb-6 text-off-white text-shadow-retro leading-tight">
              I'm <span className="relative inline-block">Alexis<svg className="absolute -bottom-2 left-0 w-full h-4 text-rose-quartz" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg></span>.
            </h1>
            <p className="text-lg md:text-xl font-medium text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              I am a <strong className="text-off-white font-black">Computer Science senior</strong> at DLSU and an aspiring Product Manager/UI/UX Designer.
            </p>
          </header>
        </div>
      </div>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 pt-32 scroll-mt-24">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <FlowerIcon className="w-8 h-8 text-serenity dark:text-off-white" />
          <h2 className="font-serif text-4xl font-bold text-deep-slate dark:text-off-white">Experience</h2>
          <FlowerIcon className="w-8 h-8 text-serenity dark:text-off-white" />
        </div>
        <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative min-w-[320px] md:min-w-0">
              <div className={`absolute inset-0 rounded-[40px] transform rotate-1 transition-transform group-hover:rotate-3 group-hover:scale-105 ${i % 2 === 0 ? 'bg-serenity/30' : 'bg-rose-quartz/20'}`} />
              <div className="relative bg-white dark:bg-slate-800 border-2 border-deep-slate/10 dark:border-white/10 rounded-[40px] p-8 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className={`mb-2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${i % 2 === 0 ? 'bg-serenity text-white border-serenity' : 'bg-rose-quartz text-white border-rose-quartz'}`}>
                  {exp.company}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{exp.date}</span>
                <h3 className="font-serif text-2xl font-bold mb-4 text-deep-slate dark:text-off-white leading-tight">{exp.title}</h3>
                <p className="text-sm text-slate-600 dark:text-off-white/70 mb-8 leading-relaxed flex-grow">{exp.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 justify-center">
                  {exp.tags.map(tag => <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-off-white/60">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="min-h-screen py-10 relative overflow-visible px-4 md:px-20 flex flex-col justify-center scroll-mt-24">
        {/* Header matched to Experience style */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <FlowerIcon className="w-8 h-8 text-serenity dark:text-off-white" />
          <h2 className="font-serif text-4xl font-bold text-deep-slate dark:text-off-white text-center">Featured Projects</h2>
          <FlowerIcon className="w-8 h-8 text-serenity dark:text-off-white" />
        </div>

        <div className="relative flex items-center max-w-[1200px] mx-auto w-full">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-4 md:-left-12 z-40 p-3 rounded-full bg-white dark:bg-slate-800 shadow-2xl border-2 border-serenity text-serenity transition-all hover:scale-110 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed`}
          >
            <ArrowIcon direction="left" className="w-5 h-5" />
          </button>

          {/* Slider Viewport */}
          <div className="w-full overflow-hidden py-4">
            <motion.div 
              className="flex gap-6 md:gap-8"
              animate={{ x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (32 / 3)}px)` }} 
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {projects.map((proj, i) => (
                <div 
                  key={i} 
                  className="group bg-white dark:bg-slate-800 rounded-t-[100px] rounded-b-[40px] p-5 pb-8 border-4 border-white dark:border-slate-700 shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl w-[100%] md:w-[calc(33.333%-21.333px)] shrink-0 flex flex-col h-[200px] md:h-[450px]"
                >
                  <div className={`h-36 md:h-44 w-full ${proj.color} rounded-t-[80px] rounded-b-[40px] mb-5 flex items-center justify-center relative overflow-hidden shrink-0`}>
                     <div className="absolute inset-0 bg-white/20" />
                     <FlowerIcon className="text-white/40 w-20 h-20" />
                  </div>
                  <div className="text-center px-4 flex flex-col flex-grow overflow-hidden">
                    <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-deep-slate dark:text-off-white leading-tight">{proj.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-off-white/70 mb-4 leading-relaxed line-clamp-4">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {proj.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 border border-deep-slate/20 rounded-md text-[9px] font-bold uppercase text-slate-500 dark:text-off-white/50 group-hover:bg-rose-quartz group-hover:text-white transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute -right-4 md:-right-12 z-40 p-3 rounded-full bg-white dark:bg-slate-800 shadow-2xl border-2 border-serenity text-serenity transition-all hover:scale-110 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed`}
          >
            <ArrowIcon direction="right" className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-32 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-serenity rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg border-4 border-white">
          <FlowerIcon className="absolute top-[-20px] left-[-20px] w-32 h-32 text-white/20 animate-pulse" />
          <h2 className="font-serif text-3xl md:text-6xl font-black mb-8 text-off-white">Let's connect!</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="mailto:beaarcega28@gmail.com" className="inline-block bg-white text-serenity px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Email Me</a>
             <a href="https://linkedin.com/in/alexisarcega" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent text-white border-2 border-white/50 px-10 py-4 rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="text-right pr-10 pb-10 pt-10 text-xs font-bold uppercase text-slate-500">
        © {new Date().getFullYear()} Bea Alexis Arcega
      </footer>
    </div>
  );
}