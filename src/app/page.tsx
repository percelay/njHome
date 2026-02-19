import Link from "next/link";

const mediaLinks = [
  {
    title: "Video 2",
    href: "https://www.youtube.com/watch?v=b1RbRxBt6QY"
  },
  {
    title: "Video 3",
    href: "https://www.youtube.com/watch?v=AUeWLwXq6BY"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid min-h-[90vh] items-center gap-12 md:grid-cols-2">
        <div className="space-y-7">
          <p className="inline-flex rounded-xl border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-text-muted shadow-sm">
            Trusted Housing Resource in New Jersey
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">Welcome to NJMHA</h1>
          <p className="text-lg leading-8 text-text-muted">
            For over 65 years the New Jersey Manufactured Housing Association has been the leading source of information on manufactured homes in New Jersey. NJMHA provides information to homebuyers and those that develop and market factory built housing.
          </p>
          <p className="text-base leading-7 text-text-muted">
            We provide information on the homes, their locations, and the various lifestyles to those purchasing everything from starter homes to retirement homes. Our primary purpose is to provide affordable, high quality housing options to New Jersey residents. Advances in the technology of factory built housing are remarkable. The results are virtually an unlimited selection of architectural designs and floor plans. Over 150 communities in New Jersey are members of the NJMHA. We offer something for everyone.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/buying-a-home"
              className="rounded-xl bg-gradient-to-r from-accent to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Explore Home Buying
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Learn About NJMHA
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-surface p-4 shadow-md">
          <div className="aspect-video overflow-hidden rounded-xl bg-slate-200">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/pnU8ySzhbXs?rel=0"
              title="NJMHA Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-primary">More Media</h2>
        <p className="mt-2 text-sm text-text-muted">Explore additional videos about manufactured housing and community living.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {mediaLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-[var(--font-heading)] text-lg font-semibold text-primary">{item.title}</p>
              <p className="mt-1 text-sm text-accent">Watch on YouTube</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
