import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  baseUrl: string = "https://ecommerce.routemisr.com/";
  userInfo = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem("userToken") !== null) {
      this.decodeUserInfo();
    }
  }

  decodeUserInfo() {
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userInfo.next(decodedToken);
  }

  logOut() {
    localStorage.removeItem("userToken");
    this.userInfo.next(null);
    this._Router.navigate(["/login"]);
  }

  register(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + "api/v1/auth/signup", userData);
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + "api/v1/auth/signin", userData);
  }
}
