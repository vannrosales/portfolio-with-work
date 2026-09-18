import { useRef } from 'react';
import { motion } from 'framer-motion';
import vannPic from '../../assets/grad-pic-no-bg.png';

export default function Hero() {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 } },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: -4, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 } 
    },
  };

  return (
    <section ref={ref} className="relative w-full min-h-screen mb-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between overflow-hidden pt-12 lg:pt-0">

      {/* Left Side: Massive Architectural Text */}
      <motion.div 
        className="relative z-20 w-full lg:w-[55%] px-6 md:px-12 lg:pr-0 lg:pl-12 xl:pl-24 mt-0 md:mt-10 lg:-mt-12 order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Giant Name */}
        <motion.h1 variants={itemVariants} className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter leading-[0.85] mb-4 md:mb-6">
          GIOVANNI<br/>HANZ<br/>GUINO<span className="text-emerald-500">.</span>
        </motion.h1>
        
        {/* Bio / Description */}
        <motion.p variants={itemVariants} className="max-w-xl text-base md:text-lg opacity-70 font-medium mb-8 md:mb-10 leading-relaxed border-l-2 border-black/10 dark:border-white/10 pl-6">
          Architecting scalable full-stack applications and engineering intelligent <strong className="text-emerald-600 dark:text-emerald-400">Agentic AI</strong> solutions.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pl-6">
          <a 
            href="mailto:giovannihanzguino@gmail.com" 
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            Deploy Me
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Giovanni_Guino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-4 border-2 border-black/20 dark:border-white/20 text-black dark:text-white font-bold text-sm tracking-widest uppercase hover:border-black dark:hover:border-white transition-all backdrop-blur-md"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side: The Image & Floating Code */}
      <motion.div 
        className="relative lg:absolute mt-12 lg:mt-0 right-0 lg:-right-12 bottom-0 w-full lg:w-[50%] xl:w-[45%] h-[50vh] lg:h-full z-10 flex justify-center lg:justify-end items-end pointer-events-none opacity-100 order-2 lg:order-none"
        variants={rightSideVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* User Image anchored to bottom right */}
        <img 
          src={vannPic} 
          alt="Giovanni Hanz Guino" 
          className="h-full w-full object-contain object-bottom lg:object-right-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />

        {/* Floating Glassmorphism Code Block */}
        <motion.div 
          className="absolute top-[5%] lg:top-[10%] left-[-15%] xl:left-[-25%] z-30 p-5 rounded-lg bg-white/30 dark:bg-black/50 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)] hidden lg:block hover:rotate-0 transition-transform duration-500 pointer-events-auto"
          variants={floatVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-1.5 mb-3 border-b border-black/10 dark:border-white/10 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <span className="ml-2 text-[9px] font-mono opacity-50">engineer.js</span>
          </div>
          <pre className="text-xs font-mono opacity-100 text-left leading-loose">
            <code className="text-purple-600 dark:text-purple-400 font-bold">const</code> <code className="text-blue-600 dark:text-blue-400 font-bold">developer</code> = {'{\n'}
            {'  '}role: <code className="text-orange-600 dark:text-orange-300">"Full-Stack"</code>,{'\n'}
            {'  '}specialty: <code className="text-orange-600 dark:text-orange-300">"Agentic AI"</code>,{'\n'}
            {'  '}status: <code className="text-emerald-600 dark:text-emerald-400 font-bold">true</code>{'\n'}
            {'}'};
          </pre>
        </motion.div>
        
      </motion.div>

    </section>
  );
}

