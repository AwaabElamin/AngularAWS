import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private backendUrl: string = environment.url + 'auto';
  constructor(private http:HttpClient){}
  getCurrentAutoUser(email:string):Observable<any> {
    // console.log('email from get auto users service', email);
    return this.http.get<Response>(this.backendUrl + '/user/'+email);
  }
  addCurrentOwner(user: { firstname: string; lastname: string; email: string; password: string; userRole: string; status: number; ownerEmail: string; }):Observable<any>{
    return this.http.post<Response>(this.backendUrl+ '/user',user);
  }
}
