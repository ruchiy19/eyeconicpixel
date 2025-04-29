import { AfterViewInit, Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from 'src/app/material.module';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule,RouterLink,materialModules],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit{
  @ViewChild('videoPlayer', { static: false }) videoPlayer!:ElementRef;
 imgDesc="Innovative Web Solutions for a Connected World";
 subtext=" We specialize in designing and developing user-friendly, visually stunning, and performance-driven websites tailored to your business needs";
  constructor(){
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // Autoplay the video after the view is initialized
    this.videoPlayer.nativeElement.play();
  }
}