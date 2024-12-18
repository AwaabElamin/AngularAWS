import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginUser } from '../LoginUser.model';
import { Router } from '@angular/router';
import { ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  newUserForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });
  formStatus: string = this.newUserForm.status;
  constructor(private loginService: LoginService, private router: Router) { }
  FormChanged(): void {
    this.formStatus = this.newUserForm.status
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.newUserForm.value);
    // console.log(this.newUserForm.get('firstname'))
    if (this.newUserForm.get('password')!.value !== this.newUserForm.get('confirmPassword')!.value) {
      this.formStatus = "password must match confirm password";
      return;
    }
    const newuser: LoginUser = {
      password: this.newUserForm.get('password')!.value,
      firstname: this.newUserForm.get('firstname')!.value,
      lastname: this.newUserForm.get('lastname')!.value,
      email: this.newUserForm.get('email')!.value,

      phone: null,
      title: null,
      city: null,
      state: null,
      country: null,
      linkedin: null,
      github: null,
      webside: null,
      summary: null,
      keySkills: null,
      technicalSkills: null,
      education: [{
        universityName: null,
        degree: null,
        fieldName: null,
        month: null,
        year: null,
        location: null,
        gpa: null
      }],
      experience: [{
        companyName: null,
        jobTitle: null,
        startMonth: null,
        startYear: null,
        endMonth: null,
        endYear: null,
        location: null,
        summary: null
      }],
      Additional: []
    }
    // console.log("newuser: ",newuser);
    this.loginService.postNewUser(newuser)
      .subscribe(data => {
        if (data.status === 'success') {
          this.router.navigate(['/login'])
        } else {
          this.formStatus = data.data + ', please try registered a gain';
          console.log(data);
          console.log(data.status)
        }
      });
  }
}

