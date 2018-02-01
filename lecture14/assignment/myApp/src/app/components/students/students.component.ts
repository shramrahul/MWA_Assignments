import { Component, OnInit ,Input} from '@angular/core';
import { DbService } from '../../service/dbServics';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})



export class StudentsComponent implements OnInit {

  students;
  
  constructor(dbService: DbService) {
    this.students=dbService.getAllStudents();
    console.log(this.students) 
  }

  ngOnInit() {
    
  }



}
