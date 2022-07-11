import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './Components/card/card.component';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FinalProductsPageComponent,
    LoginComponent,
    NavbarComponent,
    OneProductComponent,
    ProductsComponent,
    RegisterComponent,
    ShoppingCartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
