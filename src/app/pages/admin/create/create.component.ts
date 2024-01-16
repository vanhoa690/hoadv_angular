import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  productAdd = {
    title: '',
    price: 0,
    description: '',
    image: '',
    rate: 0,
  };

  handleSubmit() {
    console.log(this.productAdd);
    // call service api POST products
  }
}
