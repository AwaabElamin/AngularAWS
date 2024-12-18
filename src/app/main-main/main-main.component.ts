import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-main-main',
  templateUrl: './main-main.component.html',
  styleUrls: ['./main-main.component.css']
})
export class MainMainComponent implements OnInit {
  summary: string = "";
  projects: any = []
  constructor(private router: Router, private mainService: MainServiceService) {
  }
  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(): void {
    this.mainService.getProjects()
      .subscribe(data => {
        console.log("Awaab Data", data);
        if (data.status == "success") {
          this.projects = data.data;
          console.log("projects", this.projects)
        }
        else console.log(data)
      })
  }
  btnPayClicked() {
    this.router.navigate(['../project']);
  }
}
