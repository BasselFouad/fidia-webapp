import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.css']
})
export class ManualsComponent implements OnInit {
 jointName: string ;
 jointImageSrc : string ;
 title : string ;
 description: string ;
  constructor( public apiService : ApiService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart ;
      this.jointImageSrc = this.apiService.getJointService().jointsImagePath + data.imgSrc ;
      console.log(this.jointImageSrc)
     })

    this.apiService.getAssetsService().getByPartAndType(this.jointName.toLowerCase(),'manual').subscribe( data => {
      console.log(data.assets[0])
      this.description = data.assets[0].description ;
      this.title = data.assets[0].title
    })

  }

}
