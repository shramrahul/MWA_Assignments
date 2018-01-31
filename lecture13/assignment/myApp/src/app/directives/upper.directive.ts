import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  

  constructor(element:ElementRef) { 
    element.nativeElement.style.textTransform="uppercase";
  }

}
