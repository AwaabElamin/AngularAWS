import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo = {firstname:'',lastname:'',email:'',phone:''};
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    const email: string = window.localStorage.getItem('email')!;
    // console.log('email', email);
    this.userService.getUserInfo(email)
      .subscribe((data: any) => {
        if (data.status === 'success') {
          this.userInfo = data.data;
          console.log('user Info', this.userInfo);
        } else {
          console.log('data', data)
        }
      });
  }
}
