import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ApiService } from 'src/app/services/api.service';
import { IAnswer } from '../../models/Answer'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() title : string  ;
  @Input() questionNumber : number ;
  @Input() answers : [] ;
  @Input() questionIndex : string ;


  constructor(public apiService : ApiService) { }

  ngOnInit(): void {

  }
  registerChange(e){
      this.apiService.getQuestionsAnswersService().answers[e.target.id]= {
      question: this.title ,
      answer: e.target.value ,
      isCorrect: false
    }
  }



}
