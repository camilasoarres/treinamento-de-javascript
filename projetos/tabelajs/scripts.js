const tableItems = [
	{name: "Camila", age: 18, polo: "alemão"},
	{name: "Kelvin", age: 25, polo: "prazeres"},
	{name: "Evelyn", age: 25, polo: "prazeres"},
	{name: "Yasmin", age: 18, polo: "prazeres"},
	{name: "Alice", age: 25, polo: "prazeres"},
	{name: "Cássio", age: 23, polo: "prazeres"},
];

const pessoas = Object.keys(tableItems[0]);

function createTable() {
	let tabela = document.createElement("table");
	let header = createHeader();

	tabela.appendChild(header);

	tableItems.map((item) => {
		let body = createBody(item);
		tabela.appendChild(body);
	});

	return tabela;
}

function createHeader() {
	let header = document.createElement("tr");
	
	pessoas.map((pessoa) => {
		let headerItem = document.createElement("th");

		headerItem.textContent = pessoa;
		header.appendChild(headerItem);
	});
	
	return header;
}

function createBody(item) {
	let body = document.createElement("tr");

	pessoas.map((pessoa) => {
		let information = document.createElement("td");
		
		if (typeof(item[pessoa]) === 'number') {
			information.style.textAlign = 'right'
		}

		information.textContent = item[pessoa];
		body.appendChild(information);
	});
	
	return body;
}
 document.body.appendChild(createTable());