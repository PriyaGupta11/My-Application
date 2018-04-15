import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'productUpper'

})

export class productUpperPipe implements PipeTransform{
    transform(value:string, value2:string)
    {
        console.log("Coming in pipe !!!!" + value );
        value = value.toUpperCase();
       // value2= value2.toLowerCase();
        //return value,value2;
        return value;
        //return value2 ;

    }
    // transform1(value:number)
    // {
    //     console.log("Coming in pipe !!!!" + value );
    //     if(value<10)
    //     {
    //         value = value + 10;
    //     }
    //     return value;

    // }
}