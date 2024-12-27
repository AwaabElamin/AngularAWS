import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AutoService } from '../auto.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: [{
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    userRole: string,
    status: number,
    ownerEmail: string
  }] = [{
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userRole: "",
    status: 1,
    ownerEmail: ""
  }];
  noAccount: boolean = true;
  urlIframe: any = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
  ownerEmail = localStorage.getItem('email')!;
  youSure: boolean = false;
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private autoService: AutoService,
    private usersService: UserService) { }
  ngOnInit() {
    this.checkCurrentAutoUser();
  }
  checkCurrentAutoUser() {
    console.log('current email', this.ownerEmail);
    this.autoService.getCurrentAutoUser(this.ownerEmail)
      .subscribe(data => {
        if (data.status === 'success' && data.data !== null) {
          console.log('success data', data);
          while (this.users.length > 0) {
            this.users.pop();
          }
          this.users.push(data.data);
          this.noAccount = false;
          // console.log('user at auto hub', this.users);
        } else {
          console.log('get current auto user at main auto hub', data);
          this.noAccount = true;
        }
      });
  }
  async btnCreateAuoUser() {
    this.clearUsersData();
    this.getUserInfo();
    () => this.addCurrentOwner(); { }
  }
  addCurrentOwner() {
    if (this.users[0]?.firstname.length > 1) {
      console.log('users[0].firstname length > 0', this.users[0]?.firstname.length)
      this.youSure = false;
      this.autoService.addCurrentOwner(this.users[0])
        .subscribe(data => {
          console.log('add current owner', data);
        });
      this.noAccount = false;
    } else {
      console.log('users[0].firstname length not > 0', this.users)
      this.noAccount = true;
    }
  }
  clearUsersData() {
    while (this.users.length > 0) {
      this.users.pop();
    }
  }
  getUserInfo() {
    this.usersService.getUserInfo(this.ownerEmail)
      .subscribe(async (data) => {
        if (data.status === 'success' && data.data?.firstname) {
          console.log('get user Info success and has first name ', data.data);
          await this.users.push(data.data);
          console.log('users data after push', this.users);
          this.addCurrentOwner();
          this.youSure = false;
        } else {
          console.log("get user Info not success and hasn't first name", data);
          this.youSure = true;
        }
      });
  }
  btnNewClicked() {
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
    console.log("iframe url", this.urlIframe);
  }
  btnViewClicked() {
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com");
  }

}

