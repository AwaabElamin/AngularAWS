import { Component, OnInit} from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { Summary } from '../resume.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  summary: Array<Summary> = [];
  btnValue = "Edit";
  editValue = true;
  constructor(private resumeDataService:ResumeDataService){}
  ngOnInit(): void {
    this.getSummary();
  }
  getSummary():void{
    this.resumeDataService.getSummary()
    .subscribe(data => {
      console.log("Summary", data)
      this.summary = data.data;
    });
  }
  // postSummary():void{
  //   this.resumeDataService.postSummary(this.summary)
  //   .subscribe(data => console.log(data));
  // }
  // editClicked():void{
  //   let oldBtnValue = this.btnValue;
  //   if (oldBtnValue == "Edit") {
  //     this.btnValue = "Submit"
  //   } else {
  //     this.btnValue = "Edit"
  //   }
  //   if (oldBtnValue == "Submit") {
  //     this.postSummary();
  //     this.editValue = false;
  //   } else {
  //     this.editValue = true;
  //   }
  // }
  // editChanged(e: any) {
  //   this.summary = e.target.value;
  // }
}
