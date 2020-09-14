import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evidences',
  templateUrl: './evidences.component.html',
  styleUrls: ['./evidences.component.css']
})
export class EvidencesComponent implements OnInit {

  jointName : string
  documents2DArray = [] ;

  documents = [] ;
  twoElementsARow : boolean ;
  innerWidth : any ;
  constructor(public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart
     })

    this.innerWidth = window.innerWidth ;

     this.apiService.getAssetsService().getDocuments().subscribe( data => {
      console.log(data) ;

      data.assets.forEach( document => {
        if(document.bodyPart==this.jointName.toLowerCase()){
          this.documents.push(document) ;
        }
      })
      console.log(this.documents)

      this.init2DArray() ;

      if( this.innerWidth < 1024 ){
        this.twoElementsARow = true ;
        this.init1DArrayThatIsActually2D()
      }
      else{
        this.twoElementsARow = false ;
      }

      console.log(this.documents2DArray)
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


  goToDocumentLink(element){
    window.location.href = this.apiService.getAssetsService().getDocumentsUrl() + element.path ;
    console.log(window.location.href)
  }
  init2DArray(){
    console.log(this.documents)
    this.documents2DArray = []
    let row ;
    for(let i =0; i< this.documents.length ; i++){
      row = [] ;
      row.push(this.documents[i]);
      if(this.documents[i+1]){
        row.push(this.documents[i+1]);
      }
      this.documents2DArray.push(row) ;
      i++ ;
    }
  }
  init1DArrayThatIsActually2D(){
    let arr = [] ;
    for(let i =0 ; i< this.documents2DArray.length ; i++){
      arr.push([this.documents2DArray[i][0]]) ;
      arr.push([this.documents2DArray[i][1]]) ;
    }
    this.documents2DArray=  arr
  }
}



