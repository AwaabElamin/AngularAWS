import { Component, OnInit} from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  summary: string = "";
  constructor(private resumeDataService:ResumeDataService){}
  ngOnInit(): void {
    this.getSummary();
  }
  getSummary():void{
    this.resumeDataService.getSummary()
    .subscribe(data => this.summary = data.summary);
  }
  
}
