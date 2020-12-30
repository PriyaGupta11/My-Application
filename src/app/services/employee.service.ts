import{Inject} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import {Employee} from '../Employee/employeeModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { IEmployeeLocal } from '../Employee/employeeLocal';
import {IStudentinfo} from '../Employee/employeeLocal';

@Injectable()


export class EmployeeService{
   
 //private _employeeURL= "";
 constructor(private _http:Http){}

 getEmployees():Observable<IEmployeeLocal[]>{
    return this._http.get('http://localhost:6351/api/GetEmployees')
    .map((response:Response) => <IEmployeeLocal[]>response.json())
    .catch(this.handleError)
}

getStudentInfo():Observable<IStudentinfo[]>{
    return this._http.get("http://apitest.barchraj.org/api/StudentEnquiry_WebAPI")
    .map((response:Response)=> <IStudentinfo[]>response.json())

}

private handleError(error:Response) {
    return Observable.throw(error.json().error|| "Server error")
    }


}