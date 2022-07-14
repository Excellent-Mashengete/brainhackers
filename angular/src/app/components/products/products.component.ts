import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  errorMessage = ''
  Products: any;

  constructor (private cardservice: CardService) { }

  ngOnInit(): void {
    this.cardservice.getCard().subscribe(( respond:any )=>{

      // console.log(respond)
      // console.log("response")

      
      this.Products = respond;
      // console.log(this.Products)


  })
    // this.getProduct();
  }

  // getProduct(){
  //     return this.cardservice.getCard().subscribe({
  //       next:data =>{
  //         this.Products = data;
  //         console.log(data);
          
  //       }
  //     })

  // }

  // getCardbyId(){

  // }
    getProductinfo(index: any){
        localStorage.setItem("product",JSON.stringify(this.Products[index]))
       }
}

  // getProductinfo(index: any){
  //   localStorage.setItem("product",JSON.stringify(this.Products[index]))
  // }



