export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'thekua' | 'laddoo';
  type: string;
  popular?: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}