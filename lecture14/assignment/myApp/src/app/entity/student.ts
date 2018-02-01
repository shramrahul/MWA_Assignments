export class Student{

    id:number;
    name:String;
    studId:String;
    email:String;

    constructor(id, name, studId, email){
        this.id=id;
        this.name=name;
        this.studId= studId;
        this.email=email;
    }

    getName(){
        return this.name;
    }

}

