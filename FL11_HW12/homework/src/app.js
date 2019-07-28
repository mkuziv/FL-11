const rootNode = document.getElementById('root');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const danger = document.createElement('div');
danger.className = 'danger';

let dangerSpan1 = document.createElement('span');
dangerSpan1.className = 'danger-span';
dangerSpan1.textContent =`Danger!`;

let dangerSpan2 = document.createElement('span');
dangerSpan2.className = 'danger-span';
dangerSpan2.textContent =`You can't edit already done item.`


const main = document.createElement('div');
main.className = 'main-page';

const mainHeader = document.createElement('h1');
mainHeader.className = 'main-header';
mainHeader.textContent = 'Simple TODO application'

const addButton = document.createElement('button');
addButton.className = 'add-button';
addButton.textContent = 'Add new task';

const emptyList = document.createElement('p');
emptyList.className = 'empty-list';
emptyList.textContent = 'TODO is empty';

const todoList = document.createElement('ul');
todoList.className = 'todo-list';

let amount = 0;


rootNode.appendChild(danger);
rootNode.appendChild(wrapper);
danger.appendChild(dangerSpan1);
danger.appendChild(dangerSpan2);
wrapper.appendChild(main);
main.appendChild(mainHeader);
main.appendChild(addButton);
main.appendChild(emptyList);
main.appendChild(todoList);
window.location.hash = '#main';


let addTask = document.createElement('div');
addTask.className = 'add-task';

let addTaskHeader = document.createElement('h1')
addTaskHeader.className = 'add-task-header';
addTaskHeader.textContent = 'Add task';

let addTaskInput = document.createElement('input')
addTaskInput.className = 'add-task-input';

let addTaskBut =document.createElement('div')
addTaskBut.className = 'add-task-but';

let cancelButton = document.createElement('button')
cancelButton.className = 'add-task-cancel';
cancelButton.textContent = 'Cancel';

let saveButton = document.createElement('button')
saveButton.className = 'add-task-save';
saveButton.textContent = 'Save changes';

wrapper.appendChild(addTask);
addTask.appendChild(addTaskHeader);
addTask.appendChild(addTaskInput);
addTask.appendChild(addTaskBut);
addTaskBut.appendChild(cancelButton);
addTaskBut.appendChild(saveButton);


addButton.addEventListener('click', () => {

  main.style.display = 'none';
  addTask.style.display = 'flex';
  addTaskHeader.textContent = 'Add task';  
  window.location.hash = '#/add';

})

cancelButton.addEventListener('click', () => {

  main.style.display = 'flex';
  addTask.style.display = 'none';

})

saveButton.addEventListener('click', () => {
  
  window.location.hash = '#main';
  main.style.display = 'flex';
  addTask.style.display = 'none';
  emptyList.style.display = 'none';

  amount++;

  const todoListRow = document.createElement('li');
  todoListRow.className = 'todo-list-row';

  let todoListText = document.createElement('span');
  todoListText.className = 'todo-list-text';

  let todoListImg = document.createElement('img');
  todoListImg.className = 'todo-list-img';
  todoListImg.setAttribute('src', './assets/img/todo-s.png');

  
  let todoListImgDel = document.createElement('img');
  todoListImgDel.className = 'todo-list-img-del';
  todoListImgDel.setAttribute('src', './assets/img/remove-s.jpg');


  todoList.appendChild(todoListRow);
  todoListRow.appendChild(todoListImg);
  todoListRow.appendChild(todoListText);
  todoListRow.appendChild(todoListImgDel);

  let done;

  todoListImg.addEventListener('click', () => {
    
    todoListImg.setAttribute('src', './assets/img/done-s.png');
    todoList.appendChild(todoListRow);
    todoListText.style.background = 'gray';
    done = true;
    
  })  
  
  todoListImgDel.addEventListener('click', () => {

    todoListRow.remove();
    amount--;

    if(amount === 0){
      emptyList.style.display = 'block';
    }

  })

  todoListText.addEventListener('click', () => {   

    if (done === true) { 

      let twoSec = 2000;   
      danger.style.display = 'flex'; 
      
      setTimeout(() => {
        danger.style.display = 'none'; 
      }, twoSec);

    } else {

      todoListRow.remove();
      main.style.display = 'none';
      addTask.style.display = 'flex';
      addTaskHeader.textContent = 'Modify Item';
      todoListText.textContent = addTaskInput.value;
      window.location.hash = '#/modify/:item_id';      

    }
  })

  todoList.style.display = 'block';
  todoListText.textContent = addTaskInput.value;
  addTaskInput.value = '';
})