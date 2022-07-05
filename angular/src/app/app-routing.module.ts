import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';


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
