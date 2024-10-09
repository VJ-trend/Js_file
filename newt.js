
// box1()
// //datatypes 
 
// //primitve and non-primitive

// // string = " sdfsdf"
// // number = 2345432
// // boolean = true or false
// // undefined
// // null

// // non primitive 
 
// //object  & array

// // let obj = {
// //      // key : value

// // }

// // let arr = []
// // console.log(arr) 

// //operators : 
// //Arithmetic operator
// //Additon operator:
// var num1 = 5;
// var num2 = 10;
// console.log(num1+num2)

// //substraction opers

// var num3 = 15
// var num4 = 5
// console.log(num3-num4)

// //multiplication

// var num5 = 2 ;
// var num6 = 3 
// console.log(num5*num6)

// //division 

// var num7 = 10
// var num8 = 5
// console.log(num7/num8)

// //modulas or remainder operator %

// var num9 = 203
// var num10 = 10
// console.log(num9%num10);
// //comparsion operator
// //equal to 
// var a = 5;
// var b = a;
// console.log(b)

// //greaterthan operator

// var c = 15
// var d = 20
// console.log(c>d)

// //lesser than

// var e = 5
// var f = 10
// console.log(e<f)

// // greaterthanare equal to 

// // 5>=1 =1 2 3 4 5

// //lesserthan 
//  //1<=5 1 2 3 4 5


// //Assignment operator
// //increment / decrement
// var g = 15
// g--          //g-1
// console.log(g);

// //logical operator

// //&& => and
// // || => or

// //strict operator
  
//     5 == "5" => true
//      5 === "5" ==> false

// //Ternary operator ?


// //condition ? value_true : value_false



//assignment operator
//add
// var a = 5;
// a += 5;
// console.log(a);

// //sub
// var b = 5;
// b -= 5;
// console.log(b);

//Rules of js : 
 
//camel case => first letter should be in small letters
//pascal case => first letter should be in capital

// ternary operator:


//condition ? value_true : value_false =>syntax


// var height = 180//person height

// var limit = (height>165) ? "he is eligible to ride" : "he is not eligible to ride"

// console.log(limit)



//copy by value and copy by reference

//copy by value = > primitive datatype

// var a = 10 //
// var b = a 
// var b = 15//
// console.log(a)
// console.log(b)

// //copy by reference => non primitive datatype

// var objA = {value : 10}
// var objB = {value : 20}
// objA.value = 30
// objB = objA
// console.log(objA)
// console.log(objB)


//Functions

 //function name(){

 //} => syntax

 // function return

// function name(a,b){
//     return a+b
// }
// var newfn = name(10,10);
// console.log(newfn);


// //function expression 

// var fe = function (nam,time){
//      return "Hello!"+nam+"GoodMorning"+"and the time is" + time
// }
// fe()
// var newfe = fe("vijay",11.20)
// console.log(newfe)


// function name(nam){
    
//     console.log(nam)
// }
// name("trendnologies")


// function rfn(pars){
//     return pars
// }
// var gettingrn = rfn("vijay")//argument invoke
// console.log(gettingrn)

//num1 ,num2 ==> return *mu

// function multi(num1,num2){
//   return num1*num2
// }
// var multiplynum = multi(10,5)
// console.log(multiplynum)


// function name(){

//     let limit = 
// }
//condition

// function ap(age){
//     let limit = (age>18)?"he is eligible":"he is not eligible"
//     console.log(limit)
// }
// ap(34)

//function expression :

// var fe = function (){//anonymous function
//     console.log("hii im function expression")
// }
// fe()  



//First class function

// function returnfn(pars){
//     return pars*pars
// }
// function addedfn(newfn){   // newfn =returnfn
//     console.log("the addedval is :",newfn(4))
// }
// addedfn(returnfn)


//Immediately invoke function - IIFC

// var nam1 = (function(par){
//     console.log(par)
// })(15)

// var name1 = ( function(par1){
//     console.log(par1)
// })(5)

// (function nam(p){
//     console.log(p*2)
// })(5)


//Arrow function 

//variable_type variable_name = () => {} => Syntax for arrow function.

// let newarrow = (num1,num2) => {console.log(num1+num2)}
// newarrow(5,5)

// let retarrow = (pars) => { return pars *2 }
// console.log(retarrow(6))



///Global Execution Context : 


