import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IEventsResponse } from '../models/responses/EventsResponse';
import { IEventResponse } from '../models/responses/EventResponse';
import { IEvent } from '../models/Event';
import { IQuestion } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService
{
  _endPoint: String = "api/v1/events";
  private static _schedulesUrl: string = `${environment.baseUrl}/uploads/schedules/`;
  chosenConference : IEvent ;
  questions :IQuestion[]

  constructor(private http: HttpClient) { }

  public getConferences(): Observable<IEventsResponse>
  {
    return this.http.get<IEventsResponse>(`${environment.baseUrl}/${this._endPoint}`);
  }

  public getConference(id : string): Observable<IEventResponse>
  {

    return this.http.get<IEventResponse>(`${environment.baseUrl}/${this._endPoint}/${id}`);
  }

  public getSchedulesUrl(): string
  {
    return ConferencesService._schedulesUrl;
  }
}

