let container = document.getElementById('container');
let form = document.querySelector('form');
let seriesList = document.createElement('ul');
let series = [];
let isEditing = undefined;
let temps = [];
let tempList = document.createElement('ul');
let buttonAddTemp = document.getElementById('buttonAddTemp');

function addSerie() {
	event.preventDefault();

	if (typeof(isEditing) == 'number') {
		editSerie();
	}

	else {
		series.push({
			title: form.elements.title.value,
			description: form.elements.description.value,
			category: form.elements.category.value,
			temps,
		});
		renderList();
		cleanValues();
	}
};

renderTemps = () => {
	if (form.elements.temp.value !== '') {
		let valor = [form.elements.temp.value];

		temps.push({
			temp: form.elements.temp.value,
		});

		valor.map((item) => {
			let tempItem = document.createElement('div');
			let title = renderItem('span', item);
			let deleteTempButton = renderItem('button', 'x');

			deleteTempButton.setAttribute('onclick', 'deleteTemp()');

			tempItem.appendChild(title);
			tempItem.appendChild(deleteTempButton);
			tempList.appendChild(tempItem);
			form.appendChild(tempList);
		});
	}
};

function deleteTemp() {
	event.preventDefault();
	let ItemA = event.target.parentNode;
	ItemA.remove();
}

showAddTemp = () => {
	event.preventDefault();
	let addTemp = renderItem('button', '+');

	addTemp.addEventListener('click', function() {
		event.preventDefault();
		renderTemps();
		form.elements.temp.value = '';
	});

	form.elements.temp.style.display = 'block';
	buttonAddTemp.style.display = 'none';
	form.appendChild(addTemp);
}

function editSerie() {
	series[isEditing] = {
		title: form.elements.title.value,
		description: form.elements.description.value,
		category: form.elements.category.value,
		temp: form.elements.temp.value,
	};

	isEditing = undefined;
	cleanValues();
	renderList();
}

function renderList() {
	while (seriesList.firstChild) {
		seriesList.removeChild(seriesList.firstChild);
	}

	series.map((serie, index) => {
		let serieItem = document.createElement('li');
		let title = renderItem('p', serie.title);
		let description = renderItem('p', serie.description);
		let category = renderItem('p', serie.category);
		let buttons = document.createElement('div');
		let buttonEdit = renderItem('button', 'edit');
		let buttonDelete = renderItem('button', 'delete');

		serieItem.appendChild(title);
		serieItem.appendChild(description);
		serieItem.appendChild(category);

		serie.temps.map((temp => {
			let temporada = renderItem('p', temp.temp);
			serieItem.appendChild(temporada);
		}));

		tempList.innerHTML = '';
		temps = [];
		
		buttons.appendChild(buttonEdit);
		seriesList.appendChild(serieItem);

		buttonDelete.addEventListener('click', function() {
			series = deleteSerie(series, serie);
			renderList();
		});

		buttonEdit.addEventListener('click', function() {
			form.elements.description.value = serie.description;
			form.elements.category.value = serie.category;
			form.elements.title.value = serie.title;
			isEditing = index;
		});
	});
};

function deleteSerie(series, serie) {
	return series.filter(function(el){
		return el != serie;
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
	form.elements.temp.value = '';
}

document.body.appendChild(seriesList);