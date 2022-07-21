import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totalNumber: number = 0
  isLoggedIn: boolean = false
  constructor(private cartitem:CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartitem.getProdList().subscribe({
      next:data =>{
        this.totalNumber = data.length;
        //console.log(this.totalNumber)
      }
    })
  }
  email = localStorage.getItem('email')
  name = localStorage.getItem('name')
  signout(){
    this.router.navigate(['/']);
    localStorage.removeItem('product')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('authenitcated')
    localStorage.removeItem('user_id')
  }
}
