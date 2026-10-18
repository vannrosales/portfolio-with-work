export default function DevStationBadge({ className = '' }) {
  return (
    <a
      href="https://www.dev-station.dev/portfolio/d11787a7-6abf-4387-88a4-46454f738975"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View my portfolio on DEV/STATION"
      className={`inline-flex min-h-11 items-center transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      <img
        src="https://www.dev-station.dev/badge.svg"
        alt="Featured on DEV/STATION"
        width={172}
        height={34}
        loading="lazy"
        className="block h-[34px] w-auto"
      />
    </a>
  );
}

