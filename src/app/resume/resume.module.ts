import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    ResumeComponent,
    SummaryComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
