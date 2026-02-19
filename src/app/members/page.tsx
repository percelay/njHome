import { CalendarDays, FileText, Newspaper } from "lucide-react";

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

export default function MembersPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-primary">Member Resources</h1>
        <p className="mt-3 text-base text-text-muted">
          Access core NJMHA resources, legislative updates, and annual member activities.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
          <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold text-primary">Resources</h2>
          <ul className="mt-4 grid gap-3 text-sm text-text-muted sm:grid-cols-2">
            {resources.map((resource) => (
              <li key={resource} className="rounded-xl border border-slate-200 bg-surface px-4 py-3 shadow-sm">
                {resource}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
            <CalendarDays className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold text-primary">Calendar 2026</h2>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {calendarEvents.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
          <Newspaper className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-semibold text-primary">News</h2>
        <p className="mt-4 text-base leading-8 text-text-muted">
          NJ Department of Community Affairs Proposes to Discontinue State's Role in Manufactured Housing Program. The HUD manufactured housing program was designed as a partnership between federal and state governments. New Jersey never completed their state portion... NJMHA encourages everyone who installs new homes to read the DCA's rule proposal.
        </p>
      </section>
    </div>
  );
}
