import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceriesRoutingModule } from './groceries-routing.module';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { AllProductsComponent } from './all-products/all-products.component';


@NgModule({
  declarations: [
    ProductProfileComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    GroceriesRoutingModule
  ]
})
export class GroceriesModule { }
