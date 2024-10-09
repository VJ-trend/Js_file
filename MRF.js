// //map method 
//The map() method in JavaScript is mostly  used to multiplying  the array based on certain conditions . 
// it passes three parameters => value , index , acctualarray

const numbers = [1,2,3,4,5,6,7,8,9,10]
const multiplyarr = numbers.map((val,idx,accarr)=>val*2)
console.log(multiplyarr)



// //filter 
// The filter() method in JavaScript is used to filter the array based on the conditions
const filterarr = numbers.filter((val,idx,accarr)=> val > 5)
console.log(filterarr)





// Reduce 
//It will  used to add  and bring the value in short form.

//It passes four parameters in a function

const reducearr = numbers.reduce((acc,val,idx,accarr)=>{
   return acc + val
},5)
 console.log(reducearr)


 
