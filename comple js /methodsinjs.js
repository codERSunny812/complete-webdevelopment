// method in js



// window command 


console.log(this); 


console.log(window);





// function inside object 



const person={
    firstName:"sunny",
    lastName:"pandey",
    hobbies:function{
        console.log("my hobbies are vlogging and football and coding")
    }
};




person.hobbies();






// you can write the function outside the block 



function about (hobby, favMusic){
    console.log(this.firstName + " "+ this.age);
}


const usr1={
firstName:"sunny",
age:19,
// about:function(){
//     console.log(this.firstName + " "+ this.age);
// }
};


const usr2={
    firstName:"shivam",
    age:91
};


// how to call the about fuction in js


// call function 

usr1.about.call(usr1);


about.call(usr1,"guitar", "moazrt");

// if we didn't pass any argument then it will print undefined 


// apply function


about.apply(usr1,["football", "oh na rahi "]);


// bind function 



 const func=about.bind(usr1,"football", "ignite");





//  this represent the window


