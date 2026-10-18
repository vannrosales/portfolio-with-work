import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gradPic from '../../assets/grad-pic-no-bg.png';
import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

const ease = [0.16, 1, 0.3, 1];

const dossier = [
  { label: 'Discipline', value: 'Full-Stack Web Developer & AI Agentic' },
  { label: 'Education', value: 'Eastern Visayas State University — COE' },
  { label: 'Focus', value: 'Web Apps, Offline-First Mobile, Systems' },
  { label: 'Location', value: 'Tacloban City, Philippines (UTC+8)' },
];

export default function About() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={1}>About <em>me</em></SectionHead>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Clean Portrait — pure image with curtain reveal & subtle scroll parallax, no text around it */}
        <div ref={imageRef} className="lg:col-span-5">
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.15, ease }}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-line/40 via-line/20 to-line/50 dark:from-line/30 dark:via-line/15 dark:to-line/40 ring-1 ring-inset ring-fg/10"
          >
            <motion.img
              src={gradPic}
              alt="Giovanni Hanz Guino"
              style={{ y: imgY }}
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
            />
          </motion.div>
        </div>

        {/* Narrative & Editorial Dossier */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-12">
          <ScrollReveal delay={0.1}>
            <p className="font-serif text-3xl sm:text-[2.65rem] leading-[1.15] tracking-[-0.01em]">
              I turn ideas into <em>reliable</em> digital products — with clean architecture, solid data foundations, and code built to <em>last</em>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <p className="text-muted leading-relaxed text-base sm:text-lg max-w-lg">
              Full-stack &amp; mobile developer focused on responsive web systems and offline-first apps.
              Outside the editor, I tune workstations, explore UI patterns, and compete in tactical esports.
            </p>
          </ScrollReveal>

          {/* Dossier Table with staggered Framer Motion reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            className="border-t border-line pt-6"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
              Dossier
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {dossier.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                  }}
                  className="border-b border-line/60 pb-3"
                >
                  <dt className="text-xs text-muted font-mono">{item.label}</dt>
                  <dd className="font-medium text-sm mt-1">{item.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
