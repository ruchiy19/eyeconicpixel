import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavhoverbg]',
  standalone: true
})
export class NavhoverbgDirective {

  static selectedElement: HTMLElement | null = null;
  constructor(private el:ElementRef, private renderer:Renderer2) {
    
    
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor= '#C2410C';
    this.el.nativeElement.style.width = "auto";
    // this.el.nativeElement.style.padding = "4px";
    this.el.nativeElement.style.borderRadius = "4px";
   }
   @HostListener('mouseleave') onMouseLeave() {
    if (NavhoverbgDirective.selectedElement !== this.el.nativeElement) {
      this.setBgColor('transparent'); // Reset background color when hover is removed
    }
  }
  @HostListener('click') onClick() {
    // Remove the background color of previously selected element
    if (NavhoverbgDirective.selectedElement) {
      this.renderer.setStyle(NavhoverbgDirective.selectedElement, 'background-color', 'transparent');
    }

    // Set the current element as selected
    NavhoverbgDirective.selectedElement = this.el.nativeElement;

    // Set background color of the clicked element
    this.setBgColor('#C2410C');  // Change to the color you want for selected item
  }
  // Helper method to set background color
  private setBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
