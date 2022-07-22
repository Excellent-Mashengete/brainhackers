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
    if (this.cardDataList > 0){
      
    }

    //console.log(this.cardDataList)
  }
  

  //Increatse Qty
  

//Remove data cart 1 by 1 
  removePerCart(product:any){
    this.cardDataList.splice(product,1)
    this.productList.next(this.cardDataList)
  }
 

  //Remove all data cart
  removeAllCart(){
    this.cardDataList=[];
    this.productList.next(this.cardDataList)
  }

}
