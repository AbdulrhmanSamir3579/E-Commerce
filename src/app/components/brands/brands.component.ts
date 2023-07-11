import {Brand} from './../../interfaces/product';
import {Component, OnInit} from '@angular/core';
import {BrandsService} from 'src/app/services/brands.service';


@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
    brands: Brand[] = [];

    constructor(private _BrandsService: BrandsService) {
    }

    getAllBrands() {
        this._BrandsService.brands().subscribe({
            next: (res) => {
                console.log(res.data);
                this.brands = res.data
            }
        })
    }


    ngOnInit(): void {
        this.getAllBrands()
    }
}
