import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
// import { OneProductComponent } from './Components/one-product/one-product.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignupComponent } from './Components/signup/signup.component';



const routes: Routes = [
  // {path:'products',component:FinalProductsPageComponent},
  // {path:'cart',component:ShoppingCartComponent},
  // {path: 'one-product',component:OneProductComponent},
  {path:'signup',component:SignupComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
