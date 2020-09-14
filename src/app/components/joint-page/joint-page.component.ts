import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-joint-page',
  templateUrl: './joint-page.component.html',
  styleUrls: ['./joint-page.component.css']
})
export class JointPageComponent implements OnInit {
  @Input() jointName : string  ;
  public jointImageSrc: string ;
  public jointImageToManuals : string ;

  manualsChangeIcon : boolean ;
  videosChangeIcon : boolean ;
  evidencesChangeIcon : boolean ;

  innerWidth : any = window.innerWidth ;
  constructor(private route : ActivatedRoute ,private apiService : ApiService ) { }

  ngOnInit( ): void {
    this.route.queryParams.subscribe(data => {
     this.jointName = data.bodyPart ;
     this.jointImageSrc = this.apiService.getJointService().jointsImagePath + data.imgSrc ;
     this.jointImageToManuals = data.imgSrc ;
    })
    console.log(this.jointName)
  }


  doShit(){

  }


}
