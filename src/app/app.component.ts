import { Component, DoCheck } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
 title:string = 'Awaab Elamin';
  loginStatus:boolean = true;
  numbersOfYears = (new Date()).getFullYear() - 2020;
  ngDoCheck(): void {
    if (localStorage.getItem('userToken')) {
     this.loginStatus = false;
    }else{
      this.loginStatus = true;
    }    
    // console.log('token from Do Check in App', localStorage.getItem('userToken'));
  }
  logoutClicked(){
    localStorage.removeItem('userToken');
  }
}
