import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  urlIframe:any =  this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
  constructor(private router:Router, private sanitizer: DomSanitizer){}
  btnNewClicked(){
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
    console.log("iframe url", this.urlIframe);
  }
  btnViewClicked(){
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com");
  }
}
