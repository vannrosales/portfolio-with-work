import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, yOffset = 30, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: delay, ease: [0.2, 0.7, 0.2, 1] }} // Soft editorial easing
    >
      {children}
    </motion.div>
  );
}
