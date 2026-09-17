import { experiences } from '../../data';

export default function Experience() {
  return (
    <section id="experience" className="mb-32 scroll-mt-32 relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Experience
      </h2>
      
      <div className="flex flex-col border-t border-black/20 dark:border-white/10">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-black/20 dark:border-white/10 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors -mx-6 px-6 md:mx-0 md:px-4"
          >
            {/* Left Column: Date & Type */}
            <div className="md:w-1/4 shrink-0 flex flex-col gap-2">
              <span className="font-mono text-xs font-bold opacity-70 tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                {exp.date}
              </span>
              <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                {exp.type}
              </span>
            </div>
            
            {/* Right Column: Role, Company, Content */}
            <div className="md:w-3/4 flex flex-col">
              <h3 className="text-2xl font-black tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {exp.role}
              </h3>
              <h4 className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1 mb-6">
                {exp.company}
              </h4>
              
              {exp.descriptions.length > 0 && (
                <div className="space-y-4 mb-8">
                  {exp.descriptions.map((desc, i) => (
                    <p key={i} className="opacity-80 leading-relaxed text-sm sm:text-base max-w-2xl">
                      {desc}
                    </p>
                  ))}
                </div>
              )}
              
              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 border border-black/20 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

