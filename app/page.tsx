"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// --- Icons and UI Components ---

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 512 223.537 c 0 -61.46 -49.773 -111.264 -111.264 -111.264 c -11.768 0 -22.922 2.31 -33.496 5.644 C 366.948 56.657 317.346 7.084 255.985 7.084 c -61.32 0 -110.993 49.573 -111.224 110.833 c -10.573 -3.334 -21.728 -5.644 -33.496 -5.644 C 49.774 112.273 0 162.077 0 223.537 c 0 49.241 32.171 90.479 76.533 105.12 c -13.294 18.354 -21.276 40.656 -21.276 64.985 c 0 61.46 49.773 111.274 111.254 111.274 c 36.86 0 69.222 -18.043 89.475 -45.646 c 20.283 27.603 52.645 45.646 89.465 45.646 c 61.521 0 111.264 -49.813 111.264 -111.274 c 0 -24.329 -7.993 -46.631 -21.246 -64.985 C 479.829 314.017 512 272.779 512 223.537 Z M 255.985 337.433 c -31.971 0 -57.927 -25.916 -57.927 -57.887 c 0 -31.981 25.956 -57.897 57.927 -57.897 c 32 0 57.926 25.916 57.926 57.897 C 313.912 311.517 287.986 337.433 255.985 337.433 Z" />
  </svg> 
);

