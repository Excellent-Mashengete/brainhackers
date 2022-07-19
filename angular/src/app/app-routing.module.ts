import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';



const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'cart',component:ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'orders',component:OrdersComponent, canActivate: [AuthGuard]},
  {path: 'prodDetails/:prod_id', component:ProductViewComponent},
  {path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard]},
  {path: '404', component:NotfoundComponent},
  {path:'**', redirectTo: '/404', pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
