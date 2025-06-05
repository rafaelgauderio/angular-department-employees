import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputColor]',
  exportAs: 'inputColor'
})
export class InputColorDirective {

  @Input() userColor = 'silver';

  @HostBinding('style.backgroundColor') color: string = '';


  @HostListener('focus') withFocus() {
    this.color = this.userColor;
  }

  @HostListener('blur') withoutFocus() {
    this.color = 'transparent';
  }
}
