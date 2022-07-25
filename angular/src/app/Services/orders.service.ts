import { Injectable } from '@angular/core';
import { UserId } from '../Interface/userid'
import { OrdersGet} from 'src/app/Interface/orders-get';
import { environment } from 'src/environments/environment'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};

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
