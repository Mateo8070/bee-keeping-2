
export interface Product {
  id: string;
  name: string;
  nameChichewa: string;
  description: string;
  price?: string;
  image: string;
  category: 'Gear' | 'Equipment' | 'Hives';
}

export interface NavItem {
  label: string;
  href: string;
}
