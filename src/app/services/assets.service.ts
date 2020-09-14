import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAssetsResponse } from '../models/responses/AssetsResponse';
import { environment } from '../../environments/environment.prod';
import { IAsset } from '../models/Asset';
import { IAssetResponse } from '../models/responses/AssetResponse';
import { ConferencesService } from './conferences.service';

@Injectable({
  providedIn: 'root'
})



export class AssetsService {


  private static _endPoint: string = "api/v1/assets";
  private static _videosUrl: string = `${environment.baseUrl}/uploads/videos/`;
  private static _documentsUrl: string = `${environment.baseUrl}/uploads/documents/`;
  private static _manualsUrl: string = `${environment.baseUrl}/uploads/manuals/`;
  private static _thumbnailsUrl: string = `${environment.baseUrl}/uploads/thumbnails/`;
  private static assetSubject: Subject<IAsset> = new Subject<IAsset>();

  constructor(private http: HttpClient) {}

  public getAssetSubject(): Subject<IAsset>
  {
    return AssetsService.assetSubject;
  }

  public getVideosUrl(): string
  {
    return AssetsService._videosUrl;
  }

  public getThumbnailsUrl(): string
  {
    return AssetsService._thumbnailsUrl;
  }

  public getDocumentsUrl(): string
  {
    return AssetsService._documentsUrl;
  }


  public getManualsUrl(): string
  {
    return AssetsService._manualsUrl;
  }

  public get(): Observable<IAssetsResponse>
  {
    return this.http.get<IAssetsResponse>(`${environment.baseUrl}/${AssetsService._endPoint}`);
  }

  public getVideos(): Observable<IAssetsResponse>
  {
    return this.http.get<IAssetsResponse>(`${environment.baseUrl}/${AssetsService._endPoint}/videos`);
  }

  public getManuals(): Observable<IAssetsResponse>
  {
    return this.http.get<IAssetsResponse>(`${environment.baseUrl}/${AssetsService._endPoint}/manuals`);
  }

  public getDocuments(): Observable<IAssetsResponse>
  {
    return this.http.get<IAssetsResponse>(`${environment.baseUrl}/${AssetsService._endPoint}/documents`);
  }

  public getById(id: string): Observable<IAssetResponse>
  {
    return this.http.get<IAssetResponse>(`${environment.baseUrl}/${AssetsService._endPoint}/${id}`);
  }
  public getByPartAndType(part : string, type : string) :Observable<any> {
    return this.http.get(`${environment.baseUrl}/${AssetsService._endPoint}/part/${part}/type/${type}`);
  }

}

