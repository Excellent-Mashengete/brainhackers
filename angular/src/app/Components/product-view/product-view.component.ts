import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';
import { GedById } from 'src/app/Interfaces/ged-by-id'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product!:any;
  constructor() {

    let product:any;
    product = localStorage.getItem("product");
    console.log(product)
    this.product = JSON.parse(product)
   }


  ngOnInit(): void {
    // this.getCardbyId();
  }

  // getCardbyId(){
  //   return this.cardservice.getCardbyId(this.product).subscribe({
  //     next:data =>{
  //       this.product_id = data;
     
  //       console.log(data)
  //     }
  //   })
  // }


  
}

