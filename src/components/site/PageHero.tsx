import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import Container from "@/components/ui/Container";

type HeroStat = {
  value: string;
  label: string;
};

type HeroAction = {
  href: string;
  label: string;
  primary?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  stats?: HeroStat[];
  caption?: string;
  reverse?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  stats = [],
  caption,
  reverse = false,
}: PageHeroProps) {
  return (
    <section className="overflow-hidden py-10 md:py-14">
      <Container>
        <div
          className={`grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <FadeUp className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[0.94] text-charcoal md:text-6xl lg:text-[4.8rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 md:text-lg">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-9 flex flex-wrap gap-4">
                {primaryAction ? (
                  <Link
                    href={primaryAction.href}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:-translate-y-0.5"
                  >
                    {primaryAction.label}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ) : null}

                {secondaryAction ? (
                  <Link
                    href={secondaryAction.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:border-primary hover:text-primary"
                  >
                    {secondaryAction.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : null}
              </div>
            )}

            {stats.length > 0 ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-white/80 p-4 shadow-[0_12px_32px_rgba(20,20,20,0.05)] backdrop-blur"
                  >
                    <div className="font-heading text-3xl text-charcoal md:text-[2.2rem]">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </FadeUp>

          <FadeUp className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(14,58,49,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(239,106,34,0.16),transparent_35%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_30px_80px_rgba(20,20,20,0.12)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                {caption ? (
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="inline-flex rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white backdrop-blur">
                      {caption}
                    </div>
                  </div>
                ) : null}
              </div>
              {stats.length > 0 ? (
                <div className="grid gap-0 border-t border-border md:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={`${stat.label}-media`} className="p-5">
                      <div className="font-heading text-2xl text-charcoal">
                        {stat.value}
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/55">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-0 border-t border-border md:grid-cols-[1.3fr_0.7fr]">
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">
                      Designed for depth
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-7 text-ink/65">
                      Premium layouts, structured capital narratives and
                      responsive storytelling built for board-level audiences.
                    </p>
                  </div>
                  <div className="border-t border-border bg-sand/40 p-5 md:border-l md:border-t-0">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-ink/45">
                      Visual language
                    </p>
                    <p className="mt-2 font-heading text-xl text-charcoal">
                      Editorial, layered, and intentionally calm.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
