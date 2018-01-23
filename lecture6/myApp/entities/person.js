

class Person {
    constructor(id,name,course,grade) {
        this.id=id;
        this.course=course;
        this.name=name;
        this.grade= grade;  
    }

    getId(){
        return id;
    }

    setId(id){
        this.id=id;
    }

    setName(name){
        this.name=name;
    }

    setCourse(course){
        this.course=course;
    }

    setGrade(grade){
        this.grade=grade;
    }


  }

  module.exports= Person;

  
