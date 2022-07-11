import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './Components/login/login.component';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { SignupComponent } from './controllers/signup/signup.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CardComponent } from './Components/card/card.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    LoginComponent,
    ShoppingCartComponent,
    OneProductComponent,
    SignupComponent,
    NavbarComponent,
    CardComponent,
    ProductViewComponent,
    ProductsComponent

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
