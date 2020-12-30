import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../Products/star.component';
//import { StudentInfoComponent } from '../student-info/student-info.component';


@NgModule({
imports:[
    FormsModule,
    CommonModule
   //,
   // StudentInfoComponent
],
declarations:[
    StarComponent
],
exports:[
    FormsModule,
    CommonModule,
    StarComponent
]
})


export class SharedModule{

}