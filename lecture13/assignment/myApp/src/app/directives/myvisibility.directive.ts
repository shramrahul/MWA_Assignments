import { Directive,ElementRef, Input, OnInit, Renderer } from '@angular/core';


@Directive({
  selector: '[myvisible]'
})
export class MyvisibilityDirective implements OnInit{

@Input() myvisible: Boolean;

private renderer:Renderer;
private element:ElementRef;
  
constructor(element: ElementRef, renderer: Renderer) {
    this.renderer=renderer;
    this.element=element;
   }
  
ngOnInit():void{
  console.log(typeof this.myvisible);
  if(Boolean(this.myvisible)) {
    this.renderer.setElementStyle(this.element.nativeElement,"display","none");
  }
}

}
