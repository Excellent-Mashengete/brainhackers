import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products:any = [];
  allProducts:any = 0;
  totalNumber: number = 0
  constructor(private cartitem:CartService) { }

  ngOnInit(): void {
   this.cartitem.getProdList().subscribe({
    next:data =>{
      this.products = data;
      this.totalNumber = data.length;
      this.allProducts = this.products;
    }
   })
  }
  removeProduct(item:any){
    this.cartitem.removeCart(item);
  }

  removeAllProduct(){
    this.cartitem.removeAllCart();
  }

}
