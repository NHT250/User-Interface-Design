export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  coverUrl: string;
  description: string;
  pages: number;
  language: string;
  published: number;
  format: string;
  trending?: boolean;
  bestSeller?: boolean;
}

export type Screen = 'home' | 'search' | 'detail' | 'cart';
