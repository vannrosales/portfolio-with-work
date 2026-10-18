import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const EMAIL = 'giovannihanzguino@gmail.com';

const socials = [
  { label: 'GitHub', href: 'https://github.com/vannrosales' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giovanni-hanz-guino-971118378/' },
  { label: 'Discord', href: 'https://discord.com/awsdvann' },
  { label: 'Instagram', href: 'https://instagram.com/008.vann' },
  { label: 'Facebook', href: 'https://www.facebook.com/nnav.08' },
];

const inputClass =
  'w-full bg-transparent border-0 border-b border-line py-3 text-lg focus:outline-none focus:border-fg transition-colors placeholder:text-muted/60';

export default function Contact() {
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const data = new FormData(form);
    
    // Simulate network delay for UX
    setTimeout(() => {
      // NOTE: You can replace this empty string with a Formspree endpoint (e.g., "https://formspree.io/f/your_id")
      // to make it send emails automatically without opening the user's email app.
      const endpoint = ""; 
      
      if (endpoint) {
        fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus(''), 3000);
          } else {
            setStatus('error');
          }
        }).catch(() => {
          setStatus('error');
        });
      } else {
        // Fallback: If no endpoint is configured, format the form data and open the default mail client
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      }
    }, 1000);
  };

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

      <div className="mt-20 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs text-muted">Name</span>
                <input type="text" name="name" required placeholder="John Doe" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-xs text-muted">Email</span>
                <input type="email" name="email" required placeholder="john@example.com" className={inputClass} />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-muted">Message</span>
              <textarea name="message" required rows="4" placeholder="Hi Giovanni, I'd like to talk about…" className={`${inputClass} resize-none`} />
            </label>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center gap-3 font-serif italic text-3xl sm:text-4xl disabled:opacity-50"
              >
                <span className="link">
                  {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent' : 'Send message'}
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-2 not-italic font-sans text-2xl">→</span>
              </button>
            </div>

            {status === 'error' && (
              <p className="text-sm">Oops — there was a problem sending your message. Please try again.</p>
            )}
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:border-l lg:border-line lg:pl-10 flex flex-col gap-10">
          <div>
            <p className="text-xs text-muted mb-2">Or write directly</p>
            <a href={`mailto:${EMAIL}`} className="link font-serif italic text-2xl sm:text-3xl break-all">{EMAIL}</a>
          </div>
          <div>
            <p className="text-xs text-muted mb-3">Elsewhere</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between border-b border-line pb-2">
                    <span className="font-serif text-2xl transition-all duration-500 group-hover:italic group-hover:translate-x-1">{s.label}</span>
                    <span className="text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
