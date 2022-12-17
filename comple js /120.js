// key press event  and move  event 


const body = document.body;

body.addEventListener('keypress', (e)=>{
    console.log(e.key);
})


const eventMouse = document.querySelector('.btn');

eventMouse.addEventListener('mousehover', () =>{
    console.log("mouse event occured ");
})

