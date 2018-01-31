import { Directive, ElementRef, Renderer, HostListener, HostBinding, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective{

  colors=["blue","green","red","black","grey","pink","yellow","indigo","chocolate"];
  @Output() outputValue= new EventEmitter<Number>();

  constructor(private element : ElementRef, private renderer :Renderer) { }

  @HostListener('click') 
  click(){
    // console.log(this.element.nativeElement)
  let index= Math.floor(Math.random()* this.colors.length);
  this.renderer.setElementStyle(this.element.nativeElement,"color",this.colors[index]);
  this.outputValue.emit(index);
  }

}
