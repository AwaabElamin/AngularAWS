import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginResponse: Login = {
    "status": "",
    "accessToken": "",
    "email": "",
    "_id": ""
  }
  showEdit: boolean = false;
  errorMessage: string = "";
  constructor(private loginService: DataService, private router: Router) { }
  ngOnInit(): void {
  }
  emailChanged(e: any) {
    this.email = e.target.value;
    // console.log(this.email);
  }
  passwordChanged(e: any) {
    this.password = e.target.value;
    // console.log(this.password);
  }
  loginClicked() {
    this.loginService.postLogin(this.email, this.password)
      .subscribe(data => {
        // console.log("response of login", data)
        if (data.status === 'fail') {
          console.log('data:', data);
          this.showEdit = false;
          this.errorMessage = "email and password are not match what we have!";
        } else {
          this.showEdit = true;
          this.errorMessage = "";
          localStorage.setItem('userToken', data.accessToken);
          localStorage.setItem('email',this.email)
          // console.log("route url", this.router);
          this.router.navigate(['/user']);
        }
      }
      );
  }
  newClicked() {
    this.router.navigate(['/login/new']);
  }
  forgetClicked(){
    // console.log('forgetClicked');
    this.router.navigate(['login/forget'])
  }
}
