import { Compass, Settings2, Shuffle, Boxes } from "lucide-react";

export const NAV_SERVICES = [
  {
    n: "01",
    title: "Climate Advisory",
    body: "Project design, market intelligence, and product validation.",
    href: "/services#advisory",
    icon: Compass,
    tone: "bg-primary" as const,
    iconTone: "bg-white/15 text-white" as const,
  },
  {
    n: "02",
    title: "Technical Assistance",
    body: "6–18 month programme: financial modelling, legal structuring, operations.",
    href: "/services#technical-assistance",
    icon: Settings2,
    tone: "bg-forest" as const,
    iconTone: "bg-white/15 text-white" as const,
  },
  {
    n: "03",
    title: "Mobilist Facility",
    body: "Blended finance converting philanthropic capital into deployable instruments.",
    href: "/services#mobilist",
    icon: Shuffle,
    tone: "bg-gold-dark" as const,
    iconTone: "bg-white/15 text-white" as const,
  },
  {
    n: "04",
    title: "Portfolio Aggregation",
    body: "Bundling ventures into institutional-grade vehicles for large-ticket investors.",
    href: "/services#aggregation",
    icon: Boxes,
    tone: "bg-ink" as const,
    iconTone: "bg-gold-light/20 text-gold-light" as const,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Investment Process", href: "/investment-process" },
  { label: "Mobilist Facility", href: "/mobilist-facility" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
];