// important method of arrays 

// for each 
// map 
// filter 
// reduce


//       for each 

const numbers = [1,2,3,4];


function tut18(number,index){
    console.log("number is :", number*2);
    console.group("index is :" , index);
}

tut18(numbers[0],0);


console.log("loops start ");

// now lets us do this for all the array element 

// for (let i = 0; i< numbers.length; i++) {
//       tut18(numbers[i],i);
// }



// we dont have to run the loop we can use for each loop

// numbers.forEach(tut18);

numbers.forEach(function (number,index){
    console.log("number is ", number*2);
    console.log("index is :", index)
})



const users=[
    {
        firstName:"sunny", age:20
    },
    {
        firstName:"shivam ", age:21
    },
    {
        firstName:"PRIYA", age:19
    },
]


// now print the first name of the array users

// users.forEach(function(user){
//     console.log(user.firstName);
// })


// we can also print this using the for of loop 

for (const user of users) {
    console.log(user.firstName);
    
}



// map function 

// it's a method of array  and it will return an  array 


const number = [1,2,3,4,7,8];

const funNum=function(number){
    return number*number;
}

const newArray=number.map(funNum);

console.log(newArray);