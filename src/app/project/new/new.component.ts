import { Component } from '@angular/core';
import { ProjectsServicesService } from '../projects-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  projectNameValue = "";
  errorMessage = "test";
  constructor(private ProjectService: ProjectsServicesService, private router: Router) { }
  projectName(e: any) {
    this.projectNameValue = e.target.value;
  }
  submitNewProject() {
    const email: any = localStorage.getItem('email') ? localStorage.getItem('email') : "";
    this.ProjectService.postNewProject(email, this.projectNameValue)
      .subscribe(data => {
        if (data.status == 'success') {
          this.router.navigate(['/project/allProjects']);
          this.errorMessage = "";
        }
        else {
          console.log("error", data)
          this.errorMessage = "error: " + data.status;
        }
      });

  }
}
