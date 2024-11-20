import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() appHighlightOnFocus: string = 'lightBlue';

  constructor(private el: ElementRef) {}

  // Add colour when the element gains focus
  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOnFocus);
  }

  // Remove the colour when the element loses focus
  @HostListener('blur') onBlur() {
    this.highlight('');
  }

  // Apply the background color to the element
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
