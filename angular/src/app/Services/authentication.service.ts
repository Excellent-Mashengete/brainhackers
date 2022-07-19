import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Login } from '../Interface/login';
import { Register } from '../Interface/register';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { Router } from '@angular/router';
tap
// AuthGuard

const baseUrl$ = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedInT:boolean = false;

  id : any;
  email: any;
  name : any; 
  authenitcated: any;
 
  constructor(private http: HttpClient,private router: Router) { }



  // AUTH GUARD
  isLoggedIn(): boolean {
    return true;
  }
  //AUTH GUARD


  login(users : Login) {
     this.http.post(`${baseUrl$}login`, users).subscribe(
      (info:any) => {

       
             this.id = info.arrData[0].id
             this.email = info.arrData[0].email
             this.name =  info.arrData[0].name;
             this.authenitcated = true
            
            //  localStorage.setItem('isLoggedIn', this.isLoggedIn)
             localStorage.setItem('user_id', this.id);
             localStorage.setItem('email', this.email);
             localStorage.setItem('name', this.name);
             localStorage.setItem('authenitcated', this.authenitcated);

        // this.isLoggedInT = true;
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1000);
        
      },
      (err:any) => {
        console.log(err);
      },
      () => console.log('HTTP request completed.')
     )
  }

  routeTo(){
    return this.router.navigate(['/products'])
  }
  
  register(users : any) {
    return this.http.post(`${baseUrl$}register`, users);
  }
}
















