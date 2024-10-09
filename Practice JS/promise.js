
//promise :  
// promise is an object which manage the asynchronus operation .
// it is used to handle the asynchronous operation in a synchronous way
// it will pass two parameters (resolve or reject)
//new promise((resolve,reject)=>{asynchronus code})

//1. Filling watercan in bottels
//2. Clean the room 
//3. Take out the trash 

//step 1: using call back hell
function watercan(callback){

    setTimeout(()=>{
        console.log("Water bottel Filled");
        callback()
        
    },2000)
}

function Cleanroom(callback){

    setTimeout(()=>{
        console.log("room cleaned");
        callback()
        
    },3000)
}

function Takeouttrash(callback){

    setTimeout(()=>{
        console.log("You take out the trash");
        callback()
        
    },4000)
}

// watercan(()=>{
//     Cleanroom(()=>{
//         Takeouttrash(()=>{
//             console.log("Allwork done");
            
//         })
//     })
// })


//step 2 : using promise [resolve]: 

function watercan(){
 
     return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Water bottel Filled");
          
            
        },2000)
     })
   
}

function Cleanroom(){
 
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("room cleaned");
           
            
        },3000)
     })
   
}

function Takeouttrash(){

     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You take out the trash");
         
            
        },4000)
     })
    
} 
//.then() => resolve
//.catch() => reject

// watercan().then(value=>{console.log(value);return Cleanroom()})
//            .then(value=>{console.log(value);return Takeouttrash() })
//            .then(value=>{console.log(value);console.log("Task finisihed")})


//step 3 : [reject]:

function watercan(){
 
    return  new Promise((resolve,reject)=>{
       setTimeout(()=>{
         
        const watercanfilled = true
        if(watercanfilled){
            resolve("Water bottel Filled");
        }else{
            reject("water can not be filled");
        }
           
       },2000)
    })
  
}

function Cleanroom(){

    return new Promise((resolve,reject)=>{
       setTimeout(()=>{

        const roomcleaned = true 
        if(roomcleaned){
            resolve("room cleaned");
        }else{
    reject("room is not cleaned")
        }
       },3000)
    })
  
}

function Takeouttrash(){

    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           
        const trashout = false
        if(trashout){
            resolve("trash is empty")
        }else{
            reject("trash is not empty")
        }
          
       },4000)
    })
   
}

watercan().then(value=>{console.log(value);return Cleanroom()})
          .then(value=>{console.log(value);return Takeouttrash() })
          .then(value=>{console.log(value);console.log("Task finisihed");})
          .catch(error=>console.log(error))