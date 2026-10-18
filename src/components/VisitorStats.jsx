import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export default function VisitorStats() {
  const [views, setViews] = useState(1);
  const [pokes, setPokes] = useState(0);
  const [flyingHearts, setFlyingHearts] = useState([]);

  useEffect(() => {
    // 1. Load initial stats & record view
    async function initStats() {
      if (isSupabaseConfigured && supabase) {
        try {
          // Fetch current row
          const { data } = await supabase
            .from('site_stats')
            .select('views, pokes')
            .eq('id', 'global')
            .single();

          if (data) {
            setViews(data.views || 1);
            setPokes(data.pokes || 0);

            // Increment view count once per unique session
            const sessionViewed = sessionStorage.getItem('vnn_viewed');
            if (!sessionViewed) {
              sessionStorage.setItem('vnn_viewed', 'true');
              const newViews = (data.views || 0) + 1;
              setViews(newViews);
              await supabase
                .from('site_stats')
                .update({ views: newViews })
                .eq('id', 'global');
            }
          }
        } catch {
          // Silent fallback to local storage
          loadLocalStats();
        }
      } else {
        loadLocalStats();
      }
    }

    function loadLocalStats() {
      const localViews = parseInt(localStorage.getItem('vnn_views') || '142', 10);
      const localPokes = parseInt(localStorage.getItem('vnn_pokes') || '38', 10);
      const sessionViewed = sessionStorage.getItem('vnn_viewed');
      const updatedViews = sessionViewed ? localViews : localViews + 1;
      sessionStorage.setItem('vnn_viewed', 'true');
      localStorage.setItem('vnn_views', updatedViews.toString());
      setViews(updatedViews);
      setPokes(localPokes);
    }

    initStats();
  }, []);

  const handlePoke = async () => {
    const nextPokes = pokes + 1;
    setPokes(nextPokes);

    // Floating reaction
    const heartId = Date.now() + Math.random();
    setFlyingHearts((h) => [...h, heartId]);
    setTimeout(() => {
      setFlyingHearts((h) => h.filter((id) => id !== heartId));
    }, 1200);

    // Update in Supabase
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase
          .from('site_stats')
          .update({ pokes: nextPokes })
          .eq('id', 'global');
      } catch {
        // Fallback
        localStorage.setItem('vnn_pokes', nextPokes.toString());
      }
    } else {
      localStorage.setItem('vnn_pokes', nextPokes.toString());
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
      {/* Visitors Counter */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-30" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-fg/70" />
        </span>
        <span>
          <strong className="font-mono text-fg font-medium">{views.toLocaleString()}</strong> visits
        </span>
      </div>

      <span className="text-line" aria-hidden="true">/</span>

      {/* Interactive Poke Button */}
      <div className="relative inline-flex items-center">
        <button
          onClick={handlePoke}
          className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-line hover:border-fg hover:text-fg transition-all active:scale-95 cursor-pointer select-none"
          title="Poke Giovanni"
          aria-label="Poke Giovanni"
        >
          <Hand className="w-3.5 h-3.5 text-fg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" aria-hidden="true" />
          <span className="font-serif italic text-sm text-fg">Poke</span>
          <span className="font-mono text-[11px] text-muted group-hover:text-fg ml-0.5">
            ({pokes.toLocaleString()})
          </span>
        </button>

        {/* Flying reaction particle */}
        <AnimatePresence>
          {flyingHearts.map((id) => (
            <motion.span
              key={id}
              initial={{ y: 0, opacity: 1, scale: 0.8 }}
              animate={{ y: -32, opacity: 0, scale: 1.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none text-xs font-serif italic text-fg"
            >
              +1 poke!
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
