import type {
  ContactChannel,
  Service,
  HeroContent,
  Partner,
  ServiceItem,
  Testimonial,
  WhyChooseUs,
} from "@/types/site";

export const heroContent: HeroContent = {
  badge: "100+ Satisfied Clients",
  title: "Trusted Chartered Accountants & Business Advisors in Nigeria",
  description:
    "Delivering audit, tax, accounting, and strategic business advisory solutions that help organizations thrive.",
  primaryAction: {
    label: "Get a Consultation",
    href: "/contact",
  },
  secondaryAction: {
    label: "Explore services",
    href: "/services",
  },
};

export const partners: Partner[] = [
  { imgSrc: "ptn1.png", label: "Department of petroleum resources" },
  { imgSrc: "ptn2.png", label: "Ministry of mines and steel development" },
  { imgSrc: "ptn3.png", label: "Federal inland revenue service" },
  { imgSrc: "ptn4.png", label: "National Pension COmmision" },
  { imgSrc: "ptn5.png", label: "National sugar development council" },
  { imgSrc: "ptn6.png", label: "National sugar development coulcil" },
  { imgSrc: "ptn7.png", label: "Nigerian Upstream pertroleum regulatory commision" },
];

export const coreServices: Service[] = [
  {
    title: "Audit & Assurance Services",
    description: "We provide independent audits and assurance engagements that strengthen financial transparency, improve internal governance, and build stakeholder confidence.",
    imgSrc: "audit.png",
  },
  {
    title: "Accounting & Internal Controls",
    description: "From financial reporting to internal control frameworks, we help you build structured systems that reduce risk and ensure operational accuracy.",
    imgSrc: "accounting.png",
  },
  {
    title: "Financial & Business Advisory",
    description: "Strategic insights and data-driven financial guidance to help you scale confidently, manage risk, and make smarter business decisions.",
    imgSrc: "financial.png",
  },
  {
    title: "Tax Consultancy & Planning",
    description: "Proactive tax planning and compliance strategies that minimize liabilities while keeping your business aligned with evolving regulations.",
    imgSrc: "tax.png",
  },
];

export const whyChooseUs: WhyChooseUs[] = [
  {
    index: "01",
    imgSrc: "bag.png",
    description: "Over 17 years of professional service experience post inc.",
  },
  {
    index: "02",
    imgSrc: "file.png",
    description: "Expert audit & forensic accounting teams",
  },
  {
    index: "03",
    imgSrc: "badge.png",
    description: "Trusted by government agencies & other business entities",
  },
  {
    index: "04",
    imgSrc: "calculator.png",
    description: "Personalized and compliant financial solutions",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The interface feels calm and structured, which made it much easier to explain the product to stakeholders.",
    name: "Avery Chen",
    role: "Product Design Lead",
  },
  {
    quote:
      "The reusable components and page sections reduced implementation time without compromising polish.",
    name: "Jordan Patel",
    role: "Frontend Engineer",
  },
  {
    quote:
      "The responsive layout keeps the hierarchy intact from phone to desktop, which is exactly what we needed.",
    name: "Mina Alvarez",
    role: "Growth Manager",
  },
];

export const ctaContent = {
  eyebrow: "Ready to move",
  title: "Bring the same clarity to your next launch.",
  description:
    "We can adapt the structure, content rhythm, and interaction patterns for a product site, portfolio, or SaaS campaign.",
  primaryAction: {
    label: "Contact us",
    href: "/contact",
  },
  secondaryAction: {
    label: "Read about us",
    href: "/about",
  },
};

export const services: ServiceItem[] = [
  {
    scope: "Strategy",
    title: "Information architecture",
    description: "Clarify the page map, user flow, and content model before the visual system is built.",
    points: ["Navigation planning", "Section prioritization", "Content grouping"],
  },
  {
    scope: "Build",
    title: "Component-driven implementation",
    description: "Convert the design into reusable sections and UI components with strong TypeScript types.",
    points: ["SCSS modules", "Composable layout primitives", "Variant-driven components"],
  },
  {
    scope: "Polish",
    title: "Responsive refinement",
    description: "Tune spacing, typography, and layout behavior across mobile, tablet, and desktop widths.",
    points: ["Breakpoint tuning", "Visual hierarchy", "Cross-page consistency"],
  },
  {
    scope: "Support",
    title: "Launch-ready delivery",
    description: "Prepare the site for handoff with a clean structure and maintainable codebase.",
    points: ["Accessible semantics", "Build verification", "Future extension points"],
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    title: "hello@worksheet.studio",
    description: "Best for project briefs, design handoffs, and general inquiries.",
    href: "mailto:hello@worksheet.studio",
    action: "Send an email",
  },
  {
    label: "Response time",
    title: "Within one business day",
    description: "We reply quickly so you can move from concept to implementation without delay.",
    href: "/services",
    action: "See services",
  },
];

export const aboutHighlights = [
  {
    label: "Focus",
    title: "One product story across every page",
    description: "The interface, copy, and visuals all point to the same conversion goal.",
  },
  {
    label: "System",
    title: "Reusable building blocks",
    description: "Sections and UI components are structured to scale as the site grows.",
  },
];

export const companyMilestones = [
  {
    year: "2023",
    title: "Foundation",
    description: "A compact design system and a responsive page model were defined.",
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Supporting pages and reusable patterns were added for a broader site experience.",
  },
  {
    year: "2025",
    title: "Refinement",
    description: "The visual language was tightened to support higher fidelity and clearer hierarchy.",
  },
];