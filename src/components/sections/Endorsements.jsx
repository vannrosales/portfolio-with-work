import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { endorsements } from '../../data';
import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

const pad = (n) => String(n).padStart(2, '0');
const ease = [0.16, 1, 0.3, 1];

export default function Endorsements() {
  const [[current, direction], setCurrent] = useState([0, 1]);
  const endorsement = endorsements[current];
  const go = (step) =>
    setCurrent([(current + step + endorsements.length) % endorsements.length, step]);

  return (
    <section id="endorsements" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={6}>Kind <em>words</em></SectionHead>
      <ScrollReveal className="grid gap-10 md:grid-cols-[1fr_12rem]">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 28, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction * -28, filter: 'blur(4px)' }}
              transition={{ duration: 0.55, ease }}
            >
              <blockquote className="font-serif italic text-2xl sm:text-4xl leading-[1.25] tracking-[-0.01em]">
                &ldquo;{endorsement.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm">
                {endorsement.name} <span className="text-muted">— {endorsement.role}, {endorsement.year}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex md:flex-col md:items-end justify-between md:justify-start gap-6 text-sm">
          <span className="font-serif text-3xl tabular-nums">
            {pad(current + 1)}
            <span className="text-muted italic"> / {pad(endorsements.length)}</span>
          </span>
          <div className="flex gap-5">
            <button onClick={() => go(-1)} className="link">Prev</button>
            <button onClick={() => go(1)} className="link">Next</button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
