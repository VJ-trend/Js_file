// //object destructuring


// //destructuring -Object destructuring in JavaScript allows you to extract multiple properties 
// //from an object and assign them to variables in a concise and readable way,
// // enhancing code readability and reducing repetition.

// const obj =[{
//     name : "suryaa",
//     age : 56,
//     position : "manager",
// },
// {
//     name : "dhana",
//     age : 99,
//     position : "sales executive"
// }]

// const{name,age,position} = obj[1] 
// console.log("the name is ->",name)
// console.log("the age is ->",age)
// // array destucturing 

// //Array destructuring in JavaScript allows you to extract values from arrays and assign them to variables 
// //in a concise way, facilitating manipulation and usage of array elements
// // without directly accessing them by index.

// // const newarr = ["veges","fruits","seafoods"]
// // const[char1,char2,char3]= newarr
// // console.log(char1);
// // console.log(char2)
// // console.log(char3)

// // const arr = ["mango","apple","banana"]

// // const[fruit1,fruit2,fruit3]= arr
// // console.log(fruit1)
// // console.log(fruit2)
// // console.log(fruit3)

// //global and local or block scope
// //Global scope :

// //Global scope in JavaScript refers to the accessibility of variables or functions throughout the entire script,
// // regardless of where they are declared. Variables declared outside of any function 
// //or block have global scope and can be accessed and modified from anywhere in the script.

// const username = "hello im printed"
// function un(){
//     console.log(username)
// }
//  un()

//  //local scope or block scope : 

//  function fn(){
//     const username2 = "Hi im printed"
//     console.log(username2)
//    }
//    fn()

//    function nn(){
//     const username2 = "Hi im printed"
//     console.log(username2)
// }
// nn()


// First Class Function

// function nums(num){
//     return num*2
// }

// function multplynums(newnum){
//     console.log("The multiplied num is :",newnum(6))
// }
// multplynums(nums)

// function num(num){
//     return num*2
// }
// function multiplynum(fn){
//     console.log("the multiplied num is :",fn(10))
// }
// multiplynum(num)

// let name = "sandy"
// let age = 66
// let number = 78945158


// let shorthand = {
//     name,
//     age,
//     number,
//     getmethod : function(){
//         console.log(`The name is ${name} and ${age} and his ${number}`);
//     }
// }
// shorthand.getmethod()

// let name1= "sandy"
// let greetings = "How are you"
// console.log(`hi ${name1} ${greetings}`)


//Template literals =>

 //Template literals,provide a more convenient and readable way to work with strings in JavaScript.
// They allow you to embed expressions and variables directly into string literals using placeholders,
 // making string interpolation easier. 


//  let name = "harikrishnan"
//  console.log("the name is :   ",name)


//  let name2 = "vijaykrishnan"
//  console.log(`the name is ${name2}`)   //  tilde


//.length 

//  let newchr = "string2"
//  console.log(newchr.length);


//Loops : 

//for loop
// intialization ; condition ; increment => for loop

// for(let i = 0 ; i<=10 ; i++){
//     console.log(i)  // 0 1 2 3 4 5 6 7 8 9 10
// }

//  let char = "string"
//  for(let i = 0 ; i<char.length ; i++){
//     console.log(char[i]) // s t r i n g
//  }


//while 

// while loop
//The while loop repeatedly executes a block of code as long as a specified condition is true.

// let counter = 0
// while(counter<5){
//     console.log("while counter is : ",counter)
//     counter++
// }
// console.log("Loop ended")


//do while

// let i = 0
// do{
//    console.log("do while is printing:",i)
//    i++;
// }while(i<5) 

// array methods :


// //push()
// let newarr = ["cat","cow","hen","horse"]
// console.log(newarr)
// newarr.push("buffalo")
// console.log(newarr)
// //pop
// let newarr2= ["cat","cow","hen","horse"]
// console.log(newarr2)
// newarr2.pop()
// console.log(newarr2)

// //unshift 
// let newarr3= ["cat","cow","hen","horse"]
// newarr3.unshift("Tiger")
// console.log(newarr3);

// //shift 
// let newarr4= ["cat","cow","hen","horse"]
// newarr4.shift()
// console.log(newarr4);


// //concat 

// let vegetables = ["carrot","beetroot"]

// let moreveges = ["cucumber","potato"]

//  console.log(vegetables.concat(moreveges))


//  //sort 

//  const num = [8,9,7,5,6,4,1,2,3] 
//  const sortednumber = num.sort((a,b)=> a-b)
//  console.log(num)


