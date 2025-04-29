import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingDirective } from '../share/shared/section-heading.directive';
import { HighlightedTextDirective } from '../share/shared/highlighted-text.directive';
@Component({
  selector: 'app-howitisgoing',
  standalone: true,
  imports: [CommonModule,HighlightedTextDirective,SectionHeadingDirective],
  templateUrl: './howitisgoing.component.html',
  styleUrls: ['./howitisgoing.component.css']
})
export class HowitisgoingComponent {

}
