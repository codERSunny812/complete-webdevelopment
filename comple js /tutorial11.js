
// computed values

console.log("tihis is my js tutorials ");

const key1="objkey1";
const key2="objkey2";





const value1="muyvalue1";
const value2="myvalue2";


const obj ={

};


obj[key1]=value1;
obj[key2]=value2;

console.log(obj);


// spread operator in object 




//object destructing 

const band = {
    bandName:"zayn malik ",
    songName:"li dont wanna live ",
    age:23,
    gender:"male"


}


const { bandName , songName, ...lastArray}=band;
console.log(bandName);
console.log(lastArray);


