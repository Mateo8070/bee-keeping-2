
export interface Product {
  id: string;
  name: string;
  nameChichewa: string;
  description: string;
  image: string;
  category: 'Hives' | 'Gear' | 'Equipment';
  price?: string;
  badge?: string;
}

export interface StarterKit {
  id: string;
  name: string;
  description: string;
  items: string[];
  image: string;
  highlight: string;
}

export interface NavItem {
  label: string;
  href: string;
}
