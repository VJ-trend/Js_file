
//In JavaScript, an object is a collection of key-value pairs. 
//It is a fundamental data type used to store various keyed collections and more complex entities.

const studentobj = [{   
    name : "vijay",
    age : 20,
    bloodgrp :"ab-",
    gender : "male"
},

{
name : "ajay",
age : 45,
bloodgrp :"ab+",
gender : "male"
},
{
    name : "swathi",
    age : 50,
    bloodgrp :"o+",
    gender : "female"
 },
{
        name : "hari",
        age : 25,
        bloodgrp :"0+",
        gender : "male"
}
]
console.log(studentobj[3].age)

const key = Object.keys(studentobj[0])
 console.log(key)

 const value = Object.values(studentobj[1])
 console.log(value)

//destructuring -Object destructuring in JavaScript allows you to extract multiple properties 
//from an object and assign them to variables in a concise and readable way,
// enhancing code readability and reducing repetition.

const obj =[{
    name : "suryaa",
    age : 56,
    position : "manager",
},
{
    name : "dhana",
    age : 99,
    position : "sales executive"
}]

const{name,age,position} = obj[1]
console.log("the name is ->",name)
console.log("the age is ->",age)


//array destructuring -
//Array destructuring in JavaScript use to destructure the array in a readable way.


const arr = ["mango","apple","banana"]

const[fruit1,fruit2,fruit3]= arr
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//for methods : 
//foreach 
//syntax : 
// variable_name.forEach((value,index,actualarray)=> );

let arr = ["sunday","monday","tuesday","wednesday","thursday","friday"]
arr.forEach((acc,idx,accarr)=>console.log(acc,id))


//forin
//forof


