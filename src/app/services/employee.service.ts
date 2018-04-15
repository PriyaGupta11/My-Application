import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import {Employee} from '../Employee/employeeModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IEmployeeLocal } from '../Employee/employeeLocal';

@Injectable()


export class EmployeeService{
   
 //private _employeeURL= "";
 constructor(private _http:Http){}

 getEmployees():Observable<IEmployeeLocal[]>{
    return this._http.get('http://localhost:6351/api/GetEmployees')
    .map((response:Response) => <IEmployeeLocal[]>response.json())
    .catch(this.handleError)
}
private handleError(error:Response) {
    return Observable.throw(error.json().error|| "Server error")
    }
}