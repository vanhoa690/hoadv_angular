import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
// import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      //   { path: 'register', component: RegisterComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'product/edit/:id', component: EditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
