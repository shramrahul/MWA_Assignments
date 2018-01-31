import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringComponentComponent } from './components/string-component/string-component.component';
import { UpperDirective } from './directives/upper.directive';
import { MyvisibilityDirective } from './directives/myvisibility.directive';
import { MycolorDirective } from './directives/mycolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    StringComponentComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
