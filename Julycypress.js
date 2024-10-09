//variable types : 

//var => redeclare ,reassign
//let => it can't redeclare , reassign
//const => can't redeclare and reassign 

//datatypes : 
//primitive datatypes 
//string
//number
//boolean
//undefined
//null

//non primitive datatypes 
//array 
//object 

//operators : 
//arithmetic
//assignment 
//logical
//comparsion
//strict
//ternary

//FUnction
//function statement or declaration 

// function box(x){
//      return  x
// }
// //first method
// var newbox = box(10)
// console.log(newbox);

// //second method
// console.log(box(1000));

//function expression :

// var fn = function(){ //anonymous function
//      console.log("im function expression");
// }
// fn()

// //first Class function : passing the one  function  to another function arguments is called firstclass function

// function add(x){
//     return x
// }
// function addedval(fn){        //fn = function add(x){return x}
//      console.log(fn(5));
// }
// addedval(add)

//immediate invoke function : it is used to call and execute function fastly.

//first way
// var iife = (function(x){
//      console.log(x);
// })(10)

// //second way : it will work when there is no code exist in the page

// (function(y){
//      console.log(y);
// })("javascript")

//arrow function :

//variablt type variable name = () => {   }

// https://meet.google.com/eac-obah-dgx

//task :
//para and arguments return keyword

//Gec and call stack
//Global Execution Context :

//Hoisting [important topic]

//  console.log(a);
//  const a = 10
//  console.log(a);

// var fn = function(x){
//     console.log("hello"+x+"lad");
// }
// fn("goodmorning")

//Loop:

//forloop :

//syntax :

//for(initalization ; condition ; iteration[increment / decrement]){

//}
// console.log("increment loop");
// for(var i = 0 ; i<5 ; i++){
//     console.log(i);
// }

//step 1 : i = 0  => 0<5[true] => print : 0 => 0++ = 0+1 => 1
//step 2 : i = 1 => 1<5[true] => print : 1 => 1++ = 1+1 => 2
//step 3 : i = 2 => 2<5[true] => print : 2 => 2++ = 2+1 => 3
//step 4 : i = 3 => 3<5[true] => print : 3 => 3++ = 3+1 => 4
//step 5 : i = 4 => 4<5[true] => print : 4 => 4++ = 4+1 => 5
//step 6 : i = 5 => 5<5[false] => loop end

// console.log("Decrement loop");
// for(var i = 5 ; i>=0 ; i--){
//     console.log(i);
// }

//step 1 :  i = 5 => 5>=0 [true] => print : 5 => 5-- => 5-1 =>4
//step 2 :  i = 4 => 4>=0 [true] => print : 4 => 4-- => 4-1 =>3
//step 3 :  i = 3 => 3>=0 [true] => print : 3 => 3-- => 3-1 =>2
//step 4 :  i = 2 => 2>=0 [true] => print :2 => 2-- => 2-1 => 1
//step 5 :  i = 1 => 1>=0 [true] => print : 1 => 1-- => 1-1 => 0
//step 6 :  i = 0 => 0>=0 [true] => print : 0 => 0-- => 0-1 => -1
//step 7 : i = -1 => -1>0 [false] => loop end

// console.log("string loop");
// var str = "javascript"
// for(var i = 0 ; i<str.length; i++){
//      console.log(str[i]);
// }

//step 1 : i =0 => 0<10[true] => str[i] =>str[0]=> print : j =>0++ => 1
//step 2 : i =1 => 1<10[true] => str[i] =>str[1]=> print : a => 1++ =>2
//step 3 : i =2 => 2<10[true] => str[i] => str[2] =>  print :v => 2++ => 3

//javascript
//01234

// var store = " "
// for(var i = 0 ; i<5 ;i++){
//     store += i
//     console.log(store);
// }
// console.log(store);

// console.log("string loop");
// var str = "javascript"
// for(var i = 0 ; i<str.length; i++){
//      console.log(str[i]);
// }

// var str = "annanagar"
// for(var i = str.length-1; i>=0 ; i-- ){
//     console.log(str[i])
// }

///  0 to 10 => 55

//while loop : entry level condition checking loop

//   var counter = 0    // initalization
//   while(counter<5){   //conditon
//     console.log(counter); // print
//     counter++;  //iteration
//   }

//   var reversecount = 5
//   while(reversecount>=0){
//     console.log(reversecount);
//     reversecount--
//      }

//do-while loop :

// var docounter = 5 //initalization
// do{
//     console.log(docounter); //print
//     docounter++
// }while(docounter<5) //false

//if else :

// var age = 1000
// if(age>=18 && age<=70){ //false
//       console.log("he is eligible to vote");

// }else{
//     console.log("he is not eligible to vote");

// }

//else if :

