// default parameter 
function addTwo(a,b){
    return a+b;
}

const ans=addTwo(2,4);
console.log(ans);


// rest parameter

function myFun(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
    
} 

myFun(1,2,3,4,55,6,7);


function addAll(...numbers){

    var total=0;
for (var num of numbers) {
 
   total =total+num;

}
console.log(total);
console.log(num);
console.log(typeof num);

}

const answer=addAll(1,2,3,4,5,6,7,8,9);



// parameter destructuring

// object 
// react

const persons={
    firstName:"sunny",
    gender:"male"
}

// function personDetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// now lets destructing this object 

function personDetail({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}



personDetail(persons);


