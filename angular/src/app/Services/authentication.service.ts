import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../Interface/login';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signin(users : Login): Observable<any> {
    return this.http.post(`${baseURL}login`, users);
  }
  
}
