// how object is created in javascript 

var obj={
    name:"sunny",
    age:19,
    hobbies:"vlogging , coding ",
    fav_lang:"java and javascript "
}


// how to acess the object 

document.write(obj.name);
console.log(obj.age);
document.write(obj["hobbies"]);

// deleting property from the object 

delete obj.fav_lang;

document.write(obj)
// console.log(obj);

// Iterating Objects using  special loops called for in loops 

for(vari in obj){
    // document.write(obj);
    console.log(vari,":",obj[vari]);
}