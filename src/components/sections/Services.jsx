import { services } from '../../data';
import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

const numerals = ['i', 'ii', 'iii', 'iv', 'v'];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={2}>What I <em>do</em></SectionHead>
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.12} className="md:border-l md:border-line md:pl-6 first:md:border-l-0 first:md:pl-0">
            <span className="font-serif italic text-muted text-lg">{numerals[index]}.</span>
            <h3 className="font-serif text-3xl mt-3 mb-4 leading-tight">{service.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            <p className="mt-5 text-xs text-muted">{service.tags.join(' · ')}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
