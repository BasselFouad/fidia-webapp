import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-joint-header',
  templateUrl: './joint-header.component.html',
  styleUrls: ['./joint-header.component.css']
})
export class JointHeaderComponent implements OnInit {
  @Input() jointName : string ;

  bodyPart : string
  jointImageToManuals : string
  innerWidth: number  = window.innerWidth ;
  constructor( public router: Router, public route : ActivatedRoute ,public apiService : ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.jointName = data.bodyPart ;
      this.jointImageToManuals = data.imgSrc ;
     })

  }

}
