import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
//import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('test1','this is test only', 'https://i.ytimg.com/vi/AST04MCRKOQ/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
