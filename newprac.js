
// // //Arithmetic operators 

// // //exponent 

// //  var num = 2 
// //  var num2 = 3
// //  console.log(num+num2)


// //  //increment

// //  var newnum = 5
// // newnum++   
// // console.log(newnum);


// // //decrement 

// // var newnum2 = 6
// // newnum2--
// // console.log(newnum2);



// // //Assigmment operator 

// // var num1 = 5
// // num1 
// // console.log(num1);

// // //comparsion operator

// // //equal

// // var a = 5
// // console.log(a);

// // //less than or //greater than

// // var a1 = 5
// // var a2 = 1
// // console.log(a1>a2);

// // // lessthan
 
// // //  1 <= 5 => 1 2 3 4 5

// // //Greaterthan
// // // >=


// // //Logical 

// // //&&  => and 
// // // || => or

// // //strict operator 
// // //!= not equal
// // var a2 = 5;
// // var b2 = 5;
// // console.log(a2 != b2);


// //  //== doubleequalto

// //    var newdata = 5
// //    var newdatas = "5"
// //    console.log(newdata === newdatas); 

// //  // === triple equalto
// //        5 === "5"
// //  //Ternary operator

// //  //conditon ? "value_true" : "value_false"
// //  var age = 85

// //  var limit = (age<18) ? "he is not  eligible to vote" : "he is  eligible to vote" 

// //  console.log(limit);


// //  //Datatypes : 

// //   //primitive 

// //   // string  =>  " 123"
// //   //integer => 2324
// //   //float => 23.454
// //   //boolean => True or False
// //   //undefined
// //   //null

// //   //non primitive 

// //   // array 
   
// //    const arr = [1,2,3]
// //    console.log(arr);

// //   //object 
   
// //   const obj = {
// //       //key : value
// //        name : "vijay",
// //        age  : 23,
// //        dep : "Qa engineer",
// //        ismentor : true
// //   }

// //   console.log(obj);


// // function =>  
      

// //function statement or declaration => 


// function box(para){  //param = 5
//     console.log(para)
// }
// box(5) 

// var a = 5
// console.log(a);

// //function expression

// // var nam2 = function(x){
// //     return x
// // }
// // nam2(5)

// // //arrow function 

// // var nw = (x,y) => {
// //   return x+y
// // }
// // console.log(nw(5,5));


// //Function factory method 

// // function studentdet(name,age,gender){
// //    return{
     
// //          getinfo : function(){
// //            console.log(`the name is ${name} and age is ${age}and gender is ${gender}`)
// //          }
// //    }
// // }
// // const newfn = studentdet("hari",68,"Male")
// // newfn.getinfo()

// //constructor
// function Cardetails(name,model,year){
    
//        this.name2 = name,
//        this.model2 = model,
//        this.year2 = year
       
//       this.getcarinfo = function(){
//         console.log(`the name of car is ${name} and the model is ${model}and the year is ${year}`);
//       }
        
// }
// const newdetails = new Cardetails("Audi","A6",2020)
// console.log(newdetails);
// newdetails.getcarinfo()


// //Class

// class Studentinfo{
//    constructor(name,batch,year){
//        this.name = name,
//        this.batch = batch,
//        this.year = year
//    }
// }

// const studentsinfo = new Studentinfo("Arun","Cypress",2024)
// console.log(studentsinfo)


// const newarr = {
// name : "vijay",
// age : 67,
// getinfo : function(){
//   console.log(this.name);
// }

// }

// newarr.getinfo()


//settimeout 

setTimeout(()=>{
  console.log("I will appear after 3 seconds");
}, 5000)


