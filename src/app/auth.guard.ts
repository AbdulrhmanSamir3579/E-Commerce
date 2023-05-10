import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './services/register.service';
import jwtDecode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _RegisterService:RegisterService,
    private _Router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(localStorage.getItem('userToken') !== null){
        try {
            jwtDecode(localStorage.getItem('userToken') || '')
            return true;
          
        } catch (error) {
          localStorage.removeItem('userToken');
          this._Router.navigate(['/login']);
          return false;
        }
      }
      else {
        this._Router.navigate(['/login'])
        return false
      }
  }
  
}
