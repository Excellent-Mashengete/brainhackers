import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  id = 1;
total = 0;

  cart=[
    {
      id: this.id++,
      img: "../../../assets/shoes1.jpeg",
      name: "Puma 230",
      price: 2300.00,
      quantity : 1

    }, {
      id: this.id++,
      img: "../../../assets/productPage2.png",
      name: "Nike Rosche 240",
      price: 2500.00,
      quantity : 1

    }, {
      id: this.id++,
      img: "../../../assets/ productPage3.png",
      name: "Nike Air Force 240",
      price: 2000.00,
      quantity : 1

    }
  ]
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.cart.length; i++ ){
      this.total = this.total + this.cart[i].price
    }
    
  }

}
