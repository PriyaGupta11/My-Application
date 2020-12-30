import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl,ValidatorFn} from '@angular/forms';
import { Customer } from './customer';

//we can keep below function in seprate file and import it wherever it required. it is reusable 
function ratingRange(min:number, max:number):ValidatorFn{
  return (c:AbstractControl):{[key:string]:boolean}|null =>{
    if(c.value !=undefined && (isNaN(c.value)||c.value< min || c.value> max)){
      return {'range':true}
    }
     return null;
  }}
  // function ratingRange(c:AbstractControl):{[key:string]:boolean}|null{
//   if(c.value !=undefined && (isNaN(c.value)||c.value<1 || c.value>5)){
//     return {'range':true}
//   }
//    return null;
// }
 
function emailMatcher(c:AbstractControl){
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');
  // we don't want that as user start typing and it start giving error let wait user to complete
  // this and than only return error
  // if(emailControl.pristine || confirmControl.pristine){
  //   return null;
  // }
  if(confirmControl === emailControl){
    return null;
  }
  return {'match': true}  
}


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer =new Customer();
   constructor( private fb:FormBuilder ) { }

  // ngOnInit():void {
  //   this.customerForm = new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl(),
  //     email: new FormControl()
  //   })
  ngOnInit():void {
    this.customerForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      // lastName: {value:'null', disabled:true},
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      //we have to map both validations in one group and wrap both email and confirmation email 
      //controls into one div at html page
      emailGroup:this.fb.group({
      email:['',[Validators.required, Validators.pattern('[a-z0-9.-_+-]+@[a-z0-9.-]+[a-z]{2,5}')]],
      //two square bracket needs when we apply two validation at the same time.
      confirmEmail:['',Validators.required], 
      },{Validator:emailMatcher}),     
      phone:'',
      notification:'email',
      rating:['',ratingRange(1,5)]
    });
    //we can avoid writing click event at html page if we write valuechanges in ts file 
    // this.customerForm.get('notification').valueChanges
    //                  .subscribe((value)=>this.setNotification(value))
   } 

  populateTestData(): void{
      this.customerForm.patchValue({  
      firstName:'',
      lastName:'',   
      email: 'a@a.com',
      phone:''   
    }) }

    setNotification(notifyVia:string):void{
      const phoneControl = this.customerForm.get('phone');
      if(notifyVia === "text"){
        phoneControl.setValidators(Validators.required);
      }
      else{
        phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
      } 

save(){
  console.log(this.customerForm);
  console.log('save: ' + JSON.stringify(this.customerForm.value) );
}
}