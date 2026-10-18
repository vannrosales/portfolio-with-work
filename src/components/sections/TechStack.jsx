import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

const techCategories = [
  {
    title: 'Frontend & UI',
    items: [
      { name: 'Next.js', desc: 'Server Components, App Router' },
      { name: 'Vue.js 3', desc: 'Composition API, Pinia, SFCs' },
      { name: 'React', desc: 'Hooks, Vite, Component Architecture' },
      { name: 'Tailwind CSS', desc: 'Modern responsive utility-first UI' },
      { name: 'TypeScript', desc: 'Strict typing, robust contracts' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Laravel', desc: 'Eloquent ORM, RESTful APIs, MVC' },
      { name: 'CodeIgniter', desc: 'Lightweight PHP framework architecture' },
      { name: 'Django', desc: 'Python web applications & admin systems' },
      { name: 'Git & Workflows', desc: 'Branching, CI/CD, Git operations' },
    ],
  },
  {
    title: 'Mobile & Databases',
    items: [
      { name: 'React Native & Expo', desc: 'Cross-platform mobile apps' },
      { name: 'Supabase & PostgreSQL', desc: 'Auth policies, real-time sync, SQL' },
      { name: 'MySQL', desc: 'Relational data models & indexing' },
      { name: 'Drizzle ORM & SQLite', desc: 'Type-safe SQL schema & migrations' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={5}>The <em>toolkit</em></SectionHead>
      <div className="space-y-16">
        {techCategories.map((category, idx) => (
          <ScrollReveal key={category.title} delay={idx * 0.08} className="grid gap-6 md:grid-cols-[14rem_1fr]">
            <h3 className="font-serif italic text-2xl">{category.title}</h3>
            <ul className="grid sm:grid-cols-2 border-t border-line">
              {category.items.map((item) => (
                <li key={item.name} className="group flex items-baseline justify-between gap-4 py-4 border-b border-line sm:odd:pr-6 sm:even:pl-6">
                  <span className="font-serif text-2xl transition-all duration-500 group-hover:italic group-hover:translate-x-1">{item.name}</span>
                  <span className="text-xs text-muted text-right">{item.desc}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
