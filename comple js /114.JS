
const allButtons  = document.querySelectorAll('.my-buttons button');

for(let button of allButtons){
    button.addEventListener('click ',(e) =>{
        console.log(e.currentTarget);
    } )
} 