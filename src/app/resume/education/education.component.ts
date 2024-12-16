import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { education } from '../resume.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  master: string = ""; Bacholar: string = "";
  educations: Array<education> = [{
    email: "",
    universityName: "",
    degreeType: "",
    majorName: "",
    yearOfGraduate: ""
  }]
  constructor(private resumeDataService: ResumeDataService) { }
  ngOnInit(): void {
    this.getEducation();
  }
  getEducation(): void {
    this.resumeDataService.getEducations()
    .subscribe(data => {
      // console.log("resume data",data);
      // console.log('data length',typeof data.data)
      if (data.status === "error") {
        // console.log("error", data.data);
      } else {
        this.educations = data.data;
        // console.log("Educations", this.educations)
      }
    })
  }

}
