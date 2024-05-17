import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';
// import {ProjectRoutingModule} from "./project-routing.module";
import { ProjectRoutingModule } from './project-routing.module';
import { NewComponent } from './new/new.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';



@NgModule({
  declarations: [
    UserStoriesComponent,
    MainComponent,
    NewComponent,
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports:[MainComponent]
})
export class ProjectModule { }
