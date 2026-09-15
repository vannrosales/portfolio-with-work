import { useState } from 'react';
import ProjectCard from './ProjectCard';
import bodyPic from '../assets/body-pic.jpg';
import vannPic from '../assets/vann-pic.jpg';
import thirdPic from '../assets/third-pic.png';

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
  },
  {
    title: 'EVSU — COE Dean\'s Office System',
    description: 'Internal administrative management tool built to digitize student service requests, meeting records, and college department operations.',
    tags: ['Tailwind CSS', 'Vanilla JS'],
    link: 'https://github.com/vannrosales',
    year: 'Institutional Full-Stack Developer',
    image: '/projects/deans-office.jpg'
  },
  {
    title: 'Story Stream Digital Publication',
    description: 'Digital publication and content curation platform built with the Luma Framework for seamless online media delivery.',
    tags: ['Luma Framework', 'PHP'],
    link: 'https://stroystream.online/?i=1',
    year: 'Web Developer & UI Designer',
    image: '/projects/story-stream.jpg'
  },
  {
    title: 'Vann Birthday Celebration App',
    description: 'Interactive real-time guest experience app with photo memories, Firebase live message board, and guestbook.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://vann-birthday-app.netlify.app/',
    year: 'Frontend / Full-Stack Engineer',
    image: '/projects/vann-birthday.png'
  },
  {
    title: 'V and G Smart System Platform',
    description: 'Community governance portal designed to streamline civic engagement, transparency, and local administration with dual-portal auth.',
    tags: ['React', 'Tailwind CSS', 'Authentication'],
    link: 'https://v-and-g-smart-system.netlify.app/',
    year: 'Lead Full-Stack Developer',
    image: '/projects/v-and-g.png'
  },
  {
    title: 'PickleBook — Leyte Court Reservations',
    description: 'Pickleball court reservation and management platform featuring venue discovery, time slot booking, and automated payment splits.',
    tags: ['Full-Stack', 'Reservations'],
    link: 'https://github.com/vannrosales',
    year: 'Full-Stack Developer',
    image: '/projects/picklebook.png'
  }
];

