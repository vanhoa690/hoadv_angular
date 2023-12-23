import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProductForm } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  productId: number | undefined;
  product: CreateProductForm = {
    name: '',
    desc: '',
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      return this.getProductById();
    });
  }

  getProductById() {
    if (!this.productId) return;
    return this.productService
      .getProductDetail(this.productId)
      .subscribe((product) => (this.product = product));
  }

  handleSubmitForm() {
    if (!this.productId) return;
    if (!this.product.name) return alert('Them ten san pham');
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}
