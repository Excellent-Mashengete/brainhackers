import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  id :any 
  orders:any
  constructor(private order:OrdersService) { }
  
  ngOnInit(): void {
  // this.id = localStorage.getItem('user_id')
  this.loading = true;
  this.id = 1
    this.getOrders(this.id);
  }

  getOrders(id:any){
    return this.order.getAllorders(id).subscribe({
      next:data =>{
        this.loading = false;
        this.orders = data;
      }
    })
  }
}
