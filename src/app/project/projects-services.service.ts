import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';
@Injectable({
  providedIn: 'root'
})
export class ProjectsServicesService {
  private backendUrl: string = environment.url + 'projects';
  constructor(private http: HttpClient) { }
  postNewProject(email?:string, projectName?:String){
    return this.http.post<any>(this.backendUrl,{email:email,projectName:projectName})
  }
}