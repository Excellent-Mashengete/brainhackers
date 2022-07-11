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
import { SignupComponent } from '../Components/signup/signup.component';
//import { Login } from '../Interfaces/login';

const baseURL = environment.baseURL

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  signup(users : any, usertype: string) {
    return this.http.post(`${baseURL}signup/${usertype}`, users);
  }

  // signin(users : Login): Observable<any> {
  //   return this.http.post(`${baseURL}signin`, users);
  // }

}