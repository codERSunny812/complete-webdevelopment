
// computed properties 

console.log("this is my js tutorials ");

const key1="objkey1";
const key2="objkey2";

const value1="muyvalue1";
const value2="myvalue2";

// create an object from the  above data 


const obj ={

};


obj[key1]=value1;
obj[key2]=value2;

console.log(obj);


// spread operator in object 
const onj={
    key1:"sunny",
    key2:"sun"
}

const onj2={
    key3:"sunny",
    key4:"sun"
}

console.log(onj);

const newObj={ ...onj,...onj2};






//object destructing 

const band = {
    bandName:"zayn malik ",
    songName:"li dont wanna live ",
    age:23,
    gender:"male"


}


const { bandName , songName, ...lastArray}=band;
console.log(bandName);


// the lefyt value are stored in this last array 


console.log(lastArray);



// object inside array 

// very useful in real world object 

const users=[
{
    userId:1,fname:"sunny",age:12
},
{
    userId:2,fname:"shivam",age:19
},
{
    userId:3,fname:"shivashish",age:19
}

];

console.log(users);


// itrate this using loops

for(let user of users){
    console.log(user.fname);
}



// nested destructing 

const [usr1,usr2,usr3]=users;

console.log(usr1);