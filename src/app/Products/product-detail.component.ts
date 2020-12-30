import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{    
    title="Product Detail";
    productName:string;
    image:string;
    description:string;
    constructor(private _route:ActivatedRoute, private _router:Router){}
    
    ngOnInit(): void{
    let id= +this._route.snapshot.params['id']
    this.title += `-${id}`
        this._route
        .queryParams
        .subscribe((params)=>{
            this.productName = params['name'];
            this.image= params['img'];
            this.description=params['desc'];
        })    
}
    onBack():void{
        this._router.navigate(['/products']);
        }    
}