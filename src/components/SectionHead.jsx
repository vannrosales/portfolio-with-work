import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

/** Shared editorial section heading: animated hairline, masked serif title, and index number. */
export default function SectionHead({ n, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="relative pt-4 sm:pt-6 mb-8 sm:mb-16"
    >
      {/* Hairline that draws itself from left to right */}
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 1.1, ease } },
        }}
        className="absolute inset-x-0 top-0 h-px bg-line origin-left"
        aria-hidden="true"
      />

      <div className="flex items-end justify-between gap-6">
        <h2 className="font-serif text-5xl sm:text-7xl leading-none tracking-[-0.02em] overflow-hidden pb-[0.08em]">
          <motion.span
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%', transition: { duration: 0.95, delay: 0.1, ease } },
            }}
            className="block"
          >
            {children}
          </motion.span>
        </h2>

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease } },
          }}
          className="text-xs text-muted tabular-nums shrink-0"
        >
          ({String(n).padStart(2, '0')})
        </motion.span>
      </div>
    </motion.div>
  );
}
