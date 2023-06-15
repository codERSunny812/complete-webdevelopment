// setTimeout(() =>{
//   const newName = document.getElementById("me");
//   newName.innerText="hey im new to this ";
// },2000)

const var1=document.getElementById("stopwatch");
// console.log(var1);
const btn1=document.getElementById("start-btn");
const btn2=document.getElementById("stop-btn");
var num=0;
var closeTime;

// btn1.addEventListener('click', ()=>{
//   setInterval(()=>{
//     var1=`${num}`;
//     num++;
//   },1000)
// })


 function function1(){
  closeTime= setInterval(()=>{
     var1.innerHTML=`${num}`;
    num++;
  },1000)
  
}

function function2(){
    clearInterval(closeTime);
}