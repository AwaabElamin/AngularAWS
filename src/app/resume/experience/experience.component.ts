import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { experience } from '../resume.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  infosys: string = "";
  awaabLlc: string = "";
  experiences: Array<experience> = [];
  constructor(private resumeDataService: ResumeDataService) { }
  ngOnInit(): void {
    this.getExperience();
  }
  getExperience(): void {
    this.resumeDataService.getExperience()
      .subscribe(data => {
        if (data.status == 'success') {
          this.experiences = data.data;
          // console.log("experiences", this.experiences);
        } else {
          // console.log("Data",data)
        }
      })
  }

}
