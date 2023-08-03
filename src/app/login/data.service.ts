import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private backendUrl: string = 'https://epdqkqaj3f.us-east-1.awsapprunner.com/users/login';
  private backendUrl: string = 'http://localhost:3000/users/login';
  private body = {
    email:"test",
    password:"123"
  }
  constructor(private Http:HttpClient) { }
  postLogin(email:string, password:string):Observable<Login>{
    this.body.email = email;
    this.body.password = password;
    return this.Http.post<any>(this.backendUrl,this.body);
  }
}
