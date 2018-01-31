import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string-component.component.html',
  styleUrls: ['./string-component.component.css']
})
export class StringComponentComponent {

  @Input() names: [String];
 

  constructor() { }

  getStrings() {
    return this.names;
  }

  index:number=0;

  outputValue(event){
    this.index=event;
  }

}
