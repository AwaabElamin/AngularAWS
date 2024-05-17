import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'allProjects', component: AllProjectsComponent},
    {path: 'userStories', component: UserStoriesComponent}
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class ProjectRoutingModule { }
  