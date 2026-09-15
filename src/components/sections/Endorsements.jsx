import { endorsements } from '../../data';

export default function Endorsements() {
  return (
    <section id="about" className="scroll-mt-32 mb-32 relative z-10 w-full">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Endorsements
      </h2>
      
      <div className="flex flex-col gap-6 lg:gap-8">
        {endorsements.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col p-8 lg:p-12 border border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors relative group overflow-hidden"
          >
            <div className="absolute top-8 right-8 opacity-[0.03] dark:opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
            </div>
            <p className="relative italic opacity-90 leading-relaxed mb-10 text-base sm:text-lg z-10 max-w-4xl">
              "{item.quote}"
            </p>
            <div className="relative mt-auto flex justify-between items-end gap-4 z-10">
              <div>
                <p className="font-bold text-sm sm:text-base">{item.name}</p>
                <p className="text-[10px] sm:text-xs opacity-60 uppercase tracking-widest mt-1 leading-tight">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

