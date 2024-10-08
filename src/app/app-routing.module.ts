import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'resume',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: 'user',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'project',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
