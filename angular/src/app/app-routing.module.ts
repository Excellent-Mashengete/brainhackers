import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'register', component : RegisterComponent},
  //{path:'product',component : ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
