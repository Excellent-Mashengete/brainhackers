import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
