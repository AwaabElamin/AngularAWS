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
  user:{} | undefined;
  urlIframe:any =  this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
  constructor(private router:Router, private sanitizer: DomSanitizer, private autoService:AutoService){}
  ngOnInit(){
    this.autoService.getCurrentAutoUser()
    .subscribe(data=>{
      console.log('user at auto hub', data);
    });
  }
  btnNewClicked(){
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com/usedcars/new");
    console.log("iframe url", this.urlIframe);
  }
  btnViewClicked(){
    this.urlIframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://main.dfnradbwueq86.amplifyapp.com");
  }
}
