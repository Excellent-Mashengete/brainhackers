import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'product', component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:id',component:ProductComponent},
  {path:'register', component : RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
