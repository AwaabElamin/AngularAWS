import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceriesRoutingModule } from './groceries-routing.module';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { MiniProductViewComponent } from './mini-product-view/mini-product-view.component';


@NgModule({
  declarations: [
    ProductProfileComponent,
    AllProductsComponent,
    CartComponent,
    MiniProductViewComponent
  ],
  imports: [
    CommonModule,
    GroceriesRoutingModule
  ]
})
export class GroceriesModule { }
