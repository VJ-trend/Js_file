// push ->
//        The push() method adds one or more elements to the end of an array,
//        returning the new length of the array.

const provisionalstore = ["vijay", "ajay", "suryaa"];
provisionalstore.push("aravindh");
console.log(provisionalstore);

// pop -> //
          // The pop() method removes and returns the last element of an array,
 //       reducing its length by one.

const provisionalstore2 = ["vijay", "ajay", "suryaa", "aravindh"];
console.log(provisionalstore2);

provisionalstore2.pop()
console.log(provisionalstore2);


// unshift ->
//         The unshift() method adds one or more elements to the beginning of an array,
//         shifting all other elements to a higher index and returns the new length of the array


const apline = ["aravindh", "vijay", "sanjay", "ashok"];
apline.unshift("ajith");
console.log(apline);

//shift -> 
//    The shift() method removes and returns the first element of an array,
//    shifting all other elements to a lower index,  and updates the length of the array.
 

const apline2 = apline;
apline2.shift();
console.log(apline2);

//concat -> The concat() method is used to merge two or more arrays together,
//          creating a new array containing the elements of the original arrays,
//          without modifying the original arrays

const frutis = ["orange", "apple"];
const morefruits = frutis.concat(["ice apple", "pineapple"]);
console.log(morefruits);

// in numbers

const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];
const number3 = [9, 10];

const combinednumber = number1.concat(number2, number3);
console.log(combinednumber);

// sort -> 
         //The sort() method arranges the elements of an array in ascending or 
        // descending order by default,modifying the original array.


//in numbers
 
const arrnum = [2, 1, 8, 4, 9, 7, 6, 5, 3];
arrnum.sort((a, b) => a - b );

// If the result of a - b is negative, a is placed before b.
// If the result is positive, b is placed before a.  //b a
// If the result is zero, the order remains unchanged (which is relevant for elements that are equal).

//Starting Array: [2, 1, 8, 4, 9, 7, 6, 5, 3]

// Comparison between 2 and 1:
// 2 - 1 = 1: Since the result is positive, 2 should come after 1.
// Updated Array: [1, 2, 8, 4, 9, 7, 6, 5, 3]


// Comparison between 1 and 8:
// 1 - 8 = -7: Since the result is negative, 1 should come before 8.
// Updated Array: [1, 2, 8, 4, 9, 7, 6, 5, 3] (no change)

// Comparison between 8 and 4:
// 8 - 4 = 4: Since the result is positive, 8 should come after 4.
// Updated Array: [1, 2, 4, 8, 9, 7, 6, 5, 3]

// Comparison between 4 and 9:
// 4 - 9 = -5: Since the result is negative, 4 should come before 9.
// Updated Array: [1, 2, 4, 8, 9, 7, 6, 5, 3] (no change)

// Comparison between 9 and 7:
// 9 - 7 = 2: Since the result is positive, 9 should come after 7.
// Updated Array: [1, 2, 4, 8, 7, 9, 6, 5, 3]

// Comparison between 7 and 6:
// 7 - 6 = 1: Since the result is positive, 7 should come after 6.
// Updated Array: [1, 2, 4, 8, 6, 7, 9, 5, 3]

// Comparison between 6 and 5:
// 6 - 5 = 1: Since the result is positive, 6 should come after 5.
// Updated Array: [1, 2, 4, 8, 5, 6, 7, 9, 3]

// Comparison between 5 and 3:
// 5 - 3 = 2: Since the result is positive, 5 should come after 3.
// Updated Array: [1, 2, 4, 8, 3, 5, 6, 7, 9]
console.log(arrnum);

//split
//"Split" refers to dividing something into separate parts.
// In explaining, it involves breaking down a concept or process into understandable segments.

const sentence = "himynameisvijay";
const words = sentence.split("name");

//join ->
         //"join is used to joining the splitted array or values"
const joiningwords = words.join(" ");
console.log(joiningwords);
console.log(words);

//slice ->
      //"Slicing" extracts a portion of a data structure, like a list or string,
// based on specified indices or criteria, allowing for selective retrieval of elements.

const animals = ["deer", "lion", "tiger", "elephant", "leopard"];

console.log(animals.slice(2, -1));
console.log(animals.slice(1, -1));
console.log(animals.slice());

//splice ->

//"Splice" is a method used in programming to modify an array by removing or replacing existing elements
//and/or adding new elements into it at a specified index position. 
const weeks = ["sunday", "monday", "wednesday", "friday", "saturday"];
weeks.splice(2, 0, "tuesday");
weeks.splice(4, 0, "thursday");
console.log(weeks);


//Reverse ->

//"Reverse is used to reverse the string by the help of reverse method.

const str = "Hello, World!";
const reversedStr = str.split("").reverse().join("")
console.log(reversedStr);

//Include -> 

//"Include" checks if a specified element exists within a collection, 
//returning boolean values.

const str1 = "Hello, World!";
const includesWord = str1.includes("g");
console.log(includesWord); 

//Uppercase ->
//"Uppercase" converts characters in a string to uppercase . 


const str2 = "Hello, World!";
const upperCaseStr = str2.toUpperCase();
console.log(upperCaseStr); 

//Lowercase -> 
      //"In lowercase" converts characters in a string to  lowercase .


const str3 = "UNIVERSAL"
const lowercase = str3.toLowerCase();
console.log(lowercase)

// indexof ->
  //IndexOf" method returns the first occurrence index of a specified element within a string or array. 

const array = [10, 20, 30, 40, 50,40];
const index = array.IndexOf(40);
console.log(index); 

//lastindexof : 
  //lastIndexOf" method returns the last occurrence index of a specified element within a string or array, 
let lastidx = "javascript"
let newlastidx = lastidx.lastIndexOf("a")
console.log(newlastidx);






