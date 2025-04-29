import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingDirective } from '../share/shared/section-heading.directive';
import { HighlightedTextDirective } from '../share/shared/highlighted-text.directive';
@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule,SectionHeadingDirective,HighlightedTextDirective],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
tech:any=[];

constructor(){
  this.tech =[
    {
    "url":"/assets/img/icons/photoshop-logo.jpg",
    "url2":"/assets/img/icons/figma.jpg",
    "url3":"/assets/img/icons/html5css3.jpg",
    "url4":"/assets/img/icons/boostrap.jpg",
    "url5":"/assets/img/icons/tailwindcss.jpg",
    "url6":"/assets/img/icons/react.jpg",
    "url7":"/assets/img/icons/nodejs.jpg",
    "url8":"/assets/img/icons/mangoDB.jpg",
    "url9":"/assets/img/icons/vue.jpg",
    "url10":"/assets/img/icons/angular.jpg",
    "url11":"/assets/img/icons/laravel.jpg",
    "url12":"/assets/img/icons/firebaseWebAPI.jpg",

    }
  ]
}
}
