// arrow function in in object 



// arroaw function doesnt have this 

// arrow function take thier this from the surrounding 


const user1 = {
    firstName:"sunny",
    age:19,
    about: () =>{
        console.log(this.firstName, this.age);
    }
};


user1.about();





// short value syntax 



const user2  = {
    firstName:"sunny",
    age:19,
    about(){
        console.log(this.firstName, this.age);
    }
};



// oops in javascript

const user3 = {
    firstName:"sunny",
    lastName:"pandey",
    email:"sengersunny448@gmail.com",
    address:"166 patel nagar neelmatha ",
    age:19,
    about: () =>{
        console.log(this.firstName, this.age);
    },
    is18:function(){
        return this.age>C18;
    }
};


//   1. create a function (that create object )

// 2. add key value pair 

//3.  object ko return krega 

const userMethod ={

about : function (){
        console.log("hey im in function");
    }

    is18 : function (){
        console.log("hey im in the function ");
    }
}


function createUser(firstName, age,lastName, email, address){
        
    const user ={};
    user.firstName="firstName",
    user.lastName="lastName",
    user.age=age,
    user.address=address,
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    

    return user;

}


const detail = createUser("sunny ", 19, "pandey", "sengersunny448@gmail.com", "neelmatha");

console.log(detail);


const object ={
key1:"value1",
key2:"value2"
};



const object2= Object.create(object);

// object 2 ke proto set kr rhe object 1 sai 

// there is one more way to create empty object 

object22.key3="value3";

console.log(object2);


// proto ki wajah saijo chiz usko is block mai ni milega vo dusre mai dekega 
 

// javascript function is combination of function and object

// name property tell the function name 

// hello.name


// you can add your own properties 



hello.myOwnProperty="hey my new property ";



// hello.prototype //{}


// only function provide prototype property 



   






