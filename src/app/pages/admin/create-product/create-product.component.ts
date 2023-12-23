import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductForm } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  // standalone: true,
  // imports: [],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  product: CreateProductForm = {
    name: '',
    desc: '',
    price: 0,
  };

  constructor(private router: Router, private productService: ProductService) {}

  handleSubmitForm() {
    if (!this.product.name) return alert('Them ten san pham');
    this.productService
      .createProduct(this.product)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}
