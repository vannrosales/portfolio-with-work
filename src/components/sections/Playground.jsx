import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHead from '../SectionHead';

const defaultProps = `{
  "title": "Interactive UI Component",
  "description": "Try editing this JSON to instantly update the component.",
  "theme": "ink",
  "status": "Live Editing",
  "italic": true,
  "rounded": false
}`;

// theme: "ink" | "paper" | "outline"
const themes = {
  ink: 'bg-fg text-bg',
  paper: 'bg-bg text-fg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]',
  outline: 'bg-transparent text-fg border border-fg',
};

export default function Playground() {
  const [code, setCode] = useState(defaultProps);
  const [props, setProps] = useState(JSON.parse(defaultProps));
  const [error, setError] = useState('');

  const handleCodeChange = (e) => {
    const val = e.target.value;
    setCode(val);
    try {
      const parsed = JSON.parse(val);
      setProps(parsed);
      setError('');
    } catch {
      setError('JSON syntax error');
    }
  };

  return (
    <section id="playground" className="py-24 sm:py-32 scroll-mt-10">
      <SectionHead n={9}>Play<em>ground</em></SectionHead>

      <ScrollReveal className="grid lg:grid-cols-2 border-t border-line">
        {/* Code editor */}
        <div className="flex flex-col lg:border-r border-line">
          <div className="flex items-center justify-between py-3 text-xs text-muted border-b border-line lg:pr-6">
            <span className="font-mono">props.json</span>
            <span className="text-fg">{error}</span>
          </div>
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="flex-1 w-full min-h-[300px] bg-transparent py-6 lg:pr-6 font-mono text-sm leading-relaxed focus:outline-none resize-none"
            spellCheck="false"
            aria-label="Component props JSON"
          />
        </div>

        {/* Live preview */}
        <div className="flex flex-col">
          <div className="py-3 text-xs text-muted border-b border-line lg:pl-6">
            Preview — themes: <span className="font-mono">ink</span>, <span className="font-mono">paper</span>, <span className="font-mono">outline</span>
          </div>
          <div className="flex-1 flex items-center justify-center p-8 min-h-[300px]">
            <div
              className={`w-full max-w-sm transition-all duration-500 ${themes[props?.theme] || themes.ink} ${props?.rounded ? 'rounded-3xl' : 'rounded-none'}`}
            >
              <div className="p-8">
                {props?.status && (
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6">{props.status}</p>
                )}
                <h3 className={`font-serif text-4xl leading-tight mb-4 ${props?.italic ? 'italic' : ''}`}>
                  {props?.title || 'Untitled Component'}
                </h3>
                <p className="opacity-70 text-sm leading-relaxed">
                  {props?.description || 'No description provided.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
