import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  newUserForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    username : new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newUserForm.value);
  }
}
