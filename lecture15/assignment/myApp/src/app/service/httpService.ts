import { Injectable,EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';


@Injectable()
export class HttpService{
    pushedData= new EventEmitter<String>();

    constructor(private http: HttpClient){}


    pushData(value:String){
        this.pushedData.emit(value);
    }

    getData(){
        let url = 'http://jsonplaceholder.typicode.com/users/1';
     return this.http.get(url) ;
    }


}