import { Injectable } from '@angular/core';
import { UserId } from '../Interface/userid'
import { OrdersGet} from 'src/app/Interface/orders-get';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllorders(orders:UserId){
    return this.http.get(`${this.baseUrl}order_list/${orders}`)
  }

  addOrders(orderlist:OrdersGet, id:UserId){
    return this.http.post(`${this.baseUrl}add_list/${id}`,orderlist)
  }
}
