//for each 

//The forEach method  is mainly used for read the array.

// const studentarr = ["ajay","vijay","sakthi","kali"]
// studentarr.forEach((val,idx,accarr)=>console.log(val,idx,accarr))


// //for in 

// //The for..in statement in JavaScript is used to iterate over the enumerable properties of an object.

// //forIn method is mainly recommended for object.


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (let key in person) {
//     console.log(key + ":" +person[key]);
// }

// //for of 
// //The for...of loop in JavaScript is used to iterate over arrays, strings.

// const sentence = "string";

// for (let char of sentence) {
//     console.log(char);
// }


//  

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// for (const key in person) {
//    console.log(person[key]);
// }


let str = "hello"

for(let x of str){
    console.log(x);
}

const map1 = [1,2,3,4,5,6,7,8,9,10]
//map1.map((val,idx,accarr)=>console.log(val*2))

const filter = map1.filter((val,idx,accarr)=>val<5)

console.log(filter);


const reduce = map1.reduce((acc,val,idx,accarr)=>{
    return acc+val
},5)

console.log(reduce);




