import { Product, NavItem, StarterKit } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Modern Langstroth Beehive',
    nameChichewa: "Mng'oma wa Makono",
    description: 'Durable, high-yield wooden beehives designed for maximum honey collection and easy management. Built for the Malawian climate.',
    image: '/bee-hive.jpeg',
    category: 'Hives',
    price: 'Contact for Price',
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Professional Bee Suit',
    nameChichewa: 'Zovala za Njuchi',
    description: 'Full-body protection with ventilated mesh to keep you cool and safe from stings during hive inspections and harvest.',
    image: '/bee-suit.jpeg',
    category: 'Gear',
    price: 'Contact for Price',
    badge: 'Top Rated',
  },
  {
    id: '3',
    name: 'Stainless Steel Smoker',
    nameChichewa: 'Chochititsira Utsi',
    description: 'Reliable smoker with a heat guard to calm bees during hive inspections. Made from durable stainless steel.',
    image: '/smoker.jpeg',
    category: 'Equipment',
    price: 'Contact for Price',
  },
  {
    id: '4',
    name: 'Honey Extractor (Cillar)',
    nameChichewa: 'Makina Opulira Uchi',
    description: 'High-speed centrifugal extractor to harvest pure honey without damaging the combs. Stainless steel for hygiene.',
    image: '/honey-extractor.jpeg',
    category: 'Equipment',
    price: 'Contact for Price',
    badge: 'New',
  },
  {
    id: '5',
    name: 'Hive Tool & Brush',
    nameChichewa: "Zida za M'munda",
    description: 'Essential hand tools for opening hives and gently moving bees without harm. A must-have for every beekeeper.',
    image: '/hive-tool-brush.jpeg',
    category: 'Equipment',
    price: 'Contact for Price',
  },
];

export const STARTER_KITS: StarterKit[] = [
  {
    id: 'kit-1',
    name: 'Beginner Starter Kit',
    description: 'Everything you need to start your beekeeping journey with confidence.',
    items: ['1x Langstroth Beehive', '1x Bee Suit', '1x Smoker', '1x Hive Tool & Brush'],
    image: '/beekeeper.png',
    highlight: 'Perfect for First-Timers',
  },
  {
    id: 'kit-2',
    name: 'Farm Expansion Kit',
    description: 'Scale up your honey production with this professional-grade bundle.',
    items: ['3x Langstroth Beehives', '1x Bee Suit', '1x Smoker', '1x Honey Extractor'],
    image: '/advert.jpg',
    highlight: 'Best Value',
  },
];

export const FEATURES = [
  { icon: 'fa-users', value: '500+', label: 'Farmers Served' },
  { icon: 'fa-calendar-alt', value: '14+', label: 'Years Experience' },
  { icon: 'fa-star', value: '5.0', label: 'Star Rating' },
  { icon: 'fa-truck', value: 'Nationwide', label: 'Delivery in Malawi' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Starter Kits', href: '#kits' },
  { label: 'Why Beekeeping?', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const TESTIMONIALS = [
  {
    name: 'Grace Phiri',
    location: 'Dedza, Malawi',
    feedback: 'Malandula Enterprise changed my life. I started with just two Langstroth hives, and now I have a full honey business. The equipment is durable and high quality!',
    photo: 'https://i.pravatar.cc/150?u=grace',
  },
  {
    name: 'Samuel Banda',
    location: 'Lilongwe',
    feedback: 'The bee suit is very comfortable and breathable even in the heat. I feel very safe when harvesting. Highly recommend Malandula for all beekeepers.',
    photo: 'https://i.pravatar.cc/150?u=samuel',
  },
  {
    name: 'Esther Mwale',
    location: 'Zomba',
    feedback: 'The honey extractor works perfectly. It saves so much time compared to traditional methods. Ulimi wa njuchi ndi chuma obisika kwadi!',
    photo: 'https://i.pravatar.cc/150?u=esther',
  },
  {
    name: 'John Chilwa',
    location: 'Blantyre',
    feedback: 'I received professional training along with my starter kit. Malandula really knows their stuff when it comes to the Hidden Treasure of honey.',
    photo: 'https://i.pravatar.cc/150?u=john',
  },
];

export const CONTACT_NUMBERS = ['0999324743', '0999469424'];
