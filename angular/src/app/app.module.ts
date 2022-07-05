import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    LoginComponent,
    ShoppingCartComponent,
    NavBarComponent
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
