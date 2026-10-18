import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data';
import ProjectCard from '../ProjectCard';
import SectionHead from '../SectionHead';

const ease = [0.16, 1, 0.3, 1];

const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
];

function getCategory(project) {
  const str = (project.tags || []).join(' ').toLowerCase();
  if (str.includes('native') || str.includes('expo')) return 'mobile';
  if (str.includes('tauri') || str.includes('rust')) return 'desktop';
  return 'web';
}

export default function Projects() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => getCategory(p) === filter)),
    [filter]
  );

  // Cursor-trailing preview for the Index view
  useEffect(() => {
    if (viewMode !== 'list') return;
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, [viewMode]);

  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={3}>Selected <em>work</em></SectionHead>

      {/* Typographic controls: filters on the left with shared layoutId underline, view switch on the right */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div className="flex flex-wrap items-baseline gap-x-7 gap-y-2" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => {
            const count = cat.id === 'all' ? projects.length : projects.filter((p) => getCategory(p) === cat.id).length;
            if (!count) return null;
            const selected = filter === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selected}
                onClick={() => { setFilter(cat.id); setActive(null); }}
                className={`relative pb-1 font-serif text-2xl sm:text-3xl transition-colors duration-300 ${selected ? 'italic text-fg' : 'text-muted hover:text-fg'}`}
              >
                {cat.label}
                <sup className="font-sans not-italic text-[10px] ml-1 tabular-nums">{String(count).padStart(2, '0')}</sup>
                {selected && (
                  <motion.span
                    layoutId="projectFilterUnderline"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                    className="absolute inset-x-0 bottom-0 h-px bg-fg"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-baseline gap-3 text-sm">
          <span className="text-muted">View</span>
          {['grid', 'list'].map((m, i) => (
            <span key={m} className="flex items-baseline gap-3">
              {i > 0 && <span className="text-muted">/</span>}
              <button
                onClick={() => setViewMode(m)}
                aria-pressed={viewMode === m}
                className={viewMode === m ? 'font-serif italic text-lg text-fg' : 'link text-muted hover:text-fg'}
              >
                {m === 'grid' ? 'Gallery' : 'Index'}
              </button>
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key={`grid-${filter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.55, ease }}
            className="grid md:grid-cols-2 gap-x-10 gap-y-20"
          >
            {filteredProjects.map((project, index) => {
              const featured = filter === 'all' && index === 0;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.75, delay: (index % 2) * 0.1, ease }}
                  className={featured ? 'md:col-span-2' : index % 2 === 0 ? 'md:mt-24' : ''}
                >
                  <ProjectCard index={index} {...project} featured={featured} />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.ul
            key={`list-${filter}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
            className="group/list border-t border-line"
            onMouseLeave={() => setActive(null)}
          >
            {filteredProjects.map((project, index) => (
              <li key={project.title} className="transition-opacity duration-500 group-hover/list:opacity-30 hover:opacity-100!">
                <ProjectCard index={index} {...project} mode="list" onHover={() => setActive(index)} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Floating preview for the Index view (pointer devices only) */}
      {viewMode === 'list' && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-40 hidden md:block w-80 aspect-[16/10] overflow-hidden transition-[opacity,scale] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${active === null ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
          {filteredProjects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${active === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
