import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductForm } from '../types/Product';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFlY2ZmYzExNjk1MWRhOTA5Yjk4MCIsImlhdCI6MTcwMzU3NjU5OCwiZXhwIjoxNzA2MTY4NTk4fQ.IEjPL_i_-LolpId4TRtcn55rrunliGy5EkM0XJbJdRg',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  constructor() {}

  getProductList() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getAdminProductList() {
    return this.http.get<Product[]>(
      'https://hoadv-nodejs.vercel.app/products',
      options
    );
  }

  getProductDetail(id: number) {
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id);
  }

  removeProduct(id: number) {
    return this.http.delete<Product>('https://fakestoreapi.com/products/' + id);
  }

  createProduct(product: CreateProductForm) {
    return this.http.post<Product>(
      'https://fakestoreapi.com/products/',
      product
    );
  }

  updateProduct(productId: number, product: CreateProductForm) {
    return this.http.put<Product>(
      'https://fakestoreapi.com/products/' + productId,
      product
    );
  }
}
