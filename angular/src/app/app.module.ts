import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
