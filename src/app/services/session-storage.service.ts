import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {


  private static USER_KEY = "user";

  constructor(public router : Router) { }


  public saveUserSession(username: string): void
  {
    window.sessionStorage.setItem(SessionStorageService.USER_KEY, JSON.stringify({username: username}));
  }

  public isUserSaved(): boolean
  {

    let flag = window.sessionStorage.getItem(SessionStorageService.USER_KEY) != null;
    if(flag){
      return flag ;
    }
//    this.router.navigateByUrl('login');
    return flag ;
  }

  public removeUserSession(): void
  {
    window.sessionStorage.removeItem(SessionStorageService.USER_KEY);
  }

}
