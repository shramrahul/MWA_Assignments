import {EventEmitter} from '@angular/core'
import { Injectable } from '@angular/core';
import {Student} from '../entity/student'


@Injectable()
export class DbService{
    pushedData= new EventEmitter<String>();

     students= [
        new Student(1,'Shreeram Chaulagain', "985967", "shreeramchaulagain@gmail.com"),
        new Student(2,'Rupa Chaulagain', "985965", "rupachaulagain@gmail.com"),
        new Student(3,'Salikgram Chaulagain', "985967", "shreeramchaulagain@gmail.com"),
        new Student(4,'jayaram Chaulagain', "985967", "shreeramchaulagain@gmail.com"),
        new Student(5,'sima chand', "985967", "shreeramchaulagain@gmail.com"),
        new Student(6,'Aayush Ghimire', "985967", "shreeramchaulagain@gmail.com"),
        new Student(7,'Motu Patlu', "985967", "shreeramchaulagain@gmail.com")
    ];

    pushData(value:String){
        this.pushedData.emit(value);
    }

    getAllStudents(){
        return this.students;
    }

    getStudentById(id:number){
        for(let student of this.students){
            if(id===student.id)
            return student;
        }
        return null;
    }
}