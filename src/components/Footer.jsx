export default function Footer() {
  return (
    <footer className="pt-8 pb-12 border-t border-black/10 dark:border-white/10 opacity-40 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10">
      <p>
        Built with React & Tailwind CSS. Minimalist 1-Pager.
      </p>
      <p className="mt-4 sm:mt-0 font-mono">
        © {new Date().getFullYear()} Giovanni Hanz Guino
      </p>
    </footer>
  );
}

