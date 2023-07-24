import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    ResumeComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
