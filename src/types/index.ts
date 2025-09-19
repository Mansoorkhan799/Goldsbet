// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Sports data types
export interface Sport {
  name: string;
  icon: string;
  description?: string;
}

// Team member types
export interface TeamMember {
  name: string;
  position: string;
  description: string;
  avatar?: string;
}

// SEO metadata types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

// Page props types
export interface PageProps {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
