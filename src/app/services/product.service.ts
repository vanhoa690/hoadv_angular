import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiUrl = 'https://fakestoreapi.com/products'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList() {
    return this.http.get(this.apiUrl); //axios.get(apiUrl)
  }
}
