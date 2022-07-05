import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products :Product[] = [
  new Product(
    1,
    'Nike Rosche Supreme',
    'color:blue grey black and white',
    4,
    1500,
    '../assets/images/productPage.png',
    10

  ),
  new Product(
    2,
    'New Balance 230',
    'color:green black and white',
    4,
    1700,
    '../assets/images/cartMobile-.png',
    10

  ),
  new Product(
    3,
    'Puma X-Ray 230',
    'color:Pink,brown white',
    4,
    1700,
    '../assets/images/productPage5.png',
    10

  )
  
 ]
  constructor() { }
  getProducts(){
    return this.products;
  }
  // getProduct(id:number){
  //   return this.products.find(Product =>
  //     this.Product.id ===id);
     
  // }
}

