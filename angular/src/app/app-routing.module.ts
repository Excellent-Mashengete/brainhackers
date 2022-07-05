import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalProductsPageComponent } from './components/final-products-page/final-products-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
