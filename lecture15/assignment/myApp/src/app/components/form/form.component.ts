import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormControl } from '@angular/forms';
import {HttpService} from '../../service/httpService';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private httpService: HttpService) { 
    this.myForm= fb.group({
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'post':new FormControl('',Validators.minLength(10))
    });
  }

  ngOnInit() {
  }

  onSubmit():void{
    console.log(this.myForm.value);
  }

  onGetData(){
      this.httpService.getData().subscribe(
          data=>{
            console.dir(data);
            this.myForm.controls['name'].setValue(data['name']);
            this.myForm.controls['email'].setValue(data['email']);
            this.myForm.controls['post'].setValue(JSON.stringify(data['address']) );
          }
      );
  }

}
