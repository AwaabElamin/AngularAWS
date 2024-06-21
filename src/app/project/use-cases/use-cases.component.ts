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
  errorMessage = "";
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
  constructor(private route:Router, private router: ActivatedRoute, private ProjectService:ProjectsServicesService) {
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
    this.useCase.description = message.description;
    this.useCase.PrimaryActor = message.PrimaryActor;
    this.useCase.Preconditions = message.Preconditions;
    this.useCase.postCondition = message.postCondition;
    this.useCase.mainSuccessScenario = message.mainSuccessScenario;
    this.useCase.extensions = message.extensions;
    this.useCase.frequencyOfUse = message.frequencyOfUse;
    this.useCase.status = message.status;
    this.useCase.owner = message.owner;
    this.useCase.priority = message.priority;
  }
  submitForm(e:any){
    e.preventDefault();
    // console.log('useCase', this.useCase);
    this.ProjectService.addUseCase(this.useCase).
    subscribe(data =>data.status == "success"? this.errorMessage = "saved correctly": this.errorMessage = data.message)
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
