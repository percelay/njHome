import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/buying-a-home", label: "Buying a Home" },
  { href: "/members", label: "Members" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-primary transition-transform duration-200 hover:-translate-y-1">
          NJMHA
        </Link>

        <nav className="flex items-center gap-3 overflow-x-auto text-xs sm:gap-6 sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-medium text-text-muted transition duration-200 hover:-translate-y-1 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="mailto:njmha@njmha.org"
          className="hidden rounded-xl bg-gradient-to-r from-accent to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:inline-flex"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
