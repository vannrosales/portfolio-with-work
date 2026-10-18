import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHubActivity from './sections/GitHubActivity';
import Endorsements from './sections/Endorsements';
import Contact from './sections/Contact';
import Footer from './Footer';
import Marquee from './Marquee';

export default function Content() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <Marquee />
      <main>
        <About />
        <Services />
        <Projects />
        <Experience />
        <GitHubActivity />
        <Endorsements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
