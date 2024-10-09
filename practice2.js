 // //First class function 

// A first-class function is a function that can be treated like any other variable, 
//allowing it to be assigned to variables, passed as arguments, returned from other functions, 
//and stored in data structures.
 
 function addedval(nam){
    return nam * nam
 }
 function combinedval(pars){  //pars = addedval
    console.log("the combined value is :",pars(5))
 }
 combinedval(addedval)


//square 5 * 5 = 25  true
// 2 * 2 = 4  true
