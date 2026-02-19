type SiteLogoProps = {
  showTagline?: boolean;
  tone?: "light" | "dark";
};

export function SiteLogo({ showTagline = false, tone = "light" }: SiteLogoProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-primary";
  const subtitleClass = tone === "dark" ? "text-slate-300" : "text-text-muted";

  return (
    <div className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 rounded-xl shadow-sm"
      >
        <rect width="40" height="40" rx="12" fill="url(#njmha-logo-gradient)" />
        <path d="M10 22.2L20 13L30 22.2" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.4 21V28H26.6V21" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 28V22.8H22.5V28" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="njmha-logo-gradient" x1="4" y1="4" x2="35" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="leading-tight">
        <p className={`font-[var(--font-heading)] text-lg font-bold tracking-tight ${titleClass}`}>NJMHA</p>
        {showTagline ? (
          <p className={`max-w-[13rem] text-xs ${subtitleClass}`}>New Jersey Manufactured Housing Association</p>
        ) : null}
      </div>
    </div>
  );
}
