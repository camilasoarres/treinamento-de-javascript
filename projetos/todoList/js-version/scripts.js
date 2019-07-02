let taskInput = document.querySelector('#task-input');
let todoPrincipalList = document.querySelector('.todo-list ul');
let todoCompletedList =  document.querySelector('.finish-items ul');
let descriptionInput = document.querySelector('#description-input');
let categoryInput = document.querySelector('#category-input');
let colorInput = document.querySelector('#color-input');

function createNewTask(task, description, category, color) {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let labelItem = document.createElement('label');
  let categoryItem = document.createElement('p');

  labelItem.innerText = task + ' - ' + category;
  categoryItem.innerText = description;
  checkBox.type = 'checkbox';
  listItem.appendChild(checkBox);
  listItem.appendChild(labelItem);
  listItem.appendChild(categoryItem);

  listItem.style.backgroundColor = color;

  return listItem;
};

function addTask() {
  let listItem = createNewTask(taskInput.value, descriptionInput.value, categoryInput.value, colorInput.value);

  if (taskInput.value !== '') {
    todoPrincipalList.appendChild(listItem); 
    taskInput.value = '';
    descriptionInput.value = '';
    categoryInput.value = '';
    colorInput.value = '#800000';
  }

  principalTodoItems(listItem, finishTask);
};

function finishTask() {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');

  deleteBtn.innerText ='Deletar'; 
  deleteBtn.className = 'delete';
  listItem.className = 'finished-task';
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type=checkbox]');
  checkBox.remove();
  
  todoCompletedList.appendChild(listItem);
  completedTodoItems(listItem, deleteTask);
};

function deleteTask() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;

  ul.removeChild(listItem);
};

function principalTodoItems(taskItem, checkBoxClick) {  
  let checkBox = taskItem.querySelector('input[type=checkbox]');
  checkBox.onchange = checkBoxClick;
};

function completedTodoItems (taskItem, deleteButtonPress) {  
  let deleteButton = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonPress;
};

for(let i = 0; i < todoPrincipalList.children.length; i++) {
  principalTodoItems(todoPrincipalList.children[i], finishTask);
}

for(let i = 0; i < todoCompletedList.children.length; i++) {
  completedTodoItems(todoCompletedList.children[i], deleteTask);
}
