import {Injectable} from '@angular/core';
import {Http, Response, Headers, ResponseOptions, RequestOptions} from '@angular/http';
import {Employee} from '../Employee/employeeModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class FormPoster{
constructor(private _http:Http){}

private extractData(res:Response){
    let body= res.json();
    return body.fields || { };
}
private handleError(error:any){
return Observable.throw(error.statusText)
}
postEmployeeForm(employee:Employee):Observable<any>{
    console.log("getting data in service",employee)
    let body = JSON.stringify(employee);
    let headers = new Headers({'Content-Type':'application/json'});
    // we nees this header always like content-type, auth, basic Auth etc
     //make request option, if we have to paas multiple thing 
    let options = new RequestOptions({headers:headers});   
   return  this._http.post('http://localhost:6351/api/PostEmployee', body, options)   
    .map(this.extractData)    
    .catch(this.handleError)
}
}