import { experiences } from '../../data';

export default function Experience() {
  return (
    <section id="experience" className="mb-32 scroll-mt-32 relative z-10">
      <div className="relative border-l border-black/10 dark:border-white/10 ml-6 md:ml-8 pl-8 md:pl-16 py-4 space-y-16">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Experience
      </h2>
      
      <div className="flex flex-col border-t border-black/10 dark:border-white/10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Badge */}
            <div className="absolute -left-[3.5rem] md:-left-[5.5rem] top-0 w-12 h-12 rounded-xl bg-[var(--bg-color)] border border-black/10 dark:border-white/10 flex items-center justify-center font-mono text-xs font-bold shadow-sm z-10">
              {exp.initials}
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-black/10 dark:border-white/10 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors -mx-6 px-6 md:mx-0 md:px-4"
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
            
            {/* Content */}
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                <span className="font-mono text-xs opacity-60 tracking-wider">{exp.type}</span>
              </div>
            {/* Right Column: Role, Company, Content */}
            <div className="md:w-3/4 flex flex-col">
              <h3 className="text-2xl font-black tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {exp.role}
              </h3>
              <h4 className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1 mb-6">
                {exp.company}
              </h4>
              
              <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
              <p className="font-mono text-[10px] opacity-50 tracking-widest mb-6 uppercase">{exp.date}</p>
              
              {exp.descriptions.length > 0 && (
                <div className="space-y-4 mb-6">
                <div className="space-y-4 mb-8">
                  {exp.descriptions.map((desc, i) => (
                    <p key={i} className="opacity-80 leading-relaxed text-sm max-w-3xl">
                    <p key={i} className="opacity-80 leading-relaxed text-sm sm:text-base max-w-2xl">
                      {desc}
                    </p>
                  ))}
                </div>
              )}
              
              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-md text-[10px] font-mono opacity-70">
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
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

