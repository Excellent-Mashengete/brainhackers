import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../Interface/login';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signin(users : Login): Observable<any> {
    return this.http.post(`${baseUrl}login`, users);
  }
  
}
