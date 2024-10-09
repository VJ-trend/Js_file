//function 
//function statement or declaration .

// function greet(para){
//  console.log("hello"+" "+para+" "+"how are you!");
// }
// greet("vijay")


// function rtn(x){
//     return x
// }
// let retns = rtn(5)
// console.log(retns);


// //function expression.

// let n = function(x){
//     console.log( x)
// }
// n("Jai")


// //arrowfunction .

// //()=>{} -> syntax

// var arrowfn = (x)=>{console.log(x)}
// arrowfn(5)

//Global Execution Context & Callstack
// var a = 10;
// console.log(a);

// function box(){
//     var b = 10
//     console.log(b);
// }
// box()

//hoisting : 
//  const a = 5
// console.log(a);


//Loop
//forloop
//for(initialaiztion , conditoin , increment or decrement)

//  for(let i = 10; i>0 ; i--){
//    console.log(i);  //10 //9
//  }

// const str = ["hello","hi","how are you", "im fine"]

// for(let k = 0 ; k<str.length ; k++){
//    console.log(str[k]); 
// }


// //while loop  => decrement in while loop

// let count = 0
// while(count<5){
//  console.log(count);
//  count++
// }
// console.log("Loop ended") 


// //do while loop
 
// let docounter = 0
// do{
// console.log(docounter);
// docounter++
// }while(docounter<5)

//if else 
//syntax
// let age = 15
// if(age<18){
// console.log("He is below 18");
// }else{
// console.log("He is above 18");
// }


// let mark = 30

// if(mark>=90){
//    console.log("Grade A");
// }else if( mark >= 80){
//  console.log("Grade B");
// }else if(mark >= 70){
//    console.log("grade C");
// }else if(mark >= 60){
//    console.log("Grade D");
// }else if(mark >= 50){
//    console.log("grade E");
// }else{
//    console.log("Fail");
// }

//Shareauto => 6 "Share auto will move"
     //       =>7< "it will drop the peps"
     //       less than 6 " it will wait for peps"

//arraymethods : 

const stdarr = ["sathyaraj","Naresh","kritiga","sandhiya"]

stdarr.push("rachel")

console.log(stdarr); 

const stdarr2 = [ 'sathyaraj', 'Naresh', 'kritiga', 'sandhiya', 'rachel' ]
stdarr2.pop()
console.log(stdarr2);



const ap = [ 'sathyaraj', 'Naresh', 'kritiga', 'sandhiya', 'rachel' ]
ap.unshift("Aruldoss")
console.log(ap);


const ap2 =  [ "aruldoss",'sathyaraj', 'Naresh', 'kritiga', 'sandhiya', 'rachel' ]
ap2.shift()
console.log(ap2);


//concat 

  let frutis = ["apple","orage"]
  let morefruits = frutis.concat("iceapple","Pineapple")
  console.log(morefruits);


  //sort 

  const nums = [1,3,5,7,9,10,6,4,2,8]
  nums.sort((a,b)=>b-a)
  console.log(nums);


  const namesarr = ["Vijay","naresh","Sathyaraj","sandhiya","Kritiga","aruldoss"] //Ascii
  namesarr.sort()
  console.log(namesarr);


  const splitstr = "helloworldhi"
  const newstr = splitstr.split("")
  console.log(newstr);

  const joinstr = newstr.join("")
  console.log(joinstr);


  //slice 

  const fruits2 = ["mango","Orange","banana","apple"]
  console.log( fruits2.slice(2,-1));

  //splice 

  const weeks = ["sunday","Monday","wednesday","friday","saturday"]
  
  weeks.splice(2,0,"Tuesday")

  console.log(weeks); 


  //split


   const arr = "HElloworld"
   const split1 = arr.indexOf(" ")
   console.log(split1);

   //join
   const joinarr = split1.join("-")
   console.log(joinarr);


