//array in javascript 


//array is an object 

let fruits = ["apple " , "grapes " , "mango "];

//to check an array is  really an array 


console.log(Array.isArray(fruits));

//  function in arrays 

// 1. add any element at the end 

fruits.push("pineapple");
console.log(fruits);

//2. remove element form the end of an  array 

console.log(fruits.pop());

// remove any specific elemnet form an array 

// let  me=shift("apple");
// console.log(me);


// how to clone an array 

let array1=[1,2,3];
let array2=array1.slice(0);
let array3=[].concat(array1);
console.log(array1);

t

console.log(array2);

console.log(array3);


// for loops in array 

let ar = [2, 4, , 7,12,13,14]; 

for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    console.log(element);
    
}




