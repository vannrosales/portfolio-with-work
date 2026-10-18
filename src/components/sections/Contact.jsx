import ScrollReveal from '../ScrollReveal';

const socials = [
  { label: 'GitHub', href: 'https://github.com/vannrosales' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giovanni-hanz-guino-971118378/' },
  { label: 'Discord', href: 'https://discord.com/awsdvann' },
  { label: 'Instagram', href: 'https://instagram.com/008.vann' },
  { label: 'Facebook', href: 'https://www.facebook.com/nnav.08' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-40 scroll-mt-10">
      <ScrollReveal className="flex items-center justify-between text-xs text-muted border-t border-line pt-6">
        <span>Get in touch</span>
        <span className="tabular-nums">(10)</span>
      </ScrollReveal>

      <h2 className="font-serif text-[22vw] sm:text-[16vw] lg:text-[13rem] leading-[0.85] tracking-[-0.04em] mt-10">
        <ScrollReveal>Let&rsquo;s</ScrollReveal>
        <ScrollReveal delay={0.12}><em className="pl-[0.6em]">talk.</em></ScrollReveal>
      </h2>

      <ScrollReveal delay={0.15} className="mt-16">
        <p className="text-xs text-muted mb-4">Elsewhere</p>
        <ul className="border-t border-line">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="font-serif text-2xl sm:text-3xl transition-all duration-500 group-hover:italic group-hover:translate-x-1">
                  {s.label}
                </span>
                <span className="text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
