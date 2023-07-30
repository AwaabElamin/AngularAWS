import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    request.headers.set('Content-type', 'application/json');
    request.headers.set('Access-Control-Allow-Origin', '*');
    request.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      request.headers.set('Authorization', `Bearer ${userToken}`);
    }
    return next.handle(request);
  }
}