//Callstack : 


//Hoisting : 

// console.log(a)
// var a = 10; 
// console.log(a);




//LOOP

//for(initialization ; condition ; increment or decrement); => syntax
// for(var i = 10 ; i>0 ;i--){
//     console.log(i);
// }4


// for(i=1 ; i<10 ; i++){
//   console.log(i*2);
// }
             
// var name1 = "trends" 
// var empty = " "
// for(var i=0 ;i<name1.length ; i++){
//      empty += name1[i]
//      console.log(empty);
// }
// console.log(empty);

// var reversestr = "Arun"
// var revstore = " "
// for(var i = reversestr.length-1; i>=0 ; i--){
//        revstore += reversestr[i]
// }
// console.log(revstore);





// // //while loop 

// // var counter = 5

// // while(counter>0){
// //     console.log("the while counter is : ",counter)
// //     counter--
// // }
// // console.log("Loop ended");


// var num = 5
// do{
//   console.log(num)
//   num++
// }while(num<5)


//   //if else : Conditional statement
//   var age = 15;

//   if ( age <= 18) {
//     console.log("He is not eligible to vote");
//   } else {
//     console.log("He is eligible to vote");
//   }

// var grade = 65
// if(grade >= 90){
//   console.log("THe Grade is A");
// }else if(grade >=80){
//   console.log("The grade is B");
// }else if(grade >=70){
//   console.log("The grade is C");
// }else if(grade >= 60){
//   console.log("The grade is D");
// }else if(grade >=50){
//   console.log("The grade is E");
// }else{
//   console.log("Fail");
// }


// //task 
// //function
//  //sharAuto = > 6 

//  // 6 => share auto will move 
//  // 6 => it will wait for passengers
//  // 7 => "drop the passengers"


//  //Global scope and Local scope


//  //Local scope
// // function new2(){
// //   let a = 10 ;
// // }
// // console.log(a);
// // new2();

// //arraymethods : 

// //push
// const arrname = ["Vijay","Ajith","Surya"]
// console.log(arrname)
// arrname.push("Hari")
// arrname.push("Gopal")
// console.log(arrname);
 
// //pop 
// const removearr = arrname
// removearr.pop()
// console.log(removearr);


// //unshift 

// const ap = ["Tiger","lion","elephant"]
// console.log(ap);
// ap.unshift("bear")
// console.log(ap);

// //shift

// const removeap = ap
// ap.shift()
// console.log(removeap);

// //concat 

// const frutis = ["Apple","Banana"]
// const morefruits = frutis.concat("Fig","promo")
// console.log(morefruits);

// const number = [1,2,3,4,5]
// const number1 = [6,7,8,9,10,11]
// const combinednumber = number.concat(number1)
// console.log(combinednumber);

// //sort

// const sortarr = [1,7,9,3,5,2,6,8,10,4]
// sortarr.sort((a,b)=> b-a) // descending
// console.log(sortarr);


// const newnames = ["Vijay","arun","Nithish","gopal"] //ASCII
// newnames.sort()
// console.log(newnames);//arun , gopal , Nithish ,Vijay


//split : 

// const newname = "Hello World!"
// const split = newname.split(" ")
// console.log(split);

// const joins = split.join(",");
// console.log(joins);

// //slice
// const birds = ["parrot","pigeon","eagle","vuluture"]
// console.log(birds.slice(1,-2))

// //splice 

// const weeks = ["sunday","Monday","Wednesday","Friday","saturday"]

// weeks.splice(2,1,"Tuesday")
// weeks.splice(3,0,"Thursday")

// console.log(weeks)

// //Reverse 

// const rev = "hellojs"

// const reversnam = rev.split("").reverse().join("")

// console.log(reversnam);


// //touppercase 

// const uppers = "hello im js"

// const upperval = uppers.toUpperCase();
// console.log(upperval);

// //toLowercase 

// const lowers = "HELLO IM UPPER CONVERT ME TO LOWER"

// const lowerval = lowers.toLowerCase();
// console.log(lowerval);


// //include  

// const theval = "hi iam working"
// const findval = theval.includes("hello")
// console.log(findval);


// //indexof 

// const indices = "hello iam good"

// const checkin = indices.indexOf("o")

// console.log(checkin); 


// //lastindexof

// const lastin = "hello iam good"

