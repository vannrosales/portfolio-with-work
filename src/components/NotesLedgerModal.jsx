import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import PaperPlaneNote from './PaperPlaneNote';

const ease = [0.16, 1, 0.3, 1];
const pad = (n) => String(n).padStart(2, '0');

function BoardMessageRow({ item, index, totalCount, formatDate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const isOpen = isHovered || isPinned;
  const num = pad(index + 1);
  const serial = String(totalCount - index).padStart(3, '0');

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35), ease }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPinned((prev) => !prev)}
      className={`group relative rounded-xl border transition-all duration-300 cursor-pointer select-none overflow-hidden ${
        isOpen
          ? 'border-fg/50 bg-bg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]'
          : 'border-line bg-bg/70 hover:border-fg/30 hover:bg-bg'
      }`}
    >
      {/* Slat Header */}
      <div className="flex items-center gap-4 sm:gap-6 px-5 sm:px-7 py-5 sm:py-6">
        {/* Editorial Index Numeral */}
        <span
          className={`font-serif italic text-2xl sm:text-3xl tabular-nums transition-colors duration-300 ${
            isOpen ? 'text-fg' : 'text-muted group-hover:text-fg'
          }`}
        >
          {num}.
        </span>

        {/* Title */}
        <span className="font-serif text-2xl sm:text-3xl text-fg tracking-tight">
          Message {index + 1}
        </span>

        {/* Architectural Dotted Leader Line */}
        <span
          className="hidden sm:block flex-1 border-b border-dashed border-line group-hover:border-fg/30 transition-colors mx-2"
          aria-hidden="true"
        />

        {/* Right Meta & Circular Roll Indicator */}
        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted tabular-nums px-2.5 py-1 rounded-full border border-line/80 bg-line/[0.04]">
            {formatDate(item.created_at)}
          </span>

          <span
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-300 ${
              isOpen
                ? 'border-fg bg-fg text-bg rotate-180'
                : 'border-line text-muted group-hover:border-fg group-hover:text-fg'
            }`}
            aria-hidden="true"
          >
            ↓
          </span>
        </div>
      </div>

      {/* Roll-Down Paper Body */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden"
      >
        <div className="relative border-t border-line bg-gradient-to-b from-line/[0.04] to-transparent px-6 sm:px-10 py-8 sm:py-10">
          {/* Ruled Notebook Paper Lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.3] dark:opacity-[0.14]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 31px, var(--line) 32px)',
            }}
            aria-hidden="true"
          />

          {/* Left Margin Rule Line */}
          <div
            className="pointer-events-none absolute inset-y-0 left-12 sm:left-16 w-px bg-line/70"
            aria-hidden="true"
          />

          {/* Giant Editorial Quote Watermark */}
          <span
            className="pointer-events-none absolute -top-4 right-6 font-serif italic text-[7rem] leading-none text-fg/[0.04] dark:text-fg/[0.06] select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>

          {/* Unrolled Message Content */}
          <div className="relative z-10 pl-8 sm:pl-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <blockquote className="font-serif italic text-2xl sm:text-4xl text-fg leading-[1.3] max-w-3xl break-words">
              &ldquo;{item.message}&rdquo;
            </blockquote>

            <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase shrink-0 self-end">
              № {serial}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}

export default function NotesLedgerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const loadLocalNotes = () => {
    try {
      const local = JSON.parse(localStorage.getItem('vnn_desk_notes') || '[]');
      const formatted = local
        .map((n, i) => ({
          id: `local-${i}`,
          message: n.message,
          created_at: n.date || new Date().toISOString(),
        }))
        .reverse();
      setNotes(formatted);
      setCount(formatted.length);
    } catch {
      setNotes([]);
      setCount(0);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function load() {
      setLoading(true);
      if (isSupabaseConfigured && supabase) {
        try {
          const { data, error } = await supabase
            .from('desk_notes')
            .select('id, message, created_at')
            .order('created_at', { ascending: false })
            .limit(60);

          if (!ignore && !error && data) {
            setNotes(data);
            setCount(data.length);
          } else if (!ignore) {
            loadLocalNotes();
          }
        } catch {
          if (!ignore) loadLocalNotes();
        }
      } else if (!ignore) {
        loadLocalNotes();
      }
      if (!ignore) setLoading(false);
    }

    load();
    return () => {
      ignore = true;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isNoteModalOpen) {
          setIsNoteModalOpen(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, isNoteModalOpen]);

  const handleNoteAdded = (newItem) => {
    setNotes((prev) => [newItem, ...prev]);
    setCount((prev) => prev + 1);
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
      }).format(d);
    } catch {
      return '';
    }
  };

  return (
    <>
      {/* Right-Edge Message Tab */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-[38%] -translate-y-1/2 z-40 group flex flex-col items-center py-2.5 px-2 rounded-l-2xl border-y border-l border-line bg-bg/95 backdrop-blur-md text-fg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.16)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:-translate-x-1 transition-all duration-300 cursor-pointer select-none"
        aria-label="Open Messages"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-fg/[0.04] dark:bg-fg/[0.08] border border-line group-hover:border-fg/40 transition-all">
          <svg
            className="w-4 h-4 text-fg transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2.5" y="5" width="19" height="14" rx="2" />
            <path d="m2.5 7 9.5 6 9.5-6" />
          </svg>

          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-fg text-bg font-mono text-[9px] font-bold ring-2 ring-bg">
              {count > 99 ? '99+' : count}
            </span>
          )}
        </div>

        <div className="w-4 my-2 border-t border-dashed border-line" />

        <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[9px] uppercase tracking-[0.24em] font-medium text-fg/80 group-hover:text-fg transition-colors">
          MESSAGES
        </span>
      </motion.button>

      {/* Full-Page Minimalist Designed Board (Rolls in & out from right to left) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease }}
            className="fixed inset-0 z-50 bg-bg text-fg overflow-y-auto min-h-screen border-l border-line shadow-[-30px_0_80px_rgba(0,0,0,0.3)]"
          >
            {/* Subtle Architectural Dot-Grid Background */}
            <div
              className="pointer-events-none fixed inset-0 opacity-[0.25] dark:opacity-[0.1]"
              style={{
                backgroundImage: 'radial-gradient(var(--line) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:py-16">
              {/* Top Minimal Bar */}
              <div className="flex items-center justify-between border-b border-line pb-5 mb-12 sm:mb-16">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-fg" />
                  <span>Board ({pad(count)})</span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-bg hover:border-fg hover:bg-fg hover:text-bg transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                  <span>Back</span>
                </button>
              </div>

              {/* Editorial Display Heading + Action */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-[-0.03em]">
                  Visitor <em className="text-muted">notes.</em>
                </h1>

                <button
                  type="button"
                  onClick={() => setIsNoteModalOpen(true)}
                  className="group self-start sm:self-auto inline-flex items-center gap-3 px-5 py-3 rounded-full border border-fg bg-fg text-bg hover:bg-transparent hover:text-fg transition-all duration-300 cursor-pointer"
                >
                  <span className="font-serif italic text-xl leading-none">Leave a note</span>
                  <span className="font-mono text-sm transition-transform duration-300 group-hover:rotate-90">
                    +
                  </span>
                </button>
              </div>

              {/* Framed Board Container with Corner Crosshairs */}
              <div className="relative rounded-2xl border border-line bg-bg/60 backdrop-blur-xs p-4 sm:p-8">
                {/* Architectural Corner Marks */}
                <span className="pointer-events-none absolute -top-2 -left-2 font-mono text-xs text-muted select-none">
                  +
                </span>
                <span className="pointer-events-none absolute -top-2 -right-2 font-mono text-xs text-muted select-none">
                  +
                </span>
                <span className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-xs text-muted select-none">
                  +
                </span>
                <span className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-xs text-muted select-none">
                  +
                </span>

                {loading && notes.length === 0 ? (
                  <div className="py-20 text-center font-serif italic text-2xl text-muted">
                    Loading…
                  </div>
                ) : notes.length === 0 ? (
                  <div className="py-20 text-center font-serif italic text-2xl text-muted">
                    No notes yet.
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {notes.map((item, idx) => (
                      <BoardMessageRow
                        key={item.id}
                        item={item}
                        index={idx}
                        totalCount={count}
                        formatDate={formatDate}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Paper Note Popup Modal */}
            <AnimatePresence>
              {isNoteModalOpen && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsNoteModalOpen(false)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
                    aria-hidden="true"
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20, rotate: -1.5 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 16 }}
                    transition={{ duration: 0.4, ease }}
                    className="relative z-10 w-full max-w-md"
                  >
                    <PaperPlaneNote
                      onSent={handleNoteAdded}
                      onClose={() => setIsNoteModalOpen(false)}
                    />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
