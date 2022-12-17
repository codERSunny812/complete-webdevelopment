// this keyword 

const btn = document.querySelector('btn-headline'); 


// value of this in normal function is the upper part and where in  arrow functionm value is window 


const allButtons = document.querySelectorAll(".my-buttons button");
for(let button of allButtons) {
button.addEventListener("click", function(){
console.log(this);
})
}



for(let i = 0; i< allButtons.length; i++){
allButtons[i].addEventListener("click", function(){
console.log(this);
})
}


allButtons.forEach(function (button) {
     button.addEventListener("click", function () {
console.log(this);
});
})