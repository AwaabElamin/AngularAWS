import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';
// import {ProjectRoutingModule} from "./project-routing.module";
import { ProjectRoutingModule } from './project-routing.module';
import { NewComponent } from './new/new.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';



@NgModule({
  declarations: [
    UserStoriesComponent,
    MainComponent,
    NewComponent,
    AllProjectsComponent,
    UseCasesComponent,
    SDLCComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports:[MainComponent]
})
export class ProjectModule { }
