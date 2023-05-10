import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.css']
})
export class CategorysliderComponent implements OnInit {

  productCategories:any;
  constructor(private _ProductsService:ProductsService){

  }

  ngOnInit(): void {
      this._ProductsService.getCategories().subscribe((res)=>{
        this.productCategories = res.data;
        console.log(this.productCategories);
        

      })
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
        items: 7
      }
    },
    nav: true
  }
}
