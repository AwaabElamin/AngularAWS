import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './LoginUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
// private backendUrl: string = 'https://epdqkqaj3f.us-east-1.awsapprunner.com/resume';
private backendUrl: string = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  postNewUser(user:LoginUser):Observable<any>{
    return this.http.post<any>(this.backendUrl,{user})
  }
}
