export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  imgSrc: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  imgSrc: string;
}

export interface WhyChooseUs {
  imgSrc: string;
  description: string;
  index: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  scope: string;
  points: string[];
}

export interface ContactChannel {
  label: string;
  title: string;
  description: string;
  href: string;
  action: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}