import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import pixelPic from '../../assets/avatar.png';
import pixelPicBlink from '../../assets/avatar-blink.png';

const words = ['quiet.', 'reliable.', 'human.', 'timeless.'];
const ease = [0.16, 1, 0.3, 1];

function Line({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Living pixel-art portrait pill that blinks naturally (with occasional double-blinks) and responds on hover/click. */
function PixelAvatar() {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeoutId;
    const timers = [];

    const triggerBlink = (double = false) => {
      setIsBlinking(true);
      const t1 = setTimeout(() => {
        setIsBlinking(false);
        if (double) {
          const t2 = setTimeout(() => {
            setIsBlinking(true);
            const t3 = setTimeout(() => setIsBlinking(false), 130);
            timers.push(t3);
          }, 110);
          timers.push(t2);
        }
      }, 140);
      timers.push(t1);
    };

    const scheduleNext = () => {
      const nextDelay = 2400 + Math.random() * 2600;
      timeoutId = setTimeout(() => {
        triggerBlink(Math.random() < 0.28);
        scheduleNext();
      }, nextDelay);
    };

    scheduleNext();
    return () => {
      clearTimeout(timeoutId);
      timers.forEach(clearTimeout);
    };
  }, []);

  const manualBlink = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 160);
  };

  return (
    <motion.span
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.45, ease }}
      whileHover={{ scale: 1.08, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={manualBlink}
      onClick={manualBlink}
      className="group relative inline-block align-middle h-[0.78em] w-[1.12em] -mt-[0.10em] rounded-full overflow-hidden bg-line cursor-pointer shrink-0 select-none"
    >
      <motion.span
        animate={{ y: ['0%', '-2.2%', '0%'] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 block"
      >
        <img
          src={pixelPic}
          alt="Giovanni Hanz Guino"
          style={{ imageRendering: 'pixelated' }}
          className="absolute inset-0 h-full w-full object-cover object-[50%_20%] scale-125 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.45]"
        />
        <img
          src={pixelPicBlink}
          alt=""
          aria-hidden="true"
          style={{ imageRendering: 'pixelated' }}
          className={`absolute inset-0 h-full w-full object-cover object-[50%_20%] scale-125 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.45] ${
            isBlinking ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.span>
    </motion.span>
  );
}

/** Italic word that swaps every few seconds with a smooth Framer Motion slide + blur. */
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid overflow-hidden align-bottom pb-[0.06em]" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.em
          key={words[i]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-95%', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.55, ease }}
          className="inline-block"
        >
          {words[i]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-12">

      {/* Headline */}
      <div className="flex-1 flex flex-col justify-center py-8 sm:py-14">
        <h1 className="font-serif text-[clamp(3.15rem,13vw,9.5rem)] leading-[0.94] tracking-[-0.035em] break-words">
          <Line delay={0.15}>
            Giovanni <PixelAvatar /> <em>builds</em>
          </Line>
          <Line delay={0.27}>considered software</Line>
          <Line delay={0.39}>
            <span className="text-muted">that feels</span> <RotatingWord />
          </Line>
        </h1>
      </div>

      {/* Footer row of the cover */}
      <div className="relative pt-6 text-sm">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.65, ease }}
          className="absolute inset-x-0 top-0 h-px bg-line origin-left"
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.75 } },
          }}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-[1.2fr_1fr_auto] items-start sm:items-end"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="text-muted max-w-sm leading-relaxed"
          >
            I design and engineer web platforms, dashboards and offline-first mobile apps with
            React, Vue, Laravel and React Native — from schema to final pixel.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="flex items-start gap-3"
          >
            <span className="relative mt-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fg" />
            </span>
            <span>
              Taking on new projects
              <br />
              <span className="text-muted">Contract · Remote / Hybrid</span>
            </span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="flex items-end gap-8"
          >
            <div className="flex flex-col gap-1.5">
              <a href="#work" className="link font-serif italic text-xl leading-none self-start">See the work</a>
              <a href="/resume.pdf" download="Giovanni_Guino_Resume.pdf" className="link text-muted self-start">Résumé ↓</a>
            </div>
            {/* Scroll cue */}
            <a href="#about" className="hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted" aria-label="Scroll to About">
              <span className="[writing-mode:vertical-rl]">Scroll</span>
              <span className="relative h-12 w-px bg-line overflow-hidden">
                <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-fg" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
