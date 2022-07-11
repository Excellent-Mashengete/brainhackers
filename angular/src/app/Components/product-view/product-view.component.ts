import { Component, OnInit } from '@angular/core';

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

    this.product = JSON.parse(product)
   }

  ngOnInit(): void {
  }

}
