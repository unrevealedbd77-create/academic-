
export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  level: string;
  longDescription: string;
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export type View = 'home' | 'courses' | 'platform' | 'subscriptions' | 'login' | 'register' | 'admin' | 'checkout';
