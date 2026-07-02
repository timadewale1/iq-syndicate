import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </p>
      <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="font-heading text-[2rem] leading-[1.02] text-charcoal md:text-[2.45rem]">
          {title}
        </h2>
        {action ? (
          <Link
            href={action.href}
            className="group inline-flex items-center gap-2 self-start rounded-sm border border-border bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-all hover:border-primary hover:text-primary"
          >
            {action.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ) : null}
      </div>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink/72 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
