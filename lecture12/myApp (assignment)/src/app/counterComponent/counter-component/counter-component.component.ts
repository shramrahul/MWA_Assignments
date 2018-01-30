import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
 
  <div class="button">
  <h1>Child Component</h1>
    <button (click)= "increase()"> + </button>
    <p>{{value}}</p>
    <button (click)= "decrease()"> - </button>
  </div>
    `,
  styles :["div.button {color:red; display : inline; text-align:center}",
            "button {margin-left : 50%}"
      ]
})
export class CounterComponentComponent {

  @Input() value:number;
  @Output() outputValue = new EventEmitter();

  constructor() { }

  emitMessage() {
    this.outputValue.emit(this.value);
  }

  increase(){
    this.value++;
    this.emitMessage();
  }

  decrease(){
    this.value--;
    this.emitMessage();
  }
}
