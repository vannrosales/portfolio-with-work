import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ title, description, tags, link, year, image }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className="group block relative p-6 -mx-6 sm:mx-0 sm:p-8 rounded-3xl border border-transparent hover:border-black/20 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
    >
      {image && (
        <div className="mb-6 overflow-hidden rounded-xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 aspect-video flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2">
          {title}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </h3>
        <span className="text-xs font-semibold opacity-50 uppercase tracking-wider">{year}</span>
      </div>
      
      <p className="text-sm sm:text-base opacity-70 leading-relaxed mb-6 max-w-xl">
        {description}
      </p>
      
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li 
            key={tag}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-black/20 dark:border-white/10 opacity-70 group-hover:opacity-100 transition-opacity"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
