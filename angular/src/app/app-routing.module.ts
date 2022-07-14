import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path: 'one-product',component:OneProductComponent},
  {path: 'prodDetails/:prod_id', component:ProductViewComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: '404', component:NotfoundComponent},
  {path:'**', redirectTo: '/404', pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
