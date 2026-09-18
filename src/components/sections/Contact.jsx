import { useState } from 'react';

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
        window.location.href = `mailto:giovannihanzguino@gmail.com?subject=${subject}&body=${body}`;
        
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      }
    }, 1000);
  };

  return (
    <section id="contact" className="scroll-mt-32 mb-32 relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Get In Touch
      </h2>
      <div className="p-8 lg:p-12 border border-black/20 dark:border-white/10 rounded-3xl bg-black/5 dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-center">Let's Build Something.</h3>
          <p className="opacity-60 text-center mb-10">
            Have a project in mind, need a full-stack developer, or want to discuss AI? Send me a message!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-70">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-70">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-70">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows="5"
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Hi Giovanni, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold tracking-widest uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {status === 'loading' && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center font-medium">Oops! There was a problem sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

