import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  });
  formStatus:string = this.forgetPasswordForm.status;
  constructor(private loginService: LoginService, private router:Router){}
  onSubmit(){
    const resetPassword={
      email : this.forgetPasswordForm.get('email')!.value,
      password: this.forgetPasswordForm.get('password')!.value
    }
    console.log(resetPassword);
    this.loginService.postResetPassword(resetPassword.email,resetPassword.password)
    .subscribe(data => {
      if (data.status == 'success') {
        this.router.navigate(['login']);
      } else {
        this.formStatus = data.data + ', please try again';
        console.log(data);
        console.log(data.status);
      }
    });
  }
}
