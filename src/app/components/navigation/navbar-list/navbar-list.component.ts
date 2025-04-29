import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Menu } from 'src/app/menu';
import { NavhoverbgDirective } from 'src/app/share/shared/navhoverbg.directive';

@Component({
  selector: 'app-navbar-list',
  standalone: true,
  imports: [CommonModule,RouterLink,NavhoverbgDirective],
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.css']
})
export class NavbarListComponent {
@Input() menu!:Menu;
isMenuOpen=false;
toggleMenu(){
  this.isMenuOpen= !this.isMenuOpen;
  }
}

