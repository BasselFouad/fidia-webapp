import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  jointName : string
  videos2DArray = [] ;

  videos = [] ;
  twoElementsARow : boolean ;
  innerWidth : any ;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })

    this.innerWidth = window.innerWidth ;

     this.apiService.getAssetsService().getVideos().subscribe( data => {
      console.log(data) ;

      data.assets.forEach( document => {
        if(document.bodyPart==this.jointName.toLowerCase()){
          this.videos.push(document) ;
        }
      })
      console.log(this.videos)

      this.init2DArray() ;

      if( this.innerWidth < 1024 ){
        this.twoElementsARow = true ;
        this.init1DArrayThatIsActually2D()
      }
      else{
        this.twoElementsARow = false ;
      }

      console.log(this.videos2DArray)
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <=1024) {
    this.twoElementsARow = false ;
   this.init2DArray() ;
  } else {
    this.twoElementsARow = true ;
    this.init1DArrayThatIsActually2D() ;
  }
}


  goToVideoLink(element){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + element.path ;
  }
  init2DArray(){
    console.log(this.videos)
    this.videos2DArray = []
    let row ;
    for(let i =0; i< this.videos.length ; i++){
      row = [] ;
      row.push(this.videos[i]);
      if(this.videos[i+1]){
        row.push(this.videos[i+1]);
      }
      this.videos2DArray.push(row) ;
      i++ ;
    }
  }
  init1DArrayThatIsActually2D(){
    let arr = [] ;
    for(let i =0 ; i< this.videos2DArray.length ; i++){
      arr.push([this.videos2DArray[i][0]]) ;
      arr.push([this.videos2DArray[i][1]]) ;
    }
    this.videos2DArray=  arr
  }
}



