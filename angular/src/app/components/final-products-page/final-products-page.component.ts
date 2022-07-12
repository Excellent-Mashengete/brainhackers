import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-products-page',
  templateUrl: './final-products-page.component.html',
  styleUrls: ['./final-products-page.component.scss']
})
export class FinalProductsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewAll(){
    this.router.navigate(['one-product']);  // define your component where you want to go
}

}
