let container = document.getElementById('container');
let cronometro = document.getElementById('cronometro');
let messagem = document.getElementById('messagem');

let currentType;
let currentTime;
let running;
let rendering;
let pomodoroTime = 1500;
let intervalTime = 300;
let completedPomodoro = 0;

function changeType(type) {
  if (type === 'pomodoro') {
    currentTime = pomodoroTime;
  }
  if (type === 'intervalo') {
    currentTime = intervalTime;
  }
  currentType = type;
  cronometro.value = formatTime(cronometro.value);
}

function startPomodoro() {
  if (!running) {
    running = true;
    container.classList.add('running');
    rendering = setInterval(function() {
      startRendering(cronometro.value)
    }, 1000);
  }
}

function startRendering() {
  container.classList.add('running');
  if (currentTime > 0) {
    currentTime = currentTime - 1;
    cronometro.value = formatTime();
  }
  else if (currentTime === 0 && currentType == 'pomodoro') {
    changeType('intervalo');
    completedPomodoro = completedPomodoro + 1;
  }
  else if (completedPomodoro >= 4) {
    clearInterval(rendering);
    running = false;
    messagem.innerHTML = "Este é o " + completedPomodoro + "º pomodoro finalizado!";
    completedPomodoro = 0;
  }
  else {
    changeType('pomodoro');
    startPomodoro();
  }
}

function formatTime() {
  let minutes = Math.floor(currentTime % 3600 / 60);
  let seconds = Math.floor(currentTime % 3600 % 60);

  return (minutes < 10 ? "0" : "") + minutes + ':' + (seconds < 10 ? "0" : "") + seconds
}

function pausePomodoro() {
  running = false
  container.classList.remove('running');
  clearInterval(rendering)
}
