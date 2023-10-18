import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  name:string = "";
  title: string ="";
  phone: string = "";
  email:string = "";
  city:string = "";
  state: string = "";
  country: string = "";
  linkedInUrl: string ="";
  gitHubUrl: string = "";
  webside: string = "";
  constructor(private resumeDataService: ResumeDataService){}
  ngOnInit(){
    this.getTitleData();
  }
  getTitleData():void{
    this.resumeDataService.getResume()
    .subscribe(data =>{
      this.name = data.firstname + " " + data.lastname;
      this.title =data.title;
      this.phone = data.phone;
      this.email = data.email;
      this.city = data.city;
      this.state = data.state;
      this.country = data.country;
      this.linkedInUrl =data.linkedInUrl;
      this.gitHubUrl = data.gitHubUrl;
      this.webside = data.webside;
    });
  }
}
