    import {Component} from '@angular/core';
    import { Employee } from './employeeModel';
    //import { FormPoster } from '../services/form-poster.service';
    import {NgForm} from '@angular/forms';
    //import {EmployeeService} from '../services/employee.service';
    import {IEmployeeLocal} from './employeeLocal'
    import { ProductService } from '../Products/product.service';

    @Component ({
    templateUrl:'./employeeList.component.html' 
    })

    export class EmployeeListComponent{
    title:string="Employee List";
    ShowData = false;
    ShowImage=true;
    imageWidth:10;
    imageHeight:5;
    errorMessage;

   employees:IEmployeeLocal[];

   //constructor (private _employeeService:EmployeeService){}
   constructor (private _productService:ProductService){}

    // ngOnInit():void{
    //     this._employeeService.getEmployees()
    //     .subscribe((data)=>this.employees=data),
    //      ((error) =>this.errorMessage=error) 
    // }   
    
    ngOnInit():void{  //call service to get data
        this._productService.getEmployees()
            .subscribe((data)=> this.employees=data),
            console.log("getting data in service",this.employees),
                      ((error)=> this.errorMessage = error)
        }
}