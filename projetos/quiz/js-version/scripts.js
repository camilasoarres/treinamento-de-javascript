let perguntas = [
	  {
	    questao: "2 + 2?",
	    escolhas: ["5", "4"],
	    respostaCorreta: "4",
	  },
	  {
	    questao: "5 * 2?",
	    escolhas: ["10", "16"],
	    respostaCorreta: "10",
	  },
	];

	let index = 0;
	let score = 0;

	function start() {
		const form = document.createElement('form');
		const pergunta = document.createElement('h3');
		const perguntaTxt = document.createTextNode(perguntas[index].questao);
		pergunta.appendChild(perguntaTxt)

		form.appendChild(pergunta);

		perguntas[index].escolhas.map(item => {
			const inputItem = document.createElement('input');
			inputItem.setAttribute('type', 'radio');
			inputItem.setAttribute('name', perguntas[index].questao);
			inputItem.setAttribute('value', item);

			const label = document.createElement('label');
			const labelTxt = document.createTextNode(item);
			label.appendChild(labelTxt);

			form.appendChild(inputItem);
			form.appendChild(label);
		});

		const submitButton = document.createElement('button');
		submitButton.innerHTML = 'Submit';

		form.appendChild(submitButton);

		form.addEventListener('submit', e => {
			e.preventDefault();

			let answersValue = form.elements[perguntas[index].questao].value;

			if (answersValue == perguntas[index].respostaCorreta) {
				score = score + 1;
			}

			document.body.innerHTML = '';

			if (index === perguntas.length - 1) {
				document.body.innerHTML = 'Your score is: ' + score; 
			} else {
				index = index + 1;
				start();
			}
		})

		document.body.appendChild(form);
	}

	window.onload = start();
	