import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './LoginUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private backendUrl: string = 'https://epdqkqaj3f.us-east-1.awsapprunner.com/resume';
  private backendUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  postNewUser(user: LoginUser): Observable<any> {
    console.log('user', user)
    return this.http.post<any>(this.backendUrl, { user })
  }
  postResetPassword(email: any, password: any){
    console.log('email', email);
    console.log('password', password)
    return this.http.post<any>(this.backendUrl + '/forget',{email,password})
  }
}
