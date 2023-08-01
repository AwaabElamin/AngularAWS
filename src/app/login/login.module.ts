import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NewUserComponent } from './new-user/new-user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports:[NewUserComponent]
})
export class LoginModule { }
