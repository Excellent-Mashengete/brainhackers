import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products:any = [];
  totalNumber: number = 0
  sum: number = 0;
  totTax: number = 0;
  totalDue: number = 0;
  constructor(private cartitem:CartService) { }

  ngOnInit(): void {
   this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      this.totalNumber = data.length;
      
      data.forEach((obj:any) => {
        this.sum += parseFloat(obj.prod_price);
        
        console.log(this.sum);
      });
    }
   })

   this.totalTax(this.sum)
   this.totalAmountDue(this.sum)
   //this.getTotal();
  }
  totalTax(num:number){
    return this.totTax = num * 0.15;
  }

  totalAmountDue(num:number){
    return this.totalDue = this.totTax + this.sum;
  }

  removeProduct(item:any){
    this.cartitem.removePerCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }

}
