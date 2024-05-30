import { Component, OnInit } from '@angular/core';
import { ProjectsServicesService } from '../projects-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {
  allProjects = [{
    _id: '', email: '', projectName: '', __v: 0
  }];
  ProjectSelected: boolean = false;
  projectId:string = "";
  projectName: string = "";
  errorMessage = "";
  constructor(private ProjectService: ProjectsServicesService, private router: Router) {
    this.getProjects();
  }
  ngOnInit(): void {
    this.getProjects();
  }
  buttonClicked(e:any){
    console.log(e.target.value);
  }
  projectNameClicked(id: string, name:string) {
    this.projectId = id;    
    console.log(this.projectId);
    this.projectName = name;
    this.ProjectSelected = !this.ProjectSelected;
  }
  getProjects(): void {
    const email: any = localStorage.getItem('email') ? localStorage.getItem('email') : "";
    this.ProjectService.getAllProjects(email)
      .subscribe(data => {
        if (data.status == 'success' && data.message !== "project already exist") {
          this.allProjects = data.message;
          console.log(data)
        }
        else {
          console.log("error", data)
          this.errorMessage = "error: " + data.status + " " + data.message;
        }
      });
  }
}
