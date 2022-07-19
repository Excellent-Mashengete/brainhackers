import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  id :any 
  orders:any
  constructor(private order:OrdersService) { }
  
  ngOnInit(): void {
  this.id = localStorage.getItem('user_id')
    this.getOrders();
  }

  getOrders(){
    return this.order.getAllorders(this.id).subscribe({
      next:data =>{
        console.log(data)
        this.orders = data;
        console.log(this.orders[1].prodifd[1])
      }
    })
  }

 

}
