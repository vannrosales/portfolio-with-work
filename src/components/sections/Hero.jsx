import { useRef } from 'react';
import vannPic from '../../assets/grad-pic-no-bg.png';

export default function Hero() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative w-full h-[90vh] min-h-[700px] mb-20 flex items-center overflow-hidden">
      
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Left Side: Massive Architectural Text */}
      <div className="relative z-20 w-full lg:w-[60%] pl-6 md:pl-12 xl:pl-24 pt-20">
        
        {/* Terminal Status */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border-l-2 border-emerald-500 bg-emerald-500/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            System_Status: Online & Ready
          </span>
        </div>
        
        {/* Giant Name */}
        <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] font-black tracking-tighter leading-[0.85] mb-6">
          GIOVANNI<br/>HANZ<br/>GUINO<span className="text-emerald-500">.</span>
        </h1>
        
        {/* Bio / Description */}
        <p className="max-w-xl text-base md:text-lg opacity-70 font-medium mb-10 leading-relaxed border-l-2 border-black/10 dark:border-white/10 pl-6">
          Architecting scalable full-stack applications and engineering intelligent <strong className="text-emerald-600 dark:text-emerald-400">Agentic AI</strong> solutions. Currently shipping code at Nexxus Software Corporation.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pl-6">
          <a 
            href="mailto:giovannihanzguino@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            Deploy Me
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Giovanni_Guino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 border-2 border-black/20 dark:border-white/20 text-black dark:text-white font-bold text-sm tracking-widest uppercase hover:border-black dark:hover:border-white transition-all backdrop-blur-md"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            Download.exe
          </a>
        </div>
      </div>

      {/* Right Side: The Image & Floating Code */}
      <div className="absolute right-0 bottom-0 w-full lg:w-[50%] h-[90%] z-10 flex justify-end items-end pointer-events-none opacity-30 lg:opacity-100">
        
        {/* Floating Glassmorphism Code Block */}
        <div className="absolute top-[10%] left-[10%] z-30 p-5 rounded-lg bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl hidden lg:block rotate-[-4deg] hover:rotate-0 transition-transform duration-500 pointer-events-auto">
          <div className="flex items-center gap-1.5 mb-3 border-b border-black/10 dark:border-white/10 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <span className="ml-2 text-[9px] font-mono opacity-50">engineer.js</span>
          </div>
          <pre className="text-xs font-mono opacity-90 text-left leading-loose">
            <code className="text-purple-500 dark:text-purple-400">const</code> <code className="text-blue-600 dark:text-blue-400">developer</code> = {'{\n'}
            {'  '}role: <code className="text-orange-500 dark:text-orange-300">'Full-Stack'</code>,{'\n'}
            {'  '}specialty: <code className="text-orange-500 dark:text-orange-300">'Agentic AI'</code>,{'\n'}
            {'  '}status: <code className="text-emerald-500 dark:text-emerald-400">true</code>{'\n'}
            {'}'};
          </pre>
        </div>

        {/* User Image anchored to bottom */}
        <img 
          src={vannPic} 
          alt="Giovanni Hanz Guino" 
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl translate-x-12 xl:translate-x-0"
        />
      </div>

    </section>
  );
}

