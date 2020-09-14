import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';
import { IEventResponse } from 'src/app/models/responses/EventResponse';
import { IEvent } from 'src/app/models/Event';
import { link } from 'fs';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  pageTitle = "Conferences"
  pageImageSrc = "../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png" ;
  allConferences : IEvent[]
  conferences:IEvent[]
  lastConferenceIndex : number
  firstConferenceIndex : number

  rowOfTwo : boolean ;
  rowOfOne : boolean ;
  innerWidth : any ;
  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getConferenceServices().getConferences().subscribe( data => {
      console.log(data);
      if(window.innerWidth>1024){
        this.conferences = data.events.slice(0,4) ;
        this.firstConferenceIndex=0 ;
        this.rowOfTwo = false ;
      }
      else{
        if(window.innerWidth>=700){
          this.conferences = data.events.slice(0,2) ;
          this.lastConferenceIndex=1 ;
          this.rowOfTwo = true ;
        }
        else{
          this.conferences = data.events.slice(0,1) ;
          this.lastConferenceIndex = 0;
          this.rowOfOne = true ;
        }

      }
      this.firstConferenceIndex=0 ;
      this.allConferences = data.events ;


    })


  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  this.firstConferenceIndex = 0 ;
  if (this.innerWidth <=1024) {
    if(this.innerWidth>=768){
      this.conferences = this.allConferences.slice(0,2)
      console.log(this.conferences)
      this.lastConferenceIndex = 1 ;
      this.rowOfTwo = true ;
    }
    else{
      this.conferences = this.allConferences.slice(0,1)
      console.log(this.conferences)
      this.lastConferenceIndex = 0 ;
      this.rowOfOne = true ;
    }
  } else {
    this.conferences = this.allConferences.slice(0,4)
    console.log(this.conferences)
    this.rowOfTwo = false ;
    this.rowOfOne=true ;
    this.lastConferenceIndex=3 ;
  }
}
  goToLink(link){
    window.location.href = link ;
  }
  onRightArrow(){
    //row of 4
    console.log(this.firstConferenceIndex)
    console.log(this.lastConferenceIndex)
    if(!this.rowOfTwo && !this.rowOfOne){
      if(this.allConferences[this.lastConferenceIndex+4]){
      this.conferences= this.allConferences.slice(this.lastConferenceIndex,this.lastConferenceIndex+4);
      this.lastConferenceIndex+=4 ;
      this.firstConferenceIndex+=4 ;
      }else{
        this.conferences= this.allConferences.slice(this.allConferences.length-4,this.allConferences.length)
        this.lastConferenceIndex= this.allConferences.length-1 ;
        this.firstConferenceIndex= this.lastConferenceIndex-4 ;
      }}
      else{
        // row of 2
        if(!this.rowOfOne){
          if(this.allConferences[this.lastConferenceIndex+2]){
            this.conferences= this.allConferences.slice(this.lastConferenceIndex,this.lastConferenceIndex+2);
            this.lastConferenceIndex+=2 ;
            this.firstConferenceIndex+=2 ;
            }else{
              this.conferences= this.allConferences.slice(this.allConferences.length-2,this.allConferences.length)
              this.lastConferenceIndex= this.allConferences.length-1 ;
              this.firstConferenceIndex= this.lastConferenceIndex-2 ;
            }}
            else{
              //row of 1
              if(this.allConferences[this.lastConferenceIndex+1]){
                this.conferences= this.allConferences.slice(this.lastConferenceIndex,this.lastConferenceIndex+1);
                this.lastConferenceIndex+=1 ;
                this.firstConferenceIndex+=1 ;
                }else{
                  this.conferences= this.allConferences.slice(this.allConferences.length-1,this.allConferences.length)
                  this.lastConferenceIndex= this.allConferences.length-1 ;
                  this.firstConferenceIndex= this.lastConferenceIndex ;
                }
            }
        }

  }

  onLeftArrow(){
    console.log(this.firstConferenceIndex)
    console.log(this.lastConferenceIndex)
    if(!this.rowOfTwo && !this.rowOfOne){
      // row of 4
      if(this.allConferences[this.firstConferenceIndex-4]){
        this.conferences= this.allConferences.slice(this.firstConferenceIndex-4,this.lastConferenceIndex-4)
        this.firstConferenceIndex-=4 ;
        this.lastConferenceIndex-=4 ;
      }else{
        this.conferences= this.allConferences.slice(0,4)
        this.firstConferenceIndex=0 ;
        this.lastConferenceIndex=3 ;
      }
    }else{
      if(!this.rowOfOne){
        // row of 2
        if(this.allConferences[this.firstConferenceIndex-2]){
          this.conferences= this.allConferences.slice(this.firstConferenceIndex-2,this.lastConferenceIndex-2)
          this.firstConferenceIndex-=2 ;
          this.lastConferenceIndex-=2 ;
        }else{
          this.conferences= this.allConferences.slice(0,2)
          this.firstConferenceIndex=0 ;
          this.lastConferenceIndex=1 ;
        }
      }else{
        //row of 1
        if(this.allConferences[this.firstConferenceIndex-1]){

          this.conferences= this.allConferences.slice(this.firstConferenceIndex-1,this.lastConferenceIndex)
          this.firstConferenceIndex-=1 ;
          this.lastConferenceIndex-=1 ;
        }else{
          this.conferences= this.allConferences.slice(0,1)
          this.firstConferenceIndex=0 ;
          this.lastConferenceIndex=0 ;
        }
        }
    }

  }
  public goToConference(conference): void
  {
    this.apiService.getConferenceServices().chosenConference = conference ;
   // this.router.navigate()

  }

}
