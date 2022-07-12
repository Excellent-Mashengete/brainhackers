import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient ) { }

  //Get Product Data
  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItems.push(...product)
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalAmout();
    console.log(this.cartItems);
  }
 
  getTotalAmout(){
    let grandTotal = 0;
    this.cartItems.map((a:any) =>{
      grandTotal += a.prod_price;
    })
  }
  removeCartItem(product: any){
    this.cartItems
  }
}
