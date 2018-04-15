import {Injectable} from '@angular/core'
//import {IProduct} from './api/products';
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
import { IMusic } from '../music/music';

@Injectable()


export class ProductService{
    private _productUrl="http://ngapi4.herokuapp.com/api/getProducts"

    constructor(private _http:Http){}

getProducts():Observable<IMusic[]>{
    // return this._http.get(this._productUrl)
    return this._http.get('http://ngapi4.herokuapp.com/api/getProducts')
    .map((response:Response) => <IMusic[]>response.json())
    .catch(this.handleError)

}

getMusic():Observable<IMusic[]>{
    return this._http.get('http://ngmusicdb.herokuapp.com/api/getMusic/')
    .map((response:Response) => <IMusic[]>response.json())
    .catch(this.handleError)
}


private handleError(error:Response) {
return Observable.throw(error.json().errorv|| "Server error")
}
}

