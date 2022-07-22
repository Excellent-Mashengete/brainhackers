import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  errorMessage = ''
  Products: any;
  items: any;

  constructor (private cardservice: CardService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cardservice.getCard().subscribe(( respond:any )=>{
      this.Products = respond;
      
      // console.log(this.Products)
    })

  }
  // addToCart(product: any): {
  //   this.cartService.addToCart(product);
  // }

    addToCart(item: any): void {
      this.cartService.addToCart(item)
  
    }

    getProductinfo(index: any){
        localStorage.setItem("product",JSON.stringify(this.Products[index]))
       }
       
}


