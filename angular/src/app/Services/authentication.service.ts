import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../Interface/login';
import { Register } from '../Interface/register';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signin(users : Login): Observable<any> {
    return this.http.post(`${baseUrl}login`, users);
  }
  
  register(users : any, ) {
    return this.http.post(`${baseUrl}register`, users);
  }
}
















