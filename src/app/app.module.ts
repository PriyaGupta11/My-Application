import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { NotFound } from './shared/notFound.component';
import { ProductModule } from './Products/product.module';
import { MusicComponent } from './music/music.component';
import { EmployeeComponent } from './Employee/employee.Component';
import { FormPoster } from './services/form-poster.service';
import { EmployeeListComponent } from './Employee/EmployeeList.component';
import { EmployeeService } from './services/employee.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      {path:'orders', component:OrderComponent},
      {path:'home', component:HomeComponent},
      {path:'music', component:MusicComponent},
      {path:'employeeList', component:EmployeeListComponent},
      {path:'employee', component:EmployeeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:NotFound}
    ])],
  declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    MusicComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NotFound],  
  bootstrap: [AppComponent],
  providers:[FormPoster,EmployeeService]
})
export class AppModule { }
