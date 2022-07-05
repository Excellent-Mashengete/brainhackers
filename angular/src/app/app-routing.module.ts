import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductComponent } from './Components/product/product.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'product', component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'products',component:FinalProductsPageComponent},
  {path:'products/:id',component:ProductComponent},
  {path:'register', component : RegisterComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
