import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  //product:Product;


  id = 1;

  products = [
    {
      id: this.id++,
      name: 'Nike Rosche Supreme',
      description: 'color:blue grey black and white',
      size: [4, 5, 6, 7, 8],
      price: 1500,
      image: '../../../assets/images/productPage.png',
      quantity: 10,
    },
    {
      id: this.id++,
      name: 'New Balance 230',
      description: 'color:green black and white',
      size: [4, 5, 6, 7, 8],
      price: 1700,
      image: '../../../assets/images/cartMobile-.png',
      quantity: 10,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
     //this.product = this.productService.getProduct()
  }

  getproduct(id:any){

    this.products.find(product =>{
      product.id === id;

      console.log(id);
      
    })

  }

  getMessage(){
    console.log();
    
  }
}
