import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import vannPic from '../../assets/vann-pic.jpg';
import bodyPic from '../../assets/body-pic.jpg';
import thirdPic from '../../assets/third-pic.png';

export default function Hero() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative mb-32 pt-12 lg:pt-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
      
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
        
        <div className="flex flex-wrap gap-2 mb-10 max-w-md">
          {['Vue.js 3', 'React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'React Native'].map(tech => (
            <span key={tech} className="px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-70 cursor-default hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="mailto:giovannihanzguino@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Let's Collaborate
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Giovanni_Guino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-black/20 dark:border-white/20 text-black dark:text-white font-bold text-sm tracking-widest uppercase rounded-full hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 transition-all shadow-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
      
      {/* Image Content - Standing tall and bleeding slightly to the right */}
      <motion.div style={{ y, opacity }} className="w-full lg:w-1/2 relative lg:-mr-12 xl:-mr-32 z-0">
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
      </motion.div>
    </section>
  );
}

