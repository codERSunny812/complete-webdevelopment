// inroduction to events

// click is the most used event 


 const button=document.querySelector('.btn-headline');

//  method ---> add event listner 


button.addEventListener('click  ', clickme);

function clickme(){
    console.log("you clicked me ");
}
