import { HeaderComponent } from './header/header.component';
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
import { CustomerComponent } from './customer/customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


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
      {path:'customer', component:CustomerComponent},
      {path:'register',component:RegisterComponent},
      {path:'recipes',component:RecipesComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:NotFound}
    ]),
    ReactiveFormsModule],
    
    declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    MusicComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NotFound,
    CustomerComponent,
    RegisterComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    
   ],  
  bootstrap: [AppComponent],
  providers:[FormPoster,EmployeeService]
})
export class AppModule { }
