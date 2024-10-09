//Async & Await 
//Async : make a function return a promise
//Await : makes an function wait for promise

//Allow us to write  asynchronus code in a synchronous manner.
    

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

// watercan().then(value=>{console.log(value);return Cleanroom()})
//           .then(value=>{console.log(value);return Takeouttrash() })
//           .then(value=>{console.log(value);console.log("Task finisihed");})
//           .catch(error=>console.log(error))

 async function works(){
    try{
        const watercanfilled = await watercan()
        console.log(watercanfilled);
        
        const roomcleaned = await Cleanroom()
        console.log(roomcleaned);
        
        const takeoutoftrash = await Takeouttrash()
        console.log(Takeouttrash);
    }catch(error){
        console.log(error);
        
    }

 }
 works()





