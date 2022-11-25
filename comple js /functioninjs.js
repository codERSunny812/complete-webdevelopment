// function inside function 

const  fun= ( ) => {

    const fun1 = () =>{
        console.log("hello im a function inside function ")
    }


    const addTwo = (num1,num2) => {
        return num1+num2;
    }
fun1();
console.log(addTwo(4,5));    

}

fun();



// lexial scope 


// lexial environment in js 

// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function

var x = 2;
var add = function() {
    var y = 1;
    return x + y;
};

// var is function scope 

function  moon(){

    if(true){
        var firstName="sunnny"
        console.log(
            `hey , i'm ${firstName}`
        );
    }
}

moon();