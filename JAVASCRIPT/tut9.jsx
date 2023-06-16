// promise api in js 
 
let p1=new Promise((resolve , reject) =>{
    
    setTimeout(() => {
        resolve(12);  
        // reject(121);
    }, 1000);
    
})

let p2=new Promise((resolve , reject) =>{
    
    setTimeout(() => {
        resolve(13);    
    }, 2000);
})

let p3=new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(14);    
    }, 3000);
});
    

// p1.then((result) => {
//     console.log("i am promise 1 and i resolved with a value of " +result);
    
// })

// p2.then((result) => {
//     console.log("i am promise 2 and i resolved with a value of " +result);
    
// })


// p3.then((result) => {
//     console.log("i am promise 1 and i resolved with a value of " +result);
    
// })


// now we have to resolve all the three promise at once

// let promise_all=Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);
    
// }).catch((value)=>{
//     console.log(value);
// })
// it will print the array of the resolve values but if in any case any value isnt resolve and get rejected then this process wont work


// so to avoid this error we use another method 

// let promise_allSet=Promise.allSettled([p1,p2,p3]);
// promise_allSet.then((value)=>{
//     console.log(value);
// });

// you will know the status and value of your promise  


// 3rd method promise.racce

let promise_race=Promise.race([p1,p2,p3]);
promise_race.then((value)=>{
    console.log(value);
})

// it will print that promise which resolve first but this will print the value if the promise which resolved first is rejected 


// for that we have another method 

let promise_any=Promise.any([p1,p2,p3]);
promise_any.then((value)=>{
    console.log((value));
})