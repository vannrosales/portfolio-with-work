/**
 * Curated brand vector logos for Giovanni's tech stack.
 * All paths are vector SVGs styled with currentColor / semantic fills,
 * keeping the design crisp, fast, and responsive in both light and dark modes.
 */

export function ReactLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" stroke="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
      <g strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function VueLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 261.76 226.69" className={className} fill="currentColor">
      <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fillOpacity="0.3" />
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.246l78.626 136.181L209.479.001z" />
    </svg>
  );
}

export function NextLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90 180c49.706 0 90-40.294 90-90s-40.294-90-90-90S0 40.294 0 90s40.294 90 90 90zm37.284-124.632h14.542V124.8h-14.542V67.067l-57.89 74.085C74.654 143.206 82.164 144 90 144c29.822 0 54-24.178 54-54 0-11.597-3.66-22.339-9.89-31.144l-6.826 8.512zM52.716 55.368h14.542v69.264H52.716V55.368z"
      />
    </svg>
  );
}

export function LaravelLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 74 70" className={className} fill="currentColor">
      <path d="M69.7 18.2L55 9.7c-.5-.3-1.1-.3-1.6 0L38.7 18.2c-.5.3-.8.8-.8 1.4v17c0 .6.3 1.1.8 1.4l14.7 8.5c.5.3 1.1.3 1.6 0l14.7-8.5c.5-.3.8-.8.8-1.4v-17c0-.6-.3-1.1-.8-1.4zm-15.5-5.9l11.4 6.6-4.5 2.6-11.4-6.6 4.5-2.6zm-1.6 3.6l11.4 6.6v5.2l-11.4-6.6v-5.2zm-1.6 20.3v-13l11.4 6.6v13l-11.4-6.6zM22.7 2.2L8 10.7c-.5.3-.8.8-.8 1.4v34c0 .6.3 1.1.8 1.4L37.3 64c.5.3 1.1.3 1.6 0l14.7-8.5c.5-.3.8-.8.8-1.4v-17c0-.6-.3-1.1-.8-1.4L39.7 27.2c-.5-.3-1.1-.3-1.6 0L24.3 35.7c-.5.3-.8.8-.8 1.4v10.5l-13.1-7.6V13.6l12.3-7.1 4.5 2.6-7.8 4.5 4.5 2.6 11.4-6.6c.5-.3.8-.8.8-1.4V3.6c0-.6-.3-1.1-.8-1.4L24.3.8c-.5-.3-1.1-.3-1.6 0l-.001 1.4zm13.1 36.3v13L24.4 44.9v-13l11.4 6.6zm1.6 2.6l11.4 6.6-11.4 6.6-11.4-6.6 11.4-6.6zm13-8.2l-4.5-2.6 4.5-2.6 4.5 2.6-4.5 2.6zm-1.6 4.6l4.5 2.6v5.2l-4.5-2.6v-5.2z" />
    </svg>
  );
}

