import Hero from './sections/Hero';
import About from './sections/About';
import Hobbies from './sections/Hobbies';
import Playground from './sections/Playground';
import Services from './sections/Services';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHubActivity from './sections/GitHubActivity';
import Endorsements from './sections/Endorsements';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

export default function Content() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 pb-12 overflow-hidden">
      <Hero />
      <ScrollReveal delay={0.1}><About /></ScrollReveal>
      <ScrollReveal delay={0.1}><Hobbies /></ScrollReveal>
      <ScrollReveal delay={0.1}><Playground /></ScrollReveal>
      <ScrollReveal delay={0.1}><Services /></ScrollReveal>
      <ScrollReveal delay={0.1}><TechStack /></ScrollReveal>
      <ScrollReveal delay={0.1}><GitHubActivity /></ScrollReveal>
      <ScrollReveal delay={0.1}><Projects /></ScrollReveal>
      <ScrollReveal delay={0.1}><Experience /></ScrollReveal>
      <ScrollReveal delay={0.1}><Endorsements /></ScrollReveal>
      <ScrollReveal delay={0.1}><Footer /></ScrollReveal>
    </main>
  );
}
