import { Component } from '@angular/core';
import { ProjectsServicesService } from '../projects-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SDLCComponent {
  projectName: string = "";
  constructor(private ProjectService: ProjectsServicesService, private router: Router) {}
  RequirementsClicked(e:any){
    console.log(localStorage.getItem('PID'));    
    this.router.navigate(['/project/userStories']);
  }
}
