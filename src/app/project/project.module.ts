import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';
// import {ProjectRoutingModule} from "./project-routing.module";
import { ProjectRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [
    UserStoriesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports:[MainComponent]
})
export class ProjectModule { }
