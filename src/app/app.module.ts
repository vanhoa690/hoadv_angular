import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    // RegisterComponent,
    ProductDetailComponent,
    ProductsComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    CreateProductComponent,
    EditProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
