import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements DoCheck{
  loginStatus:boolean = true;
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
