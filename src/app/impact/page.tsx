import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  Briefcase,
  Leaf,
  Users,
  Home,
  Cloud,
  Flame,
  UserCheck,
  TrendingUp,
  ShieldAlert,
  Users2,
  Map,
  Eye,
  ThermometerSun,
  BookOpen,
  Globe2,
  BarChart3,
  Scale,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Every venture IQ Syndicate supports is screened, measured, and reported against internationally recognised impact standards. Impact is not a byproduct of our model — it is the reason for it.",
};

// Official UN SDG colours — used verbatim in the hero tiles and SDG cards
const sdgs = [
  {
    n: "7",
    title: "Affordable & Clean Energy",
    body: "IQ Syndicate expands access to off-grid solar, mini-grids, and clean cooking for unserved households across Nigeria. Portfolio ventures directly displace kerosene and biomass, reducing household energy costs and health impacts while contributing to Nigeria's national target of 50% renewable power mix by 2030.",
    icon: Zap,
    // Official SDG 7 colour — yellow; use dark text
    sdgColor: "#FCC30B",
    textDark: true,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    imageTone: "photo-duotone-gold",
  },
  {
    n: "8",
    title: "Decent Work & Economic Growth",
    body: "The portfolio generates full-time employment in climate sectors and supports indigenous-led enterprise development in underserved geographies. At least 40% of portfolio ventures are women-led, reflecting IQ Syndicate's commitment to inclusive economic participation.",
    icon: Briefcase,
    // Official SDG 8 colour — wine/maroon; white text
    sdgColor: "#A21942",
    textDark: false,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    imageTone: "photo-duotone-burgundy",
  },
  {
    n: "13",
    title: "Climate Action",
    body: "Portfolio ventures reduce greenhouse gas emissions through mitigation projects and strengthen community-level climate resilience through adaptation ventures. IQ Syndicate's investment activity is directly aligned with Nigeria's NDC 3.0 targets — a 29% GHG reduction by 2030 and 32% by 2035 relative to business-as-usual.",
    icon: Leaf,
    // Official SDG 13 colour — forest green; white text
    sdgColor: "#3F7E44",
    textDark: false,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    imageTone: "photo-duotone-forest",
  },
  {
    n: "10",
    title: "Reduced Inequalities",
    body: "IQ Syndicate directs capital specifically to indigenous African founders and underserved communities excluded from mainstream finance. The firm's geographic scope prioritises regions with the greatest energy access deficit and climate vulnerability.",
    icon: Users,
    // Official SDG 10 colour — magenta; white text
    sdgColor: "#DD1367",
    textDark: false,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    imageTone: "photo-duotone-forest",
  },
];