const experiences = [
  {
    company: 'Nexxus Software Corporation',
    role: 'Full-Stack Developer / Software Developer',
    date: 'SEPT 2026 — PRESENT',
    type: 'Project-Based • Remote / Hybrid',
    initials: 'NSC',
    descriptions: [
      'Architecting, developing, and deploying scalable web applications from the ground up utilizing ReactJS, Vue.js, Laravel, and modern database technologies.',
      'Experienced in building full-stack solutions, configuring robust backend APIs, managing database migrations, implementing secure authentication policies, and streamlining development workflows with modern tooling.'
    ],
    tags: ['Laravel', 'Vue.js 3', 'ReactJS', 'React Native', 'Supabase', 'Tailwind CSS', 'TypeScript', 'MySQL', 'PostgreSQL', 'RESTful APIs', 'Git', 'CI/CD', 'Inertia.js', 'Vite', 'DigitalOcean']
  },
  {
    company: 'Independent / Freelance',
    role: 'Full-Stack Developer & IT Specialist',
    date: 'OCT 2025 — PRESENT',
    type: 'Contract • Remote / Hybrid',
    initials: 'VN',
    descriptions: [
      'Architecting and deploying customized web and mobile applications utilizing Vue 3, React Native, Laravel, and Supabase.',
      'Configuring developer tooling, database migrations, authentication policies, and automated deployment pipelines.'
    ],
    tags: ['Laravel', 'Vue.js 3', 'React Native', 'Supabase', 'Tailwind CSS', 'TypeScript']
  },
  {
    company: 'EVSU — College of Engineering',
    role: 'IT Staff & Systems Developer',
    date: '2023 — 2024',
    type: 'Internship • Onsite',
    initials: 'EV',
    descriptions: [
      "Engineered the COE Dean's Office System to digitize internal administrative documents, records, and student inquiries.",
      'Delivered on-site hardware and software troubleshooting for college administration and department deans during operations.'
    ],
    tags: ['CodeIgniter', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Technical Support']
  },
  {
    company: 'Eastern Visayas State University',
    role: 'Lead Full-Stack Developer',
    date: '2023 — 2024',
    type: 'Capstone • Onsite',
    initials: 'EV',
    descriptions: [],
    tags: []
  }
];

const endorsements = [
  {
    quote: "I've worked closely with Giovanni, and their ability to pick up new tech on the fly is incredible. When we started using Tailwind CSS, they mastered it almost overnight, building clean, responsive interfaces without missing a beat. They have a great natural instinct for scripting too, writing clean code that seriously sped up our workflow.",
    name: "Danil Ampatin",
    role: "Web & Technical Support Specialist",
    year: "2026"
  },
  {
    quote: "When I was helping Giovanni learn Vue.js and React.js, it was really cool to see his progress. We started from scratch with framework setups and moved into components, state, and handling events. What I appreciated most was how they didn't just listen—he immediately tried building clean, responsive interfaces. A solid, practical learner who puts in the work.",
    name: "JP",
    role: "Software Engineer",
    year: "2026"
  },
  {
    quote: "Giovanni is one of the best developers I've had the opportunity to work with. He has an impressive ability to quickly learn new technologies and adapt to unfamiliar tech stacks with ease. He communicates effectively, is proactive in identifying architectural issues, and contributes thoughtfully. He is a skilled developer who would be a valuable addition to any team.",
    name: "Lorenz Gabriel Sabalza",
    role: "Lead Web Developer",
    year: "2026"
  }
];

export default function Content() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 pb-12 overflow-hidden">
      
      <section className="relative mb-32 pt-12 lg:pt-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Text Content */}
        <div className="lg:w-1/2 z-10 relative">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">
              Full-Stack Developer & Agentic Coding
            </span>
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
          
            <div 
              className="relative w-full h-[500px] lg:h-[750px] cursor-pointer group"
              style={{ perspective: '1200px' }}
              onClick={() => setActiveCardIndex((prev) => (prev + 1) % 3)}
              title="Click to cycle pictures!"
            >
              {/* Card 3 (thirdPic) */}
              <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out shadow-2xl rounded-3xl lg:rounded-[3rem] overflow-hidden ${
                activeCardIndex === 2 ? 'z-30 transform-none opacity-100' : 
                activeCardIndex === 1 ? 'z-20 opacity-70 [transform:rotate(-4deg)_translate3d(1.5rem,1.5rem,-100px)] group-hover:[transform:rotate(-6deg)_translate3d(2.5rem,2.5rem,-100px)]' :
                'z-10 opacity-40 [transform:rotate(4deg)_translate3d(-1.5rem,2rem,-200px)] group-hover:[transform:rotate(6deg)_translate3d(-2.5rem,3rem,-200px)]'
              }`}>
                <img src={thirdPic} alt="Giovanni Hanz Guino - Third Pic" className="w-full h-full object-cover filter contrast-[1.05] brightness-95" style={{ objectPosition: 'center 40%' }} />
              </div>
              
              {/* Card 2 (vannPic) */}
              <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out shadow-2xl rounded-3xl lg:rounded-[3rem] overflow-hidden ${
                activeCardIndex === 1 ? 'z-30 transform-none opacity-100' : 
                activeCardIndex === 0 ? 'z-20 opacity-70 [transform:rotate(-4deg)_translate3d(1.5rem,1.5rem,-100px)] group-hover:[transform:rotate(-6deg)_translate3d(2.5rem,2.5rem,-100px)]' :
                'z-10 opacity-40 [transform:rotate(4deg)_translate3d(-1.5rem,2rem,-200px)] group-hover:[transform:rotate(6deg)_translate3d(-2.5rem,3rem,-200px)]'
              }`}>
                <img src={vannPic} alt="Giovanni Hanz Guino Graduation" className="w-full h-full object-cover filter contrast-[1.05] brightness-95" style={{ objectPosition: 'center 20%' }} />
              </div>
              
              {/* Card 1 (bodyPic) */}
              <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out shadow-2xl rounded-3xl lg:rounded-[3rem] overflow-hidden ${
                activeCardIndex === 0 ? 'z-30 transform-none opacity-100' : 
                activeCardIndex === 2 ? 'z-20 opacity-70 [transform:rotate(-4deg)_translate3d(1.5rem,1.5rem,-100px)] group-hover:[transform:rotate(-6deg)_translate3d(2.5rem,2.5rem,-100px)]' :
                'z-10 opacity-40 [transform:rotate(4deg)_translate3d(-1.5rem,2rem,-200px)] group-hover:[transform:rotate(6deg)_translate3d(-2.5rem,3rem,-200px)]'
              }`}>
                <img src={bodyPic} alt="Giovanni Hanz Guino standing at night" className="w-full h-full object-cover filter contrast-[1.05] brightness-95" style={{ objectPosition: 'center 40%' }} />
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

      <section id="experience" className="mb-32 scroll-mt-32 relative z-10">
        <div className="relative border-l border-black/10 dark:border-white/10 ml-6 md:ml-8 pl-8 md:pl-16 py-4 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Badge */}
              <div className="absolute -left-[3.5rem] md:-left-[5.5rem] top-0 w-12 h-12 rounded-xl bg-[var(--bg-color)] border border-black/10 dark:border-white/10 flex items-center justify-center font-mono text-xs font-bold shadow-sm z-10">
                {exp.initials}
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                  <span className="font-mono text-xs opacity-60 tracking-wider">{exp.type}</span>
                </div>
                
                <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                <p className="font-mono text-[10px] opacity-50 tracking-widest mb-6 uppercase">{exp.date}</p>
                
                {exp.descriptions.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {exp.descriptions.map((desc, i) => (
                      <p key={i} className="opacity-80 leading-relaxed text-sm max-w-3xl">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
                
                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-md text-[10px] font-mono opacity-70">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="github" className="scroll-mt-32 mb-32 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
          Open Source & Activity
        </h2>
        <div className="p-8 lg:p-12 border border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 group hover:border-black/20 dark:hover:border-white/20 transition-all">
          <div className="flex-1 space-y-4">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">400+</h3>
            <h4 className="text-xl font-bold opacity-80">GitHub Contributions</h4>
            <p className="opacity-60 leading-relaxed max-w-md pt-2 text-sm sm:text-base">
              Passionate about open-source, continuous learning, and building in public. From experimental personal projects and UI components to full-scale web applications.
            </p>
            <a 
              href="https://github.com/vannrosales" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs opacity-80 hover:opacity-100 hover:text-emerald-500 transition-colors mt-4"
            >
              View GitHub Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
          
          <div className="w-full lg:w-auto overflow-hidden pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            {/* Live GitHub Contribution Graph */}
            <div className="w-full sm:w-[600px] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <img 
                src="https://ghchart.rshah.org/10b981/vannrosales" 
                alt="Giovanni's GitHub Contribution Chart" 
                className="w-full h-auto dark:invert dark:hue-rotate-180" 
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 mb-32 relative z-10 w-full">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
          Endorsements
        </h2>
        
        <div className="flex flex-col gap-6 lg:gap-8">
          {endorsements.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col p-8 lg:p-12 border border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors relative group overflow-hidden"
            >
              <div className="absolute top-8 right-8 opacity-[0.03] dark:opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
              </div>
              <p className="relative italic opacity-90 leading-relaxed mb-10 text-base sm:text-lg z-10 max-w-4xl">
                "{item.quote}"
              </p>
              <div className="relative mt-auto flex justify-between items-end gap-4 z-10">
                <div>
                  <p className="font-bold text-sm sm:text-base">{item.name}</p>
                  <p className="text-[10px] sm:text-xs opacity-60 uppercase tracking-widest mt-1 leading-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
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
