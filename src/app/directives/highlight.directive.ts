import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('highlighted');
  }

  @HostListener('click')
  toggle() {
    this.el.nativeElement.classList.toggle('highlighted')
  }
}
