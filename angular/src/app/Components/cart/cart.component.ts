import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  
  }

  


items:Product[] = [];

products = [
  {
    id: 1,
    name: 'Nike Rosche Supreme',
    description: 'color:blue grey black and white',
    size: [4, 5, 6, 7, 8],
    price: 1500,
    image: '../../../assets/images/productPage.png',
    quantity:1,
  },
    {
      id: 2,
      name: 'Puma X-Ray 2.0',
      description: 'color:royalty green with touch of black a',
      size: [4, 5, 6, 7, 8],
      price: 1700,
      image: '../../../assets/images/cartMobile-.png',
      quantity:1,
    },
    {
      id: 3,
      name: 'Puma X-Ray 2.0',
      description: 'color:royalty green with touch of black a',
      size: [4, 5, 6, 7, 8],
      price: 2000,
      image: '../../../assets/images/productPage1.png',
      quantity:1,
    }
  
];



  increment(pro:any){
    pro.quantity = pro.quantity +1;
  }

  decrement(pro:any){
    if(pro.quantity !=1)
    pro.quantity = pro.quantity -1;
  }

  onDelete(i:number){
    this.products.splice(i,1)

  }
  validateInput(event: any , i : number){
    const qty = +event.target.value;
    if(qty <1) {
      event.target.value = this.products[i].quantity;
      return;

    }
    this.qtyUpdated(qty, i)
  }
  private qtyUpdated(qty:number , i:number){
    this.products[i].quantity = qty;

   // this.cartService.addItem(this.products)

  }

}


