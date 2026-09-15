import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHubActivity from './sections/GitHubActivity';
import Endorsements from './sections/Endorsements';
import Footer from './Footer';

export default function Content() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 pb-12 overflow-hidden">
      <Hero />
      <Services />
      <GitHubActivity />
      <Projects />
      <Experience />
      <Endorsements />
      <Footer />
    </main>
  );
}
