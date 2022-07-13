import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cardDataList:any = []
  productList = new BehaviorSubject<any>([])

  constructor() { }

  //Get Product Data
  getProdList(){
    return this.productList.asObservable()
  }

  //Set product details
  setProduct(product:any){
    this.cardDataList.push(...product)
    this.productList.next(product);
  }

  //Add to cart details
  addToCart(prodcut:any){
    this.cardDataList.push(prodcut);
    this.productList.next(this.cardDataList)
    this.getAmount();
    //console.log(this.cardDataList)
  }

  //Get total amount
  getAmount(){
    let grandTotal = 0;
    this.cardDataList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  //Remove data cart 1 by 1 
  removeCart(product:any){
    this.cardDataList.map((a:any, index:any)=>{
      if (product.id === a.id) {
        this.cardDataList.splice(index,1)
      }
    })
    this.productList.next(this.cardDataList)
  }

  //Remove all data cart
  removeAllCart(){
    this.cardDataList=[];
    this.productList.next(this.cardDataList)
  }

}
