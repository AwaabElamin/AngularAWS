import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl: string = 'https://epdqkqaj3f.us-east-1.awsapprunner.com/users/login';
  // private backendUrl: string = 'http://localhost:3000/users/login';
  private loginResponse!: Observable<Login>;
  private headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  private body = {
    username:"test",
    password:"123"
  }
  constructor(private Http:HttpClient) { }
  postLogin(username:string, password:string):Observable<Login>{
    this.body.username = username;
    this.body.password = password;
    return this.Http.post<any>(this.backendUrl,this.body,{headers:this.headers});
  }
}
