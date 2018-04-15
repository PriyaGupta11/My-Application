import {Component, OnInit} from '@angular/core';
import { IMusic } from './music';
import { ProductService } from '../Products/product.service';

@Component ({
 templateUrl:'./music.component.html',
styleUrls:['./music.component.css']
})

export class MusicComponent implements OnInit{
title: string = "++ Music List ++";
ShowData = false;
ShowImage=true;
imageWidth:10;
imageHeight:5;
errorMessage;
musics:IMusic[];
   
constructor(private _productService:ProductService){ }
 
    ngOnInit():void{  //here we call service and get data
    this._productService.getMusic()
        .subscribe((data)=> this.musics=data),
                  ((error)=> this.errorMessage = error);
                }
}

      