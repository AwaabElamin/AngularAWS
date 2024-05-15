import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  master: string = ""; Bacholar: string = "";
  constructor(private resumeDataService: ResumeDataService) { }
  ngOnInit(): void {
    this.getEducation();
  }
  getEducation(): void {
    this.resumeDataService.getResume()
    .subscribe(data => {
      console.log("resume data",data)
      console.log("resume data Education",typeof data.Education)
      this.master = data.Education.master;
      this.Bacholar = data.Education.Bacholar;
      // console.log("Master", this.master);
      // console.log("Bacholar", this.Bacholar);

    })
  }

}
