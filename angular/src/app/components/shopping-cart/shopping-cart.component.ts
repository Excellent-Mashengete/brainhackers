import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';
import { CardService } from 'src/app/Services/card.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  stocktype = false
  errorMessage = '';

  products:any = [];
  totalNumber: number = 0
  sum: number = 0;
  totTax: number = 0;
  totalDue: number = 0;
  shipping: number = 0;
  totalshipping:number = 0; 
  id:any;
  products_id:any = [];
  Stock:any
  stockMessage = '';
  idstock:any
  constructor(private order:OrdersService,
    private auth:AuthenticationService,
    private stock:CardService, 
    private cartitem:CartService,  
    private router:Router) {
      let product:any;
      product = localStorage.getItem("product");
      this.products_id = JSON.parse(product)
     }

  ngOnInit(): void {
    this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      this.totalNumber = data.length;
      
      data.forEach((obj:any) => {
        this.sum += parseFloat(obj.prod_price);

      });
    }

   })

   this.totalTax(this.sum);
   this.totalAmountDue();
  }

  
 
  CheckStock(id:any){
    return this.stock.getunit(id).subscribe({next:data =>{
      this.Stock = data
      if(this.Stock>0){
        this.stockMessage = "IN STOCK"
        this.stocktype = true
      }
      else{
        this.stockMessage = "OUT OF STOCK"
        this.stocktype = false
      }
    }})
  }
  
 
  totalTax(num:number){
    return this.totTax = num * 0.15;
  }

  totalAmountDue(){
    return this.totalDue = this.totTax + this.sum;
  }

  removeProduct(item:any){
    this.cartitem.removePerCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }

  Checkout(){
    if(!this.auth.isLoggedIn){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/checkout'])
    }
  }

}
