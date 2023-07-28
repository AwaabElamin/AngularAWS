import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  infosys: string = "";
  awaabLlc: string = "";
  constructor(private resumeDataService: ResumeDataService) { }
  ngOnInit(): void {
    this.getexperience();
  }
  getexperience(): void {
    this.resumeDataService.getResume()
      .subscribe(data => {
        this.infosys = data.Experience.Infosys;
        this.awaabLlc = data.Experience.AwaaabLLC;
        console.log("Data",data)
      })
  }

}
