import { Routes } from '@angular/router';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductsComponent } from './pages/admin/products/products.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
