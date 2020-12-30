import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';
import { productUpperPipe } from './product-upper.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductGaurds } from './product.gaurds';


@NgModule({
declarations:[
    ProductComponent,
    productUpperPipe,
    ProductDetailComponent,
   ],
imports:[
    SharedModule,
    RouterModule.forChild([
    {path:'products', component:ProductComponent},
    {path:'products1/:id', canActivate: [ProductGaurds] ,component:ProductDetailComponent}
    ])
],
providers:[
    ProductService,
    ProductGaurds
]
})

export class ProductModule{

}