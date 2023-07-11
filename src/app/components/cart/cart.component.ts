import {BehaviorSubject} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    loggedUserCart: any;
    numOfCartItems = new BehaviorSubject(0);

    constructor(
        private _CartService: CartService,
        private _ToastrService: ToastrService
    ) {
    }

    showSuccess(message: string) {
        this._ToastrService.success(message, 'Success');
    }

    showInfo(message: string) {
        this._ToastrService.info(message, 'Success');
    }

    showError(message: string) {
        this._ToastrService.error(message, 'Success');
    }

    showWarning(message: string) {
        this._ToastrService.warning(message, 'Success');
    }

    deleteCartItem(cartItemId: string) {
        this._CartService.removeCartItem(cartItemId).subscribe({
            next: (res) => {
                this.loggedUserCart = res.data;
                this._CartService.numberOfCartItems.next(res.numOfCartItems);
            },
        });
    }

    updateCartItem(prdouctId: string, count: number) {
        this._CartService.updateCartItem(prdouctId, count).subscribe({
            next: (res) => {
                this.loggedUserCart = res.data;
            },
        });
    }

    resetCartItems() {
        this._CartService.resetLoggedUserCart().subscribe({
            next: (res) => {
                this.loggedUserCart = res.data;
                this._CartService.numberOfCartItems.next(res.numOfCartItems);
            },
        });
    }

    ngOnInit(): void {
        this._CartService.getLoggedUserCart().subscribe({
            next: (res) => {
                this.loggedUserCart = res.data;
                this.numOfCartItems.next(res.numOfCartItems);
                console.log(res.data._id);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
