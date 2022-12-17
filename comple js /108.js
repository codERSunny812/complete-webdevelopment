// clone nodes

 const ul = document.querySelector('.todo-list');

 const newItem= document.createElement('li');

 li.textContent='new text content ';



 ul.append(li);

 const li2= li.cloneNode(true);

 ul.prepend(li2);

