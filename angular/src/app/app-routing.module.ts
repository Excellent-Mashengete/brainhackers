import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'products',component:FinalProductsPageComponent},
  {path:'cart',component:ShoppingCartComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
