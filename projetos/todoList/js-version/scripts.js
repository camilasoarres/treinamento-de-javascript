let form = document.querySelector("form");
let todoList = document.createElement("ul");
let tasks = [];
let isEditing = undefined;

function addTask() {
	event.preventDefault();

	if (typeof(isEditing) == 'number') {
		editTask();
	}

	else {
		tasks.push({
			title: form.elements.title.value,
			description: form.elements.description.value,
			category: form.elements.category.value,
			color: form.elements.color.value,
		});

		renderTasks();
		cleanValues();
	}
};

function editTask() {
	tasks[isEditing] = {
		title: form.elements.title.value,
		description: form.elements.description.value,
		category: form.elements.category.value,
		color: form.elements.color.value,
	};

	isEditing = undefined;
	cleanValues();
	renderTasks();
}

function renderTasks() {
	while (todoList.firstChild) {
		todoList.removeChild(todoList.firstChild);
	}

	tasks.map((task, index) => {
		let todoItem = document.createElement("li");
		let title = renderItem("p", task.title);
		let description = renderItem("p", task.description);
		let category = renderItem("p", task.category);
		let buttons = document.createElement("div");
		let buttonEdit = renderItem("button", "edit");
		let buttonDelete = renderItem("button", "delete");

		todoItem.appendChild(title);
		todoItem.appendChild(description);
		todoItem.appendChild(category);
		todoItem.appendChild(buttons);
		buttons.appendChild(buttonDelete);
		buttons.appendChild(buttonEdit);

		todoItem.style.backgroundColor = task.color;

		todoList.appendChild(todoItem);

		buttonDelete.addEventListener("click", function() {
			tasks = deleteTask(tasks, task);
			renderTasks();
		});

		buttonEdit.addEventListener("click", function() {
			form.elements.description.value = task.description;
			form.elements.category.value = task.category;
			form.elements.title.value = task.title;
			form.elements.color.value = task.color;
			isEditing = index;
		});

	});
};

function deleteTask(tasks, task) {
	return tasks.filter(function(el){
		return el != task;
	});
}

function renderItem(el, txt) {
	let listItem = document.createElement(el);
	let itemText = document.createTextNode(txt);

	listItem.appendChild(itemText)

	return listItem;
}

function cleanValues() {
	form.elements.description.value = '';
	form.elements.category.value = '';
	form.elements.title.value = '';
	form.elements.color.value = "#800000";
}

document.body.appendChild(todoList);