const ArrowIcon = ({ className, direction }: { className?: string, direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
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
      <div className="absolute top-[-100px] w-[2px] bg-white/60 dark:bg-white/20 transition-all duration-300" style={{ height: isPulling ? '150px' : '100px' }} />
      <div onClick={handleToggle} className="cursor-pointer group relative transition-all duration-300" style={{ transform: `translateY(${isPulling ? '50px' : '0px'})` }}>
        <div className="w-10 h-10 rounded-full border-[3px] border-white/80 dark:border-white/20 shadow-md flex items-center justify-center bg-rose-quartz dark:bg-rose-quartz-dark group-hover:scale-110">
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

// Added an optional 'link' string to the Project type
type Project = { title: string; desc: string; tags: string[]; color: string; link?: string };

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const experiences = [
    { title: "Product Intern", company: "Aventis Technology", date: "Sept 2025 – Jan 2026", desc: "Optimized Zoho Desk workflows for Customer Support and conducted UAT on 5+ features.", tags: ["Zoho Desk", "Agile", "UAT"] },
    { title: "Content Writer", company: "GDG on Campus - DLSU", date: "Sept 2024 – Sept 2025", desc: "Created publicity materials’ captions and Facebook reels to enhance presence in the tech community.", tags: ["Content", "Social Media"] },
    { title: "Chairperson for Student Services", company: "CATCH2T26", date: "Feb 2023 – Sept 2025", desc: "Handled a team of 10+ executives and managed enlistment initiatives for the 122 batch.", tags: ["Leadership", "Strategy"] },
    { title: "IMC - Publicity", company: "CCS Week", date: "Jun 2024 – Nov 2024", desc: "Expanded student engagement by making captions and Facebook reels on numerous projects.", tags: ["Publicity", "Engagement"] },
    { title: "Student Services Director", company: "CSG", date: "Feb 2024 – Jul 2024", desc: "Led 4 batch units of the whole College of Computer Studies department.", tags: ["Leadership", "Teamwork"] },
    { title: "Junior Officer", company: "LSCS", date: "Nov 2022 – Aug 2023", desc: "Worked with committees in implementing initiatives that provided organizational skills.", tags: ["Teamwork", "Growth"] },
  ];

  const projects: Project[] = [
    { title: "CrowdCast", desc: "An application for visualizing crowding uncertainties for MRT/LRT commuters in Metro Manila. It provides real-time insights to help users make informed travel decisions during peak hours.", tags: ["Data Viz", "Next.js", "Thesis"], color: "bg-rose-quartz dark:bg-rose-quartz-dark", link: "https://crowdcast-guide.vercel.app/" },
    { title: "OCR Pipeline", desc: "A robust computer vision system utilizing OpenCV, Tesseract, and Leptonica. It efficiently extracts and processes text from low-quality image inputs for data categorization.", tags: ["C++", "OpenCV"], color: "bg-serenity dark:bg-serenity-dark" },
    { title: "Salud Panciteria", desc: "A modern website crafted to boost the online presence of Salud Panciteria. Managed the end-to-end delivery using Agile methodologies and comprehensive manual testing.", tags: ["Agile", "Product Management"], color: "bg-rose-quartz dark:bg-rose-quartz-dark", link: "https://www.saludpanciteria.com/" },
    { title: "Paradise Kicks", desc: "Led the product alignment and co-designed the front-end for a highly interactive, user-centered interface. Executed using strict Agile/DevOps practices.", tags: ["Product Owner", "Agile"], color: "bg-serenity dark:bg-serenity-dark", link: "https://paradise-kicks.vercel.app/" },
    { title: "Taft10 Website", desc: "A dynamic discovery platform helping students seamlessly find, filter, and explore restaurants within the Taft vicinity.", tags: ["Web Dev", "UI/UX"], color: "bg-rose-quartz dark:bg-rose-quartz-dark", link: "https://taft10.onrender.com/guest-view#home" },
    { title: "Payroll System", desc: "Developed a comprehensive Ruby-based terminal system to calculate employee salary, deductions, and work hours utilizing deep OOP paradigms.", tags: ["Ruby", "OOP"], color: "bg-serenity dark:bg-serenity-dark" },
    { title: "Student Adaptability", desc: "Performed end-to-end Exploratory Data Analysis on 1,200+ records to identify critical socio-economic drivers affecting student COVID-19 adaptability.", tags: ["Python", "Data Analysis"], color: "bg-rose-quartz dark:bg-rose-quartz-dark" },
    { title: "Stocks Classifier", desc: "Applied and analyzed various machine learning algorithms to perform a rigorous classification task using a historical Google stock dataset.", tags: ["ML", "Python"], color: "bg-serenity dark:bg-serenity-dark" }
  ];

  const maxIndex = Math.max(0, projects.length - 3);

  const nextSlide = () => { if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1); };
  const prevSlide = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };

  return (
    <div className="min-h-screen font-sans selection:bg-serenity selection:text-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-500 relative">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-6 ${scrolled ? "bg-serenity/90 dark:bg-serenity-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-full flex justify-between items-center mx-auto">
          <div className="relative w-16 h-10 hover:scale-105 transition-transform cursor-pointer">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain drop-shadow-sm" priority />
          </div>
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex space-x-8 text-xs font-bold px-8 py-4 rounded-full text-off-white ${scrolled ? "bg-transparent" : "bg-white/20 dark:bg-slate-800/50 backdrop-blur-md border-2 border-off-white/30 dark:border-white/10"}`}>
              <a href="#experience" className="hover:text-rose-quartz dark:hover:text-rose-quartz-dark transition-colors">Experience</a>
              <a href="#projects" className="hover:text-rose-quartz dark:hover:text-rose-quartz-dark transition-colors">Projects</a>
              <a href="#contact" className="hover:text-rose-quartz dark:hover:text-rose-quartz-dark transition-colors">Contact</a>
            </div>
            <HangingLampSwitch />
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <div className="mx-4 md:mx-8 bg-serenity dark:bg-serenity-dark rounded-b-[60px] relative z-10 shadow-xl min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-24 pb-24 transition-colors duration-500">
        <div className="text-off-white px-6 text-center max-w-4xl relative">
          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <FlowerIcon className="absolute -top-12 left-[5%] w-10 h-10 text-off-white/40" />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0], rotate: [12, -5, 12] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <FlowerIcon className="absolute -bottom-12 right-[5%] w-14 h-14 text-off-white/30" />
          </motion.div>
          
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <span className="inline-block bg-white dark:bg-slate-800 text-deep-slate dark:text-off-white px-4 py-1 rounded-full font-bold text-[9px] uppercase tracking-widest mb-6 shadow-sm transform -rotate-2 border border-deep-slate/10 dark:border-white/10">Hello!</span>
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-6 text-off-white text-shadow-retro leading-tight">
              I'm <span className="relative inline-block">Lexy<svg className="absolute -bottom-2 left-0 w-full h-3 text-rose-quartz dark:text-rose-quartz-dark" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg></span>.
            </h1>
            <p className="text-sm md:text-base font-medium text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              I am a <strong className="text-off-white font-black">Computer Science senior</strong> at De La Salle University and an aspiring Product Manager/Data Analyst/UI/UX Designer.
            </p>
          </motion.header>
        </div>
      </div>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 pt-32 scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 justify-center text-center"
        >
          <FlowerIcon className="w-6 h-6 text-serenity dark:text-serenity-dark" />
          <h2 className="font-serif text-3xl font-bold text-deep-slate dark:text-off-white tracking-tight">Experience</h2>
          <FlowerIcon className="w-6 h-6 text-serenity dark:text-serenity-dark" />
        </motion.div>
        
        <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative min-w-[300px] md:min-w-0"
            >
              <div className={`absolute inset-0 rounded-[40px] transform rotate-1 transition-transform group-hover:rotate-3 group-hover:scale-105 ${i % 2 === 0 ? 'bg-serenity/30 dark:bg-serenity-dark/30' : 'bg-rose-quartz/20 dark:bg-rose-quartz-dark/20'}`} />
              <div className="relative bg-white dark:bg-slate-800 border-2 border-deep-slate/10 dark:border-white/10 rounded-[40px] p-8 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className={`mb-2 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${i % 2 === 0 ? 'bg-serenity dark:bg-serenity-dark text-white border-serenity dark:border-serenity-dark' : 'bg-rose-quartz dark:bg-rose-quartz-dark text-white border-rose-quartz dark:border-rose-quartz-dark'}`}>
                  {exp.company}
                </div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-4">{exp.date}</span>
                <h3 className="font-serif text-lg font-bold mb-3 text-deep-slate dark:text-off-white leading-tight">{exp.title}</h3>
                <p className="text-xs text-slate-600 dark:text-off-white/70 mb-8 leading-relaxed flex-grow">{exp.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 justify-center">
                  {exp.tags.map(tag => <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-[8px] font-bold uppercase tracking-wider text-slate-600 dark:text-off-white/60">{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="min-h-screen py-10 relative overflow-visible px-4 md:px-20 flex flex-col justify-center scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10 justify-center"
        >
          <FlowerIcon className="w-6 h-6 text-serenity dark:text-serenity-dark" />
          <h2 className="font-serif text-3xl font-bold text-deep-slate dark:text-off-white text-center tracking-tight">Featured Projects</h2>
          <FlowerIcon className="w-6 h-6 text-serenity dark:text-serenity-dark" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center max-w-[1200px] mx-auto w-full"
        >
          <button onClick={prevSlide} disabled={currentIndex === 0} className="absolute -left-4 md:-left-12 z-40 p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border-2 border-serenity dark:border-serenity-dark text-serenity dark:text-serenity-dark hover:scale-110 disabled:opacity-20 transition-all">
            <ArrowIcon direction="left" className="w-4 h-4" />
          </button>

          <div className="w-full overflow-hidden py-4">
            <motion.div className="flex gap-6 md:gap-8" animate={{ x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (32 / 3)}px)` }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
              {projects.map((proj, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedProject(proj)}
                  className="group bg-white dark:bg-slate-800 rounded-t-[80px] rounded-b-[30px] p-5 pb-6 border-4 border-white dark:border-slate-700 shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl w-[100%] md:w-[calc(33.333%-21.333px)] shrink-0 flex flex-col h-[380px] md:h-[420px] cursor-pointer"
                >
                  <div className={`h-32 md:h-40 w-full ${proj.color} rounded-t-[60px] rounded-b-[20px] mb-4 flex items-center justify-center relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />
                     <FlowerIcon className="text-white/30 w-16 h-16 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="text-center px-3 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg font-bold mb-2 text-deep-slate dark:text-off-white group-hover:text-serenity dark:group-hover:text-rose-quartz-dark transition-colors">{proj.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-off-white/70 mb-3 leading-relaxed line-clamp-3">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {proj.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 border border-deep-slate/10 dark:border-white/10 rounded-md text-[8px] font-bold uppercase text-slate-500 dark:text-off-white/50 group-hover:bg-rose-quartz dark:group-hover:bg-rose-quartz-dark group-hover:text-white transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={nextSlide} disabled={currentIndex >= maxIndex} className="absolute -right-4 md:-right-12 z-40 p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border-2 border-serenity dark:border-serenity-dark text-serenity dark:text-serenity-dark hover:scale-110 disabled:opacity-20 transition-all">
            <ArrowIcon direction="right" className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* --- PROJECT MODAL OVERLAY --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-10 shadow-2xl border-4 border-white dark:border-slate-700 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} 
            >

              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-500 dark:text-off-white hover:bg-rose-quartz hover:text-white dark:hover:bg-rose-quartz-dark transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="px-2">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-deep-slate dark:text-off-white mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-serenity/10 dark:bg-serenity-dark/20 text-serenity dark:text-serenity-dark rounded-md text-[10px] font-bold uppercase tracking-wider border border-serenity/20 dark:border-serenity-dark/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-off-white/80 leading-relaxed">
                  {selectedProject.desc}
                </p>
                
                {selectedProject.link && (
                  <div className="mt-8 pt-6">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-deep-slate dark:bg-off-white text-white dark:text-deep-slate rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                    >
                      Check it here
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER / CONTACT --- */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="contact" 
        className="px-6 md:px-20 py-16 bg-white/30 dark:bg-slate-900/50 border-t border-slate-300/30 dark:border-white/10 mt-16 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-center md:text-left">
          
          <div className="max-w-md mx-auto md:mx-0">
            <h2 className="font-serif text-3xl md:text-4xl font-black mb-3 text-deep-slate dark:text-off-white">Let's Connect!</h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-off-white/70 leading-relaxed font-medium">
              For opportunities and collaborations, please reach out to any of my socials.
            </p>
          </div>

          <div className="flex flex-col gap-5 mx-auto md:mx-0">
            <a href="mailto:beaarcega28@gmail.com" className="group flex items-center justify-center md:justify-start gap-4 text-deep-slate dark:text-off-white hover:text-serenity dark:hover:text-rose-quartz-dark transition-all">
              <MailIcon className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-6" />
              <span className="font-bold tracking-wide text-xs md:text-sm">beaarcega28@gmail.com</span>
            </a>
            
            <a href="https://linkedin.com/in/alexisarcega" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center md:justify-start gap-4 text-deep-slate dark:text-off-white hover:text-serenity dark:hover:text-rose-quartz-dark transition-all">
              <LinkedInIcon className="w-6 h-6 group-hover:scale-110 group-hover:rotate-6" />
              <span className="font-bold tracking-wide text-xs md:text-sm">linkedin.com/in/alexisarcega</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-300/50 dark:border-white/5 text-center md:text-left text-[9px] font-bold uppercase tracking-widest text-slate-500">
          © {new Date().getFullYear()} Bea Alexis Arcega
        </div>
      </motion.footer>
    </div>
  );
}