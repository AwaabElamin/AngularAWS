import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  mainRoute:boolean = window.location.pathname === "/";
  numbersOfYears = (new Date()).getFullYear() - 2020;
  ngOnChanges(changes: SimpleChanges): void {
    this.mainRoute = window.location.pathname === "/";
  }
}
