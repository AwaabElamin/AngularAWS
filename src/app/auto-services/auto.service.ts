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
  getCurrentAutoUser():Observable<any> {
    return this.http.get<Response>(this.backendUrl + '/user');
  }
}
