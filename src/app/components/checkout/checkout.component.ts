import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CartService} from 'src/app/services/cart.service';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    cartId: string = ''

    constructor(private _CartService: CartService,
                private _ActivatedRoute: ActivatedRoute) {

    }


    ngOnInit(): void {
        this._ActivatedRoute.paramMap.subscribe({
            next: (params) => {
                this.cartId = params.get('cid')!
                console.log(this.cartId);
            }
        })
    }

    shpippingAddress: FormGroup = new FormGroup({
        details: new FormControl(null),
        phone: new FormControl(null),
        city: new FormControl(null)
    })

    navigateToPage(url: string) {
        window.location.href = url;
    }

    handleSubmit(shpippingAddress: FormGroup) {
        console.log(shpippingAddress.value);
        this._CartService.onlinePayment(shpippingAddress.value, this.cartId).subscribe({
            next: (res) => {
                this.navigateToPage(res.session.url)
            }
        })
    }


}