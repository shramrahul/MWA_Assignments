import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import{FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import {HttpService} from './service/httpService'
import {  HttpClientModule } from "@angular/common/http";


const routes :Routes =[
  {path:'getForm', component:FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
