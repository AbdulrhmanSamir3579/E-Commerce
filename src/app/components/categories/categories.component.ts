
import { CategoryService } from 'src/app/services/category.service';
import { Brand } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:Brand[] = [];

  constructor(private _CategoryService:CategoryService){}

  getAllCategories(){
    this._CategoryService.categories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categories = res.data
      }
    })
  }


  ngOnInit(): void {
      this.getAllCategories()
  }
}
