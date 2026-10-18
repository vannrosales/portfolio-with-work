import { motion } from 'framer-motion';

const items = [
  'React',
  'Vue 3',
  'Laravel',
  'React Native',
  'TypeScript',
  'Supabase',
  'Tauri',
  'PostgreSQL',
  'Tailwind CSS',
  'Next.js',
];

/** Full-bleed infinite scrolling banner with rotating asterisks. */
export default function Marquee() {
  const row = (keyPrefix, hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${keyPrefix}-${item}`} className="flex items-center">
          <span
            className={`font-serif text-4xl sm:text-6xl px-6 sm:px-10 whitespace-nowrap transition-opacity duration-300 hover:opacity-60 ${
              i % 2 ? 'italic' : ''
            }`}
          >
            {item}
          </span>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-muted text-xl select-none"
            aria-hidden="true"
          >
            ✳
          </motion.span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-line py-6 sm:py-8 marquee-mask">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {row('a', false)}
        {row('b', true)}
      </motion.div>
    </div>
  );
}
