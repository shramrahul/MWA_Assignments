import { Component, OnInit } from '@angular/core';
import { DbService } from '../../service/dbServics'
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'userProfile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscription : Subscription;
  private student;
  private id:number;
  
  constructor( dbService : DbService, activatedRoute: ActivatedRoute) {

      this.subscription= activatedRoute.params.subscribe(
        (param:any)=> this.id= parseInt(param['id'])
      );
      this.student=dbService.getStudentById(this.id);
      
   }

  ngOnInit() {
  }

}
