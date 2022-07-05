import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : any[] = [];

  constructor() { }

  addItem(product:Product){
    const exist = this.cartItems.find((item)=>{
      return item.id === product.id;
    })
    if(exist)
    exist.quantity++;
    else
    this.cartItems.push(product);

  }

}
