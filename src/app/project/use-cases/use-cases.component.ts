import { Component, OnInit } from '@angular/core';
import { useCase } from '../Models/useCase';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsServicesService } from '../projects-services.service';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit{
  public useCase: useCase ={
    id: this.router.snapshot.params['id'],
    title: "",
    description: "",
    PrimaryActor:"",
    Preconditions: "",
    postCondition: "",
    mainSuccessScenario: "",
    extensions:"",
    frequencyOfUse: "",
    status: "",
    owner: "",
    priority: ""
  };
  constructor( private router: ActivatedRoute, private ProjectService:ProjectsServicesService) {
    // console.log(router.snapshot.params['id']);    
  }
  ngOnInit(): void {
    this.ProjectService.getUseCase(this.router.snapshot.params['id'])
    .subscribe(data => 
     data.status === "success"? this.updateUseCaseData(data.message):null
    );
  }
  updateUseCaseData(message: any): void {
    this.useCase.title = message.title;
    this.useCase.description = message.title;
    this.useCase.PrimaryActor = message.title;
    this.useCase.Preconditions = message.title;
    this.useCase.postCondition = message.title;
    this.useCase.mainSuccessScenario = message.title;
    this.useCase.extensions = message.title;
    this.useCase.frequencyOfUse = message.title;
    this.useCase.status = message.title;
    this.useCase.owner = message.title;
    this.useCase.priority = message.title;
  }
  submitForm(e:any){
    e.preventDefault();
    console.log('useCase', this.useCase);
    this.ProjectService.addUseCase(this.useCase).
    subscribe(
      data => {console.log("add use case:- " + data);}
    )
  }
  useCaseChanged(e:any,sectionName:string){
    e.preventDefault();
    console.log("value", e.target.value);
    console.log("section name", sectionName);
    sectionName == "title" ? this.useCase.title = e.target.value : 
    sectionName ==  "description" ? this.useCase.description = e.target.value: 
    sectionName ==  "PrimaryActor" ? this.useCase.PrimaryActor = e.target.value: 
    sectionName ==  "Preconditions" ? this.useCase.Preconditions = e.target.value: 
    sectionName ==  "postCondition" ? this.useCase.postCondition = e.target.value : 
    sectionName ==  "mainSuccessScenario" ? this.useCase.mainSuccessScenario = e.target.value: 
    sectionName ==  "extensions" ? this.useCase.extensions = e.target.value: 
    sectionName ==  "frequencyOfUse" ? this.useCase.frequencyOfUse = e.target.value :
    sectionName ==  "status" ? this.useCase.status = e.target.value: 
    sectionName ==  "owner" ? this.useCase.owner = e.target.value : 
    sectionName ==  "priority" ? this.useCase.priority = e.target.value:null;
  }
}
