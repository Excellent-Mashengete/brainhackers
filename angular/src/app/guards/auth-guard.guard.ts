import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate { 

  constructor(private authenticationservice : AuthenticationService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      //IF THE USER IS NOT LOGGED IN
      if(!this.authenticationservice.isLoggedIn) {
       
        console.log(this.authenticationservice.isLoggedIn);
        
        return true;
        
        
      }
      else{
        console.log(this.authenticationservice.isLoggedIn);
        
        this.router.navigate(['/login']);
        return false;
      }
     
   
  }
}
