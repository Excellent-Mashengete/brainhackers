import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totalNumber: number = 0
  constructor(private cartitem:CartService) { }

  ngOnInit(): void {
    this.cartitem.getProdList().subscribe({
      next:data =>{
        this.totalNumber = data.length;
        //console.log(this.totalNumber)
      }
    })
  }

}