//  //split 
// const sentence = "hi my name is vijay";
// const words = sentence.split(" ");
// console.log(words)

// //join
// const joiningwords = words.join("+");
// console.log(joiningwords);

// //slice

// const animals = ["Tiger","lion","elephant","fox"]
// console.log(animals.slice(2,-1)) 


// //splice '

// const weeks = ["sunday","monday","wednesday","Thursday","friday"]
// weeks.splice(2,1,"Tuesday")
// console.log(weeks)

// // reverse

// const str = "Hello, World!";
// const reversedStr = str.split('').reverse().join("")
// console.log(reversedStr);

// //include 

// const str1 = "Hello, World!";
// const includesWord = str1.includes("H");
// console.log(includesWord); 



// //object : 

// let obj = [
//     {
//     //key : value
//      name : "vijay",
//      age : 10,
//      department : "Testing",
//      it : true
// },
// {
//     //key : value
//      name : "ajay", 
//      age : 10,
//      department : "Testing",
//      it : true
// },
// ]

// let{name : name,age : age,department,it} = obj[0]
// name = "suryaa"
// age = 34

// console.log("the name is ",name)
// console.log("the age is :",age);


// const arr = ["hello","hi","how are you"]

// let[greet1 ,greet2  ,greet3]= arr

// greet1 = "hey"

// greet2 = "bye"

// console.log(greet1);
// console.log(greet2);
// console.log(greet3);

// // short hand property 

// let username = "sanjay"
// let age4 = 34

// let newobj = {
//     username : username,
//     age4 : age4,
//     getinfo : function(){
//         console.log(`my name is ${username} and my age is ${age4}`);
//     }
// }

// newobj.getinfo()


// //function factory method 
// function cardetails(carname, color, model) {
//     return {
//         carname,
//         color,
//         model,
//         getname: function () {
//             console.log(`the car name is ${carname}`);
//         },
//         getcolor: function () {
//             console.log(`the color is ${color}`);
//         },
//         getmodel: function () {
//             console.log(`the model is ${model}`);
//         },
//         getalldetails: function () {
//             console.log(`the car name is ${carname} and the color is ${color} and the model is ${model}`);
//         }
//     };
// }

// const cardetails1 = cardetails("audi", "yellow", "A6");
// cardetails1.getname();
// cardetails1.getcolor();
// cardetails1.getmodel();
// cardetails1.getalldetails(); // Corrected method name here

// //constructor

// function Car(name,model,year){
//     this.name = name,
//     this.model = model,
//     this.year = year,
//     this.getcardetails = function(){
//           console.log(`the car name is ${name},${model} and year is ${year}`)
//     }
// }
// let details = new Car("bmw","zx","2020")
// let details2 = new Car("audi","a9","2030")
// details.getcardetails()
// details2.getcardetails()

// //class 

// class Student {
//     constructor(name,batch,year){
//  this.name = name,
//  this.batch = batch,
//  this.year = year
// }
// getdetailsstd(){
//     console.log(`the name of the student is ${this.name}
//     the age of the student is ${this.batch}
//     the year he enrolled is ${this.year}`);
// }
// }

// let stddetails = new Student("nithis","may","2023")
// stddetails.getdetailsstd()


// class Teacher{
//     constructor(name,sub,year){
//         this.name = name,
//         this.sub = sub,
//         this.year = year
//     }
//     getteacherdetails(){
//         console.log(`the teacher  name is ${this.name}
//         the subject taken is ${this.sub}
//         the year is ${this.year}`)
//     }
// }

// let teachdetais = new Teacher("yamini","english","2020")

// teachdetais.getteacherdetails()

// setTimeout(()=>{
//     console.log("the message will appear in 2 seconds");
// },2000)




//short hand property

// let name = "hari"
// let age = 45
// let dept = "it"

// const stdobj = {
//     name,
//     age ,
//     dept
// }
// console.log(stdobj.name)
// console.log(stdobj.age)
// console.log(stdobj.dept)


//function factory method : 

// function cardetails(name,model,year){

//     return{
//           name,
//           model,
//           year,
//           getcarinfo : function(){
//             console.log(`the car name is ${name}and the model is ${model}and year is ${year}`);
//           }
//     }

// }

// const newcardetails = cardetails("Audi","A6","2020")
// newcardetails.getcarinfo()


//Function : 

//function statement or declaration.   

function name(){
console.log("hello world!")
}
name()

function name2(){
    console.log("hello world2!")
    }
  name2()

//function expression.


let fe = function(){
 console.log(fe)
}
fe()






//first class function 
//arrow function










