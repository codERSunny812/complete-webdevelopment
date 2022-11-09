//array in javascript 


//array is an object 

let fruits = ["apple " , "grapes " , "mango "];

//to check an array is an array 


console.log(Array.isArray(fruits));

// arrays function 

// 1. add any elemet at the end 

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

// USED TO CLONE THE REPO 

console.log(array2);

console.log(array3);




