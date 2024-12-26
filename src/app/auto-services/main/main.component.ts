import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: [{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userRole: string,
    status: number,
    ownerEmail: string
  }] = [{
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userRole: "",
    status: 1,
    ownerEmail: ""
  }];
  urlIframe: any = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
  constructor(private router: Router, private sanitizer: DomSanitizer, private autoService: AutoService) { }
  ngOnInit() {
    const ownerEmail = localStorage.getItem('email')!;
    this.autoService.getCurrentAutoUser(ownerEmail)
      .subscribe(data => {
        if (data.status === 'success') { 
          while(this.users.length > 0) {
            this.users.pop();
        } 
          this.users.push(data.data);                  
        console.log('user at auto hub', this.users);
        } else {          
        console.log('user at auto hub', data);
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
