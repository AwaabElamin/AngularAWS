import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'resume',loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: 'user',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'project',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'auto',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./auto-services/auto-services.module').then(m => m.AutoServicesModule) },
  { path: 'groceries',canActivateChild:[AuthGuardGuard], loadChildren: () => import('./groceries/groceries.module').then(m => m.GroceriesModule) }
  // { path: 'admin',canActivateChild:[AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
