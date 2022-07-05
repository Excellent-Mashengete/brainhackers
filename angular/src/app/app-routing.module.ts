import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalProductsPageComponent } from './Components/final-products-page/final-products-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'products',component:FinalProductsPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