// const lastcheck = lastin.lastIndexOf("o")

// console.log(lastcheck);s


//while loop 

// let count = 5;
// while(count<5){
//     console.log(count);
//      count++
// }
// console.log("Loop Ended");


// //do while
// let docount = 5
// do{
//   console.log(docount)
//   docount++
// }while(docount<5)




// //if else

// let age = 20;
// if(age<=18){
//     console.log("HE is below 18");
// }else{
//     console.log("HE is above 18");
// }


// let mark = 49
// if(mark >= 90){
//     console.log("A grade");
// }else if(mark >= 80){
//     console.log("B grade");
// }else if(mark >= 70){
//     console.log("C grade");
// }else if(mark >= 60){
//     console.log("D grade");
// }else if(mark >= 50){
//    console.log("Just pass");
// }else{
//     console.log("Fail");
// }


// //array methods 

// //push 

// const provisoinal = ["Archana","Rachel","Arun","Aishwarya"]
// provisoinal.push("vijay")
// console.log(provisoinal);

// //pop 

// const ap = ["jai","hema","hari","gopal"]
// ap.pop()
// console.log(ap);

// //unshift 

// const newvip = ["jai","hema","hari","gopal","sankar"]
// newvip.unshift("nandy")
// console.log(newvip);


// //shift 


// const newvip2= ["jai","hema","hari","gopal","sankar"]
// newvip2.shift();
// console.log(newvip2);


//Object
// const studentarr = [{  
//     //key : value
//      name  : "arun",
//      role : "Tester",
//      company : "Amazon",
//      year : 2024
// },

// {  
//     //key : value
//      name  : "Hamitha",
//      role : "Senior Tester",
//      company : "proxima",
//      year : 2024
// },

// {  
//     //key : value
//      name  : "Aishwarya",
//      role : "Blockchain Developer",
//      company : "Zoho",
//      year : 2024
// },

// {  
//     //key : value
//      name  : "Archana", //rachel
//      role : "UI / Ux",
//      company : "Microsoft",
//      year : 2024  //2026
// },

// {  
//     //key : value
//      name  : "Vijay",   // vipin
//      role : "Full stack Developer",
//      company : "salesforce",
//      year : 2024 //2025
// }

// ]


// const keys = Object.keys(studentarr[4])
// console.log(keys);

// const values = Object.values(studentarr[4])
// console.log(values);


// //Object destructuring 


// const newobj = [ {
//     name : "arumugam",
//     age : 45,
//     gender : "Male",
//     mentor : false         // 5 object =>  2
// },
 
// {
//     name : "Murugan",
//     age : 55,
//     gender : "Male",
//     mentor : true

// },

// {
//     name : "Emad",
//     age : 75,
//     gender : "Male",
//     mentor : false

// },

// ]

// const{name,age,gender,mentor}= newobj[2]

// console.log("The name is =>",name);
// console.log("The age is =>",age)
// console.log("the gender is =>",gender);
// console.log("mentor is =>",mentor);



// //Array destructuring
// const newarr = ["icecream","chocolate","nuts"]

// const[fooditem1,fooditem2,fooditem3]= newarr

// console.log("the first index is :",fooditem1);
// console.log("the second index is :",fooditem2);
// console.log("the third index is :",fooditem3);

// //short hand property

// var  employee = "Gopal"
// var experience = 5 


// const newemp = {
//       //keyname   =   valuename
//      employee,
//     experience 
// }

// console.log(newemp);


//for methods 

//for each , for in , for of 

// //for each 

// const studentarr = ["hari","muthu","selva","aravind"]

// //foreach((Value,index ,acctual array)=>log) 

// studentarr.forEach((val,idx,accarr)=>console.log(accarr))


// //for in  => object iterate

// const arrobj = {
//     name : "sathya",
//     age : 24,
//     height : 171.6
// }

// for(let k in arrobj){
//     console.log( k +":"+arrobj[k] );
// }

// //for of => 
// var string = "string"
// for(let str of string){
//     console.log(str);
// }

//Map,Filter,Reduce

//map

// const nums = [1,2,3,4,5,6,7,8]
// nums.map((val,idx,accarr)=>console.log(val*2))


// //filter

// const filtnum = nums.filter((val,idx,accarr)=> val%2 !== 0)
// console.log(filtnum);


// //reduce  => 

