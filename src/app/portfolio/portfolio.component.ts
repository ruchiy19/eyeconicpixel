import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HighlightedTextDirective } from '../share/shared/highlighted-text.directive';
import { SectionHeadingDirective } from 'src/app/share/shared/section-heading.directive';

export interface portfolioItem {
  thumbImgUrl: string;
  bigImgUrl: string;
  viewPageUrl: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,HttpClientModule,HighlightedTextDirective,SectionHeadingDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  selectedImage: string | null = null;
  apiUrl:string= "/assets/workPortfolio.json"
  portfolioItem: any[]=[];
  filteredItems = this.portfolioItem;
  selectedCategory = 'All';
  constructor( private http:HttpClient){

  }
  getPortofolioItem():void{
    this.http.get<any[]>(this.apiUrl).subscribe((result)=>{
     this.portfolioItem= result;
     this.filteredItems = [...result];
     console.log("mywork",result);
    })
   
  }
  ngOnInit(): void {
    this.getPortofolioItem();
  }
  filterImages(category: string) {
    this.selectedCategory = "category";
    this.filteredItems = category === 'All'
      ? this.portfolioItem
      : this.portfolioItem.filter(image => image.category === category);
  }
  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
