import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '../../../material.module';
import { NavbarListComponent } from '../navbar-list/navbar-list.component';
import { Menu } from '../../../menu';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,materialModules,NavbarListComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu: Menu[];
   isScrolled = false;

  constructor(){
    this.menu=[
      {
        nav1:"Home",
        nav2:"About",
        nav5: "ContactUs"
      }
    ]
  }

  // 👇 This will fire every time the user scrolls
  @HostListener('window:scroll', [])
   onWindowScroll() {
    // Check scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 50;
    // Optional: Log it to confirm
    // console.log('Scroll position:', scrollY, 'Scrolled:', this.isScrolled);
  }
 
}
