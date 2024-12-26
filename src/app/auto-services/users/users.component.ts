import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userRole: string,
    status: number,
    ownerEmail: string
  } = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: '',
      status: 0,
      ownerEmail: ''
    }
}
