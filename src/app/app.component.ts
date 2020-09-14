import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './services/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insidejoint-web-application-angular';

  sidebarColor : string
  navbarColor: string ;
  companyNameBackground :string
  companyNameColor : string

  listItemBackground :string
  routesMap = [];

  innerWidth : any = window.innerWidth ;

  currentRoute: string = "";
  constructor( public router: Router,public ApiService:ApiService)
  {


    this.routesMap['/products'] = "Products";
    this.routesMap['/home'] = "Home";
    this.routesMap['/conferences'] = "Conferences";
    this.routesMap['/aboutus'] = 'About Us';
    this.routesMap['/conferences/:conferenceId'] = 'Conference'
    this.routesMap['/joint/:part'] = 'Joint'
    this.routesMap['/joint/:part/manuals'] = 'JointManual'
    this.routesMap['/login'] = 'Login'
    this.routesMap['/signup'] = 'SignUp'
    this.routesMap['/signup-data'] = 'SignUp Data'



    this.router.events.subscribe((event) => {
      console.log(this.router.url)


      if(event instanceof NavigationEnd)
      {
        if(this.routesMap[this.router.url])
        {
          this.currentRoute = this.routesMap[this.router.url];

        }
      }
      if(this.router.url.substring(0,6)=='/joint'){
        this.sidebarColor = "#F2F2F2" ;
        this.navbarColor = "#F2F2F2" ;
        this.companyNameBackground = "#F2F2F2"
        this.listItemBackground = "#F2F2F2"
        this.companyNameColor = "#005086"
      }
      else{
        this.sidebarColor = "#005086" ;
        this.navbarColor =  "#005086" ;
        this.companyNameBackground = "#005086"
        this.listItemBackground = "#005086"
        this.companyNameColor = "#F2F2F2"
      }


    });

  }
  logout(){
    this.ApiService.getAuthenticationService().logout();
    this.router.navigateByUrl('login');
  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
