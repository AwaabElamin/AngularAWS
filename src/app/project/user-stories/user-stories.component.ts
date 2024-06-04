import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectsServicesService } from '../projects-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {
  actors = ["Customer","Admin","Manager","HR","Employee"];
  CRUDs = ["Create","Read","Update","Delete"];
  selectedActor = "----";
  selectedCRUD = "----";
  InputActionValue = "----";
  userStories = [{
    actor: "",
    cRUD:"",
    action:"",
    _id: ""
  }];
  constructor(private projectsServices:ProjectsServicesService,private router: Router){}
 git
  updateActor=(e: any)=>this.selectedActor = e.target.value;
  updateCRUD=(e: any)=>this.selectedCRUD = e.target.value;
  updateInputAction=(e: any)=>this.InputActionValue = e.target.value;
  getAllUserStories(){
    this.projectsServices.getAllUserStories()
    .subscribe(data =>{
      data.message && data.status === "success"? this.userStories = data.message.userStories: null;
    });
  }
  buttonClicked(){
    this.projectsServices.addUserStory(this.selectedActor,this.selectedCRUD,this.InputActionValue)
    .subscribe(data=>{
      console.log(data);
      data.status === "success"? this.getAllUserStories(): null;
    });
  }
}
