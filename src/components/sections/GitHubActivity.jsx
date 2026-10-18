import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

export default function GitHubActivity() {
  return (
    <section id="github" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={5}>In the <em>open</em></SectionHead>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-end">
        <ScrollReveal>
          <p className="font-serif text-[7rem] sm:text-[10rem] leading-[0.8] tracking-[-0.04em]">
            500<em>+</em>
          </p>
          <p className="font-serif italic text-2xl mt-4">GitHub contributions</p>
          <p className="text-sm text-muted leading-relaxed max-w-sm mt-4">
            Passionate about open-source, continuous learning, and building in public — from
            experimental personal projects and UI components to full-scale web applications.
          </p>
          <a
            href="https://github.com/vannrosales"
            target="_blank"
            rel="noreferrer"
            className="link inline-block mt-6 text-sm"
          >
            View GitHub profile ↗
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="border-t border-line pt-6">
            {/* Live GitHub contribution graph, tinted to the ink colour */}
            <img
              src="https://ghchart.rshah.org/141414/vannrosales"
              alt="Giovanni's GitHub contribution chart"
              loading="lazy"
              className="w-full h-auto mix-blend-multiply dark:mix-blend-normal dark:invert"
            />
            <p className="mt-3 text-xs text-muted flex justify-between">
              <span>@vannrosales</span>
              <span>Last 12 months</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
