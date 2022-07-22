import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AuthInterceptor } from './interceptor/authconfig.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OneProductComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductViewComponent,
    RegisterComponent,
    UserprofileComponent,
    LoginComponent,
    NotfoundComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
