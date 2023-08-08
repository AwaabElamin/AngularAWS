import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl: string = environment.url + 'users/login';
  private body = {
    email:"test",
    password:"123"
  }
  constructor(private Http:HttpClient) { }
  postLogin(email:string, password:string):Observable<Login>{
    this.body.email = email;
    this.body.password = password;
    console.log('environment', this.backendUrl)
    return this.Http.post<any>(this.backendUrl,this.body);
  }
}
