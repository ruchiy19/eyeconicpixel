import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSectionHeading]',
  standalone: true
})
export class SectionHeadingDirective {

  constructor(private el: ElementRef) {
    
    this.el.nativeElement.style.fontSize= '2rem';
    this.el.nativeElement.style.textAlign= 'center';
    this.el.nativeElement.style.lineHeight= '35px';

    this.el.nativeElement.style.marginTop= '15px';

    this.el.nativeElement.style.borderbottom = '1px solid #000000';
   }

}
