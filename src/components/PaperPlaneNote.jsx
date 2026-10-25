import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ease = [0.16, 1, 0.3, 1];
const COOLDOWN_SECONDS = 60;
const MAX_HOURLY_POSTS = 4;

export default function PaperPlaneNote({ onSent, onClose, isBirthdayWish = false }) {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'folding' | 'flying' | 'sent'
  const [honeypot, setHoneypot] = useState(''); // Hidden trap for automated bots
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldownRemaining, setCooldownRemaining] = useState(() => {
    try {
      const lastPost = parseInt(localStorage.getItem('vnn_last_post_ts') || '0', 10);
      const elapsed = Math.floor((Date.now() - lastPost) / 1000);
      return elapsed < COOLDOWN_SECONDS ? COOLDOWN_SECONDS - elapsed : 0;
    } catch {
      return 0;
    }
  });

  const mountTimeRef = useRef(null);
  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const timer = setInterval(() => {
      setCooldownRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownRemaining]);

  const validateAndSanitize = (text) => {
    // 1. Bot check: Honeypot field must be empty
    if (honeypot.trim().length > 0) {
      // Silently ban bots: pretend it succeeded without storing anything
      return { isBot: true, cleanText: '' };
    }

    // 2. Bot check: Speed trap (humans cannot type and submit in under 1.8s)
    const timeTaken = mountTimeRef.current ? Date.now() - mountTimeRef.current : 3000;
    if (timeTaken < 1800) {
      return { error: 'Please take a moment before posting.' };
    }

    // 3. Rate limiting: 60s cooldown
    const lastPost = parseInt(localStorage.getItem('vnn_last_post_ts') || '0', 10);
    const elapsed = Math.floor((Date.now() - lastPost) / 1000);
    if (elapsed < COOLDOWN_SECONDS) {
      return { error: `Rate limited: please wait ${COOLDOWN_SECONDS - elapsed}s.` };
    }

    // 4. Rate limiting: Hourly cap
    const now = Date.now();
    const hourlyPosts = JSON.parse(localStorage.getItem('vnn_hourly_posts') || '[]').filter(
      (ts) => now - ts < 3600000
    );
    if (hourlyPosts.length >= MAX_HOURLY_POSTS) {
      return { error: 'Hourly posting limit reached (max 4 notes/hr).' };
    }

    // 5. Spam link protection: Block URLs, crypto scams, phishing
    const urlPattern = /https?:\/\/|www\.|\.ru\b|\.xyz\b|\.top\b|t\.me\/|telegram/i;
    if (urlPattern.test(text)) {
      return { error: 'Links and URLs are not permitted on the board.' };
    }

    // 6. Repetitive spam pattern check (e.g., "aaaaaaaa")
    if (/(.)\1{7,}/.test(text)) {
      return { error: 'Repetitive text patterns are not allowed.' };
    }

    // 7. Sanitize: Strip potential HTML/script injection tags
    const sanitized = text
      .replace(/<[^>]*>?/gm, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim();

    if (sanitized.length < 3) {
      return { error: 'Note is too short (minimum 3 characters).' };
    }

    if (sanitized.length > 220) {
      return { error: 'Note exceeds 220 character limit.' };
    }

    return { cleanText: sanitized, hourlyPosts };
  };

  const recordRateLimit = (hourlyPosts = []) => {
    const now = Date.now();
    localStorage.setItem('vnn_last_post_ts', now.toString());
    localStorage.setItem('vnn_hourly_posts', JSON.stringify([...hourlyPosts, now]));
    setCooldownRemaining(COOLDOWN_SECONDS);
  };

  const saveNote = async (text) => {
    const createdAt = new Date().toISOString();
    const storageKey = isBirthdayWish ? 'vnn_birthday_wishes' : 'vnn_desk_notes';
    const dbMessage = isBirthdayWish ? `[WISH] ${text}` : text;

    // Always persist locally so wishes/notes work even if Supabase is paused
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      saved.push({ id: `local-${Date.now()}`, message: text, date: createdAt });
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {
      // Ignore storage quota errors
    }

    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase
          .from('desk_notes')
          .insert([{ message: dbMessage, created_at: createdAt }]);

        if (!error && onSent) {
          onSent({
            id: `db-${Date.now()}`,
            message: text,
            created_at: createdAt,
            isBirthdayWish,
          });
          return;
        }
      }
    } catch {
      // Fallback to local item below when Supabase is paused
    }

    if (onSent) {
      onSent({
        id: `local-${Date.now()}`,
        message: text,
        created_at: createdAt,
        isBirthdayWish,
      });
    }
  };

  const handleLaunch = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (status !== 'idle') return;

    const validation = validateAndSanitize(note);

    // If bot detected, simulate fake flight and exit without saving
    if (validation.isBot) {
      setStatus('folding');
      setTimeout(() => {
        setStatus('flying');
        setTimeout(() => {
          setStatus('sent');
          setTimeout(() => {
            if (onClose) onClose();
          }, 1000);
        }, 900);
      }, 500);
      return;
    }

    if (validation.error) {
      setErrorMessage(validation.error);
      return;
    }

    const cleanText = validation.cleanText;
    recordRateLimit(validation.hourlyPosts);
    saveNote(cleanText);

    setStatus('folding');
    setTimeout(() => {
      setStatus('flying');
      setTimeout(() => {
        setStatus('sent');
        setTimeout(() => {
          setNote('');
          setStatus('idle');
          if (onClose) onClose();
        }, 1400);
      }, 950);
    }, 550);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative Washi Tape strip at top */}
      <div
        className="-top-3.5 left-1/2 -translate-x-1/2 absolute z-20 h-7 w-28 bg-[#e4ded0] dark:bg-[#2c2b27] opacity-90 border-y border-dashed border-line/80 rotate-[-2deg] shadow-xs pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Paper Sheet Card */}
      <div className="relative overflow-hidden rounded-sm border border-line bg-bg p-7 sm:p-9 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.75)]">
        {/* Ruled-paper background lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(transparent, transparent 31px, var(--line) 32px)',
          }}
          aria-hidden="true"
        />

        {/* Subtle vertical margin rule */}
        <div
          className="pointer-events-none absolute inset-y-0 left-7 sm:left-9 w-px bg-line/60"
          aria-hidden="true"
        />

        {/* Paper Header */}
        <div className="relative z-10 flex items-baseline justify-between border-b border-line pb-3 mb-5 pl-3">
          <span className="font-serif italic text-xl text-fg">
            {isBirthdayWish ? 'Send a birthday wish' : 'Leave a note'}
          </span>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="font-mono text-xs text-muted hover:text-fg transition-colors cursor-pointer"
              aria-label="Close note modal"
            >
              ✕
            </button>
          )}
        </div>

        {/* Interactive Body */}
        <div className="relative z-10 min-h-[180px] flex flex-col justify-between pl-3">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleLaunch}
                className="flex flex-col justify-between flex-1"
              >
                {/* Honeypot anti-bot trap (invisible to human visitors, filled by crawler bots) */}
                <input
                  type="text"
                  name="user_website_trap"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none -left-[9999px] h-0 w-0"
                />

                <textarea
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder={
                    cooldownRemaining > 0
                      ? `Cooldown active (${cooldownRemaining}s)…`
                      : isBirthdayWish
                      ? 'Happy birthday, Giovanni! Wishing you…'
                      : 'Write your message here…'
                  }
                  rows={4}
                  maxLength={220}
                  autoFocus
                  disabled={cooldownRemaining > 0}
                  className="w-full resize-none bg-transparent font-serif italic text-xl sm:text-2xl leading-[32px] text-fg placeholder:text-muted/50 focus:outline-none disabled:opacity-50"
                  aria-label="Write a note"
                />

                {/* Error or validation message */}
                {errorMessage && (
                  <p className="text-xs font-mono text-red-500 dark:text-red-400 pt-2">
                    {errorMessage}
                  </p>
                )}

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-line/60">
                  <span className="font-mono text-[10px] text-muted tabular-nums">
                    {cooldownRemaining > 0 ? `Wait ${cooldownRemaining}s` : `${note.length}/220`}
                  </span>

                  <button
                    type="submit"
                    disabled={!note.trim() || cooldownRemaining > 0}
                    className="group inline-flex items-center gap-2 font-serif italic text-xl text-fg disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    <span className="link">
                      {cooldownRemaining > 0 ? 'Rate limited' : 'Post note'}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 not-italic font-sans text-base">
                      →
                    </span>
                  </button>
                </div>
              </motion.form>
            )}

            {(status === 'folding' || status === 'flying') && (
              <motion.div
                key="plane"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={
                  status === 'folding'
                    ? { scale: [1, 0.9, 0.85], rotate: [0, -6, -12], opacity: 1 }
                    : {
                        x: [0, 80, 260],
                        y: [0, -60, -180],
                        scale: [0.85, 0.75, 0.35],
                        rotate: [-12, -28, -45],
                        opacity: [1, 0.9, 0],
                        transition: { duration: 0.95, ease },
                      }
                }
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <span className="text-4xl sm:text-5xl inline-block select-none">✈</span>
                <p className="font-serif italic text-base text-muted mt-3">Sending…</p>
              </motion.div>
            )}

            {status === 'sent' && (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <p className="font-serif italic text-2xl text-fg">Posted.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
