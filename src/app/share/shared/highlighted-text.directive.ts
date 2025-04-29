import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]',
  standalone: true
})
export class HighlightedTextDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color= "#eb7d2b";
   }

}
