import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointLogin = 'http://localhost:8080/auth/authenticate';
  private endpointRegister = 'http://localhost:8080/auth/register';

  constructor(public http: HttpClient) { }

  login(credentials:any): Observable<any> {
    return this.http.post<any>(`${this.endpointLogin}`, credentials);
  }
  register(register:any): Observable<any> {
    return this.http.post<any>(`${this.endpointRegister}`, register);
  }

}
