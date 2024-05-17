import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser ,
  //AppUserAuth
} from './LoginUser.model';
import { environment } from 'src/environments';
// import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private backendUrl: string = environment.url + 'users';
  constructor(private http: HttpClient, 
    // public securityObject:AppUserAuth
  ) { }
  postNewUser(user: LoginUser): Observable<any> {
    // console.log('user', user)
    return this.http.post<any>(this.backendUrl, { user })
  }
  postResetPassword(email: any, password: any){
    console.log('email', email);
    console.log('password', password)
    return this.http.post<any>(this.backendUrl + '/forget',{email,password})
  }
  // isValidToken():boolean{
  //   let result:boolean = false;
  //  let userToken:string|undefined = localStorage.getItem("userToken")?.toString();
  //  if (userToken) {
  //     result = true;
  //  }
  //   return result;
  // }
}
