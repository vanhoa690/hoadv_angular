import { Category } from './Category';

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CreateProductForm = Omit<Product, 'id' | 'rating'> & {
  rate: number;
};

export type ApiProduct = Omit<Product, 'id' | 'rating'> & {
  _id: string;
  category: Category;
  rate: number;
};
