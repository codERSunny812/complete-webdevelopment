// String indexing 
let firstName="Sunny";
console.log(firstName[0]); //string slicing 
console.log(firstName.length);

// now lets know about strings method 

// 1. trim   - to remove extra spaces from a string 

let firstNames = "   sunny     ";
console.log(firstNames.trim());


// string slicing 
let varNum = "hey amigos im sunny here ";
console.log(varNum.slice(0,2));


// change num to string 
var num = 12;
var name = "sunny";
console.log(num + " ");

//change string into a number 
let str = "sunny "; //here str is string here 

sun = +"sunny "; //to  convert the string into a number  
;

//template string 

let age = 23;
let fname= "sunny ";


// type of null

console.log("mu name is " + fname + "and my " + age );

console.log('my name is ${fname} and im ${age} old ' );

//bigInt 

let numberTaken=123;
console.log(numberTaken);
// max safe value  we have only a limit upto which we use a number so make a data type BIGDATA 
const number =BigInt(123);
const numberEntred =123n;

console.log(numberTaken);


// != and !==
 
// the second one will check the data type too


// truthy and falsy value 

// falsy value are " ", null , 0 , 

let nameFirst = " ";

if (nameFirst) {
    console.log(nameFirst);
} else {
    console.log("nothing ");
}

 

