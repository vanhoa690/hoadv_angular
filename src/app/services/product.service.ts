import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/Product';
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
    console.log(productId);
    
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }
}
