import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private backendUrl: string = environment.url + 'mainMain';
  constructor(private http: HttpClient) { }
  getProjects(){
    return this.http.get<any>(this.backendUrl)
  }
}
