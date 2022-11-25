// function returning function 

function myFun(){
    // return "a";
    function hello(){
        console.log("hello wolrld ");
    }

    return hello;

}


const ans =myFun();
console.log(ans);

console.log(ans());