//     const reducenum = nums.reduce((acc,val,idx,accarr)=>{
//          return acc + idx
//     },5)
//  console.log(reducenum);


// //Fuction factory method 

// function cardetails(name,model,year){
//      return{
//            getcarinfo : function(){
//                console.log(`the car name is ${name}amd the model is ${model} and the year is ${year}`);
//            }
//      }
// }

// let getdetails = cardetails("bmw","r4","2020")
// getdetails.getcarinfo()


//  //constructor 

//  function Bike(name,model,age){
//      this.name = name,
//      this.model = model,
//      this.age1 = age,
//      this.getdetais2 = function(){
//           console.log(`${name},${model},${age}`);
//      }
//  }
//  var getdetaiils = new Bike("Duke","2020","20")
// console.log(getdetaiils);



// //Class 

// class Student{
//      constructor(name,age,year){
//           this.name = name
//           this.age = age
//           this.year = year
//      }
// getstudentdetails(){
//      console.log(`the name of the student is ${this.name}
//           the batch name is ${this.age}
//           the year is ${this.year}`)
// }
// }
// const student = new Student("nithish","Maybatch","2020")
// console.log(student);
// student.getstudentdetails()


// const newarr = {
//      name : "vijay",
//      age : 24,
//      getinfo : function(){
//           console.log(this.name);
//      }
// }

// newarr.getinfo()


// var a = 10 //redeclare
//  var   a = 5 // reassign
// console.log(a);


// let b = 80  //  it can't redeclare
//   b = 10  // reassign
// console.log(b);
 
// const c = 10
// console.log(c);


//GEC and Callstack : 


//Hoisting : 

//  var a = 10
// console.log(a);


//Loops 
//for
 // for(initalization ; condition ; iteration [increment or decrement])

  

//  for(let i = 10 ; i>=0 ; i--){
//      console.log(i);
//  }

// //while => decrement
// let count = 0
// while(count<5){
//      console.log(count);
//      count++
// }
// console.log("Loop Ended");

// //do while 
// let docounter = 5
// do{
//      console.log(docounter)
//      docounter++

// }while(docounter<5)


// //if else => 

//      let age = 90
//      if(age>=18 || age <80){
//           console.log("HE is eligible to vote");
//      }else{
//           console.log("He is  not eligible to vote");
//      }

// let mark = 49
// if(mark >= 90){
//      console.log("Grade A");
// }else if(mark >= 80){
//      console.log("Grade B");
// }else if(mark >= 70){
//      console.log("Grade C");
// }else if(mark >= 60){
//      console.log("Grade D");
// }else if(mark >= 50){
//      console.log("Grade E");
// }else{
//      console.log("Fail");
// }


// //Array methods : 


// const provisionalstore = ["chocolate","Biscuits","Nuts"]
// provisionalstore.push("Softdrinks")
// console.log(provisionalstore);


// //pop 

// const newprovisional = provisionalstore
// newprovisional.pop()
// console.log(newprovisional);


// //unshift 

// const ap = ["vinay","jai","archana","asishwarya"]
// ap.unshift("tamil")
// console.log(ap);


// const ap2 = ap
// ap2.shift()
// console.log(ap2);

// //concat : 

// const frutis = ["apple","mango","kiwi"]
// const morefruits = frutis.concat("iceapple","pineapple")
// console.log(morefruits);

// //sort 

// const number = [1,3,5,4,2,7,9,6,8,10]
// const newsort = number.sort((a,b)=>a-b)
// console.log(newsort);


// const newarr = ["Vijay","ajith","Tamil","chidamvaram","arunachalam"] // ASCCI
// newarr.sort()
// console.log(newarr);


// //slice 

//  const stdarr = ["Vijay","ajith","Tamil","chidamvaram","arunachalam"]

//  console.log(stdarr.slice(2,-1));

// //splice  


// const weeks = ["sunday","monday","wednesday","Friday","saturday"]
// weeks.splice(2,0,"Tuesday")
// weeks.splice(4,0,"Thursday")
// console.log(weeks);


// //Reverse 
 
// const  str = "hello world!";
// const reversestr = str.split("").reverse().join("");
// console.log(reversestr);


// //includes

// const newstd = "javaScript"
// const incstd = newstd.includes("")
// console.log(incstd); 

//  //uppercase 

