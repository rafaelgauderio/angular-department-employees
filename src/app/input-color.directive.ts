import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputColor]'
})
export class InputColorDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');
  }
}