// var mark = 49;
// if (mark >= 90 &&mark <=  100) { //false
//   console.log("GradeA");
// } else if (mark >= 80) { //false
//   console.log("Grade B");
// } else if (mark >= 70) { //false
//   console.log("Grade C");
// } else if (mark >= 60) { //false
//   console.log("Grade D");
// } else if (mark >= 50) { //false
//   console.log("Grade E");
// } else {
//   console.log("Fail");
// }

//do while loop

//forloop => 10 to 20 => odd numbers => if

// for(var i = 10 ; i<=20 ; i++){
//     if(i%2 == 0){
//         console.log(i); //0 //2

//     }
// }

//share auto => 8 => "auto will move "
//less than => 8 => "it will wait for passengers"
//greater than => 8 => "it will drop the passengers"

//function :
////A function statement in JavaScript is used to define a named
//function with optional parameters and a body of code to execute when the function is called .

// function statement or declaration :
//function expression :
// Immediate invoke function
//first class function
//arrow  function

//// function statement or declaration :

//syntax :

//function variablename or refname() {

//}

// function box(x){ //parameter
//     console.log(x);

// }
// box(90) //arguments

// var x = 10
// console.log(x);

//array :

// //push
// var provstore = ["vijay", "hari", "gopal", "venkat"];
// provstore.push("sabari");
// console.log(provstore);

//  provstore.pop()
//  console.log(provstore);

// // //unshift : to add the value in front of the array

// var ap = ["vijay", "hari", "gopal", "venkat"];

// ap.unshift("jai");

// console.log(ap);

// //shift
// ap.shift(); // to remove the value in front of the array

// console.log(ap);

// //concat :

// var frutis = ["banana","orange "]
// var morefruits = [" apple","pineapple"]
//  var allfruits = frutis.concat(morefruits)
//  console.log(allfruits);

//  //sort :

//  var num = [8,9,10,7,4,5,3,6,1,2]
//  num.sort((a,b)=>b-a)
//  console.log(num);

//  var stdarr = ["Vijay","anbu","Karthik","hari","Babu"] //=> ASCCI => amercian standard codf
//  stdarr.sort()
//  console.log(stdarr);

//  //split => it will split a string and save it in an array

//  var spl = "hello im javascript"
//  var spliteed = spl.split(" ")
//  console.log(spliteed);

//  //join => join the splitted array and retrun to string
//  var  jn = spliteed.join("-")
//  console.log(jn);

//  //reverse :

//  var  rev = "javascript"
//  var revstr = rev.split("").reverse().join("")
//  console.log(revstr);

//  //slice :

// var sli = ["bird","animal","vegetable","fruits","bike"]

// var slid2 = sli.slice(4)

// console.log(slid2)

// //splice :
// //splice(//index , counter , value )
// //counter[0,1] :

// //[0 => adding values in front of paritcular index]
// //1 => override the values in a particular index

// // var weeks = ["sunday","Monday","wednesday","thursday","saturday"]
// // weeks.splice(2,0,"Tuesday")
// // console.log(weeks);
// // weeks.splice(5,1,"Friday")
// // console.log(weeks);

// //includes
// var inc = "javascript"
// var inc2 = inc.includes("sc")
// console.log(inc2);

// //uppercase :

// var up = "hellogoodmorning"
// var upcase = up.toUpperCase()
// console.log(upcase);

// //Lowercase :

// let lp = "GOODMORNING"
// let lp2 = lp.toLowerCase()
// console.log(lp2);

// //indexof:

// let idx = "trendologies"
// let idx2 = idx.indexOf("o") //first occurence
// console.log(idx2);

// //lastindexof

// let lidx = "trendologies"
// let lidx2 = lidx.lastIndexOf("o")
// console.log(lidx2);

//Object : Collection of key and value pairs

//nested array and object :
// const ofcobj = [{

//     name : "hari",
//     dep : "fullstack developer",
//     salary :  55000,
//     company : "Microsoft",
//     exp : "2Years"

// },

// {

//     name : "harini",
//     dep : "Backend developer",
//     salary :  40000,
//     company : "Microsoft",
//     exp : "2Years",
//     age :22

// },
// {

//     name : "Gopal",
//     dep : "Scrum master",
//     salary :  30000,
//     company : "Microsoft",
//     exp : "3Years"

// },
// {

//     name : "kowsalya",
//     dep : "QA Tester",
//     salary :  70000,
//     company : "Microsoft",
//     exp : "3Years"

// },

// ]

// console.log(ofcobj[1].name);
// console.log(ofcobj[1].age);

// const keys = Object.keys(ofcobj[1])
// console.log(keys);

// const values = Object.values(ofcobj[1])
// console.log(values);

//object destructuring : nested object 3 object 2 index
// const stdobj =[{

//     name : "partha",
//     age : 15,
//     std : "XI",
//     mark : 70
// },

