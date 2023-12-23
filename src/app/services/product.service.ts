import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductForm, Product } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductDetail(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }

  deleteProduct(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<Product>(url);
  }

  createProduct(product: CreateProductForm): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(productId: number, product: CreateProductForm): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<Product>(url, product);
  }
}
