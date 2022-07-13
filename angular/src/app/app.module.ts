import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD



import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './Components/login/login.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
=======
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
>>>>>>> d0d772dab14713e060ab2f8551566c52f3bc3a49

@NgModule({
  declarations: [
    AppComponent,
    FinalProductsPageComponent,
    // LoginComponent,
    NavbarComponent,
    OneProductComponent,
    ProductsComponent,
    // RegisterComponent,
    ShoppingCartComponent,
<<<<<<< HEAD
    ProductsComponent,
    NavbarComponent,
    ProductViewComponent
  
=======
    ProductViewComponent,
    SignupComponent
>>>>>>> d0d772dab14713e060ab2f8551566c52f3bc3a49
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
