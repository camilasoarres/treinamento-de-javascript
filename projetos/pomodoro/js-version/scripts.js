
let $cronometro = document.getElementById('#cronometro');
let $mensagem = document.getElementById('#mensagem');

let pomodoro = 10;
let intervalo = 5;
let running;
let currentType;

function rodar() {
	running = setInterval(function() { startPomodoro(); }, 1000);
}

function reset() {
	pomodoro = 0;
	clearInterval(running);
	cronometro.innerHTML = pomodoro;
}

function parar() {
	clearInterval(running);
}

function formatTime() {
	let minutos = Math.floor(pomodoro % 3600 / 60);
	let segundos = Math.floor(pomodoro % 3600 % 60);

	return (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
}

function updateDom() {
	cronometro.innerHTML = formatTime();
}

function startPomodoro() {
	if (pomodoro > 0) {
		pomodoro = pomodoro - 1;
		updateDom();
	}
	else if (pomodoro == 0) {
		mensagem.innerHTML = 'o pomodoro terminou, começou o intervalo!';
		pomodoro = 5;
	}
	else {
		return clearInterval(running);
	}
}

