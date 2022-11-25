// reduce method 


const arr= [1,2,3,4,5];


// sum of the all  array element 

const fun =arr.reduce( ( accumulator , currentvalue)=> {
    return accumulator+currentvalue;
} );

console.log(fun);

