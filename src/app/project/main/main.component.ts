import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) { }
  newProject = false;
  newProjectClicked(){
    this.newProject = true;
  }
  CurrentProjectClicked(){
    this.newProject = false;
  }
}
