import { Building2, HandCoins, Home, Scale } from "lucide-react";

const sections = [
  {
    title: "What is a Manufactured Home?",
    text: "Is it manufactured, modular or mobile? Manufactured homes are constructed to comply with the National Manufactured Home Construction and Safety Standards.",
    Icon: Home
  },
  {
    title: "Value",
    text: "Our greatest attribute is delivering quality and value to consumers.",
    Icon: HandCoins
  },
  {
    title: "What is The HUD Code?",
    text: "Well, it is just a a building code, that's all. In fact it may be the simplest building code ever to exist.",
    Icon: Scale
  },
  {
    title: "Land Lease Lifestyle Benefits",
    text: "Many New Jersey home buyers site their new manufactured homes in planned developments where they typically own the home as personal property and lease a home site from the company responsible for maintaining community amenities and services.",
    Icon: Building2
  }
];

export default function BuyingAHomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Buying Information</p>
        <h1 className="mt-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent">
          Buying a Manufactured Home in New Jersey
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted">
          NJMHA helps buyers understand quality standards, affordability, and community-based living so every purchase decision is informed and confident.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
              <section.Icon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-semibold text-primary">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-text-muted">{section.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
