import { Product, NavItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Modern Langstroth Beehive',
    nameChichewa: "Mng'oma wa Makono",
    description: 'Durable, high-yield wooden beehives designed for maximum honey collection and easy management.',
    image: 'https://images.unsplash.com/photo-1508500383102-623f97ce9a4e?auto=format&fit=crop&q=80&w=600',
    category: 'Hives'
  },
  {
    id: '2',
    name: 'Professional Bee Suit',
    nameChichewa: 'Zovala za Njochi',
    description: 'Full-body protection with ventilated mesh to keep you cool and safe from stings during harvest.',
    image: 'https://images.unsplash.com/photo-1543160732-237dc0984c26?auto=format&fit=crop&q=80&w=600',
    category: 'Gear'
  },
  {
    id: '3',
    name: 'Stainless Steel Smoker',
    nameChichewa: 'Chochititsira Utsi',
    description: 'Reliable smoker with heat guard to calm bees during hive inspections.',
    image: 'https://images.unsplash.com/photo-1589133481617-1f4a974df834?auto=format&fit=crop&q=80&w=600',
    category: 'Equipment'
  },
  {
    id: '4',
    name: 'Honey Extractor (Cillar)',
    nameChichewa: 'Makina Opulira Uchi',
    description: 'High-speed centrifugal extractor to harvest pure honey without damaging the combs.',
    image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=600',
    category: 'Equipment'
  },
  {
    id: '5',
    name: 'Hive Tool & Brush',
    nameChichewa: "Zida za M'munda",
    description: 'Essential hand tools for opening hives and gently moving bees.',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=600',
    category: 'Equipment'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Products', href: '#products' },
  { label: 'Why Beekeeping?', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' }
];

export const TESTIMONIALS = [
  {
    name: 'Grace Phiri',
    location: 'Dedza, Malawi',
    feedback: 'Malandula Enterprise changed my life. I started with just two Langstroth hives, and now I have a full honey business. The equipment is durable and high quality!',
    photo: 'https://i.pravatar.cc/150?u=grace'
  },
  {
    name: 'Samuel Banda',
    location: 'Lilongwe',
    feedback: 'The bee suit is very comfortable and breathable even in the heat. I feel very safe when harvesting. Highly recommend Malandula for all beekeepers.',
    photo: 'https://i.pravatar.cc/150?u=samuel'
  },
  {
    name: 'Esther Mwale',
    location: 'Zomba',
    feedback: 'The honey extractor works perfectly. It saves so much time compared to traditional methods. Ulimi wa njochi ndi chuma obisika kwadi!',
    photo: 'https://i.pravatar.cc/150?u=esther'
  }
];

export const CONTACT_NUMBERS = ['0999324743', '0999469424'];