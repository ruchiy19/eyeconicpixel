import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navigation/navbar/navbar.component';
import { FeaturesComponent } from 'src/app/features/features.component';
import { HowitisgoingComponent } from 'src/app/howitisgoing/howitisgoing.component';
import { TechnologyComponent } from 'src/app/technology/technology.component';
import {NgForm } from '@angular/forms';
import { HighlightedTextDirective } from 'src/app/share/shared/highlighted-text.directive';
import { RouterLink } from '@angular/router';
import { Router,NavigationEnd } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TechnologyComponent, FeaturesComponent, HowitisgoingComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  aboutImg="assets/img/working-girl.jpg";
  @ViewChild(ContactsComponent) contactsComponent?: ContactsComponent;
  isHomePage: boolean = false;  // Declare isHomePage

  ngAfterViewInit() {
    if (this.contactsComponent) {
      console.log('ContactsComponent is available:', this.contactsComponent);
    } else {
      console.error('ContactsComponent is not initialized.');
    }
  }

//  onSubmit(heroForm:NgForm){
//   console.log(heroForm.value);
//  }


}
