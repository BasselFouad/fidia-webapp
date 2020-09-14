import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import {IUserResponse} from  '../models/responses/UserResponse'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static _endPoint: string = "v1/auth";
  private userId : string ;

  constructor(private sessionStorageService: SessionStorageService,private http: HttpClient) { }

  public login(email, password): Observable<IUserResponse>
  {
    return this.http.post<IUserResponse>(`${environment.baseUrl}/${AuthenticationService._endPoint}`,{email :email,password:password});
  }


  public isAuthenticated(): boolean
  {
    return this.sessionStorageService.isUserSaved();
  }

  public logout(): void
  {
    this.sessionStorageService.removeUserSession();
  }

  public getUserId(){
    return this.userId ;
  }
  public setUserId(userId : string){
    this.userId = userId ;
  }
}
