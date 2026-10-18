import { useState } from 'react';
import { LogoMark } from './Logo';
import SnakeGame from './SnakeGame';
import VisitorStats from './VisitorStats';

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="pt-10 pb-12 border-t border-line">
      <div className="flex flex-col sm:flex-row gap-8 sm:items-end justify-between">
        <div className="flex items-end gap-4">
          <LogoMark draw={false} className="h-12 w-auto" />
          <p className="font-serif italic text-4xl leading-none">
            vnn<span className="font-sans not-italic text-base text-muted">.dev</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <button onClick={() => setIsPlaying(true)} className="link font-serif italic text-base">
            Bored? Play snake
          </button>
          <a href="#" className="link">Back to top ↑</a>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted">
        <span>© {new Date().getFullYear()} Giovanni Hanz Guino</span>
        <VisitorStats />
      </div>

      {isPlaying && <SnakeGame onClose={() => setIsPlaying(false)} />}
    </footer>
  );
}
