import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Resume } from './resume.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService{
  private backendUrl: string = environment.url + 'resume';
 
  private resume!: Observable<Resume>;
  // private headers= new HttpHeaders()
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  constructor(private http:HttpClient) {this.getResume(); }
  getResume():Observable<Resume>{
    console.log("backUrl:", this.backendUrl);
    return this.http.get<any>(this.backendUrl);
  }
}
