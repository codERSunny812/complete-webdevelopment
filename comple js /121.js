// event bubling / event propogation 

// event capturing 

// event delegation



console.log("hey suny");


const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');

child.addEventListener('click',() =>{
    console.log("you clicked on the child ");
}   );


parent.addEventListener('click',() =>{
    console.log("you clicked on the parent  ");
}   );

grandparent.addEventListener('click',() =>{
    console.log("you clicked on the  grand  parent  ");
} );

// if the same event is applied on the child and parent and  if  event which is applied to the child  is performed then the parent event also print the result 



// this is called event bubling 

 



// now lets known about event capturing 


// passing a third argument 

child.addEventListener('click',() =>{
    console.log("child capture ");
} , true  );


parent.addEventListener('click',() =>{
    console.log("parent capture ");
}  ,true );

grandparent.addEventListener('click',() =>{
    console.log(" grand  parent capture   ");
} , true);





// event delegation 




