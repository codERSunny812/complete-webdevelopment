// map 


// key value pair is know as object litrals 

// key is always in string or may be in symbol  in object 

// map also store data in key value pair just like object 






const person={
    firstName:"sunny",
    age:19
}




// how to create map 

const persn = new Map();

// how to add key value pair in this map

persn.set('firstName', 'sunny');
persn.set('lastName', 'pandey');
persn.set('age',19);


console.log(persn);


console.log(persn.get('firstName'));




// how to print the keys 

console.log(person.keys());


// you can  also create map and store vallue in

const newMap=new Map({
    firstName:"sunny",
    lastName:"pandey"
});

console.log(newMap);





const personDetail={
    firstName:"sunny",
    age:19
};


const userInfo= new Map();

userInfo.set(personDetail, {age:19, gender:"male"} ); 

console.log(userInfo);

console.log(personDetail.firstName);

console.log(userInfo.get(personDetail).gender);


