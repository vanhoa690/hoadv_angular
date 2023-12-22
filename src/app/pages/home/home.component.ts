import { Component } from '@angular/core';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.products = products));
  }
}
