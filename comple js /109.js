// static list and live list 



// query selecctor humko static list degi 

// get element humko live list degi  

 const  listItem= document.querySelectorAll('.todolist li');

 const newListItem= document.createElement('li');

 newListItem.textContent= 'newly created item ';

 const ul = document.querySelector('.todo-list');

 ul.append(newListItem);

 console.log(listItem);

