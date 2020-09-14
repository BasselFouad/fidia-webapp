import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserResponse} from '../models/responses/UserResponse';
import { IUser } from '../models/User';
import { IUsersResponse } from '../models/responses/UsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private static _endPoint: string = "api/v1/users";
  private static _endPoint2: string = "v1/auth/create";
  constructor(private http: HttpClient) { }


  public get(): Observable<IUsersResponse>
  {
    return this.http.get<IUsersResponse>(`${environment.baseUrl}/${UsersService._endPoint}`);
  }

  public getById(id: string): Observable<IUserResponse>
  {
    return this.http.get<IUserResponse>(`${environment.baseUrl}/${UsersService._endPoint}/${id}`);
  }

  public create(user: IUser): Observable<IUserResponse>
  {
    return this.http.post<IUserResponse>(`${environment.baseUrl}/${UsersService._endPoint2}`, user);
  }

  public update(user: IUser): Observable<IUserResponse>
  {
    return this.http.patch<IUserResponse>(`${environment.baseUrl}/${UsersService._endPoint}/${user._id}`, user);
  }

  public delete(id: string): Observable<IUserResponse>
  {
    return this.http.delete<IUserResponse>(`${environment.baseUrl}/${UsersService._endPoint}/${id}`);
  }
}
