import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle="Products"
  pageImageSrc = "../../../assets/products-photo/xfidia-slide4.jpg.pagespeed.ic.x0C8HaECKd.png" ;

  allProducts : IProduct[]
  products: IProduct[]
  lastProductIndex : number
  firstProductIndex : number

  innerWidth : any ;
  rowOfTwo : boolean ;
  rowOfOne : boolean ;

  videoIconBooleanArray : Boolean[]=[] ;
  pdfIconBooleanArray : Boolean[] =[];
  constructor( public apiService : ApiService , private router : RouterModule ) { }

  ngOnInit(): void {
    this.apiService.getProductsService().getProducts().subscribe( data => {
      console.log(data);
      if(window.innerWidth>1024){
        this.products = data.products.slice(0,4) ;
        this.lastProductIndex = 3 ;
      }
      else{
        if(window.innerWidth>=700){
          this.products = data.products.slice(0,2) ;
          this.lastProductIndex = 1 ;
          this.rowOfTwo = true ;
        }
        else{
          this.products = data.products.slice(0,1) ;
          this.lastProductIndex = 0 ;
          this.rowOfOne = true ;
        }

      }

      this.allProducts = data.products ;
      this.allProducts.forEach( product => {
        this.pdfIconBooleanArray.push(false) ;
        this.videoIconBooleanArray.push(false) ;
      })
      console.log(this.videoIconBooleanArray)

      this.firstProductIndex=0 ;
      this.innerWidth = window.innerWidth ;
    })


  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    this.firstProductIndex = 0 ;
    if (this.innerWidth <=1024) {
      if(this.innerWidth>=768){
        this.products = this.allProducts.slice(0,2)
        console.log(this.products)
        this.lastProductIndex = 1 ;
        this.rowOfTwo = true ;
      }
      else{
        this.products = this.allProducts.slice(0,1)
        console.log(this.products)
        this.lastProductIndex = 0 ;
        this.rowOfOne = true ;
      }
    } else {
      this.products = this.allProducts.slice(0,4)
      console.log(this.products)
      this.rowOfTwo = false ;
      this.rowOfOne = true ;
      this.lastProductIndex=3 ;
    }
}
  goToLink(link){
    window.location.href = link ;
  }
  goToVideoLink(product){
    window.location.href = this.apiService.getAssetsService().getVideosUrl() + product.videoPath ;
  }
  goToPdfLink(documentPath){
    window.location.href = this.apiService.getAssetsService().getDocumentsUrl() + documentPath ;
  }
  onRightArrow(){
    //row of 4
    console.log(this.rowOfTwo)
    console.log(this.rowOfOne)
    if(!this.rowOfTwo && !this.rowOfOne){
      if(this.allProducts[this.lastProductIndex+4]){
      this.products= this.allProducts.slice(this.lastProductIndex,this.lastProductIndex+4);
      this.lastProductIndex+=4 ;
      this.firstProductIndex+=4 ;
      }else{
        this.products= this.allProducts.slice(this.allProducts.length-4,this.allProducts.length)
        this.lastProductIndex= this.allProducts.length-1 ;
        this.firstProductIndex= this.lastProductIndex-4 ;
      }}
      else{
        // row of 2
        if(!this.rowOfOne){
          if(this.allProducts[this.lastProductIndex+2]){
            this.products= this.allProducts.slice(this.lastProductIndex,this.lastProductIndex+2);
            this.lastProductIndex+=2 ;
            this.firstProductIndex+=2 ;
            }else{
              this.products= this.allProducts.slice(this.allProducts.length-2,this.allProducts.length)
              this.lastProductIndex= this.allProducts.length-1 ;
              this.firstProductIndex= this.lastProductIndex-2 ;
            }}
            else{
              //row of 1
              if(this.allProducts[this.lastProductIndex+1]){
                this.products= this.allProducts.slice(this.lastProductIndex,this.lastProductIndex+1);
                this.lastProductIndex+=1 ;
                this.firstProductIndex+=1 ;
                }else{
                  this.products= this.allProducts.slice(this.allProducts.length-1,this.allProducts.length)
                  this.lastProductIndex= this.allProducts.length-1 ;
                  this.firstProductIndex= this.lastProductIndex ;
                }
            }
        }

  }

  onLeftArrow(){
    console.log(this.rowOfTwo)
    console.log(this.rowOfOne)
    if(!this.rowOfTwo && !this.rowOfOne){
      // row of 4
      if(this.allProducts[this.firstProductIndex-4]){
        this.products= this.allProducts.slice(this.firstProductIndex-4,this.lastProductIndex-4)
        this.firstProductIndex-=4 ;
        this.lastProductIndex-=4 ;
      }else{
        this.products= this.allProducts.slice(0,4)
        this.firstProductIndex=0 ;
        this.lastProductIndex=3 ;
      }
    }else{
      if(!this.rowOfOne){
        // row of 2
        if(this.allProducts[this.firstProductIndex-2]){
          this.products= this.allProducts.slice(this.firstProductIndex-2,this.lastProductIndex-2)
          this.firstProductIndex-=2 ;
          this.lastProductIndex-=2 ;
        }else{
          this.products= this.allProducts.slice(0,2)
          this.firstProductIndex=0 ;
          this.lastProductIndex=1 ;
        }
      }else{
        //row of 1
        if(this.allProducts[this.firstProductIndex-1]){

          this.products= this.allProducts.slice(this.firstProductIndex-1,this.lastProductIndex)
          this.firstProductIndex-=1 ;
          this.lastProductIndex-=1 ;
        }else{
          this.products= this.allProducts.slice(0,1)
          this.firstProductIndex=0 ;
          this.lastProductIndex=0 ;
        }
        }
    }

  }

}
