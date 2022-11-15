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