const impactTargets = [
  {
    icon: Home,
    value: 150000,
    display: "150,000",
    suffix: "",
    label: "Households with improved energy access",
    definition: "Unique households gaining access to clean electricity or improved cooking solutions through portfolio ventures.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Cloud,
    value: 120000,
    display: "120,000",
    suffix: " tCO₂e/yr",
    label: "GHG emissions avoided",
    definition: "Metric tonnes of CO₂-equivalent avoided relative to a business-as-usual baseline.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Flame,
    value: 40000,
    display: "40,000",
    suffix: "",
    label: "Clean cooking adopters",
    definition: "Households transitioning from solid biomass or kerosene to improved cookstoves through portfolio ventures.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Briefcase,
    value: 2500,
    display: "2,500",
    suffix: " FTE",
    label: "Decent jobs created",
    definition: "Full-time-equivalent direct employment generated across portfolio ventures, disaggregated by gender and youth.",
    tone: "bg-primary-deep text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: UserCheck,
    value: 40,
    display: "40%+",
    suffix: "",
    label: "Women-owned or women-led ventures",
    definition: "Ventures where the CEO or majority of the founding team are women.",
    tone: "bg-forest-deep text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const standards = [
  {
    icon: BarChart3,
    label: "IRIS+",
    title: "IRIS+ Alignment",
    body: "IQ Syndicate's KPIs are mapped to the IRIS+ catalogue maintained by the Global Impact Investing Network (GIIN), enabling comparability across impact investors and facilitating third-party benchmarking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    imageTone: "photo-duotone-burgundy",
  },
  {
    icon: ShieldAlert,
    label: "IFC PS",
    title: "IFC Performance Standards",
    body: "Environmental and social risk screening is applied at origination against IFC Performance Standards PS1–PS8, covering E&S assessment, labour conditions, community health and safety, land, indigenous peoples, and cultural heritage.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    imageTone: "photo-duotone-forest",
  },
  {
    icon: Globe2,
    label: "UN PRI",
    title: "UN Principles for Responsible Investment",
    body: "IQ Syndicate integrates ESG considerations into investment analysis, exercises active ownership, seeks appropriate ESG disclosure from portfolio ventures, and reports annually on ESG activities to Limited Partners.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
    imageTone: "photo-duotone-gold",
  },
  {
    icon: ThermometerSun,
    label: "TCFD",
    title: "TCFD Climate Disclosure",
    body: "Climate risk is integrated into Step 5 stress testing. Portfolio-level GHG avoided and climate exposure are reported annually in the LP pack.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=900&q=80",
    imageTone: "photo-duotone-burgundy",
  },
];

const esgRisks = [
  {
    icon: Leaf,
    title: "Environmental Risk",
    body: "Hazardous waste, land degradation, water pollution, ecologically sensitive areas",
    tone: "bg-forest/8 border-forest/15 text-forest",
    iconTone: "bg-forest/12 text-forest",
  },
  {
    icon: Users2,
    title: "Social & Labour Risk",
    body: "Vulnerable group employment, labour practices, health and safety, worker rights",
    tone: "bg-primary/8 border-primary/15 text-primary",
    iconTone: "bg-primary/10 text-primary",
  },
  {
    icon: Map,
    title: "Land & Community Risk",
    body: "Land tenure impacts, community livelihoods, displacement, Free Prior and Informed Consent",
    tone: "bg-gold-dark/8 border-gold-dark/15 text-gold-dark",
    iconTone: "bg-gold-dark/10 text-gold-dark",
  },
  {
    icon: Eye,
    title: "Governance & Integrity Risk",
    body: "KYC/AML screening, PEP and sanctions checks, corporate registry verification",
    tone: "bg-ink/8 border-ink/15 text-ink",
    iconTone: "bg-ink/10 text-ink",
  },
  {
    icon: ThermometerSun,
    title: "Climate Transition Risk",
    body: "Resilience to regulatory shifts, technology disruption, and commodity price volatility",
    tone: "bg-forest/8 border-forest/15 text-forest",
    iconTone: "bg-forest/12 text-forest",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO — split layout unique to Impact page:
          large editorial headline left; four SDG
          number tiles right — immediately signals
          the alignment without a word of explanation.
      ───────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80"
            alt="Solar infrastructure in Nigeria — IQ Syndicate's climate impact in action"
            fill
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 grid min-h-[88vh] items-center gap-10 py-36 md:grid-cols-[1.15fr_0.85fr]">
          {/* Left: headline */}
          <div>
            <Reveal direction="down">
              <span className="eyebrow-pill mb-7 inline-flex">
                IQ Syndicate · Impact by Design
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-white">Impact by Design</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/88">
                Every venture IQ Syndicate supports is screened, measured,
                and reported against internationally recognised impact
                standards. Impact is not a byproduct of our model — it is
                the reason for it.
              </p>
            </Reveal>
          </div>

          {/* Right: official SDG colour tiles */}
          <Reveal direction="right" className="hidden md:grid md:grid-cols-2 md:gap-3">
            {sdgs.map((sdg, i) => {
              const Icon = sdg.icon;
              const textColor = sdg.textDark ? "#1a1208" : "#ffffff";
              const iconBg    = sdg.textDark ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)";
              const numColor  = sdg.textDark ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.22)";
              return (
                <div
                  key={sdg.n}
                  className="card-float overflow-hidden rounded-2xl shadow-2xl shadow-black/30"
                  style={{
                    background: sdg.sdgColor,
                    opacity: 0,
                    animation: `fadeSlideUp 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 130 + 320}ms forwards`,
                  }}
                >
                  {/* Top row: SDG label + icon */}
                  <div className="flex items-center justify-between px-5 pt-5">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.25em]"
                      style={{ color: textColor, opacity: 0.75 }}
                    >
                      SDG {sdg.n}
                    </span>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ background: iconBg }}
                    >
                      <Icon
                        className="h-4.5 w-4.5"
                        strokeWidth={1.75}
                        style={{ color: textColor }}
                      />
                    </div>
                  </div>

                  {/* Large SDG number */}
                  <p
                    className="px-5 font-heading leading-none"
                    style={{ fontSize: "4.5rem", color: numColor }}
                  >
                    {sdg.n}
                  </p>

                  {/* Title */}
                  <p
                    className="px-5 pb-5 text-[12px] font-bold leading-snug"
                    style={{ color: textColor }}
                  >
                    {sdg.title}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          SDG ALIGNMENT
          Each SDG gets a photo card + full description.
          Two wide cards on top (01, 02), two on bottom.
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="institutional-eyebrow">SDG Alignment</p>
            <h2 className="mt-4 text-charcoal">
              Aligned to Four UN Sustainable Development Goals
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {sdgs.map((sdg, i) => {
              const Icon = sdg.icon;
              const dirs = ["left", "right", "left", "right"] as const;
              const textColor  = sdg.textDark ? "#1a1208" : "#ffffff";
              const iconBg     = sdg.textDark ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)";
              return (
                <Reveal key={sdg.n} direction={dirs[i]} delay={i * 90}>
                  <div className="card-float h-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10">
                    {/* Photo header with official SDG colour overlay */}
                    <div className="relative h-48">
                      <Image
                        src={sdg.image}
                        alt={sdg.title}
                        fill
                        className="object-cover"
                      />
                      {/* Official colour duotone */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(160deg, ${sdg.sdgColor}cc, ${sdg.sdgColor}55)`,
                          mixBlendMode: "multiply",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-3 p-5">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ background: iconBg, backdropFilter: "blur(6px)" }}
                        >
                          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/70">
                            SDG {sdg.n}
                          </p>
                          <p className="font-heading text-lg text-white">{sdg.title}</p>
                        </div>
                      </div>
                      {/* SDG number watermark */}
                      <p
                        className="absolute right-4 top-2 font-heading leading-none"
                        style={{ fontSize: "5rem", color: sdg.sdgColor, opacity: 0.35 }}
                      >
                        {sdg.n}
                      </p>
                    </div>
                    {/* Body */}
                    <div className="p-7">
                      <p className="text-[14.5px] leading-7 text-ink/72">{sdg.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PRIMARY IMPACT TARGETS — Year 5
          Five metric cards, full-width alternating
          colors, counter animation on the numbers.
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Primary Impact Targets</p>
            <h2 className="mt-4 text-charcoal">Year 5 Commitments</h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/72">
              These are not aspirations — they are the measurable outcomes
              IQ Syndicate is contractually accountable for delivering
              and reporting to LPs annually.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactTargets.map((metric, i) => {
              const Icon = metric.icon;
              const dirs = ["left", "up", "right", "left", "right"] as const;
              return (
                <Reveal
                  key={metric.label}
                  direction={dirs[i]}
                  delay={i * 100}
                  className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <div className={`card-float h-full rounded-3xl p-8 shadow-xl shadow-black/12 md:p-9 ${metric.tone}`}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.iconTone}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <p className="mt-6 font-heading text-4xl text-white md:text-5xl">
                      {metric.display}
                      {metric.suffix && (
                        <span className="text-2xl text-white/60 md:text-3xl">
                          {metric.suffix}
                        </span>
                      )}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      {metric.label}
                    </p>
                    <p className="mt-4 border-t border-white/15 pt-4 text-[13px] leading-5 text-white/70">
                      {metric.definition}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          IMPACT STANDARDS
          Photo + description for each of the four
          frameworks, in a 2×2 grid.
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">Our Impact Standards</p>
            <h2 className="mt-4 text-charcoal">
              Aligned to the frameworks investors already use.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {standards.map((std, i) => {
              const Icon = std.icon;
              const dirs = ["left", "right", "left", "right"] as const;
              return (
                <Reveal key={std.label} direction={dirs[i]} delay={i * 80}>
                  <div className="card-float h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/8">
                    <div className="relative h-40">
                      <Image
                        src={std.image}
                        alt={std.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 ${std.imageTone}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                          <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
                            Framework
                          </p>
                          <p className="font-heading text-lg text-white">{std.label}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-semibold text-charcoal">{std.title}</p>
                      <p className="mt-3 text-[13.5px] leading-6 text-ink/68">{std.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          ESG RISK MANAGEMENT
          Forest-green section, five risk categories
          as a clean card grid.
      ───────────────────────────────────────────── */}
      <section className="bg-forest py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal direction="left">
              <p className="eyebrow-on-dark">ESG Risk Management</p>
              <h2 className="mt-4 text-white">
                Five risk categories. Applied at origination.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/76">
                All ventures entering IQ Syndicate's origination pipeline
                are subject to structured environmental and social risk
                screening at Steps 1 and 2. Material ESG risks that cannot
                be remediated within the TA scope and timeline result in
                automatic exclusion from the portfolio.
              </p>

              <div className="mt-8 card-float glass-card rounded-2xl p-6 shadow-xl shadow-black/20">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Exclusion Policy
                </p>
                <p className="mt-3 text-[14px] leading-6 text-white/85">
                  Material ESG risks that cannot be remediated within the
                  TA scope and timeline result in{" "}
                  <span className="font-semibold text-white">
                    automatic exclusion
                  </span>{" "}
                  from the portfolio.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {esgRisks.map((risk, i) => {
                const Icon = risk.icon;
                const dirs = ["right", "up", "right", "up", "right"] as const;
                return (
                  <Reveal key={risk.title} direction={dirs[i]} delay={i * 90}>
                    <div className={`card-float flex gap-5 rounded-2xl border p-5 shadow-lg shadow-black/20 ${risk.tone} bg-white`}>
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${risk.iconTone}`}>
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{risk.title}</p>
                        <p className="mt-1 text-[13px] leading-5 text-ink/65">{risk.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          GRIEVANCE MECHANISM
          Clean two-tier explainer on white.
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Grievance Mechanism</p>
              <h2 className="mt-4 text-charcoal">
                A two-tier system consistent with IFC PS 1.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/72">
                IQ Syndicate operates a two-tier grievance mechanism
                consistent with IFC Performance Standard 1 requirements.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-5">
                {[
                  {
                    icon: BookOpen,
                    tier: "Tier 1",
                    title: "Venture-Level Grievance Log",
                    body: "Each portfolio venture maintains a venture-level grievance log accessible to affected communities and workers.",
                    tone: "bg-cream",
                    iconBg: "bg-primary/10 text-primary",
                  },
                  {
                    icon: Scale,
                    tier: "Tier 2",
                    title: "Portfolio-Level Escalation",
                    body: "Unresolved grievances may be escalated to IQ Syndicate's portfolio-level mechanism, with outcomes recorded in the firm's annual ESG and Impact Report.",
                    tone: "bg-primary text-white",
                    iconBg: "bg-white/15 text-white",
                  },
                ].map((tier, i) => {
                  const Icon = tier.icon;
                  return (
                    <Reveal key={tier.tier} direction="right" delay={i * 130}>
                      <div className={`card-float flex gap-5 rounded-2xl p-7 shadow-lg shadow-black/8 ${tier.tone}`}>
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tier.iconBg}`}>
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${i === 1 ? "text-white/60" : "text-primary"}`}>
                            {tier.tier}
                          </p>
                          <p className={`mt-1 font-semibold ${i === 1 ? "text-white" : "text-charcoal"}`}>
                            {tier.title}
                          </p>
                          <p className={`mt-2 text-[13.5px] leading-6 ${i === 1 ? "text-white/80" : "text-ink/68"}`}>
                            {tier.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CLOSING CTA
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">
                  Want to see our impact reporting?
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  LP-level impact reports, ESG disclosures, and portfolio
                  KPI dashboards are available to qualified institutional
                  investors on request.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Request Impact Report
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 border-b border-white/40 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}