import { Component, OnInit, ViewChild } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  
  errorMessage = ''
  Products: any;

  constructor (private cardservice: CardService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cardservice.getCard().subscribe(( respond:any )=>{
      this.loading = false;
      // console.log(respond)
      // console.log("response")

      
      this.Products = respond;
      // console.log(this.Products)


  })
 // this.loading = false;
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
      this.loading = true;
        localStorage.setItem("product",JSON.stringify(this.Products[index]))
        this.loading = false;
       }
       
}

  // getProductinfo(index: any){
  //   localStorage.setItem("product",JSON.stringify(this.Products[index]))
  // }



