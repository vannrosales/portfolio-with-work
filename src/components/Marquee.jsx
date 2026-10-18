import { motion } from 'framer-motion';
import {
  ReactLogo,
  VueLogo,
  NextLogo,
  LaravelLogo,
  TypeScriptLogo,
  TailwindLogo,
  SupabaseLogo,
  ReactNativeLogo,
  PostgreSQLLogo,
  TauriLogo,
} from './TechLogos';

const items = [
  { name: 'React', Icon: ReactLogo },
  { name: 'Vue.js', Icon: VueLogo },
  { name: 'Laravel', Icon: LaravelLogo },
  { name: 'Next.js', Icon: NextLogo },
  { name: 'React Native', Icon: ReactNativeLogo },
  { name: 'TypeScript', Icon: TypeScriptLogo },
  { name: 'Supabase', Icon: SupabaseLogo },
  { name: 'Tailwind CSS', Icon: TailwindLogo },
  { name: 'PostgreSQL', Icon: PostgreSQLLogo },
  { name: 'Tauri', Icon: TauriLogo },
];

/** Full-bleed infinite scrolling banner with tech stack logos and titles. */
export default function Marquee() {
  const row = (keyPrefix, hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map(({ name, Icon }) => (
        <li key={`${keyPrefix}-${name}`} className="flex items-center">
          <div className="group flex items-center gap-3.5 px-6 sm:px-10 transition-opacity duration-300 hover:opacity-60">
            <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-fg opacity-85 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-full h-full" />
            </span>
            <span className="font-serif text-3xl sm:text-5xl whitespace-nowrap text-fg">
              {name}
            </span>
          </div>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-muted/60 text-lg sm:text-xl select-none"
            aria-hidden="true"
          >
            ✳
          </motion.span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-line py-5 sm:py-7 marquee-mask">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row('a', false)}
        {row('b', true)}
      </motion.div>
    </div>
  );
}
