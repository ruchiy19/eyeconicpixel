import { Component } from '@angular/core';
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

  constructor(){
    this.menu=[
      {
        nav1:"Home",
        nav3: "Portfolio",
        nav5: "ContactUs"
      }
    ]
  }

 
 
}
