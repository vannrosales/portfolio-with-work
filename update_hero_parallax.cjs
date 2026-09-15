const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Hero.jsx', 'utf8');

// Replace imports
content = content.replace("import { useState } from 'react';", "import { useState, useRef } from 'react';\nimport { motion, useScroll, useTransform } from 'framer-motion';");

// Replace export default function Hero() { ... }
content = content.replace(
  "export default function Hero() {\n  const [activeCardIndex, setActiveCardIndex] = useState(0);",
  `export default function Hero() {\n  const [activeCardIndex, setActiveCardIndex] = useState(0);\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({\n    target: ref,\n    offset: ["start start", "end start"]\n  });\n  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);\n  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);`
);

// Add ref to section
content = content.replace('<section className="', '<section ref={ref} className="');

// Wrap the image container in motion.div
content = content.replace(
  '<div className="w-full lg:w-1/2 relative lg:-mr-12 xl:-mr-32 z-0">',
  '<motion.div style={{ y, opacity }} className="w-full lg:w-1/2 relative lg:-mr-12 xl:-mr-32 z-0">'
);
content = content.replace(
  '</div>\n    </section>',
  '</motion.div>\n    </section>'
);

fs.writeFileSync('src/components/sections/Hero.jsx', content);
