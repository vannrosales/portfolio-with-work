import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function useManilaClock() {
  const format = () =>
    new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit' }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const time = useManilaClock();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line text-fg transition-colors duration-300"
      >
        <motion.div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-fg" style={{ scaleX }} />
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-sm">
          <Logo onClick={close} />
          <span className="hidden md:block tabular-nums text-muted">Philippines — {time}</span>
          <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="link hidden sm:inline">{l.label}</a>
            ))}
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="link sm:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg sm:hidden flex flex-col justify-between px-6 pt-5 pb-12"
          >
            <div className="flex items-center justify-between h-11 border-b border-line pb-4">
              <Logo onClick={close} />
              <button
                onClick={close}
                className="link text-sm uppercase tracking-wider px-2 py-1"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3 my-auto py-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-5xl sm:text-6xl leading-tight hover:italic active:scale-95 transition-transform origin-left"
                >
                  <span className="font-sans text-xs text-muted align-top mr-3 tabular-nums">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-4 border-t border-line text-xs text-muted">
              <span>Tacloban City, PH</span>
              <span className="tabular-nums">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
