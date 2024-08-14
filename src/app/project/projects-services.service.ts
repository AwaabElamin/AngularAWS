import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';
import { useCase } from './Models/useCase';
import { ReturnStatement } from '@angular/compiler';
import { uiData } from './Models/uiData';
@Injectable({
  providedIn: 'root'
})
export class ProjectsServicesService {
  
  private backendUrl: string = environment.url + 'projects';
  constructor(private http: HttpClient) { }
  updateUI(id: string, uiData: uiData) {
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    return this.http.post<any>(this.backendUrl + "/ui" + "/" + email + "/" + PID + "/" + id,{uiData:uiData})
  }
  getAllUserStories() {
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    return this.http.get<any>(this.backendUrl+"/userStory" + "/" + email + "/" +PID)
  }
  postNewProject(email?:string, projectName?:String){
    return this.http.post<any>(this.backendUrl,{email:email,projectName:projectName})
  }
  getAllProjects(email?:string){
    return this.http.get<any>(this.backendUrl+'/'+email)
  }
  addUserStory(actor:string,cRDU:string,action:string){
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    return this.http.post<any>(this.backendUrl+"/userStory",{email:email,PID:PID,actor:actor,cRUD:cRDU,action:action})
  }
  addUseCase(useCase:useCase){
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    // console.log("useCase", useCase);
    return this.http.post<any>(this.backendUrl + "/useCase" + "/" + email + "/" + PID,{useCase:useCase})
  }
  getAllActors(){
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    return this.http.get<any>(this.backendUrl+"/actors" + "/" + email + "/" + PID)
  }
  addActor(actor:string){
    return this.http.post<any>(this.backendUrl + "/actors",{
      email : localStorage.getItem('email'),
      PID : localStorage.getItem('PID'),
      actor: actor
    })
  }
  getUseCase(id:string){  
    const email = localStorage.getItem('email');
    const PID = localStorage.getItem('PID');
    return this.http.get<any>(this.backendUrl + "/useCase/" + email + "/" + PID + "/" + id)
  }
}
