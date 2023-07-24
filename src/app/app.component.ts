import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awaab Elamin';
  numbersOfYears = (new Date()).getFullYear() - 2020;
}
