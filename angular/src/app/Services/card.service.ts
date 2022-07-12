import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  //BACKEND URL HERE/API
  //baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&language=en-US&primary_release_date.gte=2022-01-15&primary_release_date.lte=2022-05-22"
  baseUrl="http://localhost:7070/api/product_list"
  constructor ( private http : HttpClient) { }
  

//THIS FUCTION HELPS US GET THE URL USING HTTP CLIENT

  getCard(){
    return this.http.get(this.baseUrl);
  }
}
