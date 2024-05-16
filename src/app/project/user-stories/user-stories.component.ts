import { Component } from '@angular/core';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent {
  actors = [
    "Customer",
    "Admin",
    "Manager",
    "HR",
    "Employee"
  ];
  CRUDs = [
    "Create",
    "Read",
    "Update",
    "Delete"
  ]
  selectedActor = "----";
  selectedCRUD = "----";
  InputActionValue = "----";
  updateActor(e: any) {
    this.selectedActor = e.target.value;
  }
  updateCRUD(e: any) {
    this.selectedCRUD = e.target.value;
  }
  updateInputAction(e: any) {
    this.InputActionValue = e.target.value;
  }
}
