import { Component } from '@angular/core';
import { Product } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  // standalone: true,
  // imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.products = products));
  }

  deleteProductById(productId: number) {
    this.productService
      .deleteProduct(productId)
      .subscribe(
        () =>
          (this.products = this.products.filter(
            (product) => product.id !== productId
          ))
      );
  }

  updateProductById(productId: number, product: Product) {
    this.productService.updateProduct(productId, product).subscribe();
  }
}
