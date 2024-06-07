import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/auth/authenticate';

  constructor(public http: HttpClient) { }

  login(credentials:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, credentials);
  }

}
