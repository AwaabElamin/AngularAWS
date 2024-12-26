import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';
import { Response } from '../resume/resume.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl: string = environment.url + 'users';
  constructor(private http: HttpClient) { }
  getUserInfo(email: string): Observable<any> {
    const userToken = 'Bearer ' + localStorage.getItem("userToken");
    return this.http.post<any>(this.backendUrl + "/userInfo",
      {
        email: email
      },
      {
        headers:
        {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Authorization": `${userToken}`
        }
      }
    )
  }
}
