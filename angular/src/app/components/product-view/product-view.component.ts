import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';
import { CartService } from 'src/app/Services/cart.service'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product!:any;
  items: any;
  constructor(private cartitem:CartService) {let product:any;
    product = localStorage.getItem("product");

    //console.log(product)
    this.product = JSON.parse(product)}
   
  ngOnInit(): void {
    //this.readproduc();

    //this.addtoCart(this.items);
    // this.getCardbyId();
  }
  addToCart(item: any): void {
    this.cartitem.addToCart(item)



  }
  

  // readproduc(){
  //   let product:any;
  //   product = localStorage.getItem("product");

  //   // this.product.forEach((a:any)=>{
  //   //   Object.assign(a,{quatity:1, total:a.prod_price}) 
  //   //   });

  //   console.log(product)
  //   this.product = JSON.parse(product)
  // }

  // addtoCart(item:any){
  //   this.cartservice.addToCart(item)
  // }

  // getCardbyId(){
  //   return this.cardservice.getCardbyId(this.product).subscribe({
  //     next:data =>{
  //       this.product_id = data;
     
  //       console.log(data)
  //     }
  //   })
  // }


  
}

