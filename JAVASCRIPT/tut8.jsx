// promise in js 

let p = new Promise( (resolve,reject)=>{
    console.log("promise p  is started ");
    setTimeout(()=>{
        console.log("im promise p and im fullfield");
        resolve(23);
    },2000);
    console.log("promise p is  ended ");
} );
console.log(p);


let q=new Promise( (resolve,reject)=>{
    console.log("promise q  started ");
    setTimeout(()=>{
        console.log("im promise q and im rejected");
        reject(new Error("im error "));
    },2000)
    console.log("promise q is   ended");
});
console.log(q);




p.then(
    (value)=>{
        console.log(value);
    }
);


q.catch(
    ()=>{
        console.log("some error is occured in the promise q ");
    }
);


const food = [ "maida", "vegetables", "oil", "salt ", "golgappe"];
let foodPromise=new Promise((resolve, reject) => { 
    if(food.includes("vegetables") && food.includes("oil") && food.includes("maida")){
        resolve("you can eat momos as i promised ");
    }else{
        reject("sorry you cant eat momos");
    }
});

foodPromise.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})


// promise chaining


console.log("promise chaining is started ");
let p1 = new Promise( (resolve,reject)=>{
    console.log("promise p1 is started ");
    setTimeout(()=>{
        console.log("resolve after 2 second ");
        resolve(23);
    },2000);
} ).then((value)=>{
    console.log("resolve with a value of " +value);
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise p2 is started ");
            console.log("resolve after 1 second");
            resolve(12);

        },1000)
    })
    return p2;

}).then((value)=>{
console.log("resolve with a value of "+value);
return 23;

// this will also return as our previous promise return and you can use then method to get the value 

}).then((value)=>{
console.log("this is the final promise that is being resolved with a value " + value);
})


// promise chaining can solved the problem of call back hell 


// attaching multiple handlers to a promise

let newPromise = new Promise((resolve,reject)=>{
    resolve(11);
});

newPromise.then((value)=>{
    console.log(value);
})

newPromise.then(()=>{
    console.log("the promise is resolved");
})

newPromise.then(()=>{
    console.log("you can attach multiple handlers to promise");
})