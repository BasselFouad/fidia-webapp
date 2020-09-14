import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import {Data} from '../../models/Data'
import { element } from 'protractor';







@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy
{



  public iahaSelected:boolean;
  public iaha=[]
  public injectionsSelected:string;
  public injections=[]
  public joints=[]
  public userData
  public errorMessage:string;
  public error :boolean ;

  innerWidth :any = window.innerWidth ;

  constructor(  private data:Data ,public ApiService: ApiService, public router: Router,public SessionStorageService:SessionStorageService)
  {
    this.iaha=[{name:'Yes',value:true},{name:'No',value:false}]
    this.injections=[{name:'0-10',value:'0-10'},{name:'10-30',value:'10-30'},{name:'30-50',value:'30-50'},{name:'50+',value:'50+'}]
    this.joints=[
      [
    {value: 'TMJ', name: "TMJ     ", checked: false},
    {value: 'Hand', name: "Hand", checked: false}],
    [{value: 'Knee', name: "Knee    ", checked: false},
    {value: 'Ankle', name: "Ankle", checked: false}],
    [{value: 'Shoulder', name: "Shoulder", checked: false},
    {value: 'Hip', name: "Hip", checked: false}]]
  }


  ngOnInit()
  {


  }

  ngOnDestroy()
  {
  }


next()
{
  let chosenJoints=[]
  this.joints.forEach(element=>{
if (element.checked==true)
{
  chosenJoints.push(element.value)
}
  });

  this.data.storage={isUsingIaha:this.iahaSelected,rangeOfInjectionsPerMonth:this.injectionsSelected,whichJoints:chosenJoints}
  if(this.data.storage.isUsingIaha==null ||this.data.storage.rangeOfInjectionsPerMonth==null ||this.data.storage.whichJoints==null)
  {
    this.error=true
    this.errorMessage="Please make sure you answer all questions."
  }
else{
  this.router.navigateByUrl('signup-data');
}

}




}
