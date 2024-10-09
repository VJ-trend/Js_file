//function :
//function statement or declaration
//syntax

//function variable_name() {
//code
//}

//parameter and arguments :
// function box(x){ // => parameter
//  console.log(x);
// }
// box("javascript") //argument

function box(x) {
  return x;
}
//first method :
// var rfn = box("Happy")
// console.log(rfn);

//second method

//example function :
// console.log(box("happy2"));

// function amazon(){
//     console.log("amazon site");

// }
// amazon()
// function flipkart(){
//     console.log("flipkart site");
// }
// flipkart()

//arrowfunction :

//syntax:

// variable_type variable_name = ()=>{ }

// let arrfn = (x) =>{return x * 2}
// console.log(arrfn(6));

//arrow function  :

//square values

//Loop :
//for loop

//syntax
//for(iniitalization ;  condition ;  iteration[increment/decrement]){

//}

// for(var i= 0 ; i<=5 ; i++){
//     console.log(i);
// }

//step 1 :  0 => 0<5[true] => log[i] = print : 0
//step 2 :  i =1 => 1<5[true]=> print 1 => iteration 1++ => 1+1 = 2
//step 3  : i =2 => 2<5 [true]=>print 2 => 2++ =>2+1 = 3
//step 4 : i = 3 => 3< 5 [true] => print 3 => 3++ => 3+1 = 4
//step 5 : i = 4 => 4<5[true] =>  print 4 =>  4++ = 4+1 = 5
//step 6 : i = 5 =< 5<=5 [true] => print 5 => 5++ = 5+1 = 6
//step 7 : i = 6 => 6<=5[false] => loop will end

// for(var i = 5 ; i>=0 ; i--){
//     console.log(i);

// }

//string loop :

// let str = "javascript"
// for(var i = 0 ; i<str.length; i++){
//    console.log(str[i]);//j

// }

//reverse string : [1 => interview question]

// let str2 = "javascript"
// for(var i = str2.length-1; i>=0; i--){//7
//       console.log(str2[i]);

// }

//task :  2
// 0 to 10

//while loop :

// var count = 5     // initalization
// while(count > 0){   // condition
//    console.log(count); // print
//    count++  //iteration
//    }

//do while loop

//  let a = 5
// do{
//    console.log(a)
//    a++
// }while(a<5)

//if else :

// let height = 200
// if(height>160 && height<180){
//    console.log("you;re eligible to ride");
// }else{
//    console.log("he is not eligible to ride");

// }

//else if

// let mark = 40
// if(mark>=90 && mark<=100){
//    console.log("Grade A");

// }else if(mark >= 80){
//    console.log("Grade B")

// }else if(mark >= 70){
//    console.log("Grade C");

// }else if(mark >= 60){
//    console.log("Grade D")

// }else if(mark >= 50){
//    console.log("Grade E");

// }else{
//    console.log("Fail")

// }

// //Task :
// //weather => greater than 50 => too hot
// //weather =>30 to 50 => moderate
// //weather =>  0 to 29 => cold
// //weather => less than 0 => no one can survive

// //Array methods:

// //push :

// let arr = ["hari","gopal","venkat","sownya"]
// arr.push("jai","vijay")
// console.log(arr);

// //pop
// arr.pop()

// console.log(arr);

// //unshift:

// let rc = ["hari","gopal","venkat","kali"]
// rc.unshift("jai")
// console.log(rc);

// //shift:

// let rc2 = [ "jai" ,"hari","gopal","venkat","kali"]
// rc2.shift()
// console.log(rc2);

// //concat :

// let fruits = ["apple","pineapple"]
// let morefruits = ["orange","watermelon","kiwi"]
// let veg = ["cucumber","carrot"]
// let cover = fruits.concat(morefruits,veg)
// console.log(cover);

//sort

// let num = [9,8,7,4,6,3,1,2,5,10]
// num.sort((a,b)=>a-b)
// console.log(num);

// let char = ["Balaji","anbu","Hariharan","jana","Vijay"] //ASCII
// char.sort()
// console.log(char);

// //split : string => array
// let spl = "good morning"
// let splitted = spl.split("")
// console.log(splitted);
// //join : array to string
// let jn = splitted.join("")
// console.log(jn);

// //reverse :
// let rev = "javascript"
// let newrev = rev.split("").reverse().join("-")
// console.log(newrev);

//gec[Global Execution Context] and callstack

//Hoisting:

// console.log(a);
// const a = 100
// console.log(a);

//for loop
//
// let str = "javascript";
// let store = " ";

// for (var i = 0; i < str.length; i++) {

//      store += str[i]   // "javscript" += a
//      console.log(store);
// }
// console.log(store);

//Objecct { }:

//collection of Key and values pairs s

// const obj = {
//   //key : value
//   name: "jai",
//   age: 20,
//   dep: "it",
//   batch: 2023,
// };
// //update
// // obj.name = "Balaji"
// // obj.age = 25

// //paritcular value
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.dep);
// console.log(obj.batch);

// //nested array and object :

// const stdobj = [
//   {
//     name: "hari",
//     dep: "IT",
//     role: "Backend developer",
//     exp: 3,
//     company: "HCL",
//   },

//   {
//     name: "Jana",
//     dep: "IT",
//     role: "Qa tester",
//     exp: 4,
//     company: "google",
//   },

