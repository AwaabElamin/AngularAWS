import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoServicesRoutingModule } from './auto-services-routing.module';
import { MainComponent } from './main/main.component';
import { NewAutoComponent } from './new-auto/new-auto.component';


@NgModule({
  declarations: [
    MainComponent,
    NewAutoComponent
  ],
  imports: [
    CommonModule,
    AutoServicesRoutingModule
  ]
})
export class AutoServicesModule { }
