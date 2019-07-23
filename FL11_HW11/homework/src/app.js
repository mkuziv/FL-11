let rootNode = document.getElementById('root');
let elementsAmount = 0;
let numbers = {
  zero: 0,
  maxListAmount: 10
};

const content = document.createElement('div');
content.className = 'content';
const h1 = document.createElement('h1');
h1.textContent = 'TODO Cat List';
const p = document.createElement('p');
p.textContent = 'Maximum item per list are created';
p.className = 'massage';

const form = document.createElement('form');
form.className = 'form';
const input = document.createElement('input');
input.type = 'text';
input.className = 'input-text';
input.placeholder = 'Add new action'

const button = document.createElement('button');
button.className = 'button';
button.setAttribute('disabled', 'true');
const i = document.createElement('i');

i.className = 'material-icons add-btn';
i.textContent = 'add';

rootNode.appendChild(content);
content.appendChild(h1);
content.appendChild(p);
content.appendChild(form);
form.appendChild(input);
form.appendChild(button);
button.appendChild(i);

const ul = document.createElement('ul');
ul.className = 'todo-list';
rootNode.appendChild(ul);

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disablede', 'true')
  }
});

button.addEventListener('click', (event) => {
  event.preventDefault(); 
  let li = document.createElement('li');
  li.className = 'list';
  li.setAttribute('draggable', true);
  
  let checkbox = document.createElement('i');
  checkbox.className = 'material-icons checkbox';
  checkbox.textContent = 'check_box_outline_blank';
  checkbox.addEventListener('click', () => {
    checkbox.textContent = 'check_box';
  })

  let label = document.createElement('label');  
  label.textContent = input.value;
  
  const edit = document.createElement('i');
  edit.className = 'material-icons edit';
  edit.textContent = 'edit';
  
  const editForm = document.createElement('form');
  editForm.className = 'edit-form';
  const editInput = document.createElement('input');
  editInput.className = 'edit-input';
  edit.appendChild(editForm);

  const safeI = document.createElement('i');
  safeI.className = 'material-icons safe-i';
  safeI.textContent = 'save';
  editForm.appendChild(editInput);
  editForm.appendChild(safeI);
  
  edit.addEventListener('click', () => {  
    editForm.style.display = 'block';
    if(label.textContent === editInput.value){
      editForm.style.display = 'none';
    }    
  });

  safeI.addEventListener('click', () => {    
    label.textContent = editInput.value;
    editForm.style.display = 'none';
  });  


  let deleteBtn = document.createElement('i');
  deleteBtn.className = 'del';
  deleteBtn.classList.add('material-icons');
  deleteBtn.textContent = 'delete';

  deleteBtn.addEventListener('click', () => {
    li.remove();
    elementsAmount--;
    if (elementsAmount <= numbers.maxListAmount) {
      input.removeAttribute('disabled');
      p.style.display = 'none';
    } 
  });

  li.insertBefore(label, li.firstChild);
  li.insertBefore(checkbox, li.firstChild);
  li.appendChild(edit);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  content.appendChild(ul);
  elementsAmount++;
  input.value = '';

  if (elementsAmount >= numbers.maxListAmount) {
    p.style.display = 'block';
    input.setAttribute('disabled', 'disabled');
    button.setAttribute('disabled', 'disabled');
  } 

});

let drag;
ul.addEventListener('dragstart', (event) => { 
  drag = event.target;
  event.target.style.opacity = 0.3;
}, false);

ul.addEventListener('dragend', (event) => { 
  event.target.style.opacity = '';
}, false);

ul.addEventListener('dragover', (event) => {
  event.preventDefault();
}, false);

ul.addEventListener('dragenter', (event) => { 
  if (event.target.className === 'list') {
    event.target.style.border = 'dashed';
  }
}, false);

ul.addEventListener('dragleave', (event) => { 
  if (event.target.className === 'list') {
    event.target.style.border = '';
  }
}, false);

ul.addEventListener('drop', (event) => {   
  event.preventDefault();  
  if (event.target.className === 'list') {
    event.target.style.border = '';
    ul.insertBefore(drag, event.target);
  }
}, false);