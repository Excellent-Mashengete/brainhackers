import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  errorMessage = ''
  Products: any;

  constructor (private cardservice: CardService) { }

  ngOnInit(): void {
    // this.cardservice.getCard().subscribe((respond:any)=>{
    //   console.log(respond.results)
      

    //   //WE ARE CALLING THE PRODUCTS FROM D
    //   this.Products = respond.results
    // })
    this.getProduct();
  }

  getProduct(){
      return this.cardservice.getCard().subscribe({
        next:data =>{
          this.Products = data
          console.log(data);
          
        }
      })

  }
  getProductbyId(){
    
  }
    // getProductinfo(index: any){
    //     localStorage.setItem("product",JSON.stringify(this.Products[index]))
    //    }
}

  // getProductinfo(index: any){
  //   localStorage.setItem("product",JSON.stringify(this.Products[index]))
  // }



