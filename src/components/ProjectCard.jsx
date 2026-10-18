import { motion } from 'framer-motion';

const pad = (n) => String(n).padStart(2, '0');
const ease = [0.16, 1, 0.3, 1];
// "Shutterbox - Photobooth Financial Tracker…" → "Shutterbox"
const cleanTitle = (t) => t.replace(/\.$/, '').split(/\s[—-]\s/)[0];

export default function ProjectCard({
  index,
  title,
  description,
  tags,
  link,
  year,
  image,
  mode = 'grid',
  featured = false,
  onHover,
}) {
  const hasLink = link && link !== '#';
  const name = cleanTitle(title);
  const Tag = hasLink ? motion.a : motion.div;
  const linkProps = hasLink ? { href: link, target: '_blank', rel: 'noreferrer' } : {};

  /* ---------- Index (list) row ---------- */
  if (mode === 'list') {
    return (
      <Tag
        {...linkProps}
        onMouseEnter={onHover}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.65, delay: (index % 5) * 0.05, ease }}
        className="group grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[3rem_1fr_13rem_1.5rem] items-baseline gap-x-4 py-7 border-b border-line"
      >
        <span className="text-xs text-muted tabular-nums">{pad(index + 1)}</span>
        <div>
          <h3 className="font-serif text-3xl sm:text-5xl leading-[1.05] tracking-[-0.01em] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-3 group-hover:italic">
            {name}
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-xl">{description}</p>
          <p className="mt-2 text-xs text-muted">
            <span className="sm:hidden">{year} — </span>
            {tags.join(' · ')}
          </p>
        </div>
        <span className="hidden sm:block text-sm text-muted">{year}</span>
        <span
          className={`text-lg transition-transform duration-500 ${hasLink ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : 'opacity-0'}`}
          aria-hidden="true"
        >
          ↗
        </span>
      </Tag>
    );
  }

  /* ---------- Gallery plate ---------- */
  return (
    <Tag
      {...linkProps}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease }}
      className={`group block ${featured ? 'md:grid md:grid-cols-12 md:gap-10 md:items-end' : ''}`}
    >
      <motion.div
        initial={{ clipPath: 'inset(12% 0% 12% 0%)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.95, ease }}
        className={`relative overflow-hidden bg-line/40 ${featured ? 'md:col-span-8 aspect-[16/10]' : 'aspect-[16/10]'}`}
      >
        {image && (
          <img
            src={image}
            alt={`${name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
          />
        )}
        {/* Hairline frame drawn over the image so it reads like a printed plate */}
        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-fg/10" />
      </motion.div>

      <div className={featured ? 'mt-6 md:mt-0 md:col-span-4' : 'mt-5'}>
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-xs text-muted">
          <span className="tabular-nums">№ {pad(index + 1)}{featured && <em className="font-serif text-sm text-fg ml-2">Featured</em>}</span>
          <span className="text-right">{year}</span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className={`font-serif leading-[1.05] tracking-[-0.01em] transition-all duration-500 group-hover:italic ${featured ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-4xl'}`}>
            {name}
          </h3>
          {hasLink && (
            <span className="mt-1 text-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
          )}
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">{description}</p>
        <p className="mt-4 text-xs text-muted">
          <em className="font-serif text-sm text-fg">Built with</em> — {tags.join(', ')}
        </p>
      </div>
    </Tag>
  );
}
