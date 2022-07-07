import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { HttpClientModule } from '@angular/common/http';


>>>>>>> 18a0822d9f39c5ab140ad4255574bcf9386246ed



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FinalProductsPageComponent,
    NavBarComponent,
    LoginComponent,
    OneProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
<<<<<<< HEAD
    FormsModule
=======
 HttpClientModule
>>>>>>> 18a0822d9f39c5ab140ad4255574bcf9386246ed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
