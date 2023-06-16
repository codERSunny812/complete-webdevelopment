
// fetch roll from a student 
// 1.  2 second ke baad roll number print ho  and then 2 second ke baad student name and age 


// here we are producing the Promise


let p = new Promise((resolve, reject)=>{

    setTimeout(()=>{
// suppose we fetch roll no of studnet and store them in array

let roll_no=[1,2,3,4,5];
resolve(roll_no);
reject(`error`)


    }, 2000)
});

p.then((rollno)=>{
    console.log(rollno);
}).catch((loaderror)=>{
console.log(loaderror);
});