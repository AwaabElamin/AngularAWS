import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Resume } from './resume.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService{
  private backendUrl: string = 'https://epdqkqaj3f.us-east-1.awsapprunner.com';
  // private backendUrl: string = 'http://localhost:3000/';
  private resume!: Observable<Resume>;
  private headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  constructor(private http:HttpClient) {this.getResume(); }
  getResume():void{
    this.resume =this.http.get<any>(this.backendUrl);
  }
  getSummary():Observable<Resume>{
    return this.resume;
  }
  // getEducation():Observable<
}
