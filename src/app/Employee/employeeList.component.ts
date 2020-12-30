    import {Component} from '@angular/core';
    import { Employee } from './employeeModel';
    //import { FormPoster } from '../services/form-poster.service';
    import {NgForm} from '@angular/forms';
    //import {EmployeeService} from '../services/employee.service';
    import {IEmployeeLocal, IEmployeeFromWCF} from './employeeLocal'
    import { ProductService } from '../Products/product.service';
    import {Router} from '@angular/router'
   
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
    errorMessage1;

   employees:IEmployeeLocal[];
   employeesFromWCF:IEmployeeFromWCF[];
   messageData;

   constructor (private _productService:ProductService,
     private router:Router){}
   CreateNewEmployee(){
       this.router.navigate(['./employee'])
   }

    ngOnInit():void{
        this._productService.getEmployees()
        .subscribe((data)=>this.employees=data),
        console.log("getting data in employee service",this.employees),
         ((error) =>this.errorMessage=error); 
         
         this._productService.getEmployeesFromWCF()
                 .subscribe((data)=> this.employeesFromWCF=data),
                 console.log("getting data in service",this.employeesFromWCF),
                           ((error)=> this.errorMessage1 = error)      
    }   
    
    // ngOnInit():void{  //call service to get data
    //     this._productService.getEmployeesFromWCF()
    //         .subscribe((data)=> this.employeesFromWCF=data),
    //         console.log("getting data in service",this.employeesFromWCF),
    //                   ((error)=> this.errorMessage1 = error)                   
    //     }


}