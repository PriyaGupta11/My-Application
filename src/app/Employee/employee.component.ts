    import {Component} from '@angular/core';
    import { Employee } from './employeeModel';
    import { FormPoster } from '../services/form-poster.service';
    import {NgForm} from '@angular/forms';

    @Component ({
    templateUrl:'./employee.component.html' 
    })

    export class EmployeeComponent{
    language= ["Angular","React","NodeJs"]

    model = new Employee(0,'Priya','Gupta','a@a.com','abc',true, 'female', '')
    hasCodeLangError=false;
    btnDisabled=false;
    constructor(private formPoster:FormPoster){}

    submitForm(employeeForm:NgForm){
    //console.log(form.value);
    this.validateLang(this.model.codingLang);
    if(this.hasCodeLangError){
    this.btnDisabled=true;
    return false;
    }
    this.formPoster.postEmployeeForm(this.model)
    .subscribe(
        (data) => console.log('Success Data'),
        (err)=>console.log('error', err)
    )}
    firstToUpper(value:string){
        if(value.length>0)
        {
            this.model.firstName= (value.charAt(0).toUpperCase()+
            value.slice(1)).trim();
        }
        else
        this.model.firstName= value;
    }
    validateLang(event){
    if(this.model.codingLang === "default"){
        this.hasCodeLangError = true;
        this.btnDisabled=true;
    }   
    else{
        this.hasCodeLangError=false;
        this.btnDisabled=false;
    }  
        }
        ////////////////////////////
        
    }