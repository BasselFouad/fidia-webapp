import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IAnswer } from '../models/Answer';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class questionsAnswersService
{
  _endPoint: String = "api/v1/submissions/events";
  answers : IAnswer[] = [];
  constructor(private http: HttpClient, public authService : AuthenticationService ) {
   }

  public addSubmission(eventId : string, answers: IAnswer[]){

      let  userId = this.authService.getUserId() ;

      const params = new HttpParams().set('id', eventId )
      return this.http.patch<IAnswer>(`${environment.baseUrl}/${this._endPoint}/${eventId}`, {userId ,answers}, {params});
 }



}
