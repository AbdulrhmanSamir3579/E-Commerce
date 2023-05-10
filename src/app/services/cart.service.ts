import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Header } from '../interfaces/header';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  numberOfCartItems = new BehaviorSubject(0);
  baseUrl: string = 'https://route-ecommerce.onrender.com/';

  constructor(private _HttpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (res) => this.numberOfCartItems.next(res.numOfCartItems),
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {}

  header: any = {
    token: localStorage.getItem('userToken'),
  };
  
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'api/v1/cart', {
      productId: productId,
    }
    ,{
      headers:this.header
    });
  }
  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'api/v1/cart',{
      headers:this.header
    } );
  }
  removeCartItem(itemId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `api/v1/cart/${itemId}`,{
      headers:this.header
    });
  }
  updateCartItem(itemId: string, count: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `api/v1/cart/${itemId}`, {
      count: count,
    },{
      headers:this.header
    });
  }
  resetLoggedUserCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'api/v1/cart',{
      headers:this.header
    });
  }

  onlinePayment(shippingAddress: any, cardId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress,
      },{
        headers:this.header
      }
    );
  }
}
