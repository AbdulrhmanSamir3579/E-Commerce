import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-homeslider',
    templateUrl: './homeslider.component.html',
    styleUrls: ['./homeslider.component.css']
})
export class HomesliderComponent {


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
                items: 1
            }
        },
        nav: true
    }
}
