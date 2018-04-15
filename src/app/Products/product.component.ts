import {Component, OnInit} from '@angular/core';
import {IProduct} from './api/products';
import {ProductService} from './product.service'

@Component ({
 templateUrl:'./product.component.html',
styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
title: string = "+++++ Product List ++++++";
ShowData = false;
ShowImage=true;
imageWidth:10;
imageHeight:5;
errorMessage;
 
 products:IProduct[];
   
constructor(private _productService:ProductService){}
toggleImage(): void{
    this.ShowImage = !this.ShowImage
    }
    onRatingClicked(message:string): void{
        this.title = " This product's "  + message
    } 
    ngOnInit():void{  //call service to get data
    this._productService.getProducts()
        .subscribe((data)=> this.products=data),
                  ((error)=> this.errorMessage = error)
    }

}

      