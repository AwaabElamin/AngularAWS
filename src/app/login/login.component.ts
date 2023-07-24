import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showEdit: boolean = false;
  usernameChanged(e: any) {
    this.username = e.target.value;
    // console.log(this.username);
  }
  passwordChanged(e: any) {
    this.password = e.target.value;
    // console.log(this.password);
  }
  loginClicked() {
    // console.log("button clicked", this.username, this.password);
    if (this.username === "Admin" && this.password === "Admin") {
      this.showEdit = true;
    }else{
      this.showEdit = false;
    }
  }
  edit() {
    console.log("edit");
  }
}
