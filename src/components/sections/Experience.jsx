import { experiences } from '../../data';
import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={4}>Where I&rsquo;ve <em>been</em></SectionHead>
      <ul className="border-t border-line">
        {experiences.map((exp, index) => (
          <li key={exp.company + exp.role}>
            <ScrollReveal delay={index * 0.08} className="grid gap-4 sm:grid-cols-[11rem_1fr_1fr] py-8 border-b border-line">
              <span className="text-sm text-muted tabular-nums">{exp.date}</span>
              <div>
                <h3 className="font-serif italic text-3xl leading-tight">{exp.role}</h3>
                <p className="text-sm text-muted mt-2">{exp.company} · {exp.type}</p>
              </div>
              <div>
                {exp.descriptions.length > 0 && (
                  <ul className="space-y-3 text-sm leading-relaxed">
                    {exp.descriptions.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
                {exp.tags.length > 0 && (
                  <p className="mt-4 text-xs text-muted">{exp.tags.join(' · ')}</p>
                )}
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
