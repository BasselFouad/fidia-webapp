import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  changeQuestionIcon : boolean ;
  changeVideoIcon : boolean ;
  changePdfIcon : boolean ;

  pageTitle : string = 'About Us'
  pageImageSrc = "../../../assets/about-us-photo/ezgif.com-webp-to-jpg.png" ;
  constructor(public apiService : ApiService) {
    this.changePdfIcon=false ;
    this.changeQuestionIcon=false ;
    this.changePdfIcon=false ;
  }

  ngOnInit(): void {
  }

  goToVideoLink(videoPath){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + videoPath ;
  }
  goToPdfLink(documentPath){
    window.location.href = this.apiService.getConferenceServices().getSchedulesUrl() + documentPath ;
  }
}
