//synchronus
//synchronus request can process one at a time,
//other request wait untill the first one completes

//asynchronus
// asynchronus is opposite to the synchronus it can perform long network 
//request without blocking.


//promieses is Asynchrous 
//There are three states in promises => Pending,fullfilled and rejected .

const p1= new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        Resolve("Sucess")
    },2000)
})


const p2= new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        Reject("Failure")
    },1000)
})

p2.then(console.log).catch(console.log)



//callbacks 

const f1 =(val,callbacks)=>{
    return callback(val +10)
}

const callback = (val)=>{
    return val+20
}

console.log(f1(1,callback))


// const f1 = (val, callback) => {
//     let result = val + 10;
//     if (callback) {
//         result = callback(result);
//     }
//     return result;
// }

// const callback = (val) => {
//     return val + 20;
// }

// console.log(f1(1, callback));
