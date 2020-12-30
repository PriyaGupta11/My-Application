    import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

    @Component({
    selector:'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
    })

    export class StarComponent implements OnChanges{
    @Input() rating:number;  // this variable has to receive value so we have to make it input parameter
    // and import that 'input' 
    starwidth:number;
    @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();

    ngOnChanges():void{
        this.starwidth= this.rating*86/5  
         // value of rating variable is part of product component, have to pass value from 
       }
        //product to star, 
        // so to paas value, first we have to nest component in the source component.
        // than we have to paas input variable where we
        //nested comp

    onStar():void{
    this.ratingClicked.emit(`rating  is ${this.rating}`) 
    //this will emit value on the click of this method, and received by method 'onRatingClicked'
    //at product component.
    }
    }