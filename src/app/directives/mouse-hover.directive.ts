import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMouseHover]',
  standalone: true
})
export class MouseHoverDirective {
  @Input() appMouseHover = '';

  constructor(private el: ElementRef) {
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appMouseHover || 'lightblue'); // Default color if none is provided
  }

  // On mouse leave, remove the background color
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  //change the background color
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
