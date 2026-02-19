import Link from "next/link";
import {
  BookOpenText,
  Building2,
  CalendarDays,
  FileText,
  HandCoins,
  Home,
  Megaphone,
  MessageSquareShare,
  Newspaper,
  Scale
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

type BuyingCard = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

const features = [
  {
    title: "Educate",
    description:
      "We Educate and Support - NJMHA provides a community for our communities where members share questions, concerns and ideas. Our members drive our programs and educational events.",
    Icon: BookOpenText
  },
  {
    title: "Advocate",
    description:
      "We Advocate and Promote - NJMHA's Political Action Committee (PAC), Preserve Affordable Housing for New Jersey, makes it possible for members to develop relationships with legislators and regulators at the state and federal level.",
    Icon: Megaphone
  },
  {
    title: "Share",
    description:
      "We Share and Communicate - Housing Insight, a comprehensive newsletter dedicated to the manufactured housing industry, is published quarterly.",
    Icon: MessageSquareShare
  }
];

const buyingCards: BuyingCard[] = [
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

const resources = [
  "Advertise With Us",
  "Board of Directors",
  "Bylaws-October 18, 2018",
  "Directory of NJMHA Members",
  "HUD News and Forms",
  "Legislation and Regulation"
];

const calendarEvents = [
  "Legislative Meeting: March 11, 2026 (Zoom at Noon)",
  "Spring Educational Luncheon: April 23, 2026",
  "Summer Social: TBA",
  "Annual Meeting: October 22, 2026"
];

const mediaLinks = [
  {
    title: "Video 1",
    href: "https://www.youtube.com/watch?v=pnU8ySzhbXs"
  },
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
    <div id="home" className="relative space-y-20 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gradient-to-b from-sky-100/70 via-white to-white" />

      <section className="grid min-h-[90vh] items-center gap-10 pt-6 md:grid-cols-2">
        <div className="space-y-7">
          <p className="inline-flex rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent shadow-sm">
            Trusted Housing Resource in New Jersey
          </p>

          <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
            Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NJMHA</span>
          </h1>

          <p className="text-lg leading-8 text-text-muted">
            For over 65 years the New Jersey Manufactured Housing Association has been the leading source of information on manufactured homes in New Jersey. NJMHA provides information to homebuyers and those that develop and market factory built housing.
          </p>

          <p className="text-base leading-7 text-text-muted">
            We provide information on the homes, their locations, and the various lifestyles to those purchasing everything from starter homes to retirement homes. Our primary purpose is to provide affordable, high quality housing options to New Jersey residents.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/#buying"
              className="rounded-xl bg-gradient-to-r from-accent to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Explore Home Buying
            </Link>
            <Link
              href="/#about"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Learn About NJMHA
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-primary">65+</p>
              <p className="text-xs text-text-muted">Years Serving NJ</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-primary">150+</p>
              <p className="text-xs text-text-muted">Member Communities</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-xs text-text-muted">Associate Organizations</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-md">
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

          <div className="rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
            <p className="text-sm leading-7 text-text-muted">
              Advances in the technology of factory built housing are remarkable. The results are virtually an unlimited selection of architectural designs and floor plans. Over 150 communities in New Jersey are members of the NJMHA. We offer something for everyone.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Mission Statement</p>
          <p className="mt-4 text-base leading-8 text-text-muted">
            NJMHA is a non-profit organization established for the betterment and advancement of manufactured housing in NJ. Its members promote and supply NJ residents with attractive affordable housing with a high standard of professionalism and integrity. The association is dedicated to maintaining a keen awareness of all aspects of the manufactured housing industry both statewide and nationally. Our executive director, board and committee members are committed to diligently monitor, study and review all pertinent issues affecting our industry and to clearly communicate its objectives to NJMHA members and the public.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What We Do</p>
          <p className="mt-4 text-base leading-8 text-text-muted">
            Dedication to the industry and professionalism mark NJMHA members. NJMHA has been serving the manufactured housing industry for 68 years. Approximately 150 manufactured housing communities and 50 associate organizations are members of the NJMHA. Princeton Public Affairs Group works with NJMHA tracking approximately 100 bills in the legislature along with regulatory changes. We advocate for, support and promote manufactured housing communities in the state of New Jersey.
          </p>
        </article>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary">Educate. Advocate. Share.</h2>
          <p className="mt-2 text-sm text-text-muted">The three pillars guiding NJMHA member support, outreach, and communication.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} Icon={feature.Icon} />
          ))}
        </div>
      </section>

      <section id="buying" className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-primary">Buying a Manufactured Home</h2>
          <p className="mt-3 text-base text-text-muted">
            Clear answers on home type, HUD standards, value, and community living benefits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {buyingCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
                <card.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="members" className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-primary">Members Area</h2>
          <p className="mt-2 text-sm text-text-muted">Resources, calendar, and industry updates for NJMHA members.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-sm md:col-span-2">
            <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-2 text-accent">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-primary">Member Resources</h3>
            <ul className="mt-4 grid gap-3 text-sm text-text-muted sm:grid-cols-2">
              {resources.map((resource) => (
                <li key={resource} className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  {resource}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
              <CalendarDays className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-primary">Calendar 2026</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              {calendarEvents.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
            <Newspaper className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold text-primary">News</h3>
          <p className="mt-4 text-base leading-8 text-text-muted">
            NJ Department of Community Affairs Proposes to Discontinue State's Role in Manufactured Housing Program. The HUD manufactured housing program was designed as a partnership between federal and state governments. New Jersey never completed their state portion... NJMHA encourages everyone who installs new homes to read the DCA's rule proposal.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-primary">Media Library</h2>
        <p className="mt-2 text-sm text-text-muted">Explore all featured NJMHA videos.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
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

      <section
        id="contact"
        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-white p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted">
          New Jersey Manufactured Housing Association, 2741 Nottingham Way, Trenton, NJ 08619. Phone: (609) 588-9040.
        </p>
        <div className="mt-5">
          <a
            href="mailto:njmha@njmha.org"
            className="inline-flex rounded-xl bg-gradient-to-r from-accent to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            njmha@njmha.org
          </a>
        </div>
      </section>
    </div>
  );
}
