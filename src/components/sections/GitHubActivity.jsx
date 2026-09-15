export default function GitHubActivity() {
  return (
    <section id="github" className="scroll-mt-32 mb-32 relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Open Source & Activity
      </h2>
      <div className="p-8 lg:p-12 border border-black/10 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 group hover:border-black/20 dark:hover:border-white/20 transition-all">
        <div className="flex-1 space-y-4">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter">400+</h3>
          <h4 className="text-xl font-bold opacity-80">GitHub Contributions</h4>
          <p className="opacity-60 leading-relaxed max-w-md pt-2 text-sm sm:text-base">
            Passionate about open-source, continuous learning, and building in public. From experimental personal projects and UI components to full-scale web applications.
          </p>
          <a 
            href="https://github.com/vannrosales" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs opacity-80 hover:opacity-100 hover:text-emerald-500 transition-colors mt-4"
          >
            View GitHub Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
        
        <div className="w-full lg:w-auto overflow-hidden pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {/* Live GitHub Contribution Graph */}
          <div className="w-full sm:w-[600px] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <img 
              src="https://ghchart.rshah.org/10b981/vannrosales" 
              alt="Giovanni's GitHub Contribution Chart" 
              className="w-full h-auto dark:invert dark:hue-rotate-180" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

