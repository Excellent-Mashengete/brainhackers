import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
// import { OneProductComponent } from './Components/one-product/one-product.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { OneProductComponent } from './Components/one-product/one-product.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { ProductsComponent } from './Components/products/products.component';
//import { RegisterComponent } from './Components/register/register.component';
// import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
//  {path:'login', component:LoginComponent},
//  {path:'register', component : RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path: 'one-product',component:OneProductComponent},
  {path: 'prodDetails/:prod_id', component:ProductViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
