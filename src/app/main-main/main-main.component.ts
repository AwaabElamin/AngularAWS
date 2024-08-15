import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-main-main',
  templateUrl: './main-main.component.html',
  styleUrls: ['./main-main.component.css']
})
export class MainMainComponent implements OnInit{
  summary: string = "";
  projects:any = []
  constructor(private router:Router, private mainSerive: MainServiceService){
    this.getProjects();
  }
  ngOnInit(): void {
    this.getProjects();
    this.summary = "Results-driven Full Stack Developer with 5 years of hands-on experience in designing and implementing"
        + "innovative web applications. Adept at utilizing a comprehensive skill set, with a particular emphasis"
        + "on JavaScript technologies. Proven track record of delivering high-quality solutions through the entire"
        + "software development lifecycle. Excels in collaborating with cross- functional teams to drive project success. A"
        + "detail-oriented problem solver with a passion for staying abreast of emerging technologies and industry best"
        + "practices. Recognized for consistently meeting project deadlines and exceeding client expectations. Seeking to"
        + "contribute expertise and enthusiasm to a dynamic development team."
  
      }
  getProjects():void{
    this.mainSerive.getProjects()
    .subscribe(data=>{
      if(data.status = "success") this.projects = data.message;
      else console.log(data)
    })
  }
}
