// for of loops in arrays 


// mostky used when we have to itrate any arrays 

const arr =["sunny ", "shiv", "sethu ","sun" ];
for(let element of arr){
    console.log(element);
}

// for in loops 
// used very rarely 
for(let element in arr){
    console.log(element);
}


// array destructuring 

const vr=["sun", "mon",  "tue" , "wed" , "thru" ];
let [var1,var2,...myNewArray]=vr;
console.log(var1);
console.log(var2);
console.log(myNewArray);