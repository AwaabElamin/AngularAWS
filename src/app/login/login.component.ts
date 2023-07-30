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
  username: string = '';
  password: string = '';
  loginResponse: Login = {
    "status": "",
    "accessToken": "",
    "username": "",
    "_id": ""
  }
  showEdit: boolean = false;
  errorMessage: string = "";
  constructor(private loginService: DataService, private router:Router) { }
  ngOnInit(): void {
  }
  usernameChanged(e: any) {
    this.username = e.target.value;
    // console.log(this.username);
  }
  passwordChanged(e: any) {
    this.password = e.target.value;
    // console.log(this.password);
  }
  loginClicked() {
    this.loginService.postLogin(this.username, this.password)
      .subscribe(data => {
        console.log("response of login", data)
        if (data.status === 'fail') {
          console.log('data.status:', data.status);
          this.showEdit = false;
          this.errorMessage = "username and password are not match what we have!";
        } else {
          this.showEdit = true;
          this.errorMessage = "";
          localStorage.setItem('userToken',data.accessToken);
          console.log("route url", this.router);
          this.router.navigate(['']);
        }
      }
      );
  }
  edit() {
    console.log("edit");
  }
}
