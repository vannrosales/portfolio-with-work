import { useState, useEffect } from 'react';
import { Cake, Gift } from 'lucide-react';

const BIRTH_YEAR = 2002;
const BIRTH_MONTH = 10; // November (0-indexed)
const BIRTH_DAY = 8;

const pad = (n) => String(n).padStart(2, '0');

function getOrdinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function computeBirthdayState(nowMs) {
  const now = new Date(nowMs);
  const currentYear = now.getFullYear();
  const isBirthday = now.getMonth() === BIRTH_MONTH && now.getDate() === BIRTH_DAY;

  if (isBirthday) {
    return {
      isBirthday: true,
      age: currentYear - BIRTH_YEAR,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  let nextYear = currentYear;
  const thisYearBirthday = new Date(currentYear, BIRTH_MONTH, BIRTH_DAY, 0, 0, 0);
  if (now > thisYearBirthday) {
    nextYear = currentYear + 1;
  }

  const nextBirthday = new Date(nextYear, BIRTH_MONTH, BIRTH_DAY, 0, 0, 0);
  const diff = Math.max(0, nextBirthday.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    isBirthday: false,
    age: nextYear - BIRTH_YEAR,
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function BirthdayCounter() {
  const [previewBirthday, setPreviewBirthday] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('birthday') === 'true';
    }
    return false;
  });
  const [state, setState] = useState(() => ({
    isBirthday: false,
    age: 24,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ready: false,
  }));

  useEffect(() => {
    const update = () => {
      setState({
        ...computeBirthdayState(Date.now()),
        ready: true,
      });
    };

    const initialTimer = setTimeout(update, 0);
    const interval = setInterval(update, 1000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSendWish = () => {
    window.dispatchEvent(new CustomEvent('open-birthday-wish'));
  };

  if (!state.ready) return null;

  if (state.isBirthday || previewBirthday) {
    return (
      <div className="w-[308px] max-w-full h-[62px] px-2.5 rounded-2xl border border-fg/40 bg-bg/90 backdrop-blur-xs flex items-center justify-between gap-3 select-none">
        {/* Left Icon Tile */}
        <div className="w-11 h-11 rounded-xl border border-line bg-fg/[0.06] flex items-center justify-center shrink-0">
          <Cake className="w-5 h-5 text-fg" aria-hidden="true" />
        </div>

        {/* Middle Two-Line Reveal */}
        <div className="flex-1 min-w-0 leading-tight">
          <p className="text-sm font-semibold text-fg truncate">
            It&rsquo;s my {getOrdinal(state.age)} Birthday!
          </p>
          <p className="text-xs text-muted truncate mt-0.5">
            Surprise unlocked today
          </p>
        </div>

        {/* Right Action Box */}
        <button
          type="button"
          onClick={handleSendWish}
          className="h-11 px-3 rounded-xl bg-fg text-bg hover:opacity-90 transition-opacity flex flex-col items-center justify-center leading-tight shrink-0 cursor-pointer"
        >
          <span className="font-mono text-xs font-bold">Send</span>
          <span className="text-[10px] opacity-80">wish →</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-[308px] max-w-full h-[62px] px-2.5 rounded-2xl border border-line bg-bg/80 backdrop-blur-xs flex items-center justify-between gap-3 select-none">
      {/* Left Mystery Icon Tile */}
      <div className="w-11 h-11 rounded-xl border border-line bg-fg/[0.04] flex items-center justify-center shrink-0">
        <Gift className="w-5 h-5 text-fg" aria-hidden="true" />
      </div>

      {/* Middle Mystery Countdown */}
      <div className="flex-1 min-w-0 leading-tight">
        <p className="text-sm font-semibold text-fg truncate">
          Secret Countdown
        </p>
        <p className="font-mono text-xs text-muted tabular-nums tracking-tight truncate mt-0.5">
          {state.days}d {pad(state.hours)}h {pad(state.minutes)}m {pad(state.seconds)}s
        </p>
      </div>

      {/* Right Mystery Box */}
      <div
        onDoubleClick={() => setPreviewBirthday(true)}
        title="Double-click to preview birthday mode"
        className="h-11 min-w-[54px] px-2.5 rounded-xl border border-line bg-fg/[0.04] flex flex-col items-center justify-center leading-tight shrink-0 cursor-pointer"
      >
        <span className="font-mono text-xs font-bold text-fg">???</span>
        <span className="text-[10px] text-muted">soon</span>
      </div>
    </div>
  );
}
