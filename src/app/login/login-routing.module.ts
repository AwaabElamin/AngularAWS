import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new', component: NewUserComponent},
  { path: 'forget', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
