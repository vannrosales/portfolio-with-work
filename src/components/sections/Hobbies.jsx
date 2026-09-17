import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const textContent = `> Fetching user data...
> Loading hobbies for Giovanni...

- Tuning workstation hardware 
- Exploring modern design patterns 
- Building in public 
- Learning Mobile App Development 
- Singing (especially R&B and Pop)
- Playing Valorant (Immortal 3 PEAK)
- Reading tech blogs and articles
- Dancing

> Execution finished.`;

export default function Hobbies() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= textContent.length) {
        setDisplayedText(textContent.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 30); 

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <section id="hobbies" className="mb-32 scroll-mt-32 relative z-10" ref={containerRef}>
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Hobbies & Interests
      </h2>
      
      {/* Minimalist Monochrome Terminal */}
      <div className="w-full rounded-xl overflow-hidden border border-black/20 dark:border-white/10 shadow-sm bg-zinc-50 dark:bg-zinc-900 font-mono text-sm sm:text-base">
        
        {/* Header Bar */}
        <div className="flex items-center px-4 py-3 bg-black/5 dark:bg-white/5 border-b border-black/20 dark:border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
          </div>
          <div className="flex-1 text-center text-black/50 dark:text-white/50 text-xs font-bold tracking-widest uppercase">
            hobbies.txt
          </div>
        </div>
        
        {/* Terminal Area */}
        <div className="p-6 overflow-x-auto">
          <div className="flex">
            {/* Line Numbers */}
            <div className="flex flex-col text-right pr-4 text-black/30 dark:text-white/30 select-none border-r border-black/20 dark:border-white/10 mr-4">
              {[...Array(15)].map((_, i) => (
                <span key={i} className="leading-relaxed">{i + 1}</span>
              ))}
            </div>
            
            {/* Text Content */}
            <div className="flex-1 relative">
              <pre className="text-black/80 dark:text-white/80 leading-relaxed whitespace-pre-wrap break-words font-medium">
                {displayedText}
                {!isTypingComplete && (
                  <span className="inline-block w-2 h-5 bg-black/80 dark:bg-white/80 animate-pulse align-middle ml-1 -mt-1"></span>
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

