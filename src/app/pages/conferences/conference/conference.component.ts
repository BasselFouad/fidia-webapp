import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/Event';
import { DatePipe } from '@angular/common';
import { IEventResponse } from 'src/app/models/responses/EventResponse';
import { IQuestion } from 'src/app/models/Question';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  pageTitle = "Conferences"
  chosenConference : IEvent
  displayedStartDate : String ;
  displayedEndDate : String ;
  questions : IQuestion[]
  conference_id

  pageImageSrc = "../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png" ;

  changeVideoIcon : boolean = false  ;
  changeQuestionsIcon : boolean = false;
  changeProgramIcon : boolean = false ;
  constructor( public apiService : ApiService , private router : RouterModule,
    public datepipe : DatePipe, private route : ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params =>{
      console.log(params)
      this.apiService.getConferenceServices().getConference(params.conferenceId).subscribe( data => {
       console.log(data);
        this.chosenConference = data.event ;
        this.displayedStartDate= this.datepipe.transform(data.event.startDate,'dd MM yyyy') ;
        this.displayedEndDate= this.datepipe.transform(data.event.endDate,'dd MM yyyy') ;
        this.questions = data.event.questions ;

    })

    })
  }

  public goToQuestions(questions): void
  {

    this.apiService.getConferenceServices().questions = questions ;

  }

  goToVideoLink(videoPath){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + videoPath ;
  }
  goToPdfLink(documentPath){
    window.location.href = this.apiService.getConferenceServices().getSchedulesUrl() + documentPath ;
  }

}
