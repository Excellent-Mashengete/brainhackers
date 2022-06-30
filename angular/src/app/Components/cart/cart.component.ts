import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

items:Product[] = [];

quantity = 0;


products = [
  {
    id: 1,
    name: 'Nike Rosche Supreme',
    description: 'color:blue grey black and white',
    size: [4, 5, 6, 7, 8],
    price: 1500,
    image: '../../../assets/images/productPage.png',
    quantity: 10,
  }
];


  constructor(private cartServices: CartService) { }

  ngOnInit(): void {
    this.increment();
  }

  
  increment(){
    this.quantity = this.products[0].quantity + this.quantity++;
console.log(this.quantity)
  }

}
