import { Layers, Server, Smartphone } from 'lucide-react';

const techCategories = [
  {
    title: "FRONTEND & UI",
    icon: <Layers className="w-4 h-4 opacity-70" />,
    items: [
      { name: "Vue.js 3", desc: "Composition API, Pinia, SFCs", logo: "V" },
      { name: "React", desc: "Hooks, Vite, Component Architecture", logo: "Re" },
      { name: "Tailwind CSS", desc: "Modern responsive utility-first UI", logo: "Tw" },
      { name: "TypeScript", desc: "Strict typing, robust contracts", logo: "TS" }
    ]
  },
  {
    title: "BACKEND & FRAMEWORKS",
    icon: <Server className="w-4 h-4 opacity-70" />,
    items: [
      { name: "Laravel", desc: "Eloquent ORM, RESTful APIs, MVC", logo: "La" },
      { name: "CodeIgniter", desc: "Lightweight PHP framework architecture", logo: "Ci" },
      { name: "Django", desc: "Python web applications & admin systems", logo: "Dj" },
      { name: "Git & Workflows", desc: "Branching, CI/CD, Git operations", logo: "Git" }
    ]
  },
  {
    title: "MOBILE & DATABASES",
    icon: <Smartphone className="w-4 h-4 opacity-70" />,
    items: [
      { name: "React Native & Expo", desc: "Cross-platform mobile apps", logo: "RN" },
      { name: "Supabase & PostgreSQL", desc: "Auth policies, real-time sync, SQL", logo: "Su" },
      { name: "MySQL", desc: "Relational data models & indexing", logo: "My" },
      { name: "Drizzle ORM & SQLite", desc: "Type-safe SQL schema & migrations", logo: "Dr" }
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
            <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
              {category.icon}
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 sm:p-5 flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all group cursor-default"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--bg-color)] border border-black/10 dark:border-white/10 flex items-center justify-center font-black text-lg opacity-70 group-hover:opacity-100 group-hover:text-emerald-500 transition-all shadow-sm">
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