// {
//   name : "kali",
//   age : 16,
//   std : "XII",
//   mark  : 50

// }

// ]

// const{name,age,std,mark} = stdobj[0]

// console.log(name);
// console.log(age);
// console.log(std);
// console.log(mark);

//array destructuring :

// const arr = ["sunday","monday","tuesday","wednesday"]

// const[d1,d2,d3,d4,d5] = arr

// console.log(d1);
// console.log(d2);
// console.log(d3);
// console.log(d4);
// console.log(d5);

//formethods: Advanced version of for loop

//foreach  :
//syntax :
//variable_name.foreach((value,index,acctualarray)=>)

// const std = ["jai","hari","gopal","sowmi","udai"]
//  std.forEach((val,idx,accarr)=>console.log(val,idx,accarr));

//for in  : Task 3 index values

// const pobj = {
//     name : "sankar",
//     age : 50,
//     role : "devops"
// }
//  for(let x in pobj){
//     console.log( x + " : " +pobj[x]);

//  }

//for of :

//  let str = "javascript"
// for(let x of str){
//     console.log(x);

// }

//Map :
//syntax
//.map((value,index,acctualarray)=>)t

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnum = num.map((val, idx, accarr) => accarr * 2);
// console.log(newnum);

// //Filter :

// const filt = num.filter((val, idx, accarr) => val % 2 == 0);
// console.log(filt);

//reduce :

//syntax :
//.reduce((accumalator,value,index,acctualarray))

// const reduce = num.reduce((acc,val,idx,accarr)=>{

//      return acc + idx  //5+1 = 6+2 = 8+3 = 11

// },5)

// console.log(reduce);


//template literals: 

//`${ }`

// let a= "vijay"
// let b = 20000
// console.log(`hello ${a} and the number is ${b}`);

//settimeout: 
//arrowfunction : 
//()=>{}
// setTimeout(()=>{
// console.log("hello im javascript");
// },3000)


//callback :

// function greet(callback){
// console.log(`vijay`)
// callback()
// }

// function saygoodbye(){
//     console.log("Goodbye");
    
// }
// greet(saygoodbye)

// //callback hell

// function task1(callback){
    
//     setTimeout(()=>{
//         console.log("Task1");
//         callback()
//     },4000)
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task2");
//         callback()
//     },2000)
    
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task3");
//         callback()
//     },5000)
    
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log("Task4");
//         callback()
//     },500)
    
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All task completed");
                
//             })
//         })
//     })
// })
//promise : 

//john

function morning(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const morning = true
           if(morning){
            resolve("HE wake up")
           }else{
            reject("he is not wake up")
           }
        },5000)
    })
    
}
function gym(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const gym  = true
           if(gym){
            resolve("he went to gym")
           }else{
            reject("he is not went to gym")
           }
        },2000)
    }) 
}

function office(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const office = false
           if(office){
            resolve("he went to office")
           }else{
            reject("He took leave")
           }      
        },1000)
    })
   
}
//.then() = For Resolve
//.catch()= For Reject

// morning().then(value=>{console.log(value);return gym()})
//         .then(value =>{console.log(value);return office()})
//         .catch(error =>{console.log(error);} )
   
//async & await
// async function resolution(){

//     try{
//         const morno = await morning()
//         console.log(morno);
        
//         const gym2 = await gym()
//         console.log(gym2);
        
//         const ofc = await office()
//         console.log(ofc);
//     }catch(error){
//         console.log(error);
        
//     }

// }
// resolution()

//asyn & await
//Task : Gopal : 
//watercanfill =>5000
//roomclean  =>4000
//trashout  => 3000
//school  => 2000 => false => reason

//Constructor: 

// function Bike(name,model,year){
//          //key         value
//     this.nameofbike = name
//     this.modelofbike = model
//     this.year = year
//     this.details = function(){
//         console.log(`the bike name is ${name} and the model is ${model} and the year is ${year}`);
//     }

// }
// const dukedetails = new Bike("Duke",390,2024)
// dukedetails.details()

// const yamaha = new Bike("Yamaha","RX100",1999)
// console.log(yamaha);


class Studentdetails{

    constructor(name,batch,year){

        this.name = name
        this.batch = batch
        this.year = year

    }

    getdetails(){
        console.log(`the name of the candidate ${this.name} and the batch is ${this.batch} and the year ${this.year}`);     
    }
}

const stddetails = new Studentdetails("naveen","Cypress",2024)
console.log(stddetails);

stddetails.getdetails()

//Task:
//mobile : 5 types









//this :    

// const obj = {
//     name : "jai",
//     age : 25,
//     details : function(){
//         console.log(this.age);
        
//     }
// }

// obj.details()


// const a = "vijay"
// const b = "balaji"
// console.log(`the first name is ${a}
//      and the second name is ${b}`); 

//templateliterals   `${ }`




