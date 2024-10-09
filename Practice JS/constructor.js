
//constructor method
//A constructor method in JavaScript is a special function used to create and initialize objects created from a class.
// It sets up initial state and behavior for new instances of the class.

function Car(car,model,year){
   this.car1 = car,
   this.model2 = model,
   this.year = year
    this.getcardetails = function(){
        console.log(`car : ${car}, model : ${model}, year : ${year}`)
    }
}
const newdetail = new Car("audi","A6","2021")
console.log(newdetail);


// class 
//A class is a blueprint for creating objects. 
//It defines the structure and behavior of objects of a particular type.
//Syntax: Classes are declared using the class keyword followed by the class name.


class Student{
    constructor(name,batch,year){
        this.name = name;
        this.batch = batch;
        this.year = year;
 }
 getstddetails(){
    console.log(`the name of the student is ${this.name}
    the batch name is ${this.batch}
    the year is ${this.year}`)
 }
}
const studentone = new Student("nithis","maybatch","2024")
studentone.getstddetails()




// this 
let user = {
    name : "ajay",
    age : 67,
    getinfo : function(){
        console.log(this.age);
    }
}

user.getinfo()
// user.nestedobj.getdet();

// console.log(this.document)


let det = {
    name : "hari",
    age : 34,
    getinfo : function(){
        console.log(this.age);
    }
}


det.getinfo()


function Bike(name,year,model){
    this.name = name,
    this.year = year,
    this.model = model 
    this.getinfo = function(){
        console.log(`the name is ${name} and the model is ${model} and the year is ${year}`);
    }

}

const newbike = new Bike("yamaha",1010,"V3")
newbike.getinfo()


class Employeedetails{
    constructor(name,dep,shift){
        this.name = name
        this.dep = dep
        this.shift = shift
    }
   getdatempdetails(){
    console.log(`the name is${this.name} the dep is ${this.dep}and shift is ${this.shift}`);
   }
}

const emp = new Employeedetails("mani","it","night")
console.log(emp);