// const upper = "java"
// const chngup = upper.toUpperCase();
// console.log(chngup);

// //Lowercase 

// const lower = "JAVA"
// const chnglow = lower.toLowerCase();
// console.log(chnglow);


// //indexof 

//  const nums = "hello"
//  const idx = nums.indexOf("e")
// console.log(idx);


//Object 
//  const stdobj = [  
//      {
//       name : "hari",
//       age : 24,
//       batch : "Cypress",
//       student : true
//  },

//  {
//      name : "gopal",
//      age : 22,
//      batch : "selenium",
//      student : true
// },

// {
//      name : "tamil",
//      age :  15,
//      batch : "Cypress",
//      student : true
// },

// {
//      name : "aruldoss",
//      age : 20,
//      batch : "Bigdata",
//      student : true
// }
// ]

// stdobj[3].name = "naresh"
// console.log(stdobj[3]);

//object destructuring

//  const stdobj = {
//      name  :  "hari",
//      age : 15 ,
//      bgrp : "o+"
//  }

// const {name,age,bgrp} = stdobj 
// console.log(name);
// console.log(age);
// console.log(bgrp);


// //Array destructuring
// const frutis = ["mango","apple","banana"]
// const[fruits1,fruits2,fruits3,fruits4] = frutis
// console.log(fruits1);
// console.log(fruits4);



//short hand property 

// const name = "jabar"
// const age = 45  

// const newobj = {
//      name ,
//      age  
// }

// console.log(newobj);
  
//Template literals  => ${ } => syntax
 
// const name = "vijay"
// const dep = "IT"
//      console.log(`the name is ${name}the department is ${dep}`); 



// const newobj = [
     
//    {
//       name : "jai",
//       age : 55
//    },
  
//    {
//      name : "arul",
//      age : 66
//    }
// ]

// var {name , age } = newobj[1]
// console.log(name);
// console.log(age);
 
// //for methods 

//  //foreach => array spectate 

//    const stdarr = ["gopal","srini","arul","venkat"] 
//      //syntax foreach 
//     //   foreach((value,index,acctualarray)=>{})

//      stdarr.forEach((value,idx,acctualarray)=>console.log(acctualarray))


//  //forin   => object iterate  

//  const obj = {
//      name : "jai",
//      batch : "Cypress"
//  }
// for(let ban in obj) {
//      console.log( ban +":"+obj[ban]);
// }
  
//  //for of  =>  it will Iterate the  string or array 

//   let str = "Trends"
// for(let k of str){
//      console.log(k);
// }

// let str2 = ["good","bad","wonderful"]
// for(let v of str2){
//      console.log(v);
// }

//Map :  

// const number = [1,2,3,4,5,6,7,8,9,10] //55+5

//  // .map((value,index,acctualarray))

// const newmap = number.map((val,idx,arr)=>idx-1)
// console.log(newmap);
// //Filter :  

//  const filters = number.filter((val,idx,arr)=>val%2 === 0)
//  console.log(filters);


// //Reduce : 
// //syntax
// //.reduce((accumulator,value,index,acctualarray))

// const reducen = number.reduce((acc,val,idx,accarr)=>{
//     return acc - val   //6+
// },5)
// console.log(reducen);

//settime out
// setTimeout(()=>{
// console.log("hello world");
// },3000)



//this 
// const obj = {
//     name : "vijay",
//      age : 45,
//     meth : function(){
//         console.log(this.name);
//     }
// }

// obj.meth()

//Function Factory method 


// function car(name,model,year){
//    return{

//          infocar : function(){
//          console.log(`the car name is ${name} and the model is ${model} and the year is ${year}`);
//          }

//    }

// }

// const cardet = car("audi","A6",2020)
// cardet.infocar()

//Constructor : 

// function Car(name,model,year){
//      this.name = name,
//      this.model = model ,
//      this.year = year,
//      this.infocar = function(){
//         console.log(`${name},${model},${year}`);
//      }
// }

// const cardet = new Car("audi","a6",2909)
// cardet.infocar()


class Student{
   constructor(name,age,year){
    this.name = name,
    this. age = age,
    this.year = year
   }
   infometh(){
    console.log(`the name is ${this.name} and the age ${this.age} ${this.year}`);
   }
    
}

const newstd = new Student("nithis",45,2929)
console.log(newstd);