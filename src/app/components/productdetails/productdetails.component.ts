import {ToastrService} from 'ngx-toastr';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from 'src/app/services/products.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {CartService} from 'src/app/services/cart.service';

@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
    productDetails: any;
    productId: any;

    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private _ProductsService: ProductsService,
        private _CartService: CartService,
        private _ToastrService: ToastrService
    ) {
    }

    showSuccess(message: string) {
        this._ToastrService.success(message, 'Success');
    }

    addCartItem(productId: string) {
        this._CartService.addToCart(productId).subscribe({
            next: (res) => {
                console.log(res);
                this._CartService.numberOfCartItems.next(res.numOfCartItems);
            },
        });
    }

    ngOnInit(): void {
        this._ActivatedRoute.paramMap.subscribe({
            next: (params) => {
                this.productId = params.get('id');
            },
        });

        this._ProductsService.getProductsDetails(this.productId).subscribe({
            next: (res) => {
                this.productDetails = res.data;
                console.log(this.productDetails);
            },
        });
    }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
        },
        nav: true,
    };
}
