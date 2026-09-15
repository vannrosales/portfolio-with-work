import { useState } from 'react';
import ProjectCard from './ProjectCard';
import bodyPic from '../assets/body-pic.jpg';
import vannPic from '../assets/vann-pic.jpg';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Bespoke web applications, administrative dashboards, and API services built with Laravel, Vue 3, or React.',
    tags: ['React', 'Vue 3', 'Laravel', 'API Services'],
    link: '#',
    year: 'Service'
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for iOS & Android utilizing React Native, Expo, and offline-first SQLite databases.',
    tags: ['React Native', 'Expo', 'SQLite', 'iOS/Android'],
    link: '#',
    year: 'Service'
  },
  {
    title: 'Systems & Optimization',
    description: 'Database modeling, Supabase setup, hardware workstation tuning, and local development infrastructure.',
    tags: ['Database Modeling', 'Supabase', 'DevOps'],
    link: '#',
    year: 'Service'
  }
];

const projects = [
  {
    title: 'Waray Flix',
    description: 'A minimalist streaming web application with TMDB catalog integration, custom local storage watch tracking, and a distraction-free aesthetic.',
    tags: ['React 19', 'Tailwind CSS'],
    link: 'https://waray-flix.vercel.app/',
    year: 'Lead Frontend Architect',
    image: '/projects/waray-flix.png'
  },
  {
    title: 'JK Boutique',
    description: 'Commerce platform connecting digital apparel drops with in-store physical holds. Features dual-role authentication and real-time inventory tracking.',
    tags: ['Next.js', 'Server Actions', 'Tailwind CSS'],
    link: 'https://jk-boutique.vercel.app/',
    year: 'Full-Stack Developer',
    image: '/projects/jk-boutique.png'
  },
  {
    title: 'SIP Mobile Bar',
    description: 'Custom booking and interactive drink catalog platform designed for private events, dynamic pricing calculations, and reservation management.',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
    link: 'https://sip-mobile-bar-app.netlify.app/',
    year: 'Frontend Developer',
    image: '/projects/sip-mobile-bar.png'
  },
  {
    title: 'IESMS',
    description: 'Digitized monitoring platform specialized in data analytics regarding participants involved in university extension services across all campuses.',
    tags: ['Bootstrap', 'Vanilla JS'],
    link: 'https://github.com/vannrosales',
    year: 'Lead Full-Stack Architect',
    image: '/projects/iesms.png'
  },
  {
    title: 'Amo Na',
    description: 'Cross-platform mobile application featuring categorized expense management, item budgeting, and offline-first local state storage.',
    tags: ['React Native', 'Expo Router'],
    link: 'https://github.com/vannrosales',
    year: 'Mobile Application Engineer',
    image: '/projects/amo-na.png'
  }
];

export default function Content() {
  const [showGradPic, setShowGradPic] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 pb-12 overflow-hidden">
      
      <section className="relative mb-32 pt-12 lg:pt-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Text Content */}
        <div className="lg:w-1/2 z-10 relative">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-90">Available For New Projects</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.1]">
            Giovanni<br />Hanz Guino
          </h1>
          
          <h2 className="text-lg sm:text-xl font-medium opacity-80 mb-8 max-w-md leading-relaxed">
            (Vann Rosales) — I build scalable, minimalist, and unique digital experiences.
          </h2>
          
          <p className="max-w-md text-sm sm:text-base opacity-60 leading-relaxed mb-10">
            Whether you have a web platform to launch, a mobile MVP to build, or an existing system to revamp—I'm open to discussing opportunities and collaborations.
          </p>
          
          <a 
            href="mailto:giovannihanzguino@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Let's Collaborate
          </a>
        </div>
        
        {/* Image Content - Standing tall and bleeding slightly to the right */}
        <div className="w-full lg:w-1/2 relative lg:-mr-12 xl:-mr-32 z-0">
          {/* Subtle fade at the bottom for mobile so text isn't lost if stacked */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent z-10 lg:hidden rounded-3xl"></div>
          
          <div className="relative">
            {/* Decorative background accent */}
            <div className="absolute -inset-4 bg-black/5 dark:bg-white/5 rounded-[2.5rem] lg:rounded-[3.5rem] -rotate-3 transition-transform duration-700 hover:rotate-0"></div>
            
            <div 
              className="relative w-full h-[500px] lg:h-[750px] cursor-pointer group"
              style={{ perspective: '1200px' }}
              onClick={() => setShowGradPic(!showGradPic)}
              title="Click to see my graduation picture!"
            >
              <div className={`relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl rounded-3xl lg:rounded-[3rem] [transform-style:preserve-3d] ${showGradPic ? '[transform:rotateY(180deg)]' : 'group-hover:scale-[1.02]'}`}>
                
                {/* Front (Body Pic) */}
                <img 
                  src={bodyPic} 
                  alt="Giovanni Hanz Guino standing at night" 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl lg:rounded-[3rem] filter contrast-[1.05] brightness-95 [backface-visibility:hidden]"
                  style={{ objectPosition: 'center 40%' }}
                />

                {/* Back (Graduation Pic) */}
                <img 
                  src={vannPic} 
                  alt="Giovanni Hanz Guino Graduation" 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl lg:rounded-[3rem] filter contrast-[1.05] brightness-95 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-32 scroll-mt-32 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-32 scroll-mt-32 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
          Services & Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ProjectCard key={`service-${index}`} {...service} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-32 mb-32 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
          Endorsements
        </h2>
        <div className="p-8 lg:p-12 border border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 max-w-3xl relative overflow-hidden">
          {/* Decorative quote mark */}
          <span className="absolute top-4 right-8 text-8xl font-serif opacity-10 pointer-events-none">"</span>
          
          <p className="relative italic opacity-90 leading-relaxed mb-8 text-base sm:text-lg z-10">
            "I've had the opportunity to work with him. He has an impressive ability to quickly learn new technologies and adapt to unfamiliar tech stacks with ease. He communicates effectively, is proactive in identifying architectural issues, and contributes thoughtfully. He is a skilled developer who would be a valuable addition to any team."
          </p>
          <div className="relative z-10">
            <p className="font-bold text-lg">Lorenz Gabriel Sabalza</p>
            <p className="text-xs opacity-70 uppercase tracking-widest mt-1">Lead Web Developer</p>
          </div>
        </div>
      </section>
      
      <footer className="pt-8 pb-12 border-t border-black/10 dark:border-white/10 opacity-40 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10">
        <p>
          Built with React & Tailwind CSS. Minimalist 1-Pager.
        </p>
        <p className="mt-4 sm:mt-0 font-mono">
          © {new Date().getFullYear()} Giovanni Hanz Guino
        </p>
      </footer>
    </main>
  );
}
