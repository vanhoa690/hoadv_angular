import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/Product';

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
}
