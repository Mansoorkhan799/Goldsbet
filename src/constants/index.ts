import { NavigationItem, Sport, TeamMember } from '@/types';

// Site configuration
export const SITE_CONFIG = {
  name: 'GoldsBet',
  description: 'Premium sports betting platform offering competitive odds, live betting, and secure transactions',
  url: 'https://goldsbet.com',
  ogImage: 'https://goldsbet.com/og-image.jpg',
  creator: '@goldsbet',
} as const;

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Games', href: '/games' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

// Sports data
export const SPORTS: Sport[] = [
  { name: 'Football', icon: '⚽' },
  { name: 'Basketball', icon: '🏀' },
  { name: 'Tennis', icon: '🎾' },
  { name: 'Baseball', icon: '⚾' },
  { name: 'Hockey', icon: '🏒' },
  { name: 'Golf', icon: '⛳' },
  { name: 'Boxing', icon: '🥊' },
  { name: 'Cricket', icon: '🏏' },
];

// Team members
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    description: 'With over 15 years in the gaming industry, John leads our vision for innovation and customer satisfaction.',
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    description: 'Sarah ensures our platform remains secure and performs flawlessly with the latest technology innovations.',
  },
  {
    name: 'Mike Davis',
    position: 'Head of Customer Support',
    description: 'Mike leads our dedicated support team, ensuring every customer receives the help they need, when they need it.',
  },
];

// Contact information
export const CONTACT_INFO = {
  email: {
    general: 'avacarney1711@gmail.com',
    support: 'avacarney1711@gmail.com',
    privacy: 'avacarney1711@gmail.com',
    legal: 'avacarney1711@gmail.com',
  },
  address: {
    street: '123 Business Street',
    suite: 'Suite 100',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    online: '24/7 Online Support Available',
  },
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/goldsbet',
  twitter: 'https://twitter.com/goldsbet',
  instagram: 'https://instagram.com/goldsbet',
} as const;

// FAQ data
export const FAQ_DATA = [
  {
    question: 'How do I create an account?',
    answer: 'Simply click the "Sign Up" button on our homepage and follow the registration process. You\'ll need to provide some basic information and verify your email address.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Yes, we use bank-level encryption and security measures to protect your personal and financial information. Your data is never shared with third parties.',
  },
  {
    question: 'How quickly are withdrawals processed?',
    answer: 'Most withdrawals are processed within 24 hours. Processing times may vary depending on your chosen payment method and verification requirements.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we provide 24/7 customer support through live chat, email, and phone. Our support team is always ready to help with any questions or issues.',
  },
] as const;
