import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'userStories', component: UserStoriesComponent}
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class ProjectRoutingModule { }
  