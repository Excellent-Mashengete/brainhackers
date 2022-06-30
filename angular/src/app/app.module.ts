import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
