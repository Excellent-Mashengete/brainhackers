import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl = ""

  constructor ( private http : HttpClient) { }


  getCard(){
    return this.http.get(this.baseUrl);
  }
}