export function TypeScriptLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="currentColor">
      <path d="M1.5 0h125c.8 0 1.5.7 1.5 1.5v125c0 .8-.7 1.5-1.5 1.5H1.5c-.8 0-1.5-.7-1.5-1.5V1.5C0 .7.7 0 1.5 0z" fillOpacity="0.12" />
      <path d="M1.5 0h125c.8 0 1.5.7 1.5 1.5v125c0 .8-.7 1.5-1.5 1.5H1.5c-.8 0-1.5-.7-1.5-1.5V1.5C0 .7.7 0 1.5 0z" fill="none" stroke="currentColor" strokeWidth="6" />
      <path d="M72.2 44.8V33.6H31.5v11.2h13.9v50.5h12.8V44.8h14zM86.1 76.5c3.8 4.3 8.8 6.4 15 6.4 5.3 0 9.2-1.3 11.8-3.9 2.6-2.6 3.9-6.3 3.9-11 0-4.1-1.2-7.3-3.6-9.6s-6.7-4.4-12.8-6.4c-6-1.9-10.4-4.2-13.1-6.8s-4.1-6.3-4.1-11c0-5.7 2.1-10.3 6.3-13.8 4.2-3.5 9.8-5.2 16.8-5.2 5.5 0 10.4 1.1 14.7 3.3 4.3 2.2 7.5 5.5 9.6 9.9l-9.8 6.2c-3.1-4.7-7.6-7-13.5-7-3.9 0-7 1-9.2 3.1s-3.3 5-3.3 8.7c0 3.5 1.1 6.2 3.4 8.2s6.3 3.9 12 5.8c6.6 2.2 11.4 4.8 14.4 7.7 3 2.9 4.5 7.1 4.5 12.5 0 6.6-2.3 11.9-6.9 15.9-4.6 4-11 6-19.2 6-6.8 0-12.9-1.5-18.3-4.5s-9.3-7.5-11.7-13.5l10.3-5.2c.8 1.4 1.5 2.5 2.1 3.3z" />
    </svg>
  );
}

export function TailwindLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

export function SupabaseLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 109 113" className={className} fill="currentColor">
      <path d="M63.708 110.284c-3.076 4.02-9.52 1.89-9.61-3.155l-1.077-60.627 46.402-.008c4.34-.001 6.814 4.966 4.148 8.414l-39.863 55.376z" />
      <path
        d="M45.292 2.716c3.076-4.02 9.52-1.89 9.61 3.155l1.077 60.627-46.402.008c-4.34.001-6.814-4.966-4.148-8.414L45.292 2.716z"
        fillOpacity="0.4"
      />
    </svg>
  );
}

export function ReactNativeLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
      <ellipse cx="50" cy="50" rx="44" ry="17" strokeWidth="4.5" />
      <ellipse cx="50" cy="50" rx="44" ry="17" strokeWidth="4.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="44" ry="17" strokeWidth="4.5" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function PostgreSQLLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="currentColor">
      <path d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm28.8 82.2c-2.4 4.5-6.5 8-11.7 9.8-3.4 1.2-7.2 1.6-11.2 1.6-9.8 0-18.7-3.6-25-10.4-6.4-6.9-9.6-16.1-9.6-26.6 0-9.8 2.8-18.4 8.2-25 5.5-6.8 13.5-10.8 23.3-11.6 3.1-.3 6.3-.1 9.4.6 6.3 1.4 11.5 5 15.1 10.4l-11.2 7.7c-2.2-3.5-5.5-5.6-9.5-6.2-1.9-.3-3.8-.2-5.7 0-5.8.6-10.4 3-13.6 7.1-3.2 4.1-4.9 9.6-4.9 16 0 7.2 1.9 13.4 5.7 18 3.8 4.6 9.4 7.2 16.3 7.2 2.5 0 4.8-.3 6.9-.9 2.8-.8 5.1-2.4 6.8-4.7l10.8 7z" />
    </svg>
  );
}

export function TauriLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="8">
      <path d="M22 66 C 14 54, 14 36, 26 24 C 38 12, 56 12, 68 22 C 78 30, 80 44, 76 56 L 68 46" strokeLinecap="round" />
      <path d="M78 34 C 86 46, 86 64, 74 76 C 62 88, 44 88, 32 78 C 22 70, 20 56, 24 44 L 32 54" strokeLinecap="round" />
    </svg>
  );
}

export function MySQLLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 10 C 27.9 10 10 27.9 10 50 C 10 72.1 27.9 90 50 90 C 72.1 90 90 72.1 90 50 C 90 27.9 72.1 10 50 10 Z M 32 35 L 39 35 L 48 57 L 57 35 L 64 35 L 64 65 L 58 65 L 58 45 L 50 63 L 46 63 L 38 45 L 38 65 L 32 65 Z" />
    </svg>
  );
}

