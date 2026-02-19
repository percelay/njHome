import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-3 font-[var(--font-heading)] text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm leading-6 text-text-muted">{description}</p>
    </article>
  );
}