//   {
//     name: "harshini",
//     dep: "IT",
//     role: "Qa Engineer",
//     exp: 4,
//     company: "microsoft",
//   },

//   {
//     name: "vineka",
//     dep: "IT",
//     role: "Full stack ",
//     exp: 4,
//     company: "Apple",
//   },
// ];
// console.log(stdobj[1].name);
// console.log(stdobj[3].name);

// console.log(stdobj[1].company);

//index
//let arr = ["hello","hi","howareyou","goodmorning"]

//Task :
//multiple obj  => 1 and 4 => update the values

//keys :

// const obj = [
//   {
//     name: "jai",
//     blood: "o+",
//     dep: "IT",
//   },

//   {
//     name: "hari",
//     blood: "B+",
//     dep: "IT",
//   },

//   {
//     name: "gopal",
//     blood: "A+",
//     dep: "IT",
//   },
// ];

// const key = Object.keys(obj[1]); //for keys
// console.log(key);

// const val = Object.values(obj[1]); //for values
// console.log(val);

// //object destrcturing:

// const obj2 = [{

//    name:"vijay",
//    dep : "IT",
//    role : "Qa tester"
// },

// {

//   name:"jai",
//   dep : "IT",
//   role : "Qa tester"
// },

// {

//   name:"ajay",
//   dep : "IT",
//   role : "Qa tester"
// },
// ]

// const{name,dep,role} = obj2[1]
// console.log(name);
// console.log(dep);
// console.log(role);

// const arr = ["sunday","monday","tuesday","wednesday"]

// const[day1,day2,day3,day4] = arr

// console.log(day1);
// console.log(day2)
// console.log(day3);
// console.log(day4);

//for methods :
//foreach
//variable_name.foreach((value,index,acctualarray)=>)

// const arr = ["chocolate","biscuits","nuts","cosmetics"]
// arr.forEach((val,idx,accarr)=>console.log(accarr))

//for in   :

// const obj = {
//  name : "hari",
//  age : 25,
//  dep : "IT"
// }

// for(let x in obj){
//   console.log(x+":"+obj[x]);

// }

//o/p :
//name : hari
//age : 25
//dep : IT

//for of :

// let str = "javascript"
// for(let x of str){
//   console.log(x);

// }

//MRF :
//Map :
// varaiable_name((value,index,actualarray))
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maps = num.map((val, idx, accarr) => val * 2);
// console.log(maps);

// //Reduce :
// //variable_name((accumulator,value,index,acctual array))

// const reduces = num.reduce((acc, val, idx, accarr) => {
//   return acc + val; // 5 + 1 = 6 + 2 = 8 + 3 = 11
// }, 5);

// console.log(reduces);

// //Filter:
// //variable_name.filter((value,index,accarr))

// const fils = num.filter((val, idx, accarr) => val % 2 != 0);
// console.log(fils);

// var re = 10
// var re2 = 5
// console.log(re%re2);

// function watercan(){
 
//   return  new Promise((resolve,reject)=>{
//      setTimeout(()=>{
       
//       const watercanfilled = true
//       if(watercanfilled){
//           resolve("Water bottel Filled");
//       }else{
//           reject("water can not be filled");
//       }
       
         
//      },2000)
//   })

// }

// function Cleanroom(){

//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{

//       const roomcleaned = true 
//       if(roomcleaned){
//           resolve("room cleaned");
//       }else{

//           reject("room is not cleaned")
//       }
         
//      },3000)
//   })

// }

// function Takeouttrash(){

//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
         
//       const trashout = false
//       if(trashout){
//           resolve("trash is empty")
//       }else{
//           reject("trash is not empty")
//       }
      
         
//      },4000)
//   })
 
// }

// // watercan().then(value=>{console.log(value);return Cleanroom()})
// //         .then(value=>{console.log(value);return Takeouttrash() })
// //         .then(value=>{console.log(value);console.log("Task finisihed");})
// //         .catch(error=>console.log(error))


// //async & await : 


//  async function works(){

// try{
//   const bottlefilled = await watercan()
//   console.log(bottlefilled);
  
//   const  roomcleaned = await Cleanroom()
//   console.log(roomcleaned);

//   const trashout = await Takeouttrash()
//   console.log(trashout);
  
// }catch(error){
//   console.log(error);
  
// }

// }

// works()


//this : 


// const obj = {
//   name : "john",
//   age : 20 , //company
//   details : function(){
//     console.log(this.age);
    
//   }

// }

// console.log(obj.details());


//constructor : 
// function Bike(name,year,model){
//   this.bikename = name
//   this.manufactureyear = year
//   this.model = model
//   this.bikedetails = function(){
//     console.log(`the bike name is ${this.bikename} and manufactureyear is ${this.manufactureyear}
//                model is ${model}`);
//   }
// }
// const details = new Bike("Duke",2020,200)
// console.log(details);
// details.bikedetails()


//class

// class Car{
// constructor(name,year,model){
//  this.carname = name
//  this.year = year,
//  this.model = model
// }
// cardetails(){
//   console.log(`the car name is ${this.carname} and the year is ${this.year} and tthe model is ${this.model}`);
  
// }
// }
// const details = new Car("BMW",2015,"BX6")
// console.log(details);
// details.cardetails()
//task : 
//student details : class 


