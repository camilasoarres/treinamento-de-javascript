let taskInput = document.querySelector('#task-input');
let todoPrincipalList = document.querySelector('.todo-list ul');
let todoCompletedList =  document.querySelector('.finish-items ul');

function createNewTask(task) {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkBox.type = 'checkbox';
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;  
};

function addTask() {
  let listItem = createNewTask(taskInput.value);

  if (taskInput.value !== '') {
    todoPrincipalList.appendChild(listItem); 
    taskInput.value= '';
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
