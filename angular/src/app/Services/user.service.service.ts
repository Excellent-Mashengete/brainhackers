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

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

 

  // signin(users : Login): Observable<any> {
  //   return this.http.post(`${baseUrl}signin`, users);
  // }

}