import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../../../services/session-storage.service';
import {IUser} from '../../../models/User'
import {Data} from '../../../models/Data'


@Component({
  selector: 'app-signup-data',
  templateUrl: './signup-data.component.html',
  styleUrls: ['./signup-data.component.css']
})
export class SignupDataComponent implements OnInit, OnDestroy
{
  public email: string;
  public password: string;
  public lastName:string;
  public firstName:string;
  public country:string;
  public city :string;
  public workPlace :string;
  public contactNumber :string;
  private user
  private date:Date
  public errorMessage:string;
  public error :boolean

  innerWidth : any = window.innerWidth



  constructor(  private data:Data,public ApiService: ApiService, public router: Router,public SessionStorageService:SessionStorageService,public route: ActivatedRoute)
  {



  }

  ngOnInit()
  {



this.country='Egypt'


  }

  ngOnDestroy()
  {

  }


  goBack()
  {
    console.log("hello")
    window.history.back();
  }

  public signUp(): void
  {

    this.date= new Date();
    this.user={city:this.city,firstname:this.firstName,lastname:this.lastName,email:this.email,mobileNumber:this.contactNumber,password:this.password
      ,country:this.country,language:null,workplace:this.workPlace,isUsingIAHA:this.data.storage.isUsingIaha,whichJoints:this.data.storage.whichJoints,rangeOfInjectionsPerMonth:this.data.storage.rangeOfInjectionsPerMonth,createdAt:this.date,updatedAt:this.date}
      console.log(this.user)
      this.ApiService.getUsersService().create(this.user).subscribe(data => {
        console.log(data)
      if(data.success == true )
      {
        this.ApiService.getAuthenticationService().login(this.email, this.password).subscribe(data => {


            if(data.success == true)
            {

              this.SessionStorageService.saveUserSession(this.email);
              this.router.navigateByUrl('/home');
            }
            else
            {

            }
          })
      }
      else
      {

      }
    })
  }



}
