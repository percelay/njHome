import Link from "next/link";

const members = [
  "Advertise With Us",
  "Board of Directors",
  "Bylaws (October 18, 2018)",
  "Directory of NJMHA Members"
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white">NJMHA</h3>
          <p className="text-sm text-slate-300">
            For over 65 years, the New Jersey Manufactured Housing Association has been a trusted voice for affordable, high-quality housing.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-white">Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/about" className="inline-block transition duration-200 hover:-translate-y-1 hover:text-white">
                Mission & What We Do
              </Link>
            </li>
            <li>
              <Link href="/buying-a-home" className="inline-block transition duration-200 hover:-translate-y-1 hover:text-white">
                Buying a Home
              </Link>
            </li>
            <li>
              <Link href="/members" className="inline-block transition duration-200 hover:-translate-y-1 hover:text-white">
                Member Area
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-white">Members</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {members.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <p className="text-sm text-slate-300">New Jersey Manufactured Housing Association</p>
          <p className="text-sm text-slate-300">2741 Nottingham Way, Trenton, NJ 08619</p>
          <p className="text-sm text-slate-300">(609) 588-9040</p>
          <a href="mailto:njmha@njmha.org" className="inline-block text-sm text-sky-300 transition duration-200 hover:-translate-y-1 hover:text-sky-200">
            njmha@njmha.org
          </a>
        </div>
      </div>
    </footer>
  );
}
