import {Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-comp',
  template: `<div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">    
        <a class="navbar-brand">Angular2</a>
          <ul class="nav navbar-nav">
            <li><a [routerLink] ="['./home']">Home</a></li>
            <li><a [routerLink] ="['./music']">Music</a></li>
            <li><a [routerLink] ="['./movies']">Movies</a></li>
            <li><a [routerLink] ="['./products']">Products</a></li>            
            <li><a [routerLink] ="['./employeeList']">Employees</a></li>
            <li><a [routerLink]="['./orders']">Orders</a></li>
            <li><a [routerLink]= "['./customer']"> Customer </a></li>  
            <li><a [routerLink]="['./recipes']">Udemy-App</a></li>          
          </ul>
      </div>
   </nav>
  <div >
      <router-outlet></router-outlet>
    </div>
  </div>`  
})
export class AppComponent {
  title = 'app';
}
 



