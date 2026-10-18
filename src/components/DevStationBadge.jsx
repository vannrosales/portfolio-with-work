// React / Next.js with Tailwind CSS. No client component or environment variable is required.
export default function DevStationBadge({ className = '' }) {
  return (
    <a
      href="https://www.dev-station.dev/portfolio/d11787a7-6abf-4387-88a4-46454f738975"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View my portfolio on DEV/STATION"
      className={`fixed right-0 top-[58%] -translate-y-1/2 z-40 flex min-h-11 min-w-11 items-center justify-end print:hidden transition-transform duration-300 hover:-translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      <img
        src="https://www.dev-station.dev/badge-vertical.svg"
        alt="Featured on DEV/STATION"
        width={36}
        height={130}
        loading="lazy"
        className="block w-[30px] h-auto sm:w-[36px] drop-shadow-md"
      />
    </a>
  );
}
