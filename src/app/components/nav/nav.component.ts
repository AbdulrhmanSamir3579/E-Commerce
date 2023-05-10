import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  cartNumber:number = 0;
  isLogin: boolean = false;
  constructor(public _registerService: RegisterService,
    private _CartService:CartService) {

      this._CartService.numberOfCartItems.subscribe({
        next:(value)=>{this.cartNumber = value;
        }
      })


    
    _registerService.userInfo.subscribe({
      next: () => {
        if (_registerService.userInfo.getValue() !== null) {
          this.isLogin = true;
          console.log(true, _registerService.userInfo);
        } else {
          this.isLogin = false;
          console.log(false, _registerService.userInfo);
        }
      },
      
    });
    
  }
  logout(){
    this._registerService.logOut
    localStorage.removeItem('userToken')
  }
  
}
