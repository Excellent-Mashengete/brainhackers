import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
<<<<<<< HEAD
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
<<<<<<< HEAD
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { OneProductComponent } from './Components/one-product/one-product.component';

=======
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OneProductComponent } from './components/one-product/one-product.component';
>>>>>>> 7fb080b8b2c528bc15dbe874e89c5d34ee8dd02b
>>>>>>> 42c177b8adc24752b821c1611aae33a2d51720fe
=======
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
>>>>>>> ee26927ec652bfc8f7235c588e973b70884913bd



import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    LoginComponent,
    ShoppingCartComponent,
    NavBarComponent,
    OneProductComponent
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
