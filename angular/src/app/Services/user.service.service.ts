// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class User.ServiceService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SignupComponent } from '../Components/register/register.component';
//import { Login } from '../Interfaces/login';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  signup(users : any, usertype: string) {
    return this.http.post(`${baseUrl}signup/${usertype}`, users);
  }

  // signin(users : Login): Observable<any> {
  //   return this.http.post(`${baseUrl}signin`, users);
  // }

}