import {Injectable} from '@angular/core'
import {IProduct} from './api/products';
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
import { IMusic } from '../music/music';
import { IEmployeeLocal } from '../Employee/employeeLocal';

@Injectable()

export class ProductService{
    private _productUrl="http://ngapi4.herokuapp.com/api/getProducts"

    constructor(private _http:Http){}

getProducts():Observable<IProduct[]>{
    return this._http.get('http://ngapi4.herokuapp.com/api/getProducts')
    .map((response:Response) => <IProduct[]>response.json())
    .catch(this.handleError)
}
getMusic():Observable<IMusic[]>{    
    return this._http.get('http://ngmusicdb.herokuapp.com/api/getMusic/')
    .map((response:Response) => <IMusic[]> response.json()[0].artists)
    .catch(this.handleError)
}

getEmployees():Observable<IEmployeeLocal[]>{    
    return this._http.get('http://localhost:6351/api/GetEmployees')
    .map((response:Response) => <IEmployeeLocal[]>response.json())
    .catch(this.handleError)
}

private handleError(error:Response) {
return Observable.throw(error.json().error|| "Server error")
}
}



