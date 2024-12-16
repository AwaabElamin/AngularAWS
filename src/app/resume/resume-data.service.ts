import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Response, Resume, education, Summary } from './resume.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService{
  private backendUrl: string = environment.url + 'resume';
 
  private resume!: Observable<Resume>;
  private education! : Observable<education>;
  // private headers= new HttpHeaders()
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  constructor(private http:HttpClient) {this.getResume(); }
  getResume():Observable<Resume>{
    // console.log("backUrl:", this.backendUrl);
    return this.http.get<any>(this.backendUrl);
  }
  getEducations():Observable<Response>{
    // console.log("backUrl:", this.backendUrl);
    return this.http.get<Response>(this.backendUrl + '/educations');
  }  
  getExperience():Observable<Response>{
    return this.http.get<Response>(this.backendUrl + '/experience');
  }
  postSummary(summary:string){
      return this.http.post<any>(this.backendUrl+ "/summary",{
        summary : summary
      })
  }
  getSummary():Observable<Response>{
    return this.http.get<Response>(this.backendUrl + '/summary')
  }
}
