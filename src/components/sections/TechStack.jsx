
import { Layers, Server, Smartphone, Database, Code, GitBranch, Terminal } from 'lucide-react';

const icons = {
  vue: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-500"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>,
  react: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-sky-400"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
  tailwind: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-500"><path d="M12 5.5c-2.5 0-4.5 1-6 3 1.5-1 3-1 4.5-.5 1 .3 2 1.5 2.5 3.5.5 2 2.5 3.5 5 3.5 2.5 0 4.5-1 6-3-1.5 1-3 1-4.5.5-1-.3-2-1.5-2.5-3.5-.5-2-2.5-3.5-5-3.5zM6 12c-2.5 0-4.5 1-6 3 1.5-1 3-1 4.5-.5 1 .3 2 1.5 2.5 3.5.5 2 2.5 3.5 5 3.5 2.5 0 4.5-1 6-3-1.5 1-3 1-4.5.5-1-.3-2-1.5-2.5-3.5-.5-2-2.5-3.5-5-3.5z"/></svg>,
  ts: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c3.125 0 5.125 2.162 5.125 4.675 0 2.8-2.288 4.75-5.388 4.75-2.612 0-4.838-1.538-4.9-3.775l2.25-.662c.125 1.25 1.125 2.188 2.625 2.188 1.413 0 2.55-.913 2.55-2.25 0-1.288-1.025-1.95-2.313-2.438l-.75-.288c-2.175-.8-3.788-1.962-3.788-4.137 0-2.363 2-4.063 4.638-4.063 2.112 0 4.225 1.15 4.412 3.125l-2.212.562c-.113-.863-.988-1.525-2.125-1.525-1.125 0-2.213.688-2.213 1.763 0 1.162.888 1.637 2.15 2.112zM12.912 21.65h-2.5V11.238H6V8.975h10.425v2.263h-4.512z"/></svg>,
  laravel: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500"><path d="M22.094 13.923l-8.625 4.887a2.531 2.531 0 01-2.441.002L2 14.136v-2.738l8.91 4.908c.361.199.789.2 1.15.002l8.847-5.011c.213-.121.344-.344.344-.59V6.368L12 1.161 2.75 6.368v3.42l-2 1.133V5.811A2.529 2.529 0 011.97 3.623L10.778.636a2.532 2.532 0 012.445 0l8.808 2.987a2.527 2.527 0 011.219 2.188v6.945c0 .927-.511 1.768-1.311 2.167h.155zM2.08 14.883v5.474a2.533 2.533 0 001.219 2.188l8.807 2.986a2.536 2.536 0 002.445 0l8.799-2.986a2.53 2.53 0 001.218-2.188v-3.791l-10.02 5.678-12.468-7.361zm20.897 4.09l-11.08 6.275L.897 19.349v-2.031l10.98 6.17 11.1-6.284v1.77z"/></svg>,
  git: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500"><path d="M23.546 10.93L13.067.452a2.96 2.96 0 00-4.186 0L.452 8.88A2.96 2.96 0 00.45 13.07L10.93 23.548a2.962 2.962 0 004.186 0l8.43-8.432a2.962 2.962 0 000-4.186zM9.544 18.066a2.163 2.163 0 11.002-4.327 2.163 2.163 0 01-.002 4.327zm0-9.873a2.164 2.164 0 110-4.328 2.164 2.164 0 010 4.328zm5.795 4.326a2.164 2.164 0 110-4.328 2.164 2.164 0 010 4.328z"/></svg>,
  supabase: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-400"><path d="M12.443 1.344a1.764 1.764 0 00-2.886 0L1.758 11.753a1.762 1.762 0 001.442 2.784h5.923v7.352a1.764 1.764 0 002.886 0l7.8-10.408a1.762 1.762 0 00-1.443-2.784h-5.923V1.344z"/></svg>,
  nextjs: <svg viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6 text-black dark:text-white"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.4-11.2v-31.6h7.4v42.8z"/></svg>,
  generic: <Terminal className="w-6 h-6 opacity-70" />
};

const techCategories = [
  {
    title: "FRONTEND & UI",
    items: [
      { name: "Next.js", desc: "Server Components, App Router", logo: icons.nextjs },
      { name: "Vue.js 3", desc: "Composition API, Pinia, SFCs", logo: icons.vue },
      { name: "React", desc: "Hooks, Vite, Component Architecture", logo: icons.react },
      { name: "Tailwind CSS", desc: "Modern responsive utility-first UI", logo: icons.tailwind },
      { name: "TypeScript", desc: "Strict typing, robust contracts", logo: icons.ts }
    ]
  },
  {
    title: "BACKEND & FRAMEWORKS",
    items: [
      { name: "Laravel", desc: "Eloquent ORM, RESTful APIs, MVC", logo: icons.laravel },
      { name: "CodeIgniter", desc: "Lightweight PHP framework architecture", logo: <Code className="w-6 h-6 text-orange-500" /> },
      { name: "Django", desc: "Python web applications & admin systems", logo: <Terminal className="w-6 h-6 text-green-700" /> },
      { name: "Git & Workflows", desc: "Branching, CI/CD, Git operations", logo: icons.git }
    ]
  },
  {
    title: "MOBILE & DATABASES",
    items: [
      { name: "React Native & Expo", desc: "Cross-platform mobile apps", logo: icons.react },
      { name: "Supabase & PostgreSQL", desc: "Auth policies, real-time sync, SQL", logo: icons.supabase },
      { name: "MySQL", desc: "Relational data models & indexing", logo: <Database className="w-6 h-6 text-sky-600" /> },
      { name: "Drizzle ORM & SQLite", desc: "Type-safe SQL schema & migrations", logo: <Code className="w-6 h-6 text-yellow-500" /> }
    ]
  }
];


export default function TechStack() {
  return (
    <section id="stack" className="mb-32 scroll-mt-32 relative z-10 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-50">
          Core Stack & Tooling
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
          Verified Technologies
        </span>
      </div>
      
      <div className="space-y-12">
        {techCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 sm:p-5 flex items-center gap-4 rounded-2xl border border-black/20 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/30 dark:hover:border-white/20 transition-all group cursor-default"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--bg-color)] border border-black/20 dark:border-white/10 flex items-center justify-center font-black text-lg opacity-70 group-hover:opacity-100 group-hover:text-emerald-500 transition-all shadow-sm">
                    {item.logo}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm sm:text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-medium opacity-50 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
