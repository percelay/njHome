import { BookOpenText, Megaphone, MessageSquareShare } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

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

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About NJMHA</p>
        <h1 className="mt-3 text-4xl font-bold text-primary">Mission Statement</h1>
        <p className="mt-6 text-base leading-8 text-text-muted">
          NJMHA is a non-profit organization established for the betterment and advancement of manufactured housing in NJ. Its members promote and supply NJ residents with attractive affordable housing with a high standard of professionalism and integrity. The association is dedicated to maintaining a keen awareness of all aspects of the manufactured housing industry both statewide and nationally. Our executive director, board and committee members are committed to diligently monitor, study and review all pertinent issues affecting our industry and to clearly communicate its objectives to NJMHA members and the public.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-primary">What We Do</h2>
        <p className="mt-4 text-base leading-8 text-text-muted">
          Dedication to the industry and professionalism mark NJMHA members. NJMHA has been serving the manufactured housing industry for 68 years. Approximately 150 manufactured housing communities and 50 associate organizations are members of the NJMHA. Princeton Public Affairs Group works with NJMHA tracking approximately 100 bills in the legislature along with regulatory changes. We advocate for, support and promote manufactured housing communities in the state of New Jersey.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary">How We Serve</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} Icon={feature.Icon} />
          ))}
        </div>
      </section>
    </div>
  );
}
