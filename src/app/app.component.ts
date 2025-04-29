import { Component,AfterViewInit, ViewChild, ElementRef,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navigation/navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,InnerHeaderComponent,NavbarComponent,ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isHome: boolean = true;  // Renamed variable to avoid conflict with method
  // title = 'eyeconicpixel-new';
  pageTitle: string = '';
  pageSubtitle:string='';
  pageDesc: string = '';
  pageHeaderImg: any;
  aboutImg:string=''
  constructor(private router: Router,private activatedRoute: ActivatedRoute){

  }
  ngAfterViewInit(): void {
    // Start playing the video on load
    this.videoPlayer.nativeElement.play().catch(error => {
      console.error("Autoplay failed:", error);
    });
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return {
            title: route?.snapshot.data['title'],
            subtitle: route?.snapshot.data['subtitle'],
            headerImg: route?.snapshot.data['headerImg'],
            desc:route?.snapshot.data['desc']
          };
          // return route?.snapshot.data['title';'subtitle'];
        })
      )
      .subscribe(({ title, subtitle, headerImg ,desc}) => {
        this.pageSubtitle = subtitle || 'default';
        this.pageHeaderImg = headerImg || 'default';
        this.pageDesc= desc || 'default'
        this.pageTitle = title || 'Default Title';  // Assign page title from route data or use default
        this.isHome = this.router.url === '/';      // Update `isHome` based on the current route
      });
  }
}
