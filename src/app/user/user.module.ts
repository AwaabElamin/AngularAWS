import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutingModule} from './user-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from '../auth-interceptor.interceptor';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
    providers: [
      {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}
    ]
})
export class UserModule { }
