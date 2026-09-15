import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, yOffset = 50, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like easing
    >
      {children}
    </motion.div>
  );
}

