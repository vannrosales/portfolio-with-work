import { useState } from 'react';

const defaultProps = `{
  "title": "Interactive UI Component",
  "description": "Try editing this JSON to instantly update the React component on the right!",
  "theme": "dark",
  "status": "Live Editing",
  "showBorder": true,
  "rounded": true
}`;

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
    } catch (err) {
      setError('JSON Syntax Error');
    }
  };

  return (
    <section id="playground" className="mb-32 scroll-mt-32 relative z-10 w-full">
      <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-12">
        Live Code Playground
      </h2>
      
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Code Editor */}
        <div className="w-full xl:w-1/2 rounded-xl overflow-hidden border border-black/20 dark:border-white/10 shadow-sm bg-zinc-50 dark:bg-zinc-900 font-mono text-sm flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 bg-black/5 dark:bg-white/5 border-b border-black/20 dark:border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></div>
            </div>
            <div className="text-xs font-bold tracking-widest uppercase opacity-50">
              props.json
            </div>
            <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest w-24 text-right">
              {error}
            </div>
          </div>
          
          <textarea 
            value={code} 
            onChange={handleCodeChange}
            className="flex-1 w-full min-h-[250px] bg-transparent p-6 text-black/80 dark:text-white/80 focus:outline-none resize-none leading-relaxed"
            spellCheck="false"
          />
        </div>

        {/* Live Preview Area */}
        <div className="w-full xl:w-1/2 flex items-center justify-center p-8 rounded-xl border border-black/20 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] min-h-[300px]">
          
          {/* Dynamic Component */}
          <div className={`transition-all duration-500 w-full max-w-sm overflow-hidden
            ${props?.theme === 'dark' ? 'bg-zinc-900 text-white shadow-2xl' : props?.theme === 'light' ? 'bg-white text-black shadow-xl' : 'bg-emerald-500 text-white shadow-emerald-500/20 shadow-2xl'}
            ${props?.rounded ? 'rounded-3xl' : 'rounded-none'}
            ${props?.showBorder ? 'border border-black/20 dark:border-white/20' : 'border-transparent'}
          `}>
            <div className="p-8">
              {props?.status && (
                <div className="inline-block px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  {props.status}
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-4 leading-tight tracking-tight">
                {props?.title || 'Untitled Component'}
              </h3>
              
              <p className="opacity-70 text-sm leading-relaxed font-medium">
                {props?.description || 'No description provided.'}
              </p>
            </div>
            
            <div className="w-full h-2 bg-black/5 dark:bg-white/10">
              <div className="h-full bg-current opacity-20 w-1/3 animate-pulse"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

