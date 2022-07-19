import { Injectable } from '@angular/core';
import { Odersid} from 'src/app/Interface/odersid';
import { OrdersGet} from 'src/app/Interface/orders-get';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllorders(orders:Odersid){
    return this.http.get(`${this.baseUrl}order_list/${orders}`)
  }

  addOrders(orderlist:OrdersGet, id:Odersid){
    return this.http.post(`${this.baseUrl}add_list/${id}`,orderlist)
  }
}
