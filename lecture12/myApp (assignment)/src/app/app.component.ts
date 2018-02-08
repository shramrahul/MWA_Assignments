import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter value={{value}} (outputValue)="outputValue($event)"></app-counter>
  <div style="text-align:center">
    <h1>
      Parent Component value : {{ value }}!
    </h1>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public value: number = 5;
  
  outputValue(event){
    this.value = event;
  }
}
