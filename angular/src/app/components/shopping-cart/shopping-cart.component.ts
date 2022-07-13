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
  sum: number | undefined;
  constructor(private cartitem:CartService) { }

  ngOnInit(): void {
   this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      this.totalNumber = data.length;

      

      this.products.forEach((obj:any) => {
          console.log(obj.prod_price);
          this.sum = this.sum + obj.prod_price
        });
        console.log(this.sum)
      // for (let price of this.products)
      // {
      //   this.allProducts = price.prod_price
      //   console.log(this.allProducts)
      // }
      // while (this.products != 0) {
      //   this.allProducts = this.products
      //   console.log(this.allProducts)
      //   this.products++
      // }
     
    }
   })
   this.doTotalPrice()
   //this.getTotal();
  }
  totalPrice: number = 0;

  doTotalPrice(){

    let total = 0;
    this.products.forEach((item: { price: number, quantity: number }) => {
      item.quantity = 1;
      total += item.price * item.quantity
    });
    this.totalPrice = total;
    console.log(this.totalPrice)
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

  remove(){
    this.cartitem.addToCart
  }
  removeProduct(item:any){
    this.cartitem.removePerCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }

}
