import ProjectCard from '../ProjectCard';
import { services } from '../../data';

export default function Services() {
  return (
    <section className="mb-32 scroll-mt-32 relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Services & Expertise
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((service, index) => (
          <ProjectCard key={`service-${index}`} {...service} />
        ))}
      </div>
    </section>
  );
}

