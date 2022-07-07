import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
=======
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { OneProductComponent } from './Components/one-product/one-product.component';

>>>>>>> 18a0822d9f39c5ab140ad4255574bcf9386246ed

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'products',component:FinalProductsPageComponent},
  {path: 'one-product',component:OneProductComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
