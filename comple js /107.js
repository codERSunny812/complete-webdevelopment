// add html element  throught js 
 




// innner html to add html element 

const todoList = document.querySelector(".todo-list");


console.log(todo.innnerHTML);


todoList.innnerHTML+="<li>hey im new ist </li>";




// new method to create element

const newTodoItem= document.createElement('li');

// const  newTodoItemText= document.createTextNode('tech studnet ');

newTodoItem.textContent = "new list content ";

const todoList = document.querySelector(".todo-list");

todoList.append(newTodoItem);


// use prepend to add  in the beginning of the list 



console.log(newTodoItem);




// how to remove any element 

const element = document.querySelector('todo-list li');

element.remove();




// before 

// insert any element before any element 


// new element is created 

const  newELment= document.createElement('li');

newELment.textContent= "new text element ";

// now choose any elment above which you have to insert the given element 

const newList= document.querySelector('todo-list');

// now insert the newly created element before the selected element 

newList.before(newELment);


// similarly you can use after element 


 










// after 





