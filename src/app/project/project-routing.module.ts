import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'allProjects', component: AllProjectsComponent},
    {path: 'userStories', component: UserStoriesComponent},
    {path: 'useCase/:id', component: UseCasesComponent,pathMatch: 'full'},
    {path: 'userInterface/:id', component: UserInterfaceComponent,pathMatch: 'full'}    
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class ProjectRoutingModule { }
  