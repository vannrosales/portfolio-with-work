import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionHead from '../SectionHead';

const bootLine = '> loading hobbies for giovanni... done.';

const hobbies = [
  'Tuning workstation hardware',
  'Exploring modern design patterns',
  'Building in public',
  'Learning mobile app development',
  'Singing — especially R&B and Pop',
  'Playing Valorant (Immortal 3 peak)',
  'Reading tech blogs and articles',
  'Dancing',
];

export default function Hobbies() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Type the boot line first, then reveal the list.
  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= bootLine.length) {
        setDisplayedText(bootLine.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <section id="hobbies" className="py-24 sm:py-32 scroll-mt-10" ref={containerRef}>
      <SectionHead n={8}>Off the <em>clock</em></SectionHead>

      <p className="font-mono text-xs text-muted mb-10 h-4">
        {displayedText}
        {!isTypingComplete && <span className="inline-block w-1.5 h-3.5 bg-muted animate-pulse align-middle ml-1" />}
      </p>

      <p className="font-serif text-4xl sm:text-6xl leading-[1.12] tracking-[-0.01em]">
        {hobbies.map((hobby, i) => (
          <span
            key={hobby}
            className={`transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            {i % 2 ? <em>{hobby}</em> : hobby}
            {i < hobbies.length - 1 && <span className="text-muted font-sans text-2xl sm:text-4xl align-middle mx-3">/</span>}
          </span>
        ))}
        <span className="text-muted">.</span>
      </p>
    </section>
  );
}
