import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { shareReplay, concat } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavigationModel } from '../models/navigation.model';
import { UserToken } from '../models/user-token.model';
import { LoginModel } from '../models/user-login.model';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1';
  
  private observableRequest: Observable<HttpResponse<Object>>

  getSection() : Observable<HttpResponse<Object>> {
    if( this.observableRequest === undefined) {
      this.observableRequest = this.http.get(`${this.baseUrl}/section`,{observe: "response"}).pipe(shareReplay());
    }
    return this.observableRequest
  }


  updateSection(data: NavigationModel) : Observable<HttpResponse<Object>>{
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8',
    ).set(
      'Authorization', `Bearer ${token.access_token}`
    );
    return this.http.put( `${this.baseUrl}/section/navigation`, 
      data, 
      {
        headers,
        observe: "response"
      })
  }

  authorization(login: LoginModel): Observable<UserToken> {
    const body = JSON.stringify(login);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post<UserToken>(
      `${this.baseUrl}/user/login`, body, { headers: headers, responseType: 'json' }
    )
  }
}
