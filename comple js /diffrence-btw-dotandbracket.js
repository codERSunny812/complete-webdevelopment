// diffrence between dot and bracket  notation 

const key="email";
const  abc = {
    name:"sunny",
    age:19,
    gender:"male",
    "person hobbies":["football", "sleeping " , "coding "]
}

// now if you want to acess the person hobbies key throught the dot notation you cant do this that's why you need bracket notation 

// and if you want to add the const key variable as a input then you will again use bracket notation 

abc[key]="sengersunny448@gmail.com";

// console.log(abc);


// how to itrate the object 

for(let key in abc){
    console.log(key);
    // console.log(abc[key]);
}


for(let key in abc){
    

    console.log(abc[key]);
    
}





// now if you want the whole in key value pair 

for(let ke in abc){

    console.log(' ${ke} : ${abc[ke]} ');
}



// spread operator in array 

const array1=[1,2,3];
const array2=[4,5,6];


// now clone the both array into a single array 

const newArray=[...array1,...array2];

// you can also add some value to it 


const newArrays=[...array1,...array2,34,12];

// you can also spread a array into aray that's 

const nArray=[..."abc"]



