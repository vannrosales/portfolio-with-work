import ProjectCard from '../ProjectCard';
import { projects } from '../../data';

export default function Projects() {
  return (
    <section id="projects" className="mb-32 scroll-mt-32 relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

