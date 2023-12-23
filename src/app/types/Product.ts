export type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
};

export type CreateProductForm = Omit<Product, 'id'>;
