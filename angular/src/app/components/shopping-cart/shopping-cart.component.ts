import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products:any = [];
  allProducts:any = [];
  totalNumber: number = 0
  constructor(private cartitem:CartService) { }

  ngOnInit(): void {
   this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      this.totalNumber = data.length;

      // while (this.products != 0) {
      //   this.allProducts = this.products
      //   console.log(this.allProducts)
      //   this.products++
      // }
     
    }
   })
   //this.getTotal();
  }
  // getTotal(){
  //   let grandTotal = 0;
  //   this.cartitem.getProdList().subscribe({
  //     next:data => {
  //       this.allProducts = data
  //       //console.log(this.allProducts.Array)
  //       console.log(data[0].prod_price)
  //     }
  //   })
  // }

  removeProduct(item:any){
    this.cartitem.removeCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }

}
