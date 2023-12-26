import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductForm } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  constructor() {}

  getProductList() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
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
}
