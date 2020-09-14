import { Component, OnInit } from '@angular/core';
import { ConferencesService } from 'src/app/services/conferences.service';
import { IQuestion } from 'src/app/models/Question';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  pageTitle = "Conferences"
  pageImageSrc = "../../../../assets/conferences-photo/man-speaker-eusic-2017-conference.png"
  questions : IQuestion[] ;

  conferenceId : string  ;
  constructor( public apiService: ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.conferenceId = params.conferenceId ;
      this.apiService.getConferenceServices().getConference(params.conferenceId).subscribe( data => {
       console.log(data);
        this.questions = data.event.questions ;

    })

    })
  }
  submitResults(){
    console.log(this.apiService.getQuestionsAnswersService().answers)
    console.log(this.conferenceId)
    this.apiService.
      getQuestionsAnswersService().
          addSubmission(this.conferenceId,this.apiService.getQuestionsAnswersService().answers).subscribe( data =>{
            console.log(data),
            err => {
              console.log(err);
            }
          }) ;
  }
}
