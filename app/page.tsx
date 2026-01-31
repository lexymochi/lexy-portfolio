import React from 'react';

export default function Portfolio() {
  const projects = [
    { title: "Project One", desc: "A full-stack web application.", tags: ["React", "Next.js"] },
    { title: "Project Two", desc: "Real-time data visualization.", tags: ["Python", "D3.js"] },
    { title: "Project Three", desc: "Automation scripts for workflow.", tags: ["TypeScript", "Node.js"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">DEV.PORTFOLIO</span>
          <div className="space-x-8 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Building digital <span className="text-blue-600">experiences</span> that matter.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          I'm a developer focused on clean code, responsive design, and solving complex problems with simple solutions.
        </p>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
          <p className="text-gray-400 mb-8">Currently looking for new opportunities and collaborations.</p>
          <a 
            href="mailto:your@email.com" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors"
          >
            Get in touch
          </a>
          <div className="mt-12 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Name. Built with Next.js.
          </div>
        </div>
      </footer>
    </div>
  );
}