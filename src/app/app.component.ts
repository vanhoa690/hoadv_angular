import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Xin chao cac ban K6 Angular';
  myName = 'Hoadv';
  productList = [
    {
      id: 1,
      title: 'Product 1',
    },
    {
      id: 1,
      title: 'Product 1',
    },
    {
      id: 1,
      title: 'Product 1',
    },
    {
      id: 1,
      title: 'Product 1',
    },
    {
      id: 1,
      title: 'Product 1',
    },
    {
      id: 1,
      title: 'Product 1',
    },
  ];
}
