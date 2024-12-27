import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() user: {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    userRole: string,
    status: number,
    ownerEmail: string
  } = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      userRole: '',
      status: 0,
      ownerEmail: ''
    }
}
