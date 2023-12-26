import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateProductForm } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  product: CreateProductForm = {
    title: '',
    description: '',
    image: '',
    category: '',
    price: 0,
  };

  productService = inject(ProductService);
  router = inject(Router);

  handleSubmitForm() {
    if (!this.product.title) return alert('Them ten san pham');
    this.productService
      .createProduct(this.product)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}
