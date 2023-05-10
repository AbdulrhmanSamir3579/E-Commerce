import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() categories: Array<string> = [];
  products: Product[] = [];
  searchTerm: string = '';
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}

  onScrollingFinished() {
    this.scrollingFinished.emit();
  }
  showSuccess(message: string) {
    this._ToastrService.success(message, 'Success');
  }

  addCartItem(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res.numOfCartItems);
        this._CartService.numberOfCartItems.next(res.numOfCartItems);
      },
    });
  }
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
    });
  }
